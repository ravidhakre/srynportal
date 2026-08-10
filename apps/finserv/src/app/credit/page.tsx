import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";
import Link from "next/link";
import { ShieldCheck, UserCheck, CreditCard, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Credit Consultation & Services | SRYN FinServ",
  description: "Credit-focused assistance and consultation designed to help customers understand credit requirements and application readiness.",
};

const creditServices = [
  {
    slug: "consultation",
    title: "Credit Consultation",
    desc: "Professional evaluation of your credit report, repayment history, and application readiness.",
    icon: ShieldCheck,
  },
  {
    slug: "guidance",
    title: "Credit Profile Guidance",
    desc: "Educational guidance on credit utilization, inquiry frequency, and healthy credit habits.",
    icon: UserCheck,
  },
  {
    slug: "cards",
    title: "Credit Card Assistance",
    desc: "Requirement assessment and credit card option guidance aligned to your spending habits.",
    icon: CreditCard,
  },
];

export default function CreditServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">CREDIT SERVICES</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Credit Consultation & Guidance</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Credit-focused assistance designed to help customers better understand their credit-related requirements and application readiness.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {creditServices.map((cs) => (
          <Card key={cs.slug} className="bg-slate-900 border-slate-800 p-8 space-y-6 flex flex-col justify-between hover:border-sryn-red/50 transition-colors">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20">
                <cs.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{cs.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{cs.desc}</p>
            </div>
            <div className="pt-2">
              <Link href={`/credit/${cs.slug}`} className="text-xs font-semibold text-sryn-red flex items-center hover:underline">
                <span>View Details</span>
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
