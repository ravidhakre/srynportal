"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { JobApplicationDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { FileText } from "lucide-react";

export default function CandidateApplicationsPage() {
  const { currentUser: user } = useAuth();
  const [applications, setApplications] = useState<JobApplicationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyApps() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(getFirebaseDb(), COLLECTIONS.JOB_APPLICATIONS),
          where("candidateUid", "==", user.uid)
        );
        const snap = await getDocs(q);
        const list: JobApplicationDocument[] = [];
        snap.forEach((d) => list.push(d.data() as JobApplicationDocument));
        setApplications(list);
      } catch (err) {
        console.error("Error fetching applications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMyApps();
  }, [user]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            APPLICATION TRACKER
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">My Submitted Applications</h1>
          <p className="text-slate-400 text-sm mt-0.5">Track status updates for your job applications</p>
        </div>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading applications...</p>
        ) : applications.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <FileText className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">You have not submitted any job applications yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id || app.applicationId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{app.applicationId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{app.jobTitle}</h4>
                </div>
                <Badge variant={app.status === "HIRED" || app.status === "SELECTED" ? "success" : "secondary"}>
                  {app.status}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
