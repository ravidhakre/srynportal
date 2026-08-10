import {
  collection,
  addDoc,
  serverTimestamp,
  getFirebaseDb,
  COLLECTIONS,
  type EmailQueueDocument,
} from "@sryn/database";

export interface EmailProviderConfig {
  provider: "SMTP" | "RESEND" | "SENDGRID" | "SES" | "NONE";
  configured: boolean;
}

export function getEmailProviderStatus(): EmailProviderConfig {
  const hasResend = !!process.env.RESEND_API_KEY;
  const hasSendGrid = !!process.env.SENDGRID_API_KEY;
  const hasSmtp = !!process.env.SMTP_HOST;

  if (hasResend) return { provider: "RESEND", configured: true };
  if (hasSendGrid) return { provider: "SENDGRID", configured: true };
  if (hasSmtp) return { provider: "SMTP", configured: true };
  return { provider: "NONE", configured: false };
}

export async function queueEmail(
  to: string,
  subject: string,
  template?: string,
  variables?: Record<string, unknown>,
  businessVertical?: string,
  relatedEntityType?: string,
  relatedEntityId?: string
): Promise<string | null> {
  try {
    const emailId = `EML-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const emailDoc: EmailQueueDocument = {
      emailId,
      to,
      subject,
      template: template || "GENERAL",
      variables: variables || {},
      businessVertical,
      relatedEntityType,
      relatedEntityId,
      status: "QUEUED",
      attempts: 0,
      createdAt: serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
    };

    const ref = await addDoc(collection(getFirebaseDb(), COLLECTIONS.EMAIL_QUEUE), emailDoc);
    return ref.id;
  } catch (err) {
    console.error("Failed to queue email:", err);
    return null;
  }
}
