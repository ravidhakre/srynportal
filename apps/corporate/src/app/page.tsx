import Link from "next/link";
import { Button, Badge, HeroSlider, type SlideData } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import {
  Laptop,
  Landmark,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CorporateHomePage() {
  const appUrls = getAppUrls();

  const corporateSlides: SlideData[] = [
    {
      id: 1,
      image: "/images/hero_1.jpg",
      badgeText: "SRYN MANAGEMENT PVT. LTD.",
      badgeBorderClass: "border-sryn-red/60",
      badgeTextClass: "text-sryn-red",
      title: "Building Businesses.",
      highlightText: "Enabling Growth.",
      titleEnd: "Creating Opportunities.",
      description:
        "SRYN Management Pvt. Ltd. is a premier diversified corporate organization operating across Technology, Financial Services, and Talent Recruitment.",
      primaryCtaText: "Explore Our Businesses",
      primaryCtaHref: "#verticals",
      secondaryCtaText: "Talk to Us",
      secondaryCtaHref: "/contact",
      buttonVariant: "danger",
      accentGlowClass: "bg-sryn-red/20",
    },
    {
      id: 2,
      image: "/images/hero_2.jpg",
      badgeText: "EXECUTIVE LEADERSHIP & GOVERNANCE",
      badgeBorderClass: "border-sryn-blue/60",
      badgeTextClass: "text-sryn-blue",
      title: "Strategic Vision.",
      highlightText: "Global Standards.",
      titleEnd: "Proven Execution.",
      description:
        "Delivering structured governance, enterprise consultation, and growth-driven strategies for modern businesses.",
      primaryCtaText: "Corporate Governance",
      primaryCtaHref: "/about",
      secondaryCtaText: "Our Verticals",
      secondaryCtaHref: "/businesses",
      buttonVariant: "tech",
      accentGlowClass: "bg-sryn-blue/20",
    },
    {
      id: 3,
      image: "/images/hero_3.jpg",
      badgeText: "MULTI-SECTOR ECOSYSTEM",
      badgeBorderClass: "border-emerald-500/60",
      badgeTextClass: "text-emerald-400",
      title: "Empowering People.",
      highlightText: "Transforming Markets.",
      titleEnd: "Scalable Solutions.",
      description:
        "Bridging technology innovation, financial accessibility, and talent acquisition into a unified corporate ecosystem.",
      primaryCtaText: "Partner With Us",
      primaryCtaHref: "/contact",
      secondaryCtaText: "Read Insights",
      secondaryCtaHref: "/blog",
      buttonVariant: "recruitment",
      accentGlowClass: "bg-emerald-500/20",
    },
  ];

  return (
    <main className="space-y-20 pb-24 text-slate-900 bg-white">
      {/* 1. HERO SLIDER SECTION (FULL BLEED / EDGE-TO-EDGE) */}
      <section className="w-full relative">
        <HeroSlider slides={corporateSlides} fullBleed={true} />
      </section>

      {/* 2. STATS & KEY METRICS (WHITE CARDS WITH RICH ACCENTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sryn-red">
            <div className="text-3xl font-black text-slate-900">3+</div>
            <div className="text-sm font-bold text-sryn-red uppercase tracking-wider mt-1">Core Verticals</div>
            <div className="text-xs text-slate-500 mt-1">Tech, Finance & Talent</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sryn-blue">
            <div className="text-3xl font-black text-slate-900">100%</div>
            <div className="text-sm font-bold text-sryn-blue uppercase tracking-wider mt-1">Compliant & Legal</div>
            <div className="text-xs text-slate-500 mt-1">Indian Corporate Standards</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-emerald-500">
            <div className="text-3xl font-black text-slate-900">End-to-End</div>
            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mt-1">Solutions</div>
            <div className="text-xs text-slate-500 mt-1">Consultation to Scale</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-amber-500">
            <div className="text-3xl font-black text-slate-900">Pan-India</div>
            <div className="text-sm font-bold text-amber-600 uppercase tracking-wider mt-1">Presence</div>
            <div className="text-xs text-slate-500 mt-1">Delhi NCR & Beyond</div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS VERTICALS */}
      <section id="verticals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="outline" className="border-sryn-red text-sryn-red font-bold uppercase tracking-widest px-4 py-1">
            Our Business Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Diversified Operations. Focused Expertise.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Each SRYN business operates with deep domain specialization while benefiting from corporate synergy and shared leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vertical 1: Technology */}
          <div className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sryn-blue/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <div className="space-y-6 relative z-10">
              <div className="p-4 rounded-2xl bg-sryn-blue/10 text-sryn-blue w-fit">
                <Laptop className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sryn-blue transition-colors">
                  SRYN Technology
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Web development, custom software, digital platforms, cloud integrations and online marketing for modern brands.
                </p>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                  <span>Custom Web & Mobile Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                  <span>Digital Marketing & Branding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                  <span>Software Automation</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 relative z-10">
              <a href={appUrls.technology} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="tech" size="lg" className="w-full font-bold shadow-md">
                  <span>Visit SRYN Technology</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Vertical 2: FinServ */}
          <div className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sryn-red/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <div className="space-y-6 relative z-10">
              <div className="p-4 rounded-2xl bg-sryn-red/10 text-sryn-red w-fit">
                <Landmark className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sryn-red transition-colors">
                  SRYN FinServ
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Financial assistance consultation, loan advisory, and structured credit solutions for individuals and businesses.
                </p>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                  <span>Personal & Home Loans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                  <span>Business Working Capital</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                  <span>Credit Advisory & Guidance</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 relative z-10">
              <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="danger" size="lg" className="w-full font-bold shadow-md">
                  <span>Visit SRYN FinServ</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Vertical 3: Recruitment */}
          <div className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <div className="space-y-6 relative z-10">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 w-fit">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  SRYN Recruitment
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Talent staffing, candidate sourcing, executive search and workforce solutions across IT and non-IT sectors.
                </p>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>IT & Non-IT Talent Staffing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Executive Search & Placement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Employer Hiring Solutions</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 relative z-10">
              <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="recruitment" size="lg" className="w-full font-bold shadow-md">
                  <span>Visit SRYN Recruitment</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & GOVERNANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sryn-red/20 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="danger" className="uppercase tracking-widest text-xs font-bold">
                Governance & Integrity
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Built on Trust. Driven by Operational Excellence.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                SRYN Management Pvt. Ltd. adheres to strict regulatory compliance, transparent governance, and customer-first values across all operating verticals.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link href="/about">
                <Button variant="danger" size="lg" className="font-bold shadow-xl">
                  <span>About Our Management</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
