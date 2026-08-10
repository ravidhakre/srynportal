import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getFirebaseDb,
  COLLECTIONS,
  type SystemEventDocument,
  type SystemEventStatus,
} from "@sryn/database";

export async function createSystemEvent(
  eventType: string,
  entityType: string,
  entityId: string,
  businessVertical?: string,
  userId?: string,
  payload?: Record<string, unknown>
): Promise<string | null> {
  try {
    const eventId = `EVT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const eventDoc: SystemEventDocument = {
      eventId,
      eventType,
      entityType,
      entityId,
      businessVertical,
      userId,
      payload: payload || {},
      status: "PENDING",
      retryCount: 0,
      createdAt: serverTimestamp() as any,
    };

    const ref = await addDoc(collection(getFirebaseDb(), COLLECTIONS.SYSTEM_EVENTS), eventDoc);
    return ref.id;
  } catch (err) {
    console.error("Failed to create system event:", err);
    return null;
  }
}

export async function updateSystemEventStatus(
  docId: string,
  status: SystemEventStatus,
  errorMessage?: string
): Promise<void> {
  try {
    const ref = doc(getFirebaseDb(), COLLECTIONS.SYSTEM_EVENTS, docId);
    await updateDoc(ref, {
      status,
      errorMessage: errorMessage || null,
      processedAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("Failed to update system event status:", err);
  }
}
