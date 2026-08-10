import Link from "next/link";
import { Button, Badge, HeroSlider, type SlideData } from "@sryn/ui";
import { collection, getDocs, query, where, limit as limitFn, getFirebaseDb, COLLECTIONS, type JobPostingDocument } from "@sryn/database";
import { JobCard } from "../components/job-card";
import {
  Search,
  Briefcase,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  UserCheck,
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

  const recSlides: SlideData[] = [
    {
      id: 1,
      image: "/images/hero_1.jpg",
      badgeText: "SRYN RECRUITMENT & TALENT SOLUTIONS",
      badgeBorderClass: "border-emerald-500/60",
      badgeTextClass: "text-emerald-400",
      title: "Find Talent.",
      highlightText: "Build Better Teams.",
      titleEnd: "Shape Careers.",
      description:
        "Connecting top employers with vetted candidates across IT, Non-IT, staffing, executive search, and specialized corporate roles.",
      primaryCtaText: "Explore Open Jobs",
      primaryCtaHref: "/jobs",
      secondaryCtaText: "Hire Talent",
      secondaryCtaHref: "/hire-talent",
      buttonVariant: "recruitment",
      accentGlowClass: "bg-emerald-500/20",
    },
    {
      id: 2,
      image: "/images/hero_2.jpg",
      badgeText: "IT & NON-IT STAFFING",
      badgeBorderClass: "border-teal-400/60",
      badgeTextClass: "text-teal-300",
      title: "Specialized Hiring.",
      highlightText: "Vetted Candidates.",
      titleEnd: "Fast Onboarding.",
      description:
        "Custom recruitment strategies for startups, growing SMEs, and enterprise corporations seeking qualified manpower.",
      primaryCtaText: "Post a Requirement",
      primaryCtaHref: "/hire-talent",
      secondaryCtaText: "For Employers",
      secondaryCtaHref: "/employer",
      buttonVariant: "primary",
      accentGlowClass: "bg-teal-500/20",
    },
    {
      id: 3,
      image: "/images/hero_3.jpg",
      badgeText: "CANDIDATE CAREER ADVANCEMENT",
      badgeBorderClass: "border-cyan-400/60",
      badgeTextClass: "text-cyan-300",
      title: "Accelerate Your",
      highlightText: "Career Path.",
      titleEnd: "Direct Placement.",
      description:
        "Upload your resume, search verified job opportunities, and connect directly with hiring managers across top industries.",
      primaryCtaText: "Submit Resume",
      primaryCtaHref: "/candidate",
      secondaryCtaText: "Search Jobs",
      secondaryCtaHref: "/jobs",
      buttonVariant: "recruitment",
      accentGlowClass: "bg-cyan-500/20",
    },
  ];

  return (
    <main className="space-y-20 pb-24 text-slate-900 bg-white">
      {/* 1. HERO SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-8">
        <HeroSlider slides={recSlides} />

        {/* PROMINENT JOB SEARCH OVERLAY CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xl text-left max-w-5xl mx-auto">
          <form action="/jobs" method="GET" className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="relative sm:col-span-2">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                name="q"
                placeholder="Job title, skills, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                name="location"
                placeholder="Location (e.g. Noida, Remote)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <Button type="submit" variant="recruitment" size="md" className="w-full font-bold shadow-md">
              <Search className="w-4 h-4 mr-2" />
              <span>Search Jobs</span>
            </Button>
          </form>
        </div>
      </section>

      {/* 2. RECRUITMENT METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-emerald-500">
            <div className="text-3xl font-black text-slate-900">IT & Non-IT</div>
            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mt-1">Sectors</div>
            <div className="text-xs text-slate-500 mt-1">Technical & Operational Roles</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-teal-500">
            <div className="text-3xl font-black text-slate-900">Vetted</div>
            <div className="text-sm font-bold text-teal-600 uppercase tracking-wider mt-1">Talent Pool</div>
            <div className="text-xs text-slate-500 mt-1">Screened Professionals</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-cyan-500">
            <div className="text-3xl font-black text-slate-900">Direct</div>
            <div className="text-sm font-bold text-cyan-600 uppercase tracking-wider mt-1">Placements</div>
            <div className="text-xs text-slate-500 mt-1">Full-time & Contract Hiring</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sryn-blue">
            <div className="text-3xl font-black text-slate-900">Pan-India</div>
            <div className="text-sm font-bold text-sryn-blue uppercase tracking-wider mt-1">Network</div>
            <div className="text-xs text-slate-500 mt-1">Multiple Cities & Remote</div>
          </div>
        </div>
      </section>

      {/* 3. DUAL CTAs (FOR CANDIDATES & FOR EMPLOYERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Candidates */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-600 w-fit">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For Job Seekers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Looking for your next career step? Create your candidate profile, browse verified job listings, and apply directly.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free Profile Creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Corporate Employers</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/candidate">
                <Button variant="recruitment" size="lg" className="w-full font-bold shadow-md">
                  <span>Register as Candidate</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* For Employers */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-teal-500/20 text-teal-400 w-fit">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers & Recruiters</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Need to hire skilled talent fast? Share your staffing requirements and get matched with pre-screened professionals.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Pre-Screened & Skill-Verified Profiles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Dedicated Hiring Account Manager</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/hire-talent">
                <Button variant="secondary" size="lg" className="w-full font-bold bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-md">
                  <span>Post Staffing Requirement</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED JOBS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Badge variant="rec" className="uppercase tracking-widest px-3 py-1">
              Active Opportunities
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Featured Job Openings
            </h2>
          </div>
          <Link href="/jobs">
            <Button variant="outline" size="md" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold">
              <span>View All Jobs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {jobs.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <Briefcase className="w-12 h-12 mx-auto text-emerald-500/60" />
            <p className="text-slate-600 font-medium">New job openings are currently being updated by hiring managers.</p>
            <Link href="/candidate">
              <Button variant="recruitment" size="md" className="font-semibold">
                Submit Your Resume For Updates
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
