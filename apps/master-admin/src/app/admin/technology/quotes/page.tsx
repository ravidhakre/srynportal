"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyQuoteDocument } from "@sryn/database";
import { FileText } from "lucide-react";

export default function AdminTechQuotesPage() {
  const [quotes, setQuotes] = useState<TechnologyQuoteDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_QUOTES));
        const list: TechnologyQuoteDocument[] = [];
        snap.forEach((d) => list.push(d.data() as TechnologyQuoteDocument));
        setQuotes(list);
      } catch (err) {
        console.error("Error fetching quotes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuotes();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          QUOTATIONS FOUNDATION
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Tech Quotation Generator</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading quotations...</p>
        ) : quotes.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <FileText className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No quotations created yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.quoteId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-sky-400 font-bold">{q.quoteId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{q.title}</h4>
                  <p className="text-slate-400 text-[11px]">Total: ₹{q.total?.toLocaleString()}</p>
                </div>
                <Badge variant="secondary">{q.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
