"use client";

import React from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { useAuth } from "@sryn/database/context/auth-context";
import Link from "next/link";
import { UserCheck, FileText, Bookmark } from "lucide-react";

export default function CandidateDashboardPage() {
  const { userProfile } = useAuth();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            CANDIDATE DASHBOARD
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">
            Welcome, {userProfile?.name || "Job Seeker"}
          </h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage your applications, resume, and saved opportunities</p>
        </div>
        <Link href="/jobs">
          <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            Search Openings
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link href="/candidate/applications">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <FileText className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-lg">My Applications</h3>
            <p className="text-xs text-slate-400">Track status of your submitted applications.</p>
          </Card>
        </Link>

        <Link href="/candidate/profile">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <UserCheck className="w-6 h-6 text-sky-400" />
            <h3 className="font-bold text-white text-lg">Master Profile</h3>
            <p className="text-xs text-slate-400">Update skills, experience, and salary targets.</p>
          </Card>
        </Link>

        <Link href="/candidate/resume">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <FileText className="w-6 h-6 text-purple-400" />
            <h3 className="font-bold text-white text-lg">Resume Storage</h3>
            <p className="text-xs text-slate-400">Manage private resume documents.</p>
          </Card>
        </Link>

        <Link href="/candidate/saved-jobs">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
            <Bookmark className="w-6 h-6 text-amber-400" />
            <h3 className="font-bold text-white text-lg">Saved Jobs</h3>
            <p className="text-xs text-slate-400">View saved job openings.</p>
          </Card>
        </Link>
      </div>
    </main>
  );
}
