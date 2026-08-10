import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SRYN Recruitment | Corporate Division Overview",
  description: "Learn about SRYN Recruitment division providing IT & Non-IT staffing, candidate portal, and employer hiring.",
};

export default function RecruitmentIntroPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="success">RECRUITMENT DIVISION</Badge>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Connecting Talent With the Right Opportunities
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN Recruitment connects employers with skilled professionals across IT, Non-IT and specialized business functions.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Division Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            SRYN Recruitment operates as the staffing and job portal engine of SRYN Management Pvt. Ltd.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            We provide full-lifecycle talent sourcing, screening, candidate resume databases, employer job posting workflows, and third-party recruitment staffing pipelines.
          </p>
          <div className="pt-2">
            <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
              <Button variant="recruitment" size="lg">
                <span>Visit SRYN Recruitment Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Staffing Solutions</h3>
          {[
            "IT & Technical Specialized Talent Sourcing",
            "Non-IT, Sales, HR & Operations Hiring",
            "Third-Party Bulk Recruitment & Client Submissions",
            "Candidate Profile Registration & Private Resume Vault",
            "Employer Job Posting & Application Management",
            "Interview Scheduling & Placement Tracking",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
