import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { Laptop, Landmark, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Verticals | SRYN Technology, FinServ & Recruitment",
  description:
    "Explore the three specialized business divisions of SRYN Management Pvt. Ltd. — Technology, Financial Services and Recruitment.",
};

export default function BusinessesPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary">BUSINESS VERTICALS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Specialized Businesses. One Trusted Organization.
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN Management operates three independent business divisions tailored for digital technology, financial assistance, and talent staffing.
        </p>
      </section>

      {/* Vertical 1: Technology */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">SRYN Technology</h2>
              <p className="text-xs text-sryn-blue font-semibold">Technology That Moves Your Business Forward</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/businesses/technology">
              <Button variant="outline" size="sm">
                Corporate Intro
              </Button>
            </Link>
            <a href={appUrls.technology} target="_blank" rel="noopener noreferrer">
              <Button variant="tech" size="sm">
                <span>Technology Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              SRYN Technology creates websites, custom software, digital platforms, and automated marketing solutions that help businesses establish, automate, and scale.
            </p>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Who It Is For</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Startups, SMBs, and enterprise organizations seeking digital transformation, custom business software, e-commerce stores, or performance marketing.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Services</h4>
            {[
              "Corporate & E-Commerce Web Development",
              "CRM, ERP & Business Admin Software",
              "Mobile Application Development (Android & iOS)",
              "SEO, Google Ads & Meta Paid Marketing",
              "WhatsApp Business API & Workflow Automation",
            ].map((s, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sryn-blue" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical 2: FinServ */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">SRYN FinServ</h2>
              <p className="text-xs text-sryn-red font-semibold">Financial Solutions Designed Around Your Needs</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/businesses/finserv">
              <Button variant="outline" size="sm">
                Corporate Intro
              </Button>
            </Link>
            <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer">
              <Button variant="finserv" size="sm">
                <span>FinServ Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              SRYN FinServ helps individuals and business owners understand and access suitable financial solutions through professional assistance, credit consultation, and structured documentation guidance.
            </p>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Who It Is For</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Salaried professionals, self-employed individuals, and business owners looking for professional loan consultation or credit guidance.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Services</h4>
            {[
              "Personal Loan Assistance & Guidance",
              "Business Loan & Working Capital Assistance",
              "Home Loan & Loan Against Property (LAP) Guidance",
              "Credit Score Consultation & Advisory",
              "Credit Card Assistance & Business Finance",
            ].map((s, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sryn-red" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical 3: Recruitment */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">SRYN Recruitment</h2>
              <p className="text-xs text-emerald-400 font-semibold">Connecting Talent With the Right Opportunities</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/businesses/recruitment">
              <Button variant="outline" size="sm">
                Corporate Intro
              </Button>
            </Link>
            <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
              <Button variant="recruitment" size="sm">
                <span>Recruitment Portal</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              SRYN Recruitment connects employers with qualified professionals across IT, Non-IT, and specialized business functions through job portal functionality and dedicated staffing pipelines.
            </p>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Who It Is For</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Employers seeking qualified talent and professionals searching for career opportunities across technology, finance, and business operations.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Services</h4>
            {[
              "IT & Software Professional Sourcing",
              "Non-IT, Sales & Executive Staffing",
              "Third-Party Client Requirement Management",
              "Candidate Job Portal & Profile Registration",
              "Employer Job Posting & Interview Coordination",
            ].map((s, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
