import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { Building2, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Employer Hiring Solutions | SRYN Recruitment",
  description: "Hire top IT and non-IT talent through SRYN Recruitment job portal and managed staffing services.",
};

export default function ForEmployersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          FOR EMPLOYERS
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Accelerate Talent Acquisition with Technology & Experienced Recruiters
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Whether you need to post individual vacancies or require managed bulk hiring, SRYN Recruitment streamlines candidate sourcing and screening.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/post-a-job">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-xl shadow-emerald-600/20 text-white">
              <span>Post a Job Opening</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <Users className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-lg">Screened Candidates</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Every candidate submission is pre-screened for skills, experience, and availability.</p>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <Building2 className="w-6 h-6 text-sky-400" />
          <h3 className="font-bold text-white text-lg">Transparent Processing</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Track application progress and candidate interview schedules through your employer portal.</p>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <CheckCircle2 className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white text-lg">Bulk Staffing Ready</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Scale recruitment rapidly across tech and non-tech operational departments.</p>
        </Card>
      </section>
    </main>
  );
}
