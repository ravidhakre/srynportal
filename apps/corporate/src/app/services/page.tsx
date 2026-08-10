import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { Laptop, Landmark, Users, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Services Overview | SRYN Management Pvt. Ltd.",
  description: "Browse categorized services provided across Technology, Financial Services, and Recruitment by SRYN Management.",
};

export default function ServicesPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary">OUR CAPABILITIES</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          What We Do
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Comprehensive services grouped under our three specialized business verticals.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Technology Services */}
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 text-left flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 w-fit rounded-xl bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20">
              <Laptop className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Technology Solutions</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="p-2 rounded bg-slate-950/60">Web & Custom App Development</li>
              <li className="p-2 rounded bg-slate-950/60">E-Commerce & Online Stores</li>
              <li className="p-2 rounded bg-slate-950/60">CRM, ERP & Business Admin Software</li>
              <li className="p-2 rounded bg-slate-950/60">SEO & Paid Digital Advertising</li>
              <li className="p-2 rounded bg-slate-950/60">WhatsApp Marketing & Automation</li>
            </ul>
          </div>
          <a href={appUrls.technology} target="_blank" rel="noopener noreferrer">
            <Button variant="tech" size="md" className="w-full flex items-center justify-center">
              <span>Go to SRYN Technology</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
        </Card>

        {/* Financial Services */}
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 text-left flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20">
              <Landmark className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Financial Solutions</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="p-2 rounded bg-slate-950/60">Personal Loan Assistance</li>
              <li className="p-2 rounded bg-slate-950/60">Business Loan & Finance Advisory</li>
              <li className="p-2 rounded bg-slate-950/60">Home Loan & LAP Assistance</li>
              <li className="p-2 rounded bg-slate-950/60">Credit Score Guidance & Consultation</li>
              <li className="p-2 rounded bg-slate-950/60">Credit Card & Corporate Credit</li>
            </ul>
          </div>
          <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer">
            <Button variant="finserv" size="md" className="w-full flex items-center justify-center">
              <span>Go to SRYN FinServ</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
        </Card>

        {/* Recruitment Services */}
        <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 text-left flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Recruitment & Staffing</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="p-2 rounded bg-slate-950/60">IT & Software Talent Hiring</li>
              <li className="p-2 rounded bg-slate-950/60">Non-IT & Executive Placement</li>
              <li className="p-2 rounded bg-slate-950/60">Third-Party Client Staffing</li>
              <li className="p-2 rounded bg-slate-950/60">Candidate Profile & Resume Vault</li>
              <li className="p-2 rounded bg-slate-950/60">Employer Job Portal Solutions</li>
            </ul>
          </div>
          <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
            <Button variant="recruitment" size="md" className="w-full flex items-center justify-center">
              <span>Go to SRYN Recruitment</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
        </Card>
      </div>
    </main>
  );
}
