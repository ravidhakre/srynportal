import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getFirebaseConfig } from "@sryn/config/env";

let firebaseApp: FirebaseApp | undefined;
let firebaseAuth: Auth | undefined;
let firebaseDb: Firestore | undefined;
let firebaseStorage: FirebaseStorage | undefined;

export function getFirebaseClientApp(): FirebaseApp {
  if (!firebaseApp) {
    const apps = getApps();
    if (apps.length > 0 && apps[0]) {
      firebaseApp = apps[0];
    } else {
      const config = getFirebaseConfig();
      firebaseApp = initializeApp(config);
    }
  }
  return firebaseApp;
}

export function getFirebaseAuth(): Auth {
  if (!firebaseAuth) {
    firebaseAuth = getAuth(getFirebaseClientApp());
  }
  return firebaseAuth;
}

export function getFirebaseDb(): Firestore {
  if (!firebaseDb) {
    firebaseDb = getFirestore(getFirebaseClientApp());
  }
  return firebaseDb;
}

export function getFirebaseStorage(): FirebaseStorage {
  if (!firebaseStorage) {
    firebaseStorage = getStorage(getFirebaseClientApp());
  }
  return firebaseStorage;
}
