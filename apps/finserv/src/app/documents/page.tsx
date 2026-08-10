import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { FinanceDisclaimer } from "../../components/disclaimer";
import { FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Required Document Guidance | SRYN FinServ",
  description: "Common document guidance for personal loans, business loans, home loans, and credit evaluation.",
};

const documentCategories = [
  {
    category: "Identity & Address Proof",
    items: ["PAN Card (Mandatory)", "Aadhaar Card / Passport / Voter ID", "Current Utility Bill / Rental Agreement"],
  },
  {
    category: "Income Proof (Salaried)",
    items: ["Latest 3 Months Salary Slips", "Latest 6 Months Bank Statement (Salary Account)", "Form 16 for past 2 financial years"],
  },
  {
    category: "Income & Business Proof (Self-Employed / Business)",
    items: ["GST Registration Certificate & GST Returns", "ITR with Computation & Audit Reports (2 Years)", "Latest 12 Months Current Bank Account Statements"],
  },
  {
    category: "Property Documents (Home Loan / LAP)",
    items: ["Sale Deed / Title Deed chain", "Approved Building Plan & Construction Estimate", "Encumbrance Certificate & Property Tax Receipts"],
  },
];

export default function DocumentsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">DOCUMENTATION GUIDANCE</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Required Document Guidance</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Standard documentation required for evaluating loan eligibility and credit product applications.
        </p>
      </section>

      {/* Security callout */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
        <ShieldAlert className="w-5 h-5 text-sryn-red shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Document Privacy Policy:</strong> SRYN FinServ does not require sensitive document uploads during general website browsing. Documents are only requested during legitimate application evaluation workflows through encrypted private storage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documentCategories.map((docCat, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-8 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-sryn-red" />
              {docCat.category}
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {docCat.items.map((item, iidx) => (
                <li key={iidx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sryn-red shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <FinanceDisclaimer />
    </main>
  );
}
