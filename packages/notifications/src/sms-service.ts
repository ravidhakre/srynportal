import {
  collection,
  addDoc,
  serverTimestamp,
  getFirebaseDb,
  COLLECTIONS,
  type SmsQueueDocument,
} from "@sryn/database";

export function getSmsProviderStatus(): { configured: boolean; provider: string } {
  const hasMsg91 = !!process.env.MSG91_AUTH_KEY;
  const hasTwilio = !!process.env.TWILIO_SMS_KEY;
  if (hasMsg91) return { configured: true, provider: "MSG91" };
  if (hasTwilio) return { configured: true, provider: "TWILIO" };
  return { configured: false, provider: "NONE" };
}

export async function queueSms(
  phone: string,
  template: string,
  variables?: Record<string, unknown>,
  businessVertical?: string,
  relatedEntityType?: string,
  relatedEntityId?: string
): Promise<string | null> {
  try {
    const messageId = `SMS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const docData: SmsQueueDocument = {
      messageId,
      phone,
      template,
      variables: variables || {},
      businessVertical,
      relatedEntityType,
      relatedEntityId,
      status: "QUEUED",
      attempts: 0,
      createdAt: serverTimestamp() as any,
    };

    const ref = await addDoc(collection(getFirebaseDb(), COLLECTIONS.SMS_QUEUE), docData);
    return ref.id;
  } catch (err) {
    console.error("Failed to queue SMS message:", err);
    return null;
  }
}
