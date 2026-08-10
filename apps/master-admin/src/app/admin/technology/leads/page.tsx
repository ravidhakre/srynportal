"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyLeadDocument } from "@sryn/database";
import { Cpu } from "lucide-react";

export default function AdminTechLeadsPage() {
  const [leads, setLeads] = useState<TechnologyLeadDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_LEADS));
        const list: TechnologyLeadDocument[] = [];
        snap.forEach((d) => list.push(d.data() as TechnologyLeadDocument));
        setLeads(list);
      } catch (err) {
        console.error("Error fetching technology leads:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          TECHNOLOGY LEADS CRM
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Tech Enquiries & Leads</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading technology leads...</p>
        ) : leads.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <Cpu className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No tech lead enquiries submitted yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((l) => (
              <div key={l.leadId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-sky-400 font-bold">{l.leadId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{l.name}</h4>
                  <p className="text-slate-400 text-[11px]">{l.email} • {l.phone} • Service: {l.service}</p>
                </div>
                <Badge variant="secondary">{l.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
