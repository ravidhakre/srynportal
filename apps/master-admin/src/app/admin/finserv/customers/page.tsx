"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { FinanceCustomerDocument } from "@sryn/database";
import { Users } from "lucide-react";

export default function AdminFinServCustomersPage() {
  const [customers, setCustomers] = useState<FinanceCustomerDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.FINANCE_CUSTOMERS));
        const list: FinanceCustomerDocument[] = [];
        snap.forEach((d) => list.push(d.data() as FinanceCustomerDocument));
        setCustomers(list);
      } catch (err) {
        console.error("Error fetching finance customers:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
          FINANCE CUSTOMERS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Customer Master Directory</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading customers...</p>
        ) : customers.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No finance customer profiles registered yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {customers.map((c) => (
              <div key={c.customerId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-amber-400 font-bold">{c.customerId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{c.name}</h4>
                  <p className="text-slate-400 text-[11px]">{c.phone} • {c.city || "India"}</p>
                </div>
                <Badge variant="secondary">{c.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
