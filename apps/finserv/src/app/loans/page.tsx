import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";
import Link from "next/link";
import { UserCheck, Building2, Home, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing & Loan Assistance | SRYN FinServ",
  description: "Explore loan assistance categories: Personal Loans, Business Loans, Home Loans, and Loans Against Property.",
};

const loanCategories = [
  {
    slug: "personal-loan",
    title: "Personal Loan Assistance",
    desc: "Unsecured personal financing assistance for medical, family, or travel requirements.",
    icon: UserCheck,
    eligibility: "Salaried or self-employed individuals with stable monthly income & credit profile.",
    documents: "Identity proof, address proof, 3-6 months bank statements, salary slips / ITR.",
  },
  {
    slug: "business-loan",
    title: "Business Loan Assistance",
    desc: "Financing solutions for working capital, business expansion, equipment purchase, or operational cash flow.",
    icon: Building2,
    eligibility: "Registered business entities, self-employed professionals, and entrepreneurs with business vintage.",
    documents: "GST returns, business PAN, 12 months bank statements, ITR & audit reports.",
  },
  {
    slug: "home-loan",
    title: "Home Loan Assistance",
    desc: "Guidance for residential home purchases, plot construction, or home renovation financing.",
    icon: Home,
    eligibility: "Applicants with verifiable income, age eligibility, and clear property chain documentation.",
    documents: "Property title documents, approved layout plans, income proofs, KYC documents.",
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property (LAP)",
    desc: "High-value financing assistance against mortgage of residential or commercial property.",
    icon: Briefcase,
    eligibility: "Property owners with clear marketable property titles and repayment capacity.",
    documents: "Property title deeds, encumbrance certificate, tax receipts, business/salaried income proof.",
  },
];

export default function LoansPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">LOAN ASSISTANCE CATEGORIES</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Financing & Loan Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Structured consultation and assistance across personal, business, home, and property-backed loan categories.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loanCategories.map((cat) => (
          <Card key={cat.slug} className="bg-slate-900 border-slate-800 p-8 space-y-6 flex flex-col justify-between hover:border-sryn-red/50 transition-colors">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20">
                <cat.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{cat.desc}</p>
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div>
                  <strong className="text-slate-400">General Eligibility:</strong> <span className="text-slate-300">{cat.eligibility}</span>
                </div>
                <div>
                  <strong className="text-slate-400">Common Documents:</strong> <span className="text-slate-300">{cat.documents}</span>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link href={`/loans/${cat.slug}`} className="text-xs font-semibold text-sryn-red flex items-center hover:underline">
                <span>Explore {cat.title} Details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <FinanceDisclaimer />
    </main>
  );
}
