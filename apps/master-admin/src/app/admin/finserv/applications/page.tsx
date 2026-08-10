"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { LoanApplicationDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { ShieldAlert, FileCheck2 } from "lucide-react";

export default function FinServApplicationsAdminPage() {
  const { role, businessVertical } = useAuth();
  const [applications, setApplications] = useState<LoanApplicationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApps() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.LOAN_APPLICATIONS));
        const list: LoanApplicationDocument[] = [];
        snap.forEach((d) => list.push(d.data() as LoanApplicationDocument));
        setApplications(list);
      } catch (err) {
        console.error("Error fetching loan applications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchApps();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.FINSERV);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN FinServ applications.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="danger">APPLICATION MANAGEMENT</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Loan Applications Admin</h1>
          <p className="text-slate-400 text-sm mt-0.5">Formal loan application tracking and lender submissions</p>
        </div>
        <Button variant="danger">Create New Application</Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-4">
        <FileCheck2 className="w-12 h-12 text-sryn-red mx-auto" />
        <h3 className="text-xl font-bold text-white">Loan Application Module Active</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Applications are managed via Firestore collection <span className="text-sryn-red font-mono">loanApplications</span> with strict RBAC controls. Total applications: <strong className="text-white">{loading ? "..." : applications.length}</strong>.
        </p>
      </Card>
    </main>
  );
}
