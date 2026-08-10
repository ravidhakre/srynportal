import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing Plans & Project Estimates | SRYN Technology",
  description: "Explore project categories and request tailored quotes for web development, software tools, and digital marketing.",
};

const pricingCategories = [
  {
    title: "Web Development",
    desc: "Corporate websites, landing pages, and web applications.",
    deliverables: ["Responsive UI/UX", "SEO-Ready Architecture", "Contact & Form Integration", "Domain & Hosting Guidance"],
  },
  {
    title: "E-Commerce & Portals",
    desc: "Custom storefronts, payment gateway integration, and stock management.",
    deliverables: ["Product Catalog", "Razorpay / UPI Integration", "Order Notifications", "Customer Dashboard"],
  },
  {
    title: "Software & Custom CRM",
    desc: "Tailored internal tools, admin portals, and workflow automation.",
    deliverables: ["Role-Based Access Control", "Lead Management Pipeline", "Cloud Database Storage", "API Webhooks"],
  },
  {
    title: "Performance Digital Marketing",
    desc: "Search engine optimization, Google Ads, Meta Ads, and social media.",
    deliverables: ["Technical & On-Page SEO", "PPC Campaign Setup", "Conversion Tracking", "Monthly Performance Reports"],
  },
];

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">PROJECT PRICING</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Tailored Project Pricing</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Every project is scoped to your specific business requirements. Request a custom quote for transparent pricing.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pricingCategories.map((cat, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              <p className="text-xs text-slate-400">{cat.desc}</p>
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Standard Scope</span>
                {cat.deliverables.map((item, didx) => (
                  <div key={didx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sryn-blue" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <Link href="/start-project">
                <Button variant="tech" size="md" className="w-full flex items-center justify-center">
                  <span>Request a Custom Quote</span>
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
