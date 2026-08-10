import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Loan Assistance | SRYN FinServ",
  description: "Working capital, business expansion, and enterprise financing assistance.",
};

export default function BusinessLoanPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">BUSINESS LOAN ASSISTANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Financing Solutions Built for Business Expansion
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Access working capital, machinery purchase, inventory stock, or operational cash flow support through professional business loan consultation.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Check Business Requirement</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Businesses require consistent capital to fund growth initiatives, manage supplier payments, and upgrade operational infrastructure. We assist registered entities and self-employed professionals in preparing application documentation.
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-sryn-red" />
            Business Use Cases
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {["Working Capital & Cash Flow", "Equipment & Machinery Purchase", "Office / Store Expansion", "Inventory Procurement"].map((uc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">General Business Eligibility</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Minimum 2 to 3 years of continuous business operations.</li>
            <li>• Valid GST registration or business license.</li>
            <li>• Positive business turnover and cash flow track record.</li>
          </ul>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Business Documentation Required</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Business PAN, GST Registration & Incorporation Certificate.</li>
            <li>• Latest 12 months current bank account statements.</li>
            <li>• Audited financial reports & ITR filings for last 2 years.</li>
          </ul>
        </Card>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
