"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { RecruitmentEmployerLeadDocument } from "@sryn/database";
import { Building2 } from "lucide-react";

export default function RecruiterLeadsPage() {
  const [leads, setLeads] = useState<RecruitmentEmployerLeadDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.RECRUITMENT_EMPLOYER_LEADS));
        const list: RecruitmentEmployerLeadDocument[] = [];
        snap.forEach((d) => list.push(d.data() as RecruitmentEmployerLeadDocument));
        setLeads(list);
      } catch (err) {
        console.error("Error fetching employer leads:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            EMPLOYER LEADS CRM
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Hiring Client Leads</h1>
        </div>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading employer lead records...</p>
        ) : leads.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Building2 className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No employer client leads logged yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((l) => (
              <div key={l.leadId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{l.leadId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{l.companyName}</h4>
                  <p className="text-slate-400 text-[11px]">{l.contactName} • {l.phone}</p>
                </div>
                <Badge variant="secondary">{l.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
