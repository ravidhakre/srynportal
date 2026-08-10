import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

export const metadata: Metadata = {
  title: "About SRYN Recruitment | Talent & Placement Solutions",
  description: "Learn about SRYN Recruitment, our recruitment team, and our talent acquisition philosophy.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          ABOUT US
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Connecting Talent With Opportunities</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          SRYN Recruitment is the specialized talent acquisition and placement division of <strong>SRYN Management Pvt. Ltd.</strong>
        </p>
        <p>
          We assist companies across technology, sales, finance, operations, and administrative functions to find qualified candidates through structured job posting workflows, candidate pre-screening, and managed staffing services.
        </p>
      </Card>
    </main>
  );
}
