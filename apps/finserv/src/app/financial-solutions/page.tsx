import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";
import Link from "next/link";
import { UserCheck, Building2, Home, Briefcase, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Solutions Overview | SRYN FinServ",
  description: "Personal finance, business loans, home financing, LAP, credit consultation, and credit card assistance.",
};

const solutions = [
  { title: "Personal Financial Assistance", desc: "Unsecured personal loan consultation for individual requirements.", icon: UserCheck, link: "/loans/personal-loan" },
  { title: "Business Financial Assistance", desc: "Working capital and business expansion loan guidance.", icon: Building2, link: "/loans/business-loan" },
  { title: "Home Financial Assistance", desc: "Residential home purchase and property construction guidance.", icon: Home, link: "/loans/home-loan" },
  { title: "Property-Backed Financing", desc: "High-value financing assistance mortgaged against property.", icon: Briefcase, link: "/loans/loan-against-property" },
  { title: "Credit Profile Consultation", desc: "Professional review of credit health and application readiness.", icon: ShieldCheck, link: "/credit/consultation" },
  { title: "Credit Card Assistance", desc: "Category-aligned credit card guidance for spending habits.", icon: CreditCard, link: "/credit/cards" },
];

export default function FinancialSolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">ALL FINANCIAL SOLUTIONS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Financial Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Full spectrum of financial consultation and loan assistance services built around individual and business requirements.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-sryn-red/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
            <Link href={s.link} className="text-xs font-semibold text-sryn-red flex items-center hover:underline pt-2">
              <span>View Solution Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </Card>
        ))}
      </div>

      <FinanceDisclaimer />
    </main>
  );
}
