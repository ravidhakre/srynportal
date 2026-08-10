"use client";

import React, { useState } from "react";
import { Button, Card, Badge } from "@sryn/ui";
import { Laptop, Landmark, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getAppUrls } from "@sryn/config/env";

export function BusinessSwitcher() {
  const [activeTab, setActiveTab] = useState<"tech" | "finserv" | "recruitment">("tech");
  const appUrls = getAppUrls();

  const businessData = {
    tech: {
      title: "SRYN Technology",
      tagline: "Technology That Moves Your Business Forward",
      url: appUrls.technology,
      color: "border-sryn-blue text-sryn-blue",
      badgeVariant: "tech" as const,
      btnVariant: "tech" as const,
      description:
        "We engineer robust websites, enterprise software, e-commerce platforms, and digital marketing strategies that automate operations and accelerate growth.",
      features: [
        "Web & Custom Application Development",
        "E-Commerce & Payment Integration",
        "CRM & ERP Business Software",
        "SEO & Paid Digital Marketing (Google / Meta Ads)",
        "WhatsApp Marketing & Business Automation",
      ],
    },
    finserv: {
      title: "SRYN FinServ",
      tagline: "Financial Solutions Designed Around Your Needs",
      url: appUrls.finserv,
      color: "border-sryn-red text-sryn-red",
      badgeVariant: "danger" as const,
      btnVariant: "finserv" as const,
      description:
        "Professional financial assistance and credit consultation guiding individuals and business owners toward suitable loan and financial solutions.",
      features: [
        "Personal Loan Assistance",
        "Business Loan & Working Capital Guidance",
        "Home Loan & Property Loan Support",
        "Credit Consultation & Guidance",
        "Financial Solution Advisory",
      ],
    },
    recruitment: {
      title: "SRYN Recruitment",
      tagline: "Connecting Talent With the Right Opportunities",
      url: appUrls.recruitment,
      color: "border-emerald-500 text-emerald-400",
      badgeVariant: "success" as const,
      btnVariant: "recruitment" as const,
      description:
        "End-to-end recruitment, staffing, and talent placement portal bridging skilled IT and Non-IT candidates with forward-thinking employers.",
      features: [
        "IT & Technical Specialized Recruitment",
        "Non-IT & Executive Staffing Solutions",
        "Third-Party Bulk Hiring & Client Requirements",
        "Verified Candidate & Employer Portals",
        "Interview & Placement Management",
      ],
    },
  };

  const current = businessData[activeTab];

  return (
    <div className="w-full space-y-8">
      {/* Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto">
        <button
          onClick={() => setActiveTab("tech")}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
            activeTab === "tech"
              ? "bg-sryn-navy border border-sryn-blue/40 text-white shadow-lg shadow-sryn-blue/10"
              : "text-slate-400 hover:text-white hover:bg-slate-800/50"
          }`}
        >
          <Laptop className="w-4 h-4 text-sryn-blue" />
          <span>Technology</span>
        </button>

        <button
          onClick={() => setActiveTab("finserv")}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
            activeTab === "finserv"
              ? "bg-sryn-navy border border-sryn-red/40 text-white shadow-lg shadow-sryn-red/10"
              : "text-slate-400 hover:text-white hover:bg-slate-800/50"
          }`}
        >
          <Landmark className="w-4 h-4 text-sryn-red" />
          <span>FinServ</span>
        </button>

        <button
          onClick={() => setActiveTab("recruitment")}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
            activeTab === "recruitment"
              ? "bg-sryn-navy border border-emerald-500/40 text-white shadow-lg shadow-emerald-500/10"
              : "text-slate-400 hover:text-white hover:bg-slate-800/50"
          }`}
        >
          <Users className="w-4 h-4 text-emerald-400" />
          <span>Recruitment</span>
        </button>
      </div>

      {/* Active Tab Showcase Card */}
      <Card className="bg-slate-900/90 border-slate-800 text-white p-8 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <Badge variant={current.badgeVariant}>{current.tagline}</Badge>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">{current.title}</h3>
            <p className="text-slate-300 text-base leading-relaxed">{current.description}</p>
            <div className="pt-4">
              <a href={current.url} target="_blank" rel="noopener noreferrer">
                <Button variant={current.btnVariant} size="lg" className="inline-flex items-center">
                  <span>Visit {current.title} Portal</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Core Capabilities</h4>
            {current.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sryn-blue shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
