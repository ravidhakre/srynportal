import Link from "next/link";
import { getAppUrls } from "@sryn/config/env";
import { Users } from "lucide-react";

export function RecruitmentFooter() {
  const appUrls = getAppUrls();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/50 flex items-center justify-center font-extrabold text-lg text-emerald-400">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">SRYN Recruitment</span>
                <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold">
                  Talent & Placement Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              SRYN Recruitment provides IT, Non-IT, staffing, placement and third-party recruitment solutions for employers and professionals.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              A business vertical of <span className="text-slate-300 font-semibold">SRYN Management Pvt. Ltd.</span>
            </div>
          </div>

          {/* Column 2: Candidates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">For Candidates</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Browse All Jobs
                </Link>
              </li>
              <li>
                <Link href="/candidate/profile" className="hover:text-white transition-colors">
                  Candidate Profile
                </Link>
              </li>
              <li>
                <Link href="/candidate/resume" className="hover:text-white transition-colors">
                  Resume Upload
                </Link>
              </li>
              <li>
                <Link href="/candidate/saved-jobs" className="hover:text-white transition-colors">
                  Saved Opportunities
                </Link>
              </li>
              <li>
                <Link href="/candidate/applications" className="hover:text-white transition-colors">
                  Application Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Employers & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/post-a-job" className="text-emerald-400 font-semibold hover:underline">
                  Post a Job Opening →
                </Link>
              </li>
              <li>
                <Link href="/for-employers" className="hover:text-white transition-colors">
                  Employer Hiring Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  IT & Non-IT Staffing
                </Link>
              </li>
              <li>
                <Link href="/employer" className="hover:text-white transition-colors">
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Recruitment FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SRYN Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">SRYN Network</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={appUrls.corporate} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                  SRYN Management ↗
                </a>
              </li>
              <li>
                <a href={appUrls.technology} target="_blank" rel="noopener noreferrer" className="hover:text-sryn-blue flex items-center">
                  SRYN Technology ↗
                </a>
              </li>
              <li>
                <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="hover:text-sryn-red flex items-center">
                  SRYN FinServ ↗
                </a>
              </li>
              <li className="pt-2 border-t border-slate-900">
                <Link href="/privacy-policy" className="hover:text-white text-xs block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white text-xs block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white text-xs block">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SRYN Recruitment. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Connecting Talent With the Right Opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
