"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { JobApplicationDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { ShieldAlert, FileText } from "lucide-react";

export default function AdminRecruitmentApplicationsPage() {
  const { role, businessVertical } = useAuth();
  const [apps, setApps] = useState<JobApplicationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApps() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.JOB_APPLICATIONS));
        const list: JobApplicationDocument[] = [];
        snap.forEach((d) => list.push(d.data() as JobApplicationDocument));
        setApps(list);
      } catch (err) {
        console.error("Error fetching applications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchApps();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.RECRUITMENT);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access application records.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          APPLICATION PIPELINE
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Master Applications Pipeline</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading applications...</p>
        ) : apps.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <FileText className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No applications submitted yet.</p>
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
