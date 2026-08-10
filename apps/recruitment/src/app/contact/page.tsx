"use client";

import React from "react";
import { Badge, Card, Button, FormInput } from "@sryn/ui";
import { Mail, Users, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          GET IN TOUCH
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Contact SRYN Recruitment</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Discuss your staffing needs, employer partnerships, or candidate application status with our recruitment team.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">SRYN Recruitment Office</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Talent acquisition, staffing, and placement division of SRYN Management Pvt. Ltd.
            </p>
            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>recruitment@sryn.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Domain: recruitment.sryn.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Card className="bg-slate-900 border-slate-800 p-8 space-y-4 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
            <form className="space-y-4">
              <FormInput label="Your Full Name *" placeholder="Rajesh Kumar" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput label="Email Address *" type="email" placeholder="rajesh@example.com" required />
                <FormInput label="Mobile Number *" type="tel" placeholder="+91 9876543210" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">I am a *</label>
                <select className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white">
                  <option value="CANDIDATE">Candidate / Job Seeker</option>
                  <option value="EMPLOYER">Employer / Hiring Manager</option>
                  <option value="RECRUITER">Recruiter / Staff</option>
                  <option value="GENERAL">General Inquiry</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Message / Requirement *</label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your requirement..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button type="button" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}
