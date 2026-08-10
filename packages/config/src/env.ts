import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_CORPORATE_URL: z.string().url().default("https://www.sryn.online"),
  NEXT_PUBLIC_TECHNOLOGY_URL: z.string().url().default("https://technology.sryn.online"),
  NEXT_PUBLIC_FINSERV_URL: z.string().url().default("https://finserv.sryn.online"),
  NEXT_PUBLIC_RECRUITMENT_URL: z.string().url().default("https://recruitment.sryn.online"),
  NEXT_PUBLIC_ADMIN_URL: z.string().url().default("https://admin.sryn.online"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Firebase Web App Credentials
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().optional().default("srynportal.firebaseapp.com"),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().optional().default("srynportal"),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().optional().default("srynportal.firebasestorage.app"),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string().optional(),

  // Firebase Admin SDK (Server-only)
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function getAppUrls() {
  return {
    corporate: process.env.NEXT_PUBLIC_CORPORATE_URL || "https://www.sryn.online",
    technology: process.env.NEXT_PUBLIC_TECHNOLOGY_URL || "https://technology.sryn.online",
    finserv: process.env.NEXT_PUBLIC_FINSERV_URL || "https://finserv.sryn.online",
    recruitment: process.env.NEXT_PUBLIC_RECRUITMENT_URL || "https://recruitment.sryn.online",
    admin: process.env.NEXT_PUBLIC_ADMIN_URL || "https://admin.sryn.online",
  };
}

export function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "srynportal.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "srynportal",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "srynportal.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
  };
}
