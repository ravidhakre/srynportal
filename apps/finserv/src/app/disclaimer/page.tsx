import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";

export const metadata: Metadata = {
  title: "Service Disclaimer | SRYN FinServ",
  description: "Official service, regulatory, and approval disclaimer for SRYN FinServ.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="danger">SERVICE DISCLAIMER</Badge>
        <h1 className="text-3xl font-bold text-white">Full Service Disclaimer</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <FinanceDisclaimer />

        <h3 className="text-lg font-bold text-white">No Guaranteed Approvals</h3>
        <p>
          SRYN FinServ explicitly disclaims any claims of guaranteed 100% loan approval, guaranteed credit score boosts, or guaranteed disbursement. All loan applications are evaluated by partner financial institutions according to their independent underwriting criteria.
        </p>
      </div>
    </main>
  );
}
