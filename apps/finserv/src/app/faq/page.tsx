import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";

export const metadata: Metadata = {
  title: "Financial FAQs | SRYN FinServ",
  description: "Answers to frequently asked questions about loans, credit consultation, documents, and application timelines.",
};

const finservFaqs = [
  { q: "How does the requirement submission process work?", a: "Submit your requirement through our Check Your Requirement page. A FinServ consultant reviews your basic profile and contacts you to discuss options." },
  { q: "Does submitting a requirement guarantee loan approval?", a: "No. Submitting an enquiry or requirement does not guarantee approval or sanction. Final approval is subject to lender terms, documentation verification, and credit evaluation." },
  { q: "What documents may be required for loan applications?", a: "Standard documents include PAN card, address proof, bank statements, salary slips (salaried), or GST/ITR filings (self-employed/business)." },
  { q: "How long does processing take?", a: "Timelines depend on the product type, lender evaluation policies, and document verification completeness." },
  { q: "Can credit consultation improve my credit score guaranteed?", a: "No ethical consultation guarantees score changes. We provide guidance on healthy credit habits, credit utilization, and error checking." },
  { q: "Is SRYN FinServ a direct lender or bank?", a: "SRYN FinServ provides professional financial assistance and consultation to guide applicants toward suitable third-party financial products and lenders." },
];

export default function FaqPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4">
        <Badge variant="danger">FINANCIAL QUESTIONS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Clear answers regarding loan assistance, credit consultation, documentation, and compliance.
        </p>
      </section>

      <div className="space-y-4">
        {finservFaqs.map((faq, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-2">
            <h3 className="font-bold text-white text-base">{faq.q}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
          </Card>
        ))}
      </div>

      <FinanceDisclaimer />
    </main>
  );
}
