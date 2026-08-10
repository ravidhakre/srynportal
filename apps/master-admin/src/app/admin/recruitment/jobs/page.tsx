"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, doc, updateDoc, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { JobPostingDocument, RecruitmentJobStatus } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { ShieldAlert, Briefcase, CheckCircle2, XCircle } from "lucide-react";

export default function AdminRecruitmentJobsPage() {
  const { role, businessVertical } = useAuth();
  const [jobs, setJobs] = useState<JobPostingDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.JOBS));
      const list: JobPostingDocument[] = [];
      snap.forEach((d) => list.push({ ...d.data(), id: d.id } as JobPostingDocument));
      setJobs(list);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.RECRUITMENT);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN Recruitment job moderation.
          </p>
        </Card>
      </main>
    );
  }

  const handleUpdateStatus = async (job: JobPostingDocument, newStatus: RecruitmentJobStatus) => {
    if (!job.id && !job.jobId) return;
    setUpdatingId(job.id || job.jobId);
    try {
      const docRef = doc(getFirebaseDb(), COLLECTIONS.JOBS, job.id || job.jobId);
      await updateDoc(docRef, {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      await fetchJobs();
    } catch (err) {
      console.error("Failed to update job status:", err);
      alert("Failed to update job status.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            JOB MODERATION
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Requisition Moderation & Approval</h1>
          <p className="text-slate-400 text-sm mt-0.5">Review employer submissions and approve for public portal listing</p>
        </div>
        <Button variant="outline" onClick={fetchJobs}>
          Refresh
        </Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading requisitions...</p>
        ) : jobs.length === 0 ? (
          <div className="text-center space-y-3 py-6">
            <Briefcase className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No job postings found in database.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id || job.jobId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="space-y-1">
                  <span className="font-mono text-emerald-400 font-bold">{job.jobId}</span>
                  <h4 className="text-base font-bold text-white">{job.title}</h4>
                  <p className="text-slate-400 text-[11px]">{job.companyName} • {job.location} • {job.department}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={job.status === "PUBLISHED" ? "success" : "secondary"}>
                    {job.status}
                  </Badge>
                  {job.status !== "PUBLISHED" && (
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-500 text-xs text-white"
                      onClick={() => handleUpdateStatus(job, "PUBLISHED")}
                      disabled={updatingId === (job.id || job.jobId)}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Publish
                    </Button>
                  )}
                  {job.status === "PUBLISHED" && (
                    <Button
                      variant="danger"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleUpdateStatus(job, "PAUSED")}
                      disabled={updatingId === (job.id || job.jobId)}
                    >
                      <XCircle className="w-3.5 h-3.5 mr-1" /> Pause
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
