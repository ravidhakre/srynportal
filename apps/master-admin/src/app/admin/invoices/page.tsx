"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { InvoiceDocument } from "@sryn/database";
import { FileText, Plus } from "lucide-react";

export default function AdminInvoicesPage() {
  const [invoices, setInvoices] = useState<InvoiceDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.INVOICES));
        const list: InvoiceDocument[] = [];
        snap.forEach((d) => list.push(d.data() as InvoiceDocument));
        setInvoices(list);
      } catch (err) {
        console.error("Error fetching invoices:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchInvoices();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            INVOICE MANAGEMENT
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Client Invoices</h1>
        </div>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
          <Plus className="w-4 h-4 mr-1" /> Create Invoice
        </Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading invoices...</p>
        ) : invoices.length === 0 ? (
          <div className="text-center py-8 space-y-3">
            <FileText className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No client invoices generated yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.invoiceId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{inv.invoiceId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{inv.clientId}</h4>
                  <p className="text-slate-400 text-[11px]">Total: ₹{inv.total?.toLocaleString()} • Vertical: {inv.businessVertical}</p>
                </div>
                <Badge variant="secondary">{inv.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
