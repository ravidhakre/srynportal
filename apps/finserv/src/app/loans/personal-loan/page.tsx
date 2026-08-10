import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { UserCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Loan Assistance | SRYN FinServ",
  description: "Personal loan guidance and assistance for salaried and self-employed applicants.",
};

export default function PersonalLoanPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">PERSONAL LOAN ASSISTANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Personal Financing Guidance Aligned to Your Income
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Explore unsecured personal loan options with professional assistance for medical expenses, family needs, education, or financial consolidation.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Check Your Requirement</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Overview & Use Cases */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Personal loans offer flexible financing without collateral requirements. SRYN FinServ evaluates your income profile, existing obligations, and credit standing to guide you toward suitable lending terms.
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-sryn-red" />
            Potential Use Cases
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {["Emergency Medical Expenses", "Home Renovation & Repairs", "Higher Education Fees", "Debt Consolidation Assistance"].map((uc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* General Eligibility & Documents */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">General Eligibility Considerations</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Age between 21 and 60 years.</li>
            <li>• Salaried or self-employed with minimum verifiable monthly income.</li>
            <li>• Minimum 1 year of work experience or business vintage.</li>
            <li>• Satisfactory credit score (typically 700+ preferred by most lenders).</li>
          </ul>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Common Documentation Required</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• PAN Card & Aadhaar / Passport for identity & address.</li>
            <li>• Latest 3-6 months bank statement showing income credit.</li>
            <li>• Latest 3 months salary slips or 2 years Form 16 / ITR.</li>
            <li>• Existing loan obligation details if applicable.</li>
          </ul>
        </Card>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
