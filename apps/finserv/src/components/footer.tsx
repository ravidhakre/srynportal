import Link from "next/link";
import { getAppUrls } from "@sryn/config/env";
import { Landmark } from "lucide-react";

export function FinServFooter() {
  const appUrls = getAppUrls();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-sryn-red/50 flex items-center justify-center font-extrabold text-lg text-sryn-red">
                <Landmark className="w-5 h-5 text-sryn-red" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">SRYN FinServ</span>
                <span className="text-[10px] tracking-widest uppercase text-sryn-red font-semibold">
                  Financial Assistance & Credit Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              SRYN FinServ helps individuals and businesses understand and access suitable financial solutions through professional assistance and consultation.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              A business vertical of <span className="text-slate-300 font-semibold">SRYN Management Pvt. Ltd.</span>
            </div>
          </div>

          {/* Column 2: Financial Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Financial Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/loans/personal-loan" className="hover:text-white transition-colors">
                  Personal Loan Assistance
                </Link>
              </li>
              <li>
                <Link href="/loans/business-loan" className="hover:text-white transition-colors">
                  Business Loan Assistance
                </Link>
              </li>
              <li>
                <Link href="/loans/home-loan" className="hover:text-white transition-colors">
                  Home Loan Assistance
                </Link>
              </li>
              <li>
                <Link href="/loans/loan-against-property" className="hover:text-white transition-colors">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link href="/credit/consultation" className="hover:text-white transition-colors">
                  Credit Consultation
                </Link>
              </li>
              <li>
                <Link href="/credit/cards" className="hover:text-white transition-colors">
                  Credit Card Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About SRYN FinServ
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="hover:text-white transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-white transition-colors">
                  Required Documents
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Financial FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Financial Awareness Blog
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-sryn-red font-semibold hover:underline">
                  Submit Financial Requirement →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SRYN Business Switcher */}
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
                <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center">
                  SRYN Recruitment ↗
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
                  Service Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="border-t border-slate-900 pt-8 space-y-4 text-xs text-slate-500">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Important Regulatory Notice:</strong> SRYN FinServ provides financial assistance and consultation. SRYN FinServ does not guarantee 100% loan approval, interest rate cuts, or specific financial outcomes. All financial solutions are subject to applicant eligibility, documentation verification, lender terms, and applicable statutory guidelines.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            <p>© 2026 SRYN FinServ. All Rights Reserved.</p>
            <p className="text-center md:text-right">
              Financial Solutions Designed Around Your Needs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
