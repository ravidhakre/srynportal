import {
  collection,
  addDoc,
  serverTimestamp,
  getFirebaseDb,
  COLLECTIONS,
  type WhatsappQueueDocument,
} from "@sryn/database";

export function getWhatsappProviderStatus(): { configured: boolean; provider: string } {
  const hasMeta = !!process.env.WHATSAPP_CLOUD_API_KEY;
  const hasTwilio = !!process.env.TWILIO_AUTH_TOKEN;
  if (hasMeta) return { configured: true, provider: "META_CLOUD_API" };
  if (hasTwilio) return { configured: true, provider: "TWILIO" };
  return { configured: false, provider: "NONE" };
}

export async function queueWhatsapp(
  phone: string,
  templateName: string,
  variables?: Record<string, unknown>,
  businessVertical?: string,
  relatedEntityType?: string,
  relatedEntityId?: string
): Promise<string | null> {
  try {
    const messageId = `WA-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const docData: WhatsappQueueDocument = {
      messageId,
      phone,
      templateName,
      variables: variables || {},
      businessVertical,
      relatedEntityType,
      relatedEntityId,
      status: "QUEUED",
      attempts: 0,
      createdAt: serverTimestamp() as any,
    };

    const ref = await addDoc(collection(getFirebaseDb(), COLLECTIONS.WHATSAPP_QUEUE), docData);
    return ref.id;
  } catch (err) {
    console.error("Failed to queue WhatsApp message:", err);
    return null;
  }
}
