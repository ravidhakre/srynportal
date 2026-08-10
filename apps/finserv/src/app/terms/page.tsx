import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Terms of Service | SRYN FinServ",
  description: "Terms and conditions governing financial consultation, loan assistance, and credit services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="danger">TERMS OF SERVICE</Badge>
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          By engaging SRYN FinServ for loan assistance, financial consultation, or credit guidance services, you agree to these Terms of Service.
        </p>

        <h3 className="text-lg font-bold text-white">1. Assistance Scope & Lender Authority</h3>
        <p>
          SRYN FinServ provides professional guidance and documentation support. Submission of a requirement does not guarantee loan sanction, approval, or disbursement. All financial approvals are determined solely by relevant third-party lenders and financial institutions.
        </p>
      </div>
    </main>
  );
}
