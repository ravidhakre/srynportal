"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { CandidateProfileDocument } from "@sryn/database";
import { Users } from "lucide-react";

export default function RecruiterCandidatesPage() {
  const [candidates, setCandidates] = useState<CandidateProfileDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCandidates() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.CANDIDATE_PROFILES));
        const list: CandidateProfileDocument[] = [];
        snap.forEach((d) => list.push(d.data() as CandidateProfileDocument));
        setCandidates(list);
      } catch (err) {
        console.error("Error fetching candidates:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCandidates();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          MASTER CANDIDATE DIRECTORY
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Sourced Candidates</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading candidate database...</p>
        ) : candidates.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No candidate profiles registered yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {candidates.map((c) => (
              <div key={c.candidateId || c.uid} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{c.candidateId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{c.name}</h4>
                  <p className="text-slate-400 text-[11px]">{c.email} • {c.mobile}</p>
                </div>
                <Badge variant="secondary">{c.totalExperienceYears || 0} Yrs Exp</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
