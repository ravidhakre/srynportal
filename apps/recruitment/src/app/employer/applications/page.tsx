"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { JobApplicationDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { Users } from "lucide-react";

export default function EmployerApplicationsPage() {
  const { currentUser: user } = useAuth();
  const [apps, setApps] = useState<JobApplicationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApps() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(getFirebaseDb(), COLLECTIONS.JOB_APPLICATIONS),
          where("employerUid", "==", user.uid)
        );
        const snap = await getDocs(q);
        const list: JobApplicationDocument[] = [];
        snap.forEach((d) => list.push(d.data() as JobApplicationDocument));
        setApps(list);
      } catch (err) {
        console.error("Error fetching applicant applications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchApps();
  }, [user]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          RECEIVED APPLICANTS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Applicant Management</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading applicant list...</p>
        ) : apps.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No applications received yet for your job requisitions.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {apps.map((a) => (
              <div key={a.id || a.applicationId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{a.applicationId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{a.candidateName}</h4>
                  <p className="text-slate-400 text-[11px]">{a.jobTitle}</p>
                </div>
                <Badge variant="secondary">{a.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
