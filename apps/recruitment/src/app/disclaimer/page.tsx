import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Service Disclaimer | SRYN Recruitment",
  description: "Official service and recruitment disclaimer for SRYN Recruitment.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          SERVICE DISCLAIMER
        </Badge>
        <h1 className="text-3xl font-bold text-white">Recruitment Disclaimer</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <h3 className="text-lg font-bold text-white">No Guaranteed Employment or Placement</h3>
        <p>
          SRYN Recruitment explicitly disclaims any claims of guaranteed employment, 100% job placements, or guaranteed candidate selection. All hiring decisions are made independently by employer partners.
        </p>
      </div>
    </main>
  );
}
