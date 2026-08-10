import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SRYN Technology | Corporate Division Overview",
  description: "Learn about SRYN Technology division providing websites, software, digital marketing, and business automation.",
};

export default function TechnologyIntroPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">TECHNOLOGY DIVISION</Badge>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Technology That Moves Your Business Forward
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          We create websites, software, digital platforms and marketing solutions that help businesses establish, automate and scale.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Division Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            SRYN Technology operates as the digital engineering and software development arm of SRYN Management Pvt. Ltd.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our specialized team develops corporate websites, e-commerce stores, custom CRM/ERP business systems, and performance marketing engines.
          </p>
          <div className="pt-2">
            <a href={appUrls.technology} target="_blank" rel="noopener noreferrer">
              <Button variant="tech" size="lg">
                <span>Visit SRYN Technology Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Service Capabilities</h3>
          {[
            "Web Development (Corporate, Landing pages, Custom Web Apps)",
            "E-Commerce Solutions (Online stores, Payment Gateways)",
            "Software Development (CRM, ERP, Admin Panels)",
            "Mobile Applications (Android, iOS, Cross-platform)",
            "Digital Marketing (SEO, Google Ads, Meta Ads, Social Media)",
            "Business Automation (API Integrations, WhatsApp Marketing)",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-sryn-blue shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
