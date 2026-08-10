import Link from "next/link";
import { Button, Badge, HeroSlider, type SlideData } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import {
  Laptop,
  Landmark,
  Users,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
  Award,
  Layers,
  BarChart3,
  TrendingUp,
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
      primaryCtaText: "Explore Verticals",
      primaryCtaHref: "#verticals",
      secondaryCtaText: "Talk to Us",
      secondaryCtaHref: "/contact",
      buttonVariant: "danger",
      accentGlowClass: "bg-sryn-red/30",
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
      accentGlowClass: "bg-sryn-blue/30",
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
      accentGlowClass: "bg-emerald-500/30",
    },
  ];

  return (
    <main className="space-y-24 pb-24 text-slate-900 bg-white">
      {/* 1. HERO SLIDER SECTION (FULL BLEED / EDGE-TO-EDGE) */}
      <section className="w-full relative">
        <HeroSlider slides={corporateSlides} fullBleed={true} />
      </section>

      {/* 2. STATS & KEY METRICS (AGENCY STYLE CREATIVE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sryn-red to-rose-400" />
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-900 group-hover:text-sryn-red transition-colors">3+</span>
              <div className="p-3 rounded-2xl bg-sryn-red/10 text-sryn-red">
                <Layers className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-base font-bold text-slate-900">Core Verticals</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Technology, Financial Services & Talent Recruitment</p>
            </div>
          </div>

          <div className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sryn-blue to-cyan-400" />
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-900 group-hover:text-sryn-blue transition-colors">100%</span>
              <div className="p-3 rounded-2xl bg-sryn-blue/10 text-sryn-blue">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-base font-bold text-slate-900">Compliant & Legal</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Incorporated & Structured Corporate Governance</p>
            </div>
          </div>

          <div className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">End-to-End</span>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-base font-bold text-slate-900">Execution Capability</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">From Strategic Consultation to Scalable Deployment</p>
            </div>
          </div>

          <div className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400" />
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">Pan-India</span>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600">
                <Globe2 className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-base font-bold text-slate-900">Corporate Footprint</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Delhi NCR Headquarters & Regional Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS VERTICALS (WEBACCURACY STYLED HIGH CREATIVITY CARDS) */}
      <section id="verticals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="outline" className="border-sryn-red text-sryn-red font-extrabold uppercase tracking-widest px-4 py-1.5 shadow-sm">
            SRYN Corporate Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Diversified Verticals. <span className="gradient-text-red">Unified Excellence.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Operating as independent specialized verticals backed by corporate synergy, robust governance, and executive oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vertical 1: Technology */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="h-44 bg-gradient-to-br from-slate-950 via-blue-950 to-sryn-blue p-6 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 w-24 h-24 bg-sryn-blue/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <Laptop className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sryn-blue/30 text-cyan-300 border border-cyan-400/30">
                  DIGITAL & TECH
                </span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight relative z-10">
                SRYN Technology
              </h3>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  High-performance web development, custom software engineering, cloud architecture, and digital growth marketing.
                </p>
                <div className="h-px bg-slate-100" />
                <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                    <span>Next.js & Cloud Web Platforms</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                    <span>Software & Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-blue flex-shrink-0" />
                    <span>SEO & Digital Marketing Campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a href={appUrls.technology} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="tech" size="lg" className="w-full font-bold shadow-lg shadow-sryn-blue/20 hover:scale-[1.02]">
                    <span>Explore SRYN Technology</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Vertical 2: FinServ */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="h-44 bg-gradient-to-br from-slate-950 via-red-950 to-sryn-red p-6 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 w-24 h-24 bg-sryn-red/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <Landmark className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sryn-red/30 text-rose-200 border border-rose-300/30">
                  CREDIT & LOANS
                </span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight relative z-10">
                SRYN FinServ
              </h3>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Financial assistance consultation, personal & business loan facilitation, working capital solutions, and credit advisory.
                </p>
                <div className="h-px bg-slate-100" />
                <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                    <span>Personal & Home Loan Facilitation</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                    <span>Business & Working Capital Finance</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sryn-red flex-shrink-0" />
                    <span>Credit Scoring & Financial Advisory</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="danger" size="lg" className="w-full font-bold shadow-lg shadow-sryn-red/20 hover:scale-[1.02]">
                    <span>Explore SRYN FinServ</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Vertical 3: Recruitment */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="h-44 bg-gradient-to-br from-slate-950 via-emerald-950 to-emerald-600 p-6 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <Users className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-300/30">
                  TALENT & STAFFING
                </span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight relative z-10">
                SRYN Recruitment
              </h3>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  End-to-end IT & non-IT staffing solutions, executive search, candidate pre-screening, and corporate hiring partnerships.
                </p>
                <div className="h-px bg-slate-100" />
                <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>IT & Non-IT Talent Acquisition</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Candidate Screening & Placement</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Employer Hiring Solutions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="recruitment" size="lg" className="w-full font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02]">
                    <span>Explore SRYN Recruitment</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM SYNERGY & ORBITING HUB SECTION (CREATIVE INTERACTIVE SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sryn-navy text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-2xl">
          {/* Background Ambient Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sryn-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sryn-red/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sryn-red/20 border border-sryn-red/40 text-sryn-red text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sryn-red" />
                <span>UNIFIED MULTI-SECTOR SYNERGY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                One Central Ecosystem. <br />
                <span className="bg-gradient-to-r from-sryn-red via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  Unlimited Potential.
                </span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                By integrating software innovation, financial consultation, and talent acquisition into a unified corporate structure, SRYN Management eliminates vendor friction and accelerates enterprise growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <BarChart3 className="w-6 h-6 text-sryn-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white text-sm">Central Governance</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Streamlined executive oversight and legal compliance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white text-sm">Accelerated Growth</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Cross-vertical resources and shared technical stack.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/about">
                  <Button variant="danger" size="lg" className="font-bold shadow-xl shadow-sryn-red/30">
                    <span>Corporate Profile</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="font-bold text-white border-white/30 hover:bg-white/10">
                    <span>Contact Leadership</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side: Orbit Graphic Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Central SRYN Emblem */}
                <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-900 border-2 border-sryn-red flex flex-col items-center justify-center shadow-2xl animate-pulse-glow">
                  <span className="text-3xl font-black text-white">SRYN</span>
                  <span className="text-[9px] uppercase tracking-widest text-sryn-red font-bold">Group</span>
                </div>

                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-slate-700/60 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-dashed border-slate-700/40" />

                {/* Satellite Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl bg-sryn-blue text-white shadow-lg font-bold text-xs flex items-center space-x-1">
                  <Laptop className="w-4 h-4" />
                  <span>Tech</span>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 rounded-2xl bg-sryn-red text-white shadow-lg font-bold text-xs flex items-center space-x-1">
                  <Landmark className="w-4 h-4" />
                  <span>FinServ</span>
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl bg-emerald-600 text-white shadow-lg font-bold text-xs flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Recruit</span>
                </div>

                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl bg-amber-600 text-white shadow-lg font-bold text-xs flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>Gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-sryn-navy to-slate-900 border border-slate-800 p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sryn-red/10 rounded-full blur-3xl pointer-events-none" />
          <Badge variant="outline" className="border-sryn-red text-sryn-red font-extrabold uppercase tracking-widest px-4 py-1">
            Ready To Partner With SRYN?
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Connect With Us To Empower Your Business.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Whether you require cutting-edge software solutions, financial loan assistance, or elite talent acquisition, SRYN is ready to deliver.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="danger" size="lg" className="font-bold shadow-xl shadow-sryn-red/30">
                <span>Get In Touch Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/businesses">
              <Button variant="outline" size="lg" className="font-bold text-white border-white/30 hover:bg-white/10">
                <span>View All Businesses</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
