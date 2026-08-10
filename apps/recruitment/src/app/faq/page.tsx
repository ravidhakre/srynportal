import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Recruitment FAQs | SRYN Recruitment",
  description: "Frequently asked questions for candidates, job seekers, employers, and hiring managers.",
};

const recruitmentFaqs = [
  { q: "How do candidates apply for open job postings?", a: "Browse open jobs on /jobs, click Apply Now on any active requisition, and submit your resume." },
  { q: "Are candidate resumes kept private?", a: "Yes. Candidate resumes are stored in encrypted private storage (/private/recruitment/candidates/...) and only accessible to authorized recruiters and assigned employers." },
  { q: "How do employers post new jobs?", a: "Employers can register or log in to post job requisitions. Created jobs enter PENDING_REVIEW status for moderation." },
  { q: "Does SRYN Recruitment offer bulk hiring?", a: "Yes. We offer IT, Non-IT, volume staffing, and third-party recruitment services for enterprise clients." },
  { q: "Are placements or job offers guaranteed?", a: "No. SRYN Recruitment facilitates candidate sourcing, screening, and employer submissions transparently without fake placement claims." },
];

export default function FaqPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          RECRUITMENT FAQS
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Answers regarding candidate applications, resume privacy, employer job postings, and staffing solutions.
        </p>
      </section>

      <div className="space-y-4">
        {recruitmentFaqs.map((faq, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-2">
            <h3 className="font-bold text-white text-base">{faq.q}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
