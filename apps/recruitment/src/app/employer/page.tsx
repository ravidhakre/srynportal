"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import Link from "next/link";
import { Briefcase, Users, Plus } from "lucide-react";

export default function EmployerDashboardPage() {
  const { currentUser: user, userProfile } = useAuth();
  const [jobsCount, setJobsCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployerStats() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const db = getFirebaseDb();
        const [jobsSnap, appsSnap] = await Promise.all([
          getDocs(query(collection(db, COLLECTIONS.JOBS), where("employerUid", "==", user.uid))),
          getDocs(query(collection(db, COLLECTIONS.JOB_APPLICATIONS), where("employerUid", "==", user.uid))),
        ]);
        setJobsCount(jobsSnap.size);
        setAppsCount(appsSnap.size);
      } catch (err) {
        console.error("Error fetching employer stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployerStats();
  }, [user]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            EMPLOYER PORTAL
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">
            Welcome, {userProfile?.name || "Hiring Partner"}
          </h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage job openings and applicant submissions</p>
        </div>
        <Link href="/employer/jobs/create">
          <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            <Plus className="w-4 h-4 mr-2" /> Post New Job Opening
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Posted Openings</span>
            <Briefcase className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-white">{loading ? "..." : jobsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Received Applications</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-bold text-sky-400">{loading ? "..." : appsCount}</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/employer/jobs">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">My Requisitions</h3>
            <p className="text-xs text-slate-400">View and track status of all created job postings.</p>
          </Card>
        </Link>

        <Link href="/employer/applications">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Received Applicants</h3>
            <p className="text-xs text-slate-400">Review applicant candidate profiles and resumes.</p>
          </Card>
        </Link>

        <Link href="/employer/company">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Company Profile</h3>
            <p className="text-xs text-slate-400">Update company description, location, and industry.</p>
          </Card>
        </Link>
      </div>
    </main>
  );
}
