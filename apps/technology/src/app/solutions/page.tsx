import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions | SRYN Technology",
  description: "Explore tailored business solutions: Customer CRM, E-Commerce Portals, Lead Management, and Custom Admin Software.",
};

const solutionsList = [
  {
    title: "Customer & Lead Management CRM",
    problem: "Scattered lead inquiries across WhatsApp, email, and forms leading to missed sales follow-ups.",
    solution: "Centralized lead capture portal with automated status tracking, assignment rules, and activity logs.",
    features: ["Automated Lead Import", "Status Pipeline (NEW -> WON)", "Executive Assignment", "Follow-up Scheduling"],
  },
  {
    title: "E-Commerce & Online Retail Portals",
    problem: "High commission fees on third-party platforms and lack of custom branding.",
    solution: "Custom online storefronts with integrated payment gateways, stock management, and customer accounts.",
    features: ["Product Catalog", "Razorpay/UPI Integration", "Order Tracking", "WhatsApp Order Alerts"],
  },
  {
    title: "Enterprise Custom Admin Systems",
    problem: "Manual spreadsheet operations creating errors and lack of role-based security.",
    solution: "Secure, custom web admin panels powered by Next.js and Firebase RBAC.",
    features: ["Role-Based Access Control", "Data Filtering & Export", "Audit Logging", "Real-Time Cloud Storage"],
  },
];

export default function SolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">TAILORED SOLUTIONS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Business Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Custom software solutions engineered to solve operational bottlenecks and accelerate business efficiency.
        </p>
      </section>

      <div className="space-y-8">
        {solutionsList.map((sol, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-8 rounded-3xl space-y-6">
            <div className="flex items-center space-x-3 text-sryn-blue">
              <Layers className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">{sol.title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-sryn-red uppercase">Problem</span>
                  <p className="text-xs text-slate-300">{sol.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-sryn-blue uppercase">Solution</span>
                  <p className="text-xs text-slate-300">{sol.solution}</p>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Features</span>
                {sol.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <Link href="/start-project">
                <Button variant="tech" size="sm">
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
