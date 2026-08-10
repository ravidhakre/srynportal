import Link from "next/link";
import { Button, Badge, HeroSlider, type SlideData } from "@sryn/ui";
import {
  Laptop,
  Code,
  Megaphone,
  ArrowRight,
  Rocket,
} from "lucide-react";

export default function TechnologyHomePage() {
  const techSlides: SlideData[] = [
    {
      id: 1,
      image: "/images/hero_1.jpg",
      badgeText: "SRYN TECHNOLOGY SOLUTIONS",
      badgeBorderClass: "border-sryn-blue/60",
      badgeTextClass: "text-sryn-blue",
      title: "Software & Web That",
      highlightText: "Scale Businesses.",
      titleEnd: "Engineering Excellence.",
      description:
        "We build high-performance web applications, custom software platforms, and mobile apps designed for speed, security, and growth.",
      primaryCtaText: "Start Your Project",
      primaryCtaHref: "/start-project",
      secondaryCtaText: "Explore Services",
      secondaryCtaHref: "/services",
      buttonVariant: "tech",
      accentGlowClass: "bg-sryn-blue/20",
    },
    {
      id: 2,
      image: "/images/hero_2.jpg",
      badgeText: "CLOUD & DIGITAL TRANSFORMATION",
      badgeBorderClass: "border-cyan-400/60",
      badgeTextClass: "text-cyan-400",
      title: "Cloud Infrastructure.",
      highlightText: "API Integrations.",
      titleEnd: "High Availability.",
      description:
        "Modernize your IT stack with scalable cloud architectures, microservices, database management, and robust security protocols.",
      primaryCtaText: "Request Tech Quote",
      primaryCtaHref: "/quote",
      secondaryCtaText: "View Case Studies",
      secondaryCtaHref: "/portfolio",
      buttonVariant: "primary",
      accentGlowClass: "bg-cyan-500/20",
    },
    {
      id: 3,
      image: "/images/hero_3.jpg",
      badgeText: "UI/UX & DIGITAL MARKETING",
      badgeBorderClass: "border-sky-400/60",
      badgeTextClass: "text-sky-300",
      title: "Stunning Design.",
      highlightText: "Seamless UX.",
      titleEnd: "Measurable Impact.",
      description:
        "Crafting intuitive user interfaces and execution of data-driven SEO & digital marketing campaigns to drive organic growth.",
      primaryCtaText: "Explore Services",
      primaryCtaHref: "/services",
      secondaryCtaText: "Contact Us",
      secondaryCtaHref: "/contact",
      buttonVariant: "tech",
      accentGlowClass: "bg-sky-400/20",
    },
  ];

  return (
    <main className="space-y-20 pb-24 text-slate-900 bg-white">
      {/* 1. HERO SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <HeroSlider slides={techSlides} />
      </section>

      {/* 2. TECH METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-sryn-blue">
            <div className="text-3xl font-black text-slate-900">Modern</div>
            <div className="text-sm font-bold text-sryn-blue uppercase tracking-wider mt-1">Tech Stack</div>
            <div className="text-xs text-slate-500 mt-1">Next.js, Node, React, Cloud</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-cyan-500">
            <div className="text-3xl font-black text-slate-900">Fast</div>
            <div className="text-sm font-bold text-cyan-600 uppercase tracking-wider mt-1">Turnaround</div>
            <div className="text-xs text-slate-500 mt-1">Agile Sprint Delivery</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-indigo-500">
            <div className="text-3xl font-black text-slate-900">100%</div>
            <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider mt-1">Responsive</div>
            <div className="text-xs text-slate-500 mt-1">Mobile & Tablet Optimized</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all border-l-4 border-l-emerald-500">
            <div className="text-3xl font-black text-slate-900">Dedicated</div>
            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mt-1">Support</div>
            <div className="text-xs text-slate-500 mt-1">Post-Launch Maintenance</div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="tech" className="uppercase tracking-widest px-4 py-1">
            Technology Services
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            End-to-End Digital Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From initial prototype to production deployment, we deliver robust technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-sryn-blue/10 text-sryn-blue w-fit">
              <Code className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Web Development</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Custom websites, web portals, e-commerce stores, and high-performance Web Applications built on Next.js & React.
            </p>
            <Link href="/services#web-development" className="text-xs font-bold text-sryn-blue hover:underline inline-flex items-center">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-600 w-fit">
              <Laptop className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Software & CRM</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Automated CRM systems, management software, lead management platforms, and internal business tools.
            </p>
            <Link href="/services#software" className="text-xs font-bold text-cyan-600 hover:underline inline-flex items-center">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-600 w-fit">
              <Megaphone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Digital Marketing & SEO</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Search engine optimization, content strategy, social media campaigns, and Google Ads management to generate leads.
            </p>
            <Link href="/services#marketing" className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sryn-blue via-sky-600 to-indigo-700 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <Badge variant="outline" className="border-white/40 text-white font-bold uppercase tracking-widest text-xs">
              Ready to Upgrade Your Tech?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get an Instant Tech Project Estimate & Proposal
            </h2>
            <p className="text-slate-100 text-base leading-relaxed">
              Tell us your requirements and our engineering team will get back to you with a transparent scope and quote.
            </p>
          </div>
          <div>
            <Link href="/start-project">
              <Button variant="secondary" size="lg" className="font-bold bg-white text-sryn-blue hover:bg-slate-100 shadow-xl">
                <span>Start Your Project</span>
                <Rocket className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
