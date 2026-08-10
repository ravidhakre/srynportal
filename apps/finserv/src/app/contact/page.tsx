import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { ApplyForm } from "../../components/apply-form";
import { Mail, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact SRYN FinServ | Financial Assistance & Support",
  description: "Connect with SRYN FinServ financial consultants for loan assistance, credit consultation, and requirement evaluation.",
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">GET IN TOUCH</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Contact SRYN FinServ</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Discuss your personal or business financial requirements with our assistance team.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">SRYN FinServ Office</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Financial services, loan assistance, and credit consultation division of SRYN Management Pvt. Ltd.
            </p>
            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sryn-red shrink-0" />
                <span>finserv@sryn.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Landmark className="w-5 h-5 text-sryn-red shrink-0" />
                <span>Domain: finserv.sryn.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ApplyForm />
        </div>
      </div>
    </main>
  );
}
