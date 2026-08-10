"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { CandidateProfileDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { ShieldAlert, Users } from "lucide-react";

export default function AdminRecruitmentCandidatesPage() {
  const { role, businessVertical } = useAuth();
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

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.RECRUITMENT);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access candidate directory.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CANDIDATE DIRECTORY
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Master Candidate Pool</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading candidates...</p>
        ) : candidates.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No candidates found.</p>
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
