import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type JobPostingDocument } from "@sryn/database";
import { JobCard } from "../../components/job-card";
import { Search, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Browse All Job Openings | SRYN Recruitment",
  description: "Search and apply for IT, Non-IT, engineering, sales, marketing, and finance job opportunities.",
};

async function getPublishedJobs(searchParams?: { q?: string; location?: string }): Promise<JobPostingDocument[]> {
  try {
    const db = getFirebaseDb();
    const q = query(
      collection(db, COLLECTIONS.JOBS),
      where("status", "==", "PUBLISHED")
    );
    const snap = await getDocs(q);
    let list: JobPostingDocument[] = [];
    snap.forEach((doc) => list.push(doc.data() as JobPostingDocument));

    if (searchParams?.q) {
      const keyword = searchParams.q.toLowerCase();
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(keyword) ||
          j.companyName.toLowerCase().includes(keyword) ||
          j.description.toLowerCase().includes(keyword) ||
          j.skills.some((s) => s.toLowerCase().includes(keyword))
      );
    }

    if (searchParams?.location) {
      const loc = searchParams.location.toLowerCase();
      list = list.filter((j) => j.location.toLowerCase().includes(loc));
    }

    return list;
  } catch (err) {
    console.warn("Could not fetch jobs:", err);
    return [];
  }
}

interface Props {
  searchParams: Promise<{ q?: string; location?: string }>;
}

export default async function JobsPortalPage({ searchParams }: Props) {
  const params = await searchParams;
  const jobs = await getPublishedJobs(params);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <section className="space-y-4">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          JOB PORTAL
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Explore Career Opportunities</h1>

        {/* Filter bar */}
        <form action="/jobs" method="GET" className="bg-slate-900 border border-slate-800 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input
              name="q"
              defaultValue={params.q || ""}
              placeholder="Search by title, skill, or keyword..."
              className="w-full h-11 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="relative">
            <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input
              name="location"
              defaultValue={params.location || ""}
              placeholder="Filter by city..."
              className="w-full h-11 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <Button type="submit" size="lg" className="w-full h-11 bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            Filter Jobs
          </Button>
        </form>
      </section>

      {jobs.length === 0 ? (
        <Card className="bg-slate-900 border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-2xl">
          <Briefcase className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Matching Jobs Found</h3>
          <p className="text-slate-400 text-sm">
            Try adjusting your search keywords or location filters.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id || job.jobId} job={job} />
          ))}
        </div>
      )}
    </main>
  );
}
