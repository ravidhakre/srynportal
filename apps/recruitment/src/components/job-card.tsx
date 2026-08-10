import React from "react";
import Link from "next/link";
import { Badge, Card, Button } from "@sryn/ui";
import { Building2, MapPin, Briefcase, ArrowRight } from "lucide-react";
import type { JobPostingDocument } from "@sryn/database";

export function JobCard({ job }: { job: JobPostingDocument }) {
  const salaryText =
    job.salaryMin && job.salaryMax
      ? `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()} / year`
      : "Salary: Not disclosed";

  return (
    <Card className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-emerald-500/50 transition-colors group text-left">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
            </h3>
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
              <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{job.companyName}</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-slate-800 text-slate-300 font-mono text-[10px]">
            {job.employmentType.replace(/_/g, " ")}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium pt-1">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Briefcase className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>
              {job.experienceYearsMin} - {job.experienceYearsMax} Yrs
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono">
            {job.workMode}
          </span>
        </div>

        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{job.description}</p>

        {job.skills && job.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {job.skills.slice(0, 4).map((sk, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-mono">
                {sk}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className="text-[10px] text-slate-500 self-center">+{job.skills.length - 4} more</span>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
        <div className="text-xs font-semibold text-slate-300 font-mono">{salaryText}</div>
        <div className="flex items-center space-x-2">
          <Link href={`/jobs/${job.slug}`}>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs text-white">
              <span>View Job</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
