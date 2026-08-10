import * as admin from "firebase-admin";

let adminApp: admin.app.App | undefined;

export function getFirebaseAdminApp(): admin.app.App {
  if (typeof window !== "undefined") {
    throw new Error("Firebase Admin SDK must NEVER be imported or executed in client browser code!");
  }

  if (!adminApp) {
    if (admin.apps.length > 0 && admin.apps[0]) {
      adminApp = admin.apps[0];
    } else {
      const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "srynportal";
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

      if (clientEmail && privateKey) {
        adminApp = admin.initializeApp({
          credential: admin.credential.cert({
            projectId,
            clientEmail,
            privateKey,
          }),
          storageBucket: `${projectId}.appspot.com`,
        });
      } else {
        // Default Google Application Credentials or emulator
        adminApp = admin.initializeApp({
          projectId,
          storageBucket: `${projectId}.appspot.com`,
        });
      }
    }
  }
  return adminApp;
}

export function getAdminDb(): admin.firestore.Firestore {
  return getFirebaseAdminApp().firestore();
}

export function getAdminAuth(): admin.auth.Auth {
  return getFirebaseAdminApp().auth();
}

export function getAdminStorage(): admin.storage.Storage {
  return getFirebaseAdminApp().storage();
}
