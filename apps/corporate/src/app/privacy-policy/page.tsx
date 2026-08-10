import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | SRYN Management Pvt. Ltd.",
  description: "Privacy Policy of SRYN Management Pvt. Ltd. governing data privacy and user information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary">LEGAL INFORMATION</Badge>
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
        <p>
          SRYN Management Pvt. Ltd. ("Company", "we", "us", or "our") respects your privacy and is committed to protecting personal data collected through our corporate website (www.sryn.online) and affiliated business portals.
        </p>

        <h3 className="text-lg font-bold text-white">1. Information Collection</h3>
        <p>
          We collect personal information that you voluntarily submit through enquiry forms, registration forms, or contact channels. This includes your name, email address, mobile number, company name, and specific enquiry details.
        </p>

        <h3 className="text-lg font-bold text-white">2. Use of Information</h3>
        <p>
          We use personal data to respond to enquiries, deliver requested technology, financial assistance, or recruitment services, send operational notifications, and comply with legal requirements.
        </p>

        <h3 className="text-lg font-bold text-white">3. Data Protection & Security</h3>
        <p>
          We implement secure encryption and strict role-based access control (RBAC). Sensitive financial documents and candidate resumes are kept in restricted, non-public storage vaults.
        </p>

        <h3 className="text-lg font-bold text-white">4. Contact Us</h3>
        <p>
          If you have questions regarding this Privacy Policy, please contact us at <span className="text-slate-100 font-mono">contact@sryn.online</span>.
        </p>
      </div>
    </main>
  );
}
