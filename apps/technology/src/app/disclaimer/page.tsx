import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Service Disclaimer | SRYN Technology",
  description: "Official service and performance disclaimer for SRYN Technology.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="tech">SERVICE DISCLAIMER</Badge>
        <h1 className="text-3xl font-bold text-white">Service Disclaimer</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          SRYN Technology provides custom web development, software engineering, and digital marketing services.
        </p>

        <h3 className="text-lg font-bold text-white">1. Marketing & Search Rankings</h3>
        <p>
          We do not guarantee specific search engine rankings (#1 spot) or exact ad ROI, as third-party platform algorithms (Google, Meta) remain outside our control. We execute white-hat SEO and performance marketing best practices.
        </p>
      </div>
    </main>
  );
}
