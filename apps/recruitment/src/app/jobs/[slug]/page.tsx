import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type JobPostingDocument } from "@sryn/database";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, MapPin, ArrowLeft, Send } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | SRYN Recruitment`,
    description: "Job opportunity details and application entry.",
  };
}

async function getJobBySlug(slug: string): Promise<JobPostingDocument | null> {
  try {
    const db = getFirebaseDb();
    const q = query(
      collection(db, COLLECTIONS.JOBS),
      where("slug", "==", slug),
      where("status", "==", "PUBLISHED")
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return snap.docs[0]?.data() as JobPostingDocument;
  } catch (err) {
    console.warn("Error fetching job:", err);
    return null;
  }
}

export default async function SingleJobPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const salaryText =
    job.salaryMin && job.salaryMax
      ? `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()} / year`
      : "Salary: Not disclosed";

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <Link href="/jobs">
        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Jobs
        </Button>
      </Link>

      {/* Header Card */}
      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              {job.department}
            </Badge>
            <h1 className="text-3xl font-extrabold text-white">{job.title}</h1>
            <div className="flex items-center space-x-2 text-sm text-slate-300 font-semibold">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>{job.companyName}</span>
            </div>
          </div>

          <Link href={`/candidate/applications?applyJobId=${job.jobId || job.id}`}>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-xl shadow-emerald-600/20 text-white">
              <Send className="w-4 h-4 mr-2" /> Apply Now
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Location</span>
            <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {job.location}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Work Mode</span>
            <span className="font-semibold text-white mt-0.5 block">{job.workMode}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Experience</span>
            <span className="font-semibold text-white mt-0.5 block">
              {job.experienceYearsMin} - {job.experienceYearsMax} Yrs
            </span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Salary Range</span>
            <span className="font-semibold text-white font-mono mt-0.5 block">{salaryText}</span>
          </div>
        </div>
      </Card>

      {/* Description & Responsibilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Job Description</h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{job.description}</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Responsibilities</h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{job.responsibilities}</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Requirements</h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{job.requirements}</p>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
            <h4 className="text-base font-bold text-white">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 space-y-3 text-xs text-slate-400">
            <h4 className="text-base font-bold text-white">Company Profile</h4>
            <p className="font-semibold text-slate-200">{job.companyName}</p>
            <p>Industry: {job.industry}</p>
            <p>Location: {job.location}</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
