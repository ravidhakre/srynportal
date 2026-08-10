"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import Link from "next/link";
import { ShieldAlert, Cpu, FolderKanban, Users, FileText, Plus } from "lucide-react";

export default function TechnologyAdminDashboardPage() {
  const { role, businessVertical } = useAuth();
  const [leadsCount, setLeadsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [quotesCount, setQuotesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTechStats() {
      try {
        const db = getFirebaseDb();
        const [leadsSnap, prjSnap, cliSnap, qteSnap] = await Promise.all([
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_LEADS)),
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_PROJECTS)),
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_CLIENTS)),
          getDocs(collection(db, COLLECTIONS.TECHNOLOGY_QUOTES)),
        ]);
        setLeadsCount(leadsSnap.size);
        setProjectsCount(prjSnap.size);
        setClientsCount(cliSnap.size);
        setQuotesCount(qteSnap.size);
      } catch (err) {
        console.error("Error fetching technology stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTechStats();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.TECHNOLOGY);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN Technology Admin data.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
            SRYN TECHNOLOGY ADMIN
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Technology Business Operations</h1>
          <p className="text-slate-400 text-sm mt-0.5">Software projects, task delivery, client accounts, quotations, and technology leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/admin/technology/projects">
            <Button size="sm" className="bg-sky-600 hover:bg-sky-500 font-semibold text-white">
              <Plus className="w-4 h-4 mr-1" /> New Project
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Tech Leads</span>
            <Cpu className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-bold text-white">{loading ? "..." : leadsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Projects</span>
            <FolderKanban className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold text-cyan-400">{loading ? "..." : projectsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Clients</span>
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400">{loading ? "..." : clientsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Quotations</span>
            <FileText className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400">{loading ? "..." : quotesCount}</div>
        </Card>
      </div>

      {/* Modules List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/technology/projects">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Project Management</h3>
            <p className="text-xs text-slate-400">Track client software delivery projects, statuses, and milestones.</p>
          </Card>
        </Link>

        <Link href="/admin/technology/tasks">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Task Management</h3>
            <p className="text-xs text-slate-400">Manage development task boards, sprint tasks, and assigned items.</p>
          </Card>
        </Link>

        <Link href="/admin/technology/clients">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Client Management</h3>
            <p className="text-xs text-slate-400">Manage client accounts, contact details, and tech agreements.</p>
          </Card>
        </Link>

        <Link href="/admin/technology/quotes">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Quotations Foundation</h3>
            <p className="text-xs text-slate-400">Create and track tech service quotations, line items, and proposals.</p>
          </Card>
        </Link>

        <Link href="/admin/technology/leads">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Tech Leads CRM</h3>
            <p className="text-xs text-slate-400">Process incoming web leads for custom software and web applications.</p>
          </Card>
        </Link>

        <Link href="/admin/technology/services">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Services & Portfolio CMS</h3>
            <p className="text-xs text-slate-400">Update technology service offerings and public portfolio case studies.</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
