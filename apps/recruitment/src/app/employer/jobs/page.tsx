"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { JobPostingDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import Link from "next/link";
import { Briefcase, Plus } from "lucide-react";

export default function EmployerJobsPage() {
  const { currentUser: user } = useAuth();
  const [jobs, setJobs] = useState<JobPostingDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployerJobs() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(getFirebaseDb(), COLLECTIONS.JOBS),
          where("employerUid", "==", user.uid)
        );
        const snap = await getDocs(q);
        const list: JobPostingDocument[] = [];
        snap.forEach((d) => list.push(d.data() as JobPostingDocument));
        setJobs(list);
      } catch (err) {
        console.error("Error fetching employer jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployerJobs();
  }, [user]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            EMPLOYER REQUISITIONS
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">My Posted Openings</h1>
        </div>
        <Link href="/employer/jobs/create">
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            <Plus className="w-3.5 h-3.5 mr-1" /> Create Job Opening
          </Button>
        </Link>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading posted jobs...</p>
        ) : jobs.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Briefcase className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No job openings posted yet by your company.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id || job.jobId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{job.jobId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{job.title}</h4>
                  <p className="text-slate-400 text-[11px]">{job.location} • {job.department}</p>
                </div>
                <Badge variant={job.status === "PUBLISHED" ? "success" : "secondary"}>
                  {job.status}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
