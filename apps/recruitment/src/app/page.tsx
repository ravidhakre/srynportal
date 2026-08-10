import Link from "next/link";
import { Button, Card, Badge } from "@sryn/ui";
import { collection, getDocs, query, where, limit as limitFn, getFirebaseDb, COLLECTIONS, type JobPostingDocument } from "@sryn/database";
import { JobCard } from "../components/job-card";
import {
  Users,
  Search,
  Briefcase,
  MapPin,
  Layers,
  Award,
} from "lucide-react";

async function getFeaturedJobs(): Promise<JobPostingDocument[]> {
  try {
    const db = getFirebaseDb();
    const q = query(
      collection(db, COLLECTIONS.JOBS),
      where("status", "==", "PUBLISHED"),
      limitFn(6)
    );
    const snap = await getDocs(q);
    const list: JobPostingDocument[] = [];
    snap.forEach((doc) => list.push(doc.data() as JobPostingDocument));
    return list;
  } catch (err) {
    console.warn("Could not fetch published jobs:", err);
    return [];
  }
}

export default async function RecruitmentHomePage() {
  const jobs = await getFeaturedJobs();

  return (
    <main className="space-y-24 pb-24 text-left">
      {/* 2. HERO & JOB SEARCH HERO */}
      <section className="relative overflow-hidden pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <span>SRYN RECRUITMENT</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.1]">
            Find Talent. Find Opportunities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Build Better Teams.
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connecting employers with relevant talent across IT, Non-IT, staffing and specialized recruitment requirements.
          </p>

          {/* Prominent Search Interface */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 text-left">
            <form action="/jobs" method="GET" className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2">
                <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                <input
                  name="q"
                  placeholder="Job title, skills, or keywords..."
                  className="w-full h-11 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                <input
                  name="location"
                  placeholder="Location / City..."
                  className="w-full h-11 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-11 bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-lg shadow-emerald-600/20 text-white">
                <Search className="w-4 h-4 mr-1.5" /> Search Jobs
              </Button>
            </form>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="font-semibold text-slate-300">Popular Categories:</span>
              {["React Developer", "Java Engineer", "Sales Executive", "HR Specialist", "Accountant"].map((tag, idx) => (
                <Link key={idx} href={`/jobs?q=${encodeURIComponent(tag)}`} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:text-white transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED OPPORTUNITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              FEATURED OPPORTUNITIES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Explore Latest Openings</h2>
          </div>
          <Link href="/jobs">
            <Button variant="outline" size="sm" className="border-slate-700 text-white">
              View All Jobs →
            </Button>
          </Link>
        </div>

        {jobs.length === 0 ? (
          <Card className="bg-slate-900 border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-2xl">
            <Briefcase className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">No Jobs Available At The Moment</h3>
            <p className="text-slate-400 text-sm">
              Our hiring partners are updating their active requisitions. Employers can post new job openings now.
            </p>
            <div className="pt-2">
              <Link href="/post-a-job">
                <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                  Post a Job Opening
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id || job.jobId} job={job} />
            ))}
          </div>
        )}
      </section>

      {/* 5. JOB CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="secondary">JOB CATEGORIES</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Hire Across Specializations</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "IT & Software", slug: "it-software" },
            { title: "Sales & Business", slug: "sales" },
            { title: "Marketing & Growth", slug: "marketing" },
            { title: "Human Resources", slug: "hr" },
            { title: "Finance & Accounts", slug: "finance" },
            { title: "Operations", slug: "operations" },
          ].map((cat, idx) => (
            <Link key={idx} href={`/categories/${cat.slug}`}>
              <Card className="bg-slate-900 border-slate-800 p-5 space-y-2 hover:border-emerald-500/50 transition-colors text-center">
                <h4 className="font-bold text-white text-sm">{cat.title}</h4>
                <span className="text-[11px] text-emerald-400 font-semibold">Explore →</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. RECRUITMENT SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">HIRING SOLUTIONS</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Recruitment Services for Employers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">IT & Non-IT Recruitment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Permanent and contract talent acquisition across software engineering, sales, marketing, operations, and finance roles.
            </p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
            <div className="p-3 w-fit rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Bulk Hiring & Staffing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scale operations rapidly with structured bulk hiring, seasonal staffing, and volume candidate screening.
            </p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Third-Party & Executive Search</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized candidate sourcing, executive search, and end-to-end third-party recruitment management.
            </p>
          </Card>
        </div>
      </section>

      {/* 8. FOR EMPLOYERS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Hiring for Your Company?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Post job openings directly or partner with SRYN Recruitment for dedicated candidate sourcing and screening.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/post-a-job">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-xl shadow-emerald-600/20 text-white">
                Post Your Job Opening Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
