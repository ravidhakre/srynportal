"use client";

import React, { useState, useEffect, use } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, query, where, doc, updateDoc, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyQuoteDocument } from "@sryn/database";
import { Cpu, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

export default function PublicQuoteViewPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;

  const [quote, setQuote] = useState<TechnologyQuoteDocument | null>(null);
  const [docId, setDocId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionDone, setActionDone] = useState<"ACCEPTED" | "REJECTED" | null>(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      if (!token) return;
      try {
        const q = query(
          collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_QUOTES),
          where("quoteId", "==", token)
        );
        const snap = await getDocs(q);
        if (!snap.empty && snap.docs.length > 0) {
          const first = snap.docs[0];
          if (first) {
            setQuote(first.data() as TechnologyQuoteDocument);
            setDocId(first.id);
          }
        }
      } catch (err) {
        console.error("Error fetching quotation:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuote();
  }, [token]);

  const handleAccept = async () => {
    if (!docId || processing) return;
    setProcessing(true);
    try {
      const ref = doc(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_QUOTES, docId);
      await updateDoc(ref, {
        status: "ACCEPTED",
        updatedAt: serverTimestamp(),
      });
      setActionDone("ACCEPTED");
    } catch (err) {
      console.error("Error accepting quote:", err);
    } finally {
      setProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!docId || processing) return;
    setProcessing(true);
    try {
      const ref = doc(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_QUOTES, docId);
      await updateDoc(ref, {
        status: "REJECTED",
        updatedAt: serverTimestamp(),
      });
      setActionDone("REJECTED");
    } catch (err) {
      console.error("Error rejecting quote:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8 text-left">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-6">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase text-sky-400 tracking-wider">SRYN TECHNOLOGY</span>
            <h1 className="text-2xl font-black text-white">Official Quotation Proposal</h1>
          </div>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 shadow-2xl">
          {loading ? (
            <p className="text-slate-400 text-sm text-center py-8">Loading quotation details...</p>
          ) : !quote ? (
            <div className="text-center py-12 space-y-3">
              <h3 className="text-xl font-bold text-white">Quotation Not Found or Expired</h3>
              <p className="text-slate-400 text-xs">Token: {token}</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-sky-400">{quote.quoteId}</span>
                  <h2 className="text-xl font-bold text-white mt-1">{quote.title}</h2>
                </div>
                <Badge variant={actionDone === "ACCEPTED" || quote.status === "ACCEPTED" ? "success" : "secondary"}>
                  {actionDone || quote.status}
                </Badge>
              </div>

              {/* Items Table */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase text-slate-400">Line Items & Deliverables</span>
                <div className="space-y-2">
                  {quote.items?.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between text-xs text-slate-300">
                      <div>
                        <span className="font-bold text-white">{item.description}</span>
                        <span className="text-[11px] text-slate-500 block">Qty: {item.quantity} × ₹{item.unitPrice?.toLocaleString()}</span>
                      </div>
                      <span className="font-bold text-white self-center">₹{item.total?.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Totals */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{quote.subtotal?.toLocaleString()}</span>
                </div>
                {!!quote.discount && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>- ₹{quote.discount?.toLocaleString()}</span>
                  </div>
                )}
                {!!quote.tax && (
                  <div className="flex justify-between text-slate-400">
                    <span>Tax / GST</span>
                    <span>+ ₹{quote.tax?.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-white border-t border-slate-800 pt-2">
                  <span>Total Amount</span>
                  <span className="text-sky-400">₹{quote.total?.toLocaleString()}</span>
                </div>
              </div>

              {/* Actions */}
              {actionDone ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Quotation response recorded successfully as {actionDone}.</span>
                </div>
              ) : quote.status === "SENT" || quote.status === "DRAFT" ? (
                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-800">
                  <Button variant="outline" className="border-sryn-red text-sryn-red hover:bg-sryn-red/10" onClick={handleReject} disabled={processing}>
                    <XCircle className="w-4 h-4 mr-1" /> Reject Quote
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold" onClick={handleAccept} disabled={processing}>
                    <CheckCircle2 className="w-4 h-4 mr-1" /> Accept Quote
                  </Button>
                </div>
              ) : (
                <div className="text-xs text-slate-400 text-right pt-2 font-medium">
                  This quotation has been marked as <strong>{quote.status}</strong>.
                </div>
              )}
            </div>
          )}
        </Card>

        <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Secured by SRYN Management Enterprise Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
