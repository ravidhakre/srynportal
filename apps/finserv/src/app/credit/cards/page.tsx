import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { FinanceDisclaimer } from "../../../components/disclaimer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Credit Card Assistance & Option Guidance | SRYN FinServ",
  description: "Credit card requirement assessment, eligibility guidance, and application assistance.",
};

export default function CreditCardsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="danger">CREDIT CARD ASSISTANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Credit Card Option Guidance & Application Readiness
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Assess credit card options based on your income profile, spending categories (rewards, travel, cashback), and lender eligibility criteria.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/apply">
            <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
              <span>Check Card Requirement</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">General Card Eligibility Factors</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Age between 21 and 65 years.</li>
            <li>• Salaried employment or self-employed business income.</li>
            <li>• Valid PAN Card and residential address proof.</li>
            <li>• Healthy credit score standing (typically 720+ preferred).</li>
          </ul>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Card Categories Evaluated</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Fuel & Everyday Grocery Cashback Cards.</li>
            <li>• Travel & Airline Miles Reward Cards.</li>
            <li>• Shopping & E-Commerce Discount Cards.</li>
            <li>• Premium Lounge Access & Privilege Cards.</li>
          </ul>
        </Card>
      </section>

      <FinanceDisclaimer />
    </main>
  );
}
