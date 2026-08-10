import { NextResponse } from "next/server";
import { getAdminAuth, getAdminDb } from "@sryn/database/firebase/admin";
import { SystemRole, BusinessVertical } from "@sryn/auth";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized access. Bearer token missing." }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1] || "";
    const adminAuth = getAdminAuth();
    const decodedToken = await adminAuth.verifyIdToken(token);

    // Caller authorization check
    const callerUid = decodedToken.uid;
    const adminDb = getAdminDb();
    const callerDoc = await adminDb.collection("users").doc(callerUid).get();

    if (!callerDoc.exists || callerDoc.data()?.role !== SystemRole.SUPER_ADMIN) {
      return NextResponse.json({ error: "Forbidden. Only Super Admin can assign privileged roles." }, { status: 403 });
    }

    const body = await request.json();
    const { targetUid, role, businessVertical } = body as {
      targetUid: string;
      role: SystemRole;
      businessVertical?: BusinessVertical | null;
    };

    if (!targetUid || !role) {
      return NextResponse.json({ error: "Target UID and Role are required." }, { status: 400 });
    }

    // Set Custom Claims in Firebase Auth
    await adminAuth.setCustomUserClaims(targetUid, {
      role,
      businessVertical: businessVertical || null,
    });

    // Update Firestore User Document
    await adminDb.collection("users").doc(targetUid).update({
      role,
      businessVertical: businessVertical || null,
      updatedAt: new Date(),
    });

    // Write Audit Log
    await adminDb.collection("auditLogs").add({
      actorUid: callerUid,
      actorEmail: decodedToken.email || "",
      actorRole: SystemRole.SUPER_ADMIN,
      action: "SET_ROLE_CUSTOM_CLAIMS",
      entity: "USER",
      entityId: targetUid,
      metadata: { role, businessVertical },
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true, message: `Successfully updated user ${targetUid} role to ${role}` });
  } catch (error) {
    console.error("Set role API error:", error);
    return NextResponse.json({ error: "Failed to set custom claims or update user role." }, { status: 500 });
  }
}
