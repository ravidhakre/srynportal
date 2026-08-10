import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { ApplyForm } from "../../components/apply-form";
import { FinanceDisclaimer } from "../../components/disclaimer";

export const metadata: Metadata = {
  title: "Check Your Requirement | Financial Assistance | SRYN FinServ",
  description: "Tell us about your personal loan, business loan, home loan, LAP, or credit consultation requirement.",
};

export default function ApplyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <section className="text-center space-y-4">
        <Badge variant="danger">FINANCIAL REQUIREMENT</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Tell Us About Your Requirement</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Share your personal or business financial requirements. Our consultation team will evaluate your profile and guide you through available options.
        </p>
      </section>

      <ApplyForm />

      <FinanceDisclaimer />
    </main>
  );
}
