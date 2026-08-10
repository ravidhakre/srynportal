import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at SRYN Management | Join Our Multi-Sector Team",
  description: "Explore career opportunities across Technology, Finance, Recruitment, Operations, and Business Development at SRYN.",
};

export default function CareersPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="success">JOIN SRYN MANAGEMENT</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Build Your Career With SRYN
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          We are building dynamic teams across technology, finance, recruitment and business operations. Explore opportunities and take the next step in your career.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-center max-w-4xl mx-auto">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Career Opportunities Across Verticals</h2>
          <p className="text-slate-400 text-sm">
            Opportunities exist across our core business functions:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            "Technology & Software",
            "Financial Advisory",
            "Recruitment & Staffing",
            "Sales & Business Dev",
            "Operations & Admin",
            "Human Resources",
            "Customer Support",
            "Digital Marketing",
          ].map((cat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center space-x-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{cat}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
            <Button variant="recruitment" size="lg" className="font-semibold">
              <span>View Current Opportunities on SRYN Recruitment</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
