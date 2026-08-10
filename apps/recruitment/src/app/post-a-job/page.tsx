import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { Plus, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Post a Job | SRYN Recruitment",
  description: "Submit a new job opening or staffing requirement to SRYN Recruitment.",
};

export default function PostAJobEntryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <section className="text-center space-y-4">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          JOB POSTING & STAFFING REQUISITION
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Post Your Job Opening</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Create a new job posting or submit a staffing requisition. Employer accounts undergo review before job publication.
        </p>
      </section>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 max-w-xl mx-auto text-center shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
          <Building2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Employer Portal Access</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Please log in to your Employer Account to create and manage job postings, or submit your company requirement to our recruitment team.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Link href="/employer/jobs/create" className="w-full">
            <Button size="md" className="w-full bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
              <Plus className="w-4 h-4 mr-2" /> Create Job Posting
            </Button>
          </Link>
          <Link href="/contact" className="w-full">
            <Button variant="outline" size="md" className="w-full border-slate-700">
              Submit Staffing Enquiry
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  );
}
