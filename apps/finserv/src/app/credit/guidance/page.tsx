import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Credit Profile Guidance & Awareness | SRYN FinServ",
  description: "Educational guidance on credit scores, credit history, repayment behavior, and application frequency.",
};

export default function CreditGuidancePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">CREDIT GUIDANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Educational Credit Awareness & Profile Guidance
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Learn key principles of credit score maintenance, healthy credit utilization, and application frequency management.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Discuss Credit Guidance</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Credit Score Fundamentals</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            A credit score reflects your historical credit repayment behavior. Factors influencing your score include timely EMI payments, credit card utilization ratios (ideally under 30%), and the mix of secured vs. unsecured credit.
          </p>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Application Frequency & Inquiries</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Submitting multiple loan or credit card applications across multiple lenders within a short timeframe creates multiple hard credit inquiries, which can temporarily reduce your credit score.
          </p>
        </Card>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
