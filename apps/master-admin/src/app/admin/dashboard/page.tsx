"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import Link from "next/link";
import {
  Users,
  Cpu,
  Landmark,
  Briefcase,
  FolderKanban,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function MasterDashboardPage() {
  const [usersCount, setUsersCount] = useState(0);
  const [techLeadsCount, setTechLeadsCount] = useState(0);
  const [finLeadsCount, setFinLeadsCount] = useState(0);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [loanAppsCount, setLoanAppsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [dateFilter, setDateFilter] = useState("30D");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMasterStats() {
      try {
        const db = getFirebaseDb();
        const [
          usersSnap,
          techLeadsSnap,
          finLeadsSnap,
          candSnap,
          jobsSnap,
          appsSnap,
          loansSnap,
          prjSnap,
        ] = await Promise.all([
          getDocs(collection(db, COLLECTIONS.USERS)),
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_LEADS)),
          getDocs(collection(db, COLLECTIONS.FINANCE_LEADS)),
          getDocs(collection(db, COLLECTIONS.CANDIDATE_PROFILES)),
          getDocs(collection(db, COLLECTIONS.JOBS)),
          getDocs(collection(db, COLLECTIONS.JOB_APPLICATIONS)),
          getDocs(collection(db, COLLECTIONS.LOAN_APPLICATIONS)),
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_PROJECTS)),
        ]);

        setUsersCount(usersSnap.size);
        setTechLeadsCount(techLeadsSnap.size);
        setFinLeadsCount(finLeadsSnap.size);
        setCandidatesCount(candSnap.size);
        setJobsCount(jobsSnap.size);
        setAppsCount(appsSnap.size);
        setLoanAppsCount(loansSnap.size);
        setProjectsCount(prjSnap.size);
      } catch (err) {
        console.error("Error fetching master stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMasterStats();
  }, []);

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            SRYN EXECUTIVE MANAGEMENT
          </Badge>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">Master Control Dashboard</h1>
          <p className="text-slate-400 text-xs mt-0.5">High-level enterprise performance metrics across Technology, FinServ, and Recruitment</p>
        </div>

        {/* Date Filter */}
        <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
          {["TODAY", "7D", "30D", "90D", "YEAR"].map((df) => (
            <button
              key={df}
              onClick={() => setDateFilter(df)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                dateFilter === df ? "bg-slate-800 text-white border border-slate-700" : "text-slate-400 hover:text-white"
              }`}
            >
              {df}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Total Registered Users</span>
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-white">{loading ? "..." : usersCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Tech Enquiries</span>
            <Cpu className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-bold text-sky-400">{loading ? "..." : techLeadsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>FinServ Leads</span>
            <Landmark className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-bold text-amber-400">{loading ? "..." : finLeadsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Candidates</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400">{loading ? "..." : candidatesCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Active Job Requisitions</span>
            <Briefcase className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400">{loading ? "..." : jobsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Job Applications</span>
            <FileText className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-bold text-indigo-400">{loading ? "..." : appsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Finance Applications</span>
            <FileText className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-bold text-amber-400">{loading ? "..." : loanAppsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Active Tech Projects</span>
            <FolderKanban className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold text-cyan-400">{loading ? "..." : projectsCount}</div>
        </Card>
      </div>

      {/* Business Verticals Operational Control Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4 shadow-2xl flex flex-col justify-between">
          <div className="space-y-2">
            <div className="p-3 w-fit rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">SRYN Technology</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Software development, IT projects, task boards, quotations, and technology client leads.
            </p>
          </div>
          <Link href="/admin/technology">
            <Button size="sm" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold">
              Open Tech Operations →
            </Button>
          </Link>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4 shadow-2xl flex flex-col justify-between">
          <div className="space-y-2">
            <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">SRYN FinServ</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Loan application processing, customer directory, secure document verification, and finance leads.
            </p>
          </div>
          <Link href="/admin/finserv">
            <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold">
              Open FinServ Operations →
            </Button>
          </Link>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4 shadow-2xl flex flex-col justify-between">
          <div className="space-y-2">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">SRYN Recruitment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Requisition moderation, candidate sourcing directory, client submissions, and placement records.
            </p>
          </div>
          <Link href="/admin/recruitment">
            <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
              Open Recruitment Operations →
            </Button>
          </Link>
        </Card>
      </div>

      {/* System Governance & Compliance */}
      <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 text-slate-300 font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Governance & Access Summary</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div>
            <span className="text-white font-semibold block">Role-Based Access Control</span>
            <span>Strict server-side validation enforcing vertical access isolation.</span>
          </div>
          <div>
            <span className="text-white font-semibold block">Private Document Storage</span>
            <span>Encrypted cloud storage paths for candidate resumes and financial documents.</span>
          </div>
          <div>
            <span className="text-white font-semibold block">Audit Trails</span>
            <span>Immutable system audit logging for all privileged user actions.</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
