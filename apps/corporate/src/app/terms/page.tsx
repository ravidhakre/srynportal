import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Terms of Service | SRYN Management Pvt. Ltd.",
  description: "Terms and conditions governing the use of SRYN Management websites and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary">TERMS & CONDITIONS</Badge>
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          Welcome to SRYN Management Pvt. Ltd. By accessing or using www.sryn.online or any associated business portal, you agree to comply with and be bound by these Terms of Service.
        </p>

        <h3 className="text-lg font-bold text-white">1. Service Scope</h3>
        <p>
          SRYN Management Pvt. Ltd. operates across Technology, Financial Services and Recruitment. Each business vertical maintains specific service agreements and operational procedures.
        </p>

        <h3 className="text-lg font-bold text-white">2. User Conduct</h3>
        <p>
          Users must provide accurate information when submitting forms or creating accounts. Misleading submissions, unauthorized access attempts, or violation of security rules are strictly prohibited.
        </p>

        <h3 className="text-lg font-bold text-white">3. Intellectual Property</h3>
        <p>
          All content, logos, trademarks, and code on www.sryn.online belong to SRYN Management Pvt. Ltd. and are protected by applicable intellectual property laws.
        </p>
      </div>
    </main>
  );
}
