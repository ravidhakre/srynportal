"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import Link from "next/link";
import { Users, Briefcase, FileText, Send, Award } from "lucide-react";

export default function RecruiterDashboardPage() {
  const [jobsCount, setJobsCount] = useState(0);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [submissionsCount, setSubmissionsCount] = useState(0);
  const [placementsCount, setPlacementsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCrmStats() {
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
        console.error("Error fetching CRM stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCrmStats();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            RECRUITER CRM
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Recruitment Operations Dashboard</h1>
          <p className="text-slate-400 text-sm mt-0.5">Sourcing, client submissions, interviews, and placement tracking</p>
        </div>
        <Link href="/recruiter/candidates">
          <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            Source Candidate Pool
          </Button>
        </Link>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Requisitions</span>
            <Briefcase className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">{loading ? "..." : jobsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Candidates</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-sky-400">{loading ? "..." : candidatesCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Applications</span>
            <FileText className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">{loading ? "..." : appsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Submissions</span>
            <Send className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400">{loading ? "..." : submissionsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Placements</span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">{loading ? "..." : placementsCount}</div>
        </Card>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/recruiter/leads">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Employer Leads CRM</h3>
            <p className="text-xs text-slate-400">Manage client lead pipelines, proposals, and staffing contracts.</p>
          </Card>
        </Link>

        <Link href="/recruiter/submissions">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Client Submissions</h3>
            <p className="text-xs text-slate-400">Track candidate profiles submitted to hiring partners for review.</p>
          </Card>
        </Link>

        <Link href="/recruiter/placements">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Placement Management</h3>
            <p className="text-xs text-slate-400">Record offer acceptances, joining dates, and completed placements.</p>
          </Card>
        </Link>
      </div>
    </main>
  );
}
