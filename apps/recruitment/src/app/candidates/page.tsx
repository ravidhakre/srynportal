import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { UserCheck, FileText, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Candidate Career Services | SRYN Recruitment",
  description: "Candidate profile registration, resume upload, job discovery, and application tracking.",
};

export default function CandidatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          FOR JOB SEEKERS
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Build Your Career Path</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Create your profile, upload your resume securely, and apply to verified IT and Non-IT job openings.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link href="/jobs">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-xl shadow-emerald-600/20 text-white">
              <span>Find Jobs Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <UserCheck className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-lg">Master Profile</h3>
          <p className="text-xs text-slate-400">Keep your experience, skills, and salary expectations updated.</p>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <FileText className="w-6 h-6 text-sky-400" />
          <h3 className="font-bold text-white text-lg">Secure Resume Upload</h3>
          <p className="text-xs text-slate-400">Your resume is stored securely in private storage and shared only with authorized recruiters.</p>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <Briefcase className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white text-lg">Application Tracker</h3>
          <p className="text-xs text-slate-400">Track candidate status from submission to interview and final placement.</p>
        </Card>
      </div>
    </main>
  );
}
