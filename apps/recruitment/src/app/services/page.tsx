import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import Link from "next/link";
import { Users, Layers, Award, Building2, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Recruitment Services | IT & Non-IT Staffing | SRYN Recruitment",
  description: "IT recruitment, non-IT staffing, bulk hiring, permanent placement, and executive search services.",
};

const services = [
  { title: "IT Recruitment & Tech Staffing", desc: "Specialized sourcing for software developers, cloud engineers, DevOps, and tech leaders.", icon: Users },
  { title: "Non-IT & Executive Staffing", desc: "Talent acquisition for sales, marketing, operations, finance, and administrative roles.", icon: Building2 },
  { title: "Bulk Hiring Solutions", desc: "Rapid volume hiring and candidate screening for scaling organizations.", icon: Layers },
  { title: "Third-Party Recruitment", desc: "Dedicated end-to-end recruitment management and employer candidate submission.", icon: Award },
  { title: "Permanent Hiring", desc: "Direct-hire placements with long-term retention assessment.", icon: UserCheck },
  { title: "Contract Staffing", desc: "Flexible project-based and seasonal contract staffing.", icon: ShieldCheck },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          RECRUITMENT SERVICES
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Tailored Hiring Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          From single specialized roles to volume staffing requirements, SRYN Recruitment connects employers with relevant candidates.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
            <Link href="/post-a-job" className="text-xs font-semibold text-emerald-400 flex items-center hover:underline pt-2">
              <span>Discuss Hiring Need</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
