import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { FinanceDisclaimer } from "../../components/disclaimer";
import { ArrowUpRight, ShieldCheck, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "About SRYN FinServ | Financial Assistance & Credit Consultation",
  description: "Learn about SRYN FinServ, a specialized financial services business vertical of SRYN Management Pvt. Ltd.",
};

export default function AboutPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">ABOUT SRYN FINSERV</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Financial Solutions Designed Around Your Needs
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN FinServ is the dedicated financial assistance and credit consultation division of SRYN Management Pvt. Ltd.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Consultation & Assistance Philosophy</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We help individuals and business owners navigate financing options, credit evaluation, and documentation readiness. We provide structured guidance to connect applicants with suitable lender terms and product options.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            As a business division of SRYN Management Pvt. Ltd., SRYN FinServ operates alongside SRYN Technology and SRYN Recruitment.
          </p>
          <div className="pt-2">
            <a href={appUrls.corporate} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">
                <span>Visit SRYN Management Corporate</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <Landmark className="w-5 h-5 text-sryn-red" />
            <h4 className="font-bold text-white text-base">Multi-Category Coverage</h4>
            <p className="text-xs text-slate-400">Personal loans, business financing, home loans, property-backed financing & credit card assistance.</p>
          </Card>
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-base">Transparent Communication</h4>
            <p className="text-xs text-slate-400">No unrealistic promises. Objective evaluation based on lender criteria and credit policies.</p>
          </Card>
        </div>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
