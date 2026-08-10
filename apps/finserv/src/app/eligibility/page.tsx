import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Eligibility Factors & Criteria | SRYN FinServ",
  description: "General eligibility parameters for personal loans, business loans, home loans, and credit assistance.",
};

const eligibilityFactors = [
  { title: "Monthly / Business Income", desc: "Verifiable income proof through salary bank credits or business bank statements." },
  { title: "Employment / Business Vintage", desc: "Minimum 1 year for salaried employees or 2-3 years continuous business existence." },
  { title: "Credit Score Standing", desc: "Credit bureau history (CIBIL/Experian). Scores 700+ generally improve lender acceptance options." },
  { title: "Age Limits", desc: "Applicants between 21 and 60-65 years at the time of loan maturity." },
  { title: "Existing EMI Obligations", desc: "Debt-to-income (FOIR) ratio evaluated by lenders to ensure manageable monthly repayment." },
  { title: "Document Verifiability", desc: "Valid KYC documents matching official records (PAN, Aadhaar, ITR filings)." },
];

export default function EligibilityPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">ELIGIBILITY CONSIDERATIONS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Financial Eligibility Factors</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Understanding the parameters evaluated by financial institutions and product providers.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eligibilityFactors.map((ef, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-3">
            <div className="flex items-center space-x-2 text-sryn-red font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-sryn-red shrink-0" />
              <h3 className="text-white">{ef.title}</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{ef.desc}</p>
          </Card>
        ))}
      </div>

      <FinanceDisclaimer />
    </main>
  );
}
