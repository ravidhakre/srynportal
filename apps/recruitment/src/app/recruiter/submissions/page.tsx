"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { CandidateSubmissionDocument } from "@sryn/database";
import { Send } from "lucide-react";

export default function RecruiterSubmissionsPage() {
  const [subs, setSubs] = useState<CandidateSubmissionDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubs() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.CANDIDATE_SUBMISSIONS));
        const list: CandidateSubmissionDocument[] = [];
        snap.forEach((d) => list.push(d.data() as CandidateSubmissionDocument));
        setSubs(list);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubs();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CLIENT SUBMISSIONS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Candidate Submissions to Employers</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading client submissions...</p>
        ) : subs.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Send className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No client submissions logged yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {subs.map((s) => (
              <div key={s.submissionId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{s.submissionId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{s.candidateName}</h4>
                  <p className="text-slate-400 text-[11px]">Submitted to: {s.employerName}</p>
                </div>
                <Badge variant="secondary">{s.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
