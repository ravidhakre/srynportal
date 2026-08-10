import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "./client";
import { SystemRole, BusinessVertical } from "@sryn/auth";
import { COLLECTIONS } from "./firestore";
import type { UserProfileDocument } from "../types/core";

export async function logAuditEvent(
  actorUid: string,
  actorEmail: string,
  actorRole: SystemRole,
  action: string,
  targetUserId: string,
  businessVertical?: BusinessVertical,
  metadata?: Record<string, unknown>
): Promise<void> {
  try {
    const logsRef = collection(getFirebaseDb(), COLLECTIONS.AUDIT_LOGS);
    await addDoc(logsRef, {
      actorUid,
      actorEmail,
      actorRole,
      action,
      entity: "USER",
      entityId: targetUserId,
      businessVertical,
      metadata,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.error("Failed to write audit log:", err);
  }
}

export async function registerUserWithEmail(
  email: string,
  pass: string,
  name: string,
  role: SystemRole = SystemRole.CUSTOMER,
  businessVertical: BusinessVertical | null = null,
  phone?: string
): Promise<UserProfileDocument> {
  const auth = getFirebaseAuth();
  const credential = await createUserWithEmailAndPassword(auth, email, pass);
  const uid = credential.user.uid;

  // Send Firebase Email Verification
  try {
    await sendEmailVerification(credential.user);
  } catch (e) {
    console.warn("Could not send email verification immediately:", e);
  }

  const profileData: UserProfileDocument = {
    uid,
    name,
    email,
    phone,
    photoURL: credential.user.photoURL || undefined,
    role,
    businessVertical,
    status: "ACTIVE",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const userDocRef = doc(getFirebaseDb(), COLLECTIONS.USERS, uid);
  await setDoc(userDocRef, profileData);

  await logAuditEvent(uid, email, role, "REGISTER", uid, businessVertical || undefined);

  return profileData;
}

export async function getUserProfile(uid: string): Promise<UserProfileDocument | null> {
  const userDocRef = doc(getFirebaseDb(), COLLECTIONS.USERS, uid);
  const snap = await getDoc(userDocRef);
  if (!snap.exists()) return null;
  return snap.data() as UserProfileDocument;
}

export async function updateUserStatus(
  actorUid: string,
  actorEmail: string,
  actorRole: SystemRole,
  targetUid: string,
  newStatus: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "PENDING"
): Promise<void> {
  const userDocRef = doc(getFirebaseDb(), COLLECTIONS.USERS, targetUid);
  await updateDoc(userDocRef, {
    status: newStatus,
    updatedAt: serverTimestamp(),
  });

  await logAuditEvent(actorUid, actorEmail, actorRole, `STATUS_CHANGED_${newStatus}`, targetUid);
}

export async function updateUserRoleAndVertical(
  actorUid: string,
  actorEmail: string,
  actorRole: SystemRole,
  targetUid: string,
  newRole: SystemRole,
  newVertical: BusinessVertical | null
): Promise<void> {
  const userDocRef = doc(getFirebaseDb(), COLLECTIONS.USERS, targetUid);
  await updateDoc(userDocRef, {
    role: newRole,
    businessVertical: newVertical,
    updatedAt: serverTimestamp(),
  });

  await logAuditEvent(actorUid, actorEmail, actorRole, "ROLE_CHANGED", targetUid, newVertical || undefined, {
    newRole,
    newVertical,
  });
}

export async function sendResetPassword(email: string): Promise<void> {
  const auth = getFirebaseAuth();
  await sendPasswordResetEmail(auth, email);
}

export async function logoutUser(user?: UserProfileDocument): Promise<void> {
  const auth = getFirebaseAuth();
  if (user) {
    await logAuditEvent(user.uid, user.email, user.role, "LOGOUT", user.uid, user.businessVertical || undefined);
  }
  await signOut(auth);
}

export { signInWithEmailAndPassword, onAuthStateChanged, type User };
