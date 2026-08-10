"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import Link from "next/link";
import { Users, ShieldAlert, Briefcase, FileText, Send, Award } from "lucide-react";

export default function RecruitmentAdminDashboardPage() {
  const { role, businessVertical } = useAuth();
  const [jobsCount, setJobsCount] = useState(0);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [submissionsCount, setSubmissionsCount] = useState(0);
  const [placementsCount, setPlacementsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdminStats() {
      try {
        const db = getFirebaseDb();
        const [jobsSnap, candSnap, appsSnap, subsSnap, plcSnap] = await Promise.all([
          getDocs(collection(db, COLLECTIONS.JOBS)),
          getDocs(collection(db, COLLECTIONS.CANDIDATE_PROFILES)),
          getDocs(collection(db, COLLECTIONS.JOB_APPLICATIONS)),
          getDocs(collection(db, COLLECTIONS.CANDIDATE_SUBMISSIONS)),
          getDocs(collection(db, COLLECTIONS.PLACEMENTS)),
        ]);
        setJobsCount(jobsSnap.size);
        setCandidatesCount(candSnap.size);
        setAppsCount(appsSnap.size);
        setSubmissionsCount(subsSnap.size);
        setPlacementsCount(plcSnap.size);
      } catch (err) {
        console.error("Error fetching recruitment stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAdminStats();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.RECRUITMENT);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN Recruitment Admin data.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-8 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            SRYN RECRUITMENT ADMIN
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Recruitment System Admin</h1>
          <p className="text-slate-400 text-sm mt-0.5">Global overview of jobs, candidates, employers, applications, and placements</p>
        </div>
        <Link href="/admin/recruitment/jobs">
          <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            Moderate Jobs
          </Button>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Total Requisitions</span>
            <Briefcase className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">{loading ? "..." : jobsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Candidates</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-sky-400">{loading ? "..." : candidatesCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Applications</span>
            <FileText className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">{loading ? "..." : appsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Submissions</span>
            <Send className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400">{loading ? "..." : submissionsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Placements</span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">{loading ? "..." : placementsCount}</div>
        </Card>
      </div>

      {/* Admin Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <h3 className="font-bold text-white text-lg">Job Moderation & Requisitions</h3>
          <p className="text-xs text-slate-400">Review pending job postings submitted by employers and publish to job portal.</p>
          <Link href="/admin/recruitment/jobs" className="text-xs font-semibold text-emerald-400 block pt-2">
            Open Job Moderation →
          </Link>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <h3 className="font-bold text-white text-lg">Master Candidate Directory</h3>
          <p className="text-xs text-slate-400">Manage candidate profiles, experience levels, and private resume records.</p>
          <Link href="/admin/recruitment/candidates" className="text-xs font-semibold text-emerald-400 block pt-2">
            Open Candidate Directory →
          </Link>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <h3 className="font-bold text-white text-lg">Employer Accounts & Verification</h3>
          <p className="text-xs text-slate-400">Verify employer profiles and manage hiring partner accounts.</p>
          <Link href="/admin/recruitment/employers" className="text-xs font-semibold text-emerald-400 block pt-2">
            Open Employers Admin →
          </Link>
        </Card>
      </div>
    </main>
  );
}
