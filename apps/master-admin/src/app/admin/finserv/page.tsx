"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import Link from "next/link";
import { ShieldAlert, Landmark, FileText, Users, Lock } from "lucide-react";

export default function FinServAdminDashboardPage() {
  const { role, businessVertical } = useAuth();
  const [leadsCount, setLeadsCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [docsCount, setDocsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFinServStats() {
      try {
        const db = getFirebaseDb();
        const [leadsSnap, appsSnap, docsSnap, custSnap] = await Promise.all([
          getDocs(collection(db, COLLECTIONS.FINANCE_LEADS)),
          getDocs(collection(db, COLLECTIONS.LOAN_APPLICATIONS)),
          getDocs(collection(db, COLLECTIONS.FINANCE_DOCUMENTS)),
          getDocs(collection(db, COLLECTIONS.FINANCE_CUSTOMERS)),
        ]);
        setLeadsCount(leadsSnap.size);
        setAppsCount(appsSnap.size);
        setDocsCount(docsSnap.size);
        setCustomersCount(custSnap.size);
      } catch (err) {
        console.error("Error fetching finserv stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFinServStats();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.FINSERV);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN FinServ Admin data.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            SRYN FINSERV ADMIN
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">FinServ Financial Operations</h1>
          <p className="text-slate-400 text-sm mt-0.5">Loan applications, secure document verification, customer accounts, and finance leads</p>
        </div>
        <Link href="/admin/finserv/applications">
          <Button size="sm" className="bg-amber-600 hover:bg-amber-500 font-semibold text-white">
            Process Applications
          </Button>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Finance Leads</span>
            <Landmark className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-bold text-white">{loading ? "..." : leadsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Loan Applications</span>
            <FileText className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-bold text-sky-400">{loading ? "..." : appsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Verified Documents</span>
            <Lock className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400">{loading ? "..." : docsCount}</div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-5 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
            <span>Customers</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400">{loading ? "..." : customersCount}</div>
        </Card>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/finserv/customers">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Customer Master Directory</h3>
            <p className="text-xs text-slate-400">Manage customer records, loan histories, and assigned credit officers.</p>
          </Card>
        </Link>

        <Link href="/admin/finserv/applications">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Loan Application Pipeline</h3>
            <p className="text-xs text-slate-400">Track loan eligibility, application statuses, and provider submissions.</p>
          </Card>
        </Link>

        <Link href="/admin/finserv/documents">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Secure Document Center</h3>
            <p className="text-xs text-slate-400">Verify PAN, Aadhaar, bank statements, and income documents securely.</p>
          </Card>
        </Link>

        <Link href="/admin/finserv/leads">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Finance Leads CRM</h3>
            <p className="text-xs text-slate-400">Manage incoming borrower leads, follow-ups, and consultation schedules.</p>
          </Card>
        </Link>

        <Link href="/admin/finserv/products">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">Finance Products CMS</h3>
            <p className="text-xs text-slate-400">Manage personal loan, business loan, and home loan product catalogs.</p>
          </Card>
        </Link>

        <Link href="/admin/finserv/analytics">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 hover:border-amber-500/50 transition-colors">
            <h3 className="font-bold text-white text-lg">FinServ Analytics</h3>
            <p className="text-xs text-slate-400">Loan demand trends, document processing velocity, and conversion funnels.</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
