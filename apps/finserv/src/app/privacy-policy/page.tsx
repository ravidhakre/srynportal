import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | SRYN FinServ",
  description: "Privacy policy of SRYN FinServ governing financial requirement submissions, applicant data, and security.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="danger">PRIVACY POLICY</Badge>
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          SRYN FinServ ("we", "our") respects the privacy of applicants, clients, and website visitors on finserv.sryn.online.
        </p>

        <h3 className="text-lg font-bold text-white">1. Financial Data Collection & Security</h3>
        <p>
          We collect personal details, contact numbers, city, employment status, income estimates, and financial requirement details submitted through our requirement forms.
        </p>

        <h3 className="text-lg font-bold text-white">2. Confidentiality & Marketing Analytics Security</h3>
        <p>
          Sensitive financial details, income proofs, and uploaded documents are stored in private encrypted storage and strictly isolated by Role-Based Access Control. We do NOT transmit sensitive financial data (PAN, Aadhaar, bank statements, credit scores) to third-party marketing analytics platforms.
        </p>
      </div>
    </main>
  );
}
