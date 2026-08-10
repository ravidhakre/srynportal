import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | SRYN Technology",
  description: "Privacy policy of SRYN Technology governing data collection, project inquiries, and client information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="tech">PRIVACY POLICY</Badge>
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          SRYN Technology ("we", "our") respects the privacy of clients, website visitors, and project submitters on technology.sryn.online.
        </p>

        <h3 className="text-lg font-bold text-white">1. Project Data Collection</h3>
        <p>
          We collect project details, contact names, email addresses, phone numbers, and company information submitted through our Start Your Project and Contact forms.
        </p>

        <h3 className="text-lg font-bold text-white">2. Data Security & Confidentially</h3>
        <p>
          Project specifications, source code, and database credentials provided for development retain strict confidentiality and are protected by Firebase security rules and enterprise encryption.
        </p>
      </div>
    </main>
  );
}
