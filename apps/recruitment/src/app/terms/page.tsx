import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Terms of Service | SRYN Recruitment",
  description: "Terms and conditions governing candidate job applications, employer job postings, and placement services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          TERMS OF SERVICE
        </Badge>
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          By using SRYN Recruitment job portal, candidate services, or employer posting platforms, you agree to these Terms of Service.
        </p>

        <h3 className="text-lg font-bold text-white">1. Job Applications & Employers</h3>
        <p>
          Submitting a job application does not guarantee employment or selection. Employer job postings enter review before publication.
        </p>
      </div>
    </main>
  );
}
