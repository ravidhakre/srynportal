"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { LoanApplicationDocument, FinanceDocumentMetadata } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { Landmark, Lock, FileCheck } from "lucide-react";

export default function FinServCustomerPortalPage() {
  const { currentUser: user } = useAuth();
  const [applications, setApplications] = useState<LoanApplicationDocument[]>([]);
  const [documents, setDocuments] = useState<FinanceDocumentMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomerData() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const db = getFirebaseDb();
        const appQ = query(
          collection(db, COLLECTIONS.LOAN_APPLICATIONS),
          where("applicantEmail", "==", user.email)
        );
        const docQ = query(
          collection(db, COLLECTIONS.FINANCE_DOCUMENTS),
          where("uploadedBy", "==", user.uid)
        );

        const [appSnap, docSnap] = await Promise.all([getDocs(appQ), getDocs(docQ)]);

        const aList: LoanApplicationDocument[] = [];
        appSnap.forEach((d) => aList.push(d.data() as LoanApplicationDocument));

        const dList: FinanceDocumentMetadata[] = [];
        docSnap.forEach((d) => dList.push(d.data() as FinanceDocumentMetadata));

        setApplications(aList);
        setDocuments(dList);
      } catch (err) {
        console.error("Error fetching customer portal data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomerData();
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <Lock className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="text-xl font-bold text-white">Customer Portal Authentication Required</h2>
          <p className="text-slate-400 text-xs">Please log in to your SRYN FinServ account to view your loan applications and uploaded documents.</p>
        </Card>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 text-left">
        <div className="border-b border-slate-800 pb-6">
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            SRYN FINSERV CUSTOMER PORTAL
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Borrower Dashboard</h1>
          <p className="text-slate-400 text-xs mt-0.5">Logged in as {user.email}</p>
        </div>

        {/* Loan Applications */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <Landmark className="w-5 h-5 text-amber-400" />
            <span>My Loan Applications</span>
          </div>

          <Card className="bg-slate-900 border-slate-800 p-6">
            {loading ? (
              <p className="text-slate-400 text-sm text-center">Loading applications...</p>
            ) : applications.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No loan applications submitted yet under this account.</p>
            ) : (
              <div className="space-y-3">
                {applications.map((app) => (
                  <div key={app.applicationId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="font-mono text-amber-400 font-bold">{app.applicationId}</span>
                      <h4 className="text-base font-bold text-white mt-0.5">{app.productType}</h4>
                      <p className="text-slate-400 text-[11px]">Requested: ₹{app.requestedAmount?.toLocaleString()}</p>
                    </div>
                    <Badge variant="secondary">{app.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Uploaded Documents */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <span>Secure Documents Checklist</span>
          </div>

          <Card className="bg-slate-900 border-slate-800 p-6">
            {loading ? (
              <p className="text-slate-400 text-sm text-center">Loading documents...</p>
            ) : documents.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No uploaded verification documents found.</p>
            ) : (
              <div className="space-y-3">
                {documents.map((d) => (
                  <div key={d.documentId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="font-bold text-white">{d.fileName}</span>
                      <p className="text-slate-400 text-[11px]">Type: {d.documentType}</p>
                    </div>
                    <Badge variant={d.verificationStatus === "VERIFIED" ? "success" : "secondary"}>
                      {d.verificationStatus}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
