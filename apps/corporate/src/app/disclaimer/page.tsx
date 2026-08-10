import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Financial Disclaimer | SRYN FinServ & Corporate Disclaimer",
  description: "Official financial and corporate disclaimer for SRYN Management Pvt. Ltd. and SRYN FinServ.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="danger">LEGAL DISCLAIMER</Badge>
        <h1 className="text-3xl font-bold text-white">Financial & Corporate Disclaimer</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          This disclaimer applies to all information, services, and consultations provided by SRYN Management Pvt. Ltd. and its business vertical, SRYN FinServ.
        </p>

        <h3 className="text-lg font-bold text-white">1. Financial Consultation Scope</h3>
        <p>
          SRYN FinServ operates strictly as a financial consultation, assistance, and document facilitation service. SRYN FinServ is not a direct banking institution or non-banking financial company (NBFC) unless explicitly stated under registered partner licenses.
        </p>

        <h3 className="text-lg font-bold text-white">2. No Guaranteed Approvals</h3>
        <p>
          Loan approvals, interest rates, credit limits, tenure, and financial product eligibility are strictly subject to lender credit evaluation, documentation verification, applicant background, and partner financial institution policies. SRYN FinServ does NOT guarantee 100% loan approval, guaranteed credit score increase, or guaranteed financial outcomes.
        </p>

        <h3 className="text-lg font-bold text-white">3. Information Accuracy</h3>
        <p>
          All information on www.sryn.online is provided for general informational and educational purposes. Visitors should verify product details directly with official partner representatives.
        </p>
      </div>
    </main>
  );
}
