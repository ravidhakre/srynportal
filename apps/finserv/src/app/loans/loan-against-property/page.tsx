import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) Assistance | SRYN FinServ",
  description: "High-value financing assistance backed by residential or commercial property collateral.",
};

export default function LoanAgainstPropertyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">LOAN AGAINST PROPERTY</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Property-Mortgaged High-Value Financing Guidance
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Leverage the equity in your residential, commercial, or industrial property to access substantial long-term funding.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Check LAP Requirement</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Loan Against Property (LAP) is a secured loan offering lower interest rates compared to unsecured personal or business loans. SRYN FinServ helps property owners understand property title chain requirements and lender valuation policies.
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-sryn-red" />
            Considerations
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {["Marketable Clear Property Title", "Residential / Commercial Property", "Repayment Capacity Assessment", "Lender Property Valuation"].map((c, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
