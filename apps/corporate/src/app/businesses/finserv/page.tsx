import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "SRYN FinServ | Corporate Division Overview",
  description: "Learn about SRYN FinServ division providing loan assistance, credit consultation, and financial solutions.",
};

export default function FinServIntroPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">FINANCIAL SERVICES DIVISION</Badge>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Financial Solutions Designed Around Your Needs
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN FinServ helps individuals and businesses understand and access suitable financial solutions through professional assistance and consultation.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Division Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            SRYN FinServ operates as the financial consultation arm of SRYN Management Pvt. Ltd.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our team assists clients through requirement evaluation, document preparation, and consultation for personal loans, business working capital, home loans, and credit score guidance.
          </p>
          <div className="pt-2">
            <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer">
              <Button variant="finserv" size="lg">
                <span>Visit SRYN FinServ Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Consultation Offerings</h3>
          {[
            "Personal Loan Assistance",
            "Business Loan & Finance Advisory",
            "Home Loan & Loan Against Property (LAP)",
            "Credit Score Guidance & Consultation",
            "Credit Card & Business Credit Assistance",
            "Financial Solution Consultation",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-sryn-red shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Disclaimer */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-start space-x-4 max-w-4xl mx-auto">
        <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
        <div className="space-y-1 text-left text-xs text-slate-400 leading-relaxed">
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">Important Disclaimer</h4>
          <p>
            SRYN FinServ provides financial assistance, guidance, and document preparation consultation. Loan approvals, interest rates, credit limits, and financial products are strictly subject to lender eligibility, documentation, partner terms, and regulatory guidelines. SRYN FinServ does not guarantee 100% approval or financial outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}
