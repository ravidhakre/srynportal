import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { Home, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Loan Assistance | SRYN FinServ",
  description: "Guidance for residential home purchases, plot construction, and property financing.",
};

export default function HomeLoanPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">HOME LOAN ASSISTANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Home Purchase & Construction Guidance
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Navigate long-term home financing options for ready property purchases, under-construction flats, plot purchases, or home expansion.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Check Home Requirement</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Home financing involves long tenures and detailed property documentation checks. SRYN FinServ assists applicants in evaluating LTV limits, income eligibility ratios, and property document readiness.
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Home className="w-5 h-5 text-sryn-red" />
            Use Cases
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {["New Flat / Villa Purchase", "Self-Construction on Plot", "Home Extension / Floor Addition", "Home Loan Balance Transfer"].map((uc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
