"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { PaymentDocument } from "@sryn/database";
import { getPaymentProviderStatus } from "@sryn/notifications";
import { CreditCard, ShieldCheck } from "lucide-react";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<PaymentDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const providerStatus = getPaymentProviderStatus();

  useEffect(() => {
    async function fetchPayments() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.PAYMENTS));
        const list: PaymentDocument[] = [];
        snap.forEach((d) => list.push(d.data() as PaymentDocument));
        setPayments(list);
      } catch (err) {
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPayments();
  }, []);

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          PAYMENT ARCHITECTURE
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Payment Transactions & Gateway Status</h1>
      </div>

      {/* Gateway Status Card */}
      <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-base">Payment Gateway Integration</h3>
          </div>
          <Badge variant={providerStatus.configured ? "success" : "secondary"}>
            {providerStatus.configured ? `Configured (${providerStatus.provider})` : "Not Configured"}
          </Badge>
        </div>
        <p className="text-xs text-slate-400">
          {providerStatus.configured
            ? `Active gateway: ${providerStatus.provider}. Signatures and webhooks are verified server-side.`
            : "No active payment gateway credentials (RAZORPAY_KEY_ID / CASHFREE_APP_ID) provided. Gateway options display Not Configured."}
        </p>
      </Card>

      {/* Payment Transactions Table */}
      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading payment records...</p>
        ) : payments.length === 0 ? (
          <div className="text-center py-8 space-y-3">
            <ShieldCheck className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No payment records logged in database.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {payments.map((pay) => (
              <div key={pay.paymentId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{pay.paymentId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Amount: ₹{pay.amount?.toLocaleString()}</h4>
                  <p className="text-slate-400 text-[11px]">Provider: {pay.provider} • Invoice: {pay.invoiceId || "N/A"}</p>
                </div>
                <Badge variant={pay.status === "SUCCESS" ? "success" : "secondary"}>{pay.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
