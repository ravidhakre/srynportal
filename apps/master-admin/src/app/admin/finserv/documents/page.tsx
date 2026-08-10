"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { FinanceDocumentMetadata } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { ShieldAlert, ShieldCheck, Lock } from "lucide-react";

export default function FinServDocumentsAdminPage() {
  const { role, businessVertical } = useAuth();
  const [docsList, setDocsList] = useState<FinanceDocumentMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.FINANCE_DOCUMENTS));
        const list: FinanceDocumentMetadata[] = [];
        snap.forEach((d) => list.push(d.data() as FinanceDocumentMetadata));
        setDocsList(list);
      } catch (err) {
        console.error("Error fetching finance documents:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDocs();
  }, []);

  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.FINSERV);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access sensitive FinServ customer documents.
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="danger">SECURE DOCUMENT STORAGE</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">FinServ Document Verification</h1>
          <p className="text-slate-400 text-sm mt-0.5">Private storage document verification & security audit</p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
        <Lock className="w-5 h-5 text-sryn-red shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Encrypted Private Storage:</strong> All applicant documents (PAN, Aadhaar, Bank Statements) are stored under private storage paths (<code className="text-sryn-red font-mono">/private/finserv/applications/...</code>). Raw public URLs are strictly disabled.
        </p>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-4">
        <ShieldCheck className="w-12 h-12 text-sryn-red mx-auto" />
        <h3 className="text-xl font-bold text-white">Document Management Active</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Documents record metadata in Firestore <span className="text-sryn-red font-mono">financeDocuments</span>. Total verified records: <strong className="text-white">{loading ? "..." : docsList.length}</strong>.
        </p>
      </Card>
    </main>
  );
}
