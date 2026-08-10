import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { CorporateContactForm } from "../../components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact SRYN Management Pvt. Ltd. | Submit Enquiry",
  description: "Connect with SRYN Management corporate team for technology solutions, financial assistance, or recruitment staffing.",
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="danger">CONNECT WITH US</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Let's Talk</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Tell us what you need and our team will connect you with the appropriate SRYN business vertical.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">SRYN Management Headquarters</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Operating across India delivering Technology, Financial Services, and Recruitment solutions.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sryn-red shrink-0" />
                <span>contact@sryn.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sryn-blue shrink-0" />
                <span>+91 (Support Desk Available)</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Official Domain: www.sryn.online</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Verticals Support</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              For direct business portal access, visit <span className="text-slate-200">technology.sryn.online</span>, <span className="text-slate-200">finserv.sryn.online</span>, or <span className="text-slate-200">recruitment.sryn.online</span>.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <CorporateContactForm />
        </div>
      </div>
    </main>
  );
}
