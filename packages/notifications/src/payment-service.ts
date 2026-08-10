import {
  collection,
  addDoc,
  serverTimestamp,
  getFirebaseDb,
  COLLECTIONS,
  type PaymentDocument,
  type PaymentProvider,
} from "@sryn/database";

export function getPaymentProviderStatus(): { configured: boolean; provider: string } {
  const hasRazorpay = !!process.env.RAZORPAY_KEY_ID && !!process.env.RAZORPAY_KEY_SECRET;
  const hasCashfree = !!process.env.CASHFREE_APP_ID;
  if (hasRazorpay) return { configured: true, provider: "RAZORPAY" };
  if (hasCashfree) return { configured: true, provider: "CASHFREE" };
  return { configured: false, provider: "NONE" };
}

export async function createPaymentRecord(
  businessVertical: string,
  amount: number,
  currency: string = "INR",
  invoiceId?: string,
  quoteId?: string,
  clientId?: string,
  provider: PaymentProvider = "RAZORPAY"
): Promise<string | null> {
  try {
    const paymentId = `PAY-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const payDoc: PaymentDocument = {
      paymentId,
      invoiceId,
      quoteId,
      clientId,
      businessVertical,
      provider,
      amount,
      currency,
      status: "CREATED",
      createdAt: serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
    };

    const ref = await addDoc(collection(getFirebaseDb(), COLLECTIONS.PAYMENTS), payDoc);
    return ref.id;
  } catch (err) {
    console.error("Failed to create payment record:", err);
    return null;
  }
}
