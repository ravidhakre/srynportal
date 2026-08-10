import Link from "next/link";
import { Button, Card, Badge } from "@sryn/ui";
import { BusinessSwitcher } from "../components/business-switcher";
import { getAppUrls } from "@sryn/config/env";
import {
  Laptop,
  Landmark,
  Users,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function CorporateHomePage() {
  const appUrls = getAppUrls();

  return (
    <main className="space-y-24 pb-24">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sryn-red/40 text-xs font-bold text-sryn-red uppercase tracking-widest">
              <span>SRYN MANAGEMENT PVT. LTD.</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.1]">
              Building Businesses. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sryn-blue via-sky-400 to-sryn-red">
                Enabling Growth.
              </span>{" "}
              <br />
              Creating Opportunities.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              SRYN Management Pvt. Ltd. is a diversified organization operating across Technology, Financial Services and
              Recruitment, delivering practical solutions for businesses, individuals and professionals.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#verticals">
                <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 font-medium">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Corporate Visual */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-sryn-navy via-slate-900 to-slate-950 border border-slate-800 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sryn-blue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sryn-red/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">SRYN Ecosystem</span>
                <Badge variant="tech">Multi-Sector Organization</Badge>
              </div>

              <div className="relative z-10 space-y-4 my-auto">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-sryn-blue/30 flex items-center space-x-4 shadow-lg">
                  <div className="p-3 rounded-lg bg-sryn-blue/20 text-sryn-blue">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">SRYN Technology</div>
                    <div className="text-xs text-slate-400">Software, Web & Digital Media</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-sryn-red/30 flex items-center space-x-4 shadow-lg">
                  <div className="p-3 rounded-lg bg-sryn-red/20 text-sryn-red">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">SRYN FinServ</div>
                    <div className="text-xs text-slate-400">Loan & Credit Consultation</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center space-x-4 shadow-lg">
                  <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">SRYN Recruitment</div>
                    <div className="text-xs text-slate-400">Talent Staffing & Placement</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-xs text-slate-500 pt-4 border-t border-slate-800/80 text-center">
                One Organization. Three Growth-Focused Businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — BUSINESS VERTICALS */}
      <section id="verticals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">SPECIALIZED DIVISIONS</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Our Business Verticals</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Specialized businesses. One trusted organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: SRYN Technology */}
          <Card className="bg-slate-900/90 border-slate-800 text-white flex flex-col justify-between hover:border-sryn-blue/50 transition-all duration-300 p-6 rounded-2xl shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sryn-blue/10 border border-sryn-blue/30 text-sryn-blue flex items-center justify-center group-hover:bg-sryn-blue group-hover:text-white transition-colors">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="tech">Digital & Software</Badge>
                <h3 className="text-2xl font-bold text-white mt-2">SRYN Technology</h3>
                <p className="text-xs font-semibold text-sryn-blue mt-1">Technology That Moves Your Business Forward</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Technology solutions designed to help businesses build, automate and grow their digital presence.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-blue" /> Web & Application Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-blue" /> E-Commerce & Custom Software
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-blue" /> Digital Marketing & Automation
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a href={appUrls.technology} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="tech" size="md" className="w-full flex justify-center items-center">
                  <span>Explore SRYN Technology</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </Card>

          {/* Card 2: SRYN FinServ */}
          <Card className="bg-slate-900/90 border-slate-800 text-white flex flex-col justify-between hover:border-sryn-red/50 transition-all duration-300 p-6 rounded-2xl shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sryn-red/10 border border-sryn-red/30 text-sryn-red flex items-center justify-center group-hover:bg-sryn-red group-hover:text-white transition-colors">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="danger">Financial & Credit</Badge>
                <h3 className="text-2xl font-bold text-white mt-2">SRYN FinServ</h3>
                <p className="text-xs font-semibold text-sryn-red mt-1">Financial Solutions Designed Around Your Needs</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Financial assistance and credit-focused solutions designed around individual and business requirements.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-red" /> Personal & Business Loan Assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-red" /> Home Loan & Property Loan Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sryn-red" /> Credit Consultation & Guidance
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="finserv" size="md" className="w-full flex justify-center items-center">
                  <span>Explore SRYN FinServ</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </Card>

          {/* Card 3: SRYN Recruitment */}
          <Card className="bg-slate-900/90 border-slate-800 text-white flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 p-6 rounded-2xl shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="success">Talent & Hiring</Badge>
                <h3 className="text-2xl font-bold text-white mt-2">SRYN Recruitment</h3>
                <p className="text-xs font-semibold text-emerald-400 mt-1">Connecting Talent With the Right Opportunities</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Recruitment and staffing solutions connecting organizations with qualified professionals across industries.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> IT & Non-IT Specialized Hiring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Staffing & Placement Solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Employer Hiring & Job Portal
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="recruitment" size="md" className="w-full flex justify-center items-center">
                  <span>Explore SRYN Recruitment</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 3 — ABOUT SRYN SPLIT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="secondary">ORGANIZATION OVERVIEW</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One Organization. Three Growth-Focused Businesses.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              SRYN Management Pvt. Ltd. is a diversified organization built around three key business verticals — Technology,
              Financial Services and Recruitment.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our objective is to create reliable, accessible and technology-enabled solutions for businesses, professionals and
              individuals. Through our specialized business divisions, we combine industry expertise, technology and customer-focused
              processes to deliver meaningful outcomes.
            </p>
            <div className="pt-2">
              <Link href="/about">
                <Button variant="primary" size="lg">
                  <span>Discover SRYN</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-sryn-blue/20 text-sryn-blue font-bold">01</div>
              <div>
                <h4 className="font-bold text-white text-base">Technology Pillar</h4>
                <p className="text-xs text-slate-400 mt-0.5">Software, Automation & Digital Growth</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-sryn-red/20 text-sryn-red font-bold">02</div>
              <div>
                <h4 className="font-bold text-white text-base">Financial Pillar</h4>
                <p className="text-xs text-slate-400 mt-0.5">Credit Assistance & Loan Consultation</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold">03</div>
              <div>
                <h4 className="font-bold text-white text-base">Recruitment Pillar</h4>
                <p className="text-xs text-slate-400 mt-0.5">Staffing & Human Capital Placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY SRYN (6 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">VALUE PROPOSITION</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why Work With SRYN?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-sryn-blue/10 text-sryn-blue">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Multi-Sector Expertise</h3>
            <p className="text-sm text-slate-400">Specialized capabilities across technology, finance and recruitment.</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Customer Focused</h3>
            <p className="text-sm text-slate-400">Solutions designed around practical customer and business requirements.</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Technology Driven</h3>
            <p className="text-sm text-slate-400">Modern digital tools and processes help us work smarter.</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-sky-500/10 text-sky-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Professional Approach</h3>
            <p className="text-sm text-slate-400">Structured processes and dedicated teams across business verticals.</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Scalable Solutions</h3>
            <p className="text-sm text-slate-400">Solutions designed to support evolving business and individual requirements.</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 text-left space-y-3">
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">One Trusted Organization</h3>
            <p className="text-sm text-slate-400">Multiple business needs supported through one organization.</p>
          </Card>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK (5 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">OPERATIONAL PROCESS</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: "01", title: "Understand", desc: "We understand your requirement, objective and challenges." },
            { num: "02", title: "Plan", desc: "We identify the right approach and create a practical plan." },
            { num: "03", title: "Execute", desc: "Our specialized team works on the required solution." },
            { num: "04", title: "Support", desc: "We remain available to assist and improve the outcome." },
            { num: "05", title: "Grow", desc: "We focus on long-term value and sustainable growth." },
          ].map((step, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 p-5 text-left space-y-2 relative">
              <div className="text-xs font-mono font-bold text-sryn-blue">{step.num}</div>
              <h4 className="font-bold text-white text-base">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 6 — INTERACTIVE BUSINESS SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <div className="space-y-3">
          <Badge variant="secondary">EXPLORE DEEPER</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Explore SRYN Businesses</h2>
        </div>
        <BusinessSwitcher />
      </section>

      {/* SECTION 7 — CAREERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sryn-navy to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left max-w-xl">
            <Badge variant="success">JOIN OUR TEAM</Badge>
            <h2 className="text-3xl font-extrabold text-white">Build Your Career With SRYN</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are building teams across technology, finance, recruitment and business operations. Explore opportunities and take the next step in your career.
            </p>
          </div>
          <div>
            <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
              <Button variant="recruitment" size="lg" className="whitespace-nowrap font-semibold">
                <span>Explore Careers</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CONTACT / CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Let's Build What's Next.</h2>
          <p className="text-slate-300 text-base">
            Whether you need a technology solution, financial assistance or recruitment support, connect with the appropriate SRYN business team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href={appUrls.technology} target="_blank" rel="noopener noreferrer">
            <Card className="bg-slate-900 border-slate-800 hover:border-sryn-blue p-6 text-center space-y-3 transition-colors group">
              <Laptop className="w-8 h-8 text-sryn-blue mx-auto" />
              <h4 className="font-bold text-white">Technology Project</h4>
              <p className="text-xs text-slate-400">Start a digital or web project</p>
              <Button variant="tech" size="sm" className="w-full">
                Start a Technology Project ↗
              </Button>
            </Card>
          </a>

          <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer">
            <Card className="bg-slate-900 border-slate-800 hover:border-sryn-red p-6 text-center space-y-3 transition-colors group">
              <Landmark className="w-8 h-8 text-sryn-red mx-auto" />
              <h4 className="font-bold text-white">FinServ Consultation</h4>
              <p className="text-xs text-slate-400">Discuss loan & credit needs</p>
              <Button variant="finserv" size="sm" className="w-full">
                Discuss Your Requirement ↗
              </Button>
            </Card>
          </a>

          <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer">
            <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500 p-6 text-center space-y-3 transition-colors group">
              <Users className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white">Talent Staffing</h4>
              <p className="text-xs text-slate-400">Hire IT & Non-IT talent</p>
              <Button variant="recruitment" size="sm" className="w-full">
                Hire Talent ↗
              </Button>
            </Card>
          </a>
        </div>
      </section>
    </main>
  );
}
