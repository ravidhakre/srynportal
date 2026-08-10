import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | SRYN Recruitment",
  description: "Privacy policy of SRYN Recruitment governing candidate data, resume security, and employer information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          PRIVACY POLICY
        </Badge>
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          SRYN Recruitment ("we", "our") respects candidate data privacy and employer confidentiality across recruitment.sryn.online.
        </p>

        <h3 className="text-lg font-bold text-white">1. Candidate Resume & Profile Confidentiality</h3>
        <p>
          Uploaded candidate resumes are stored exclusively in private encrypted cloud storage (/private/recruitment/candidates/...) protected by Role-Based Access Control. Candidate resumes and personal contact details are never made publicly searchable or indexed by web engines.
        </p>

        <h3 className="text-lg font-bold text-white">2. Analytics Privacy</h3>
        <p>
          We do NOT transmit sensitive candidate profiles, phone numbers, emails, resumes, or salary details to third-party marketing analytics platforms.
        </p>
      </div>
    </main>
  );
}
