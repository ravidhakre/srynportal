import Link from "next/link";
import { Badge, HeroSlider, type SlideData } from "@sryn/ui";
import { FinanceDisclaimer } from "../components/disclaimer";
import {
  UserCheck,
  Home,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function FinServHomePage() {
  const finSlides: SlideData[] = [
    {
      id: 1,
      image: "/images/hero_1.jpg",
      badgeText: "SRYN FINSERV CONSULTATION",
      badgeBorderClass: "border-sryn-red/60",
      badgeTextClass: "text-sryn-red",
      title: "Financial Solutions",
      highlightText: "Tailored to Your Needs.",
      titleEnd: "Professional Advisory.",
      description:
        "We assist individuals and business owners in evaluating loan options, credit requirements, and structured financial support.",
      primaryCtaText: "Check Requirement",
      primaryCtaHref: "/apply",
      secondaryCtaText: "Financial Solutions",
      secondaryCtaHref: "/financial-solutions",
      buttonVariant: "danger",
      accentGlowClass: "bg-sryn-red/20",
    },
    {
      id: 2,
      image: "/images/hero_2.jpg",
      badgeText: "BUSINESS & CORPORATE CREDIT",
      badgeBorderClass: "border-amber-400/60",
      badgeTextClass: "text-amber-400",
      title: "Working Capital.",
      highlightText: "Business Expansion.",
      titleEnd: "Expert Guidance.",
      description:
        "Comprehensive consultation for MSME loans, machinery funding, business credit lines, and commercial loan applications.",
      primaryCtaText: "Business Loan Assistance",
      primaryCtaHref: "/apply?type=business",
      secondaryCtaText: "Calculators",
      secondaryCtaHref: "/calculators",
      buttonVariant: "finserv",
      accentGlowClass: "bg-amber-500/20",
    },
    {
      id: 3,
      image: "/images/hero_3.jpg",
      badgeText: "TRANSPARENT & SECURE PROCESS",
      badgeBorderClass: "border-emerald-400/60",
      badgeTextClass: "text-emerald-400",
      title: "Zero Hidden Fees.",
      highlightText: "Direct Consultation.",
      titleEnd: "Fast Turnaround.",
      description:
        "Clear step-by-step guidance through documentation, eligibility criteria, bank comparisons, and application tracking.",
      primaryCtaText: "Apply Now",
      primaryCtaHref: "/apply",
      secondaryCtaText: "Contact Us",
      secondaryCtaHref: "/contact",
      buttonVariant: "danger",
      accentGlowClass: "bg-emerald-500/20",
    },
  ];

  return (
    <main className="space-y-20 pb-24 text-slate-900 bg-white">
      {/* 1. HERO SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <HeroSlider slides={finSlides} />
      </section>

      {/* 2. TRUST METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sryn-red">
            <div className="text-3xl font-black text-slate-900">Personalized</div>
            <div className="text-sm font-bold text-sryn-red uppercase tracking-wider mt-1">Consultation</div>
            <div className="text-xs text-slate-500 mt-1">Tailored to Your Profile</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-amber-500">
            <div className="text-3xl font-black text-slate-900">Clear</div>
            <div className="text-sm font-bold text-amber-600 uppercase tracking-wider mt-1">Terms</div>
            <div className="text-xs text-slate-500 mt-1">No Hidden Charges</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-emerald-500">
            <div className="text-3xl font-black text-slate-900">Multi-Bank</div>
            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mt-1">Partnerships</div>
            <div className="text-xs text-slate-500 mt-1">Wide Financial Network</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sky-500">
            <div className="text-3xl font-black text-slate-900">100%</div>
            <div className="text-sm font-bold text-sky-600 uppercase tracking-wider mt-1">Confidential</div>
            <div className="text-xs text-slate-500 mt-1">Secure Document Handling</div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="fin" className="uppercase tracking-widest px-4 py-1">
            Financial Services Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Consultation Across Loan Categories
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We help you evaluate options, check eligibility criteria, and choose financial assistance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-sryn-red/10 text-sryn-red w-fit">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Business & MSME Loans</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unsecured business loans, machinery funding, equipment finance, and working capital lines for expanding enterprises.
            </p>
            <Link href="/apply?type=business" className="text-xs font-bold text-sryn-red hover:underline inline-flex items-center">
              <span>Apply for Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 w-fit">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Personal & Credit Assistance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Loans for salaried and self-employed professionals to meet immediate personal or medical financial requirements.
            </p>
            <Link href="/apply?type=personal" className="text-xs font-bold text-amber-600 hover:underline inline-flex items-center">
              <span>Apply for Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 w-fit">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Home & Property Loans</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Home loans, loan against property (LAP), and balance transfer guidance with competitive interest rates.
            </p>
            <Link href="/apply?type=home" className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center">
              <span>Apply for Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DISCLAIMER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinanceDisclaimer />
      </section>
    </main>
  );
}
