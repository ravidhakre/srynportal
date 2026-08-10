import Link from "next/link";
import { Button, Card, Badge } from "@sryn/ui";
import { FinanceDisclaimer } from "../components/disclaimer";
import {
  Landmark,
  ShieldCheck,
  UserCheck,
  Building2,
  Home,
  Briefcase,
  CreditCard,
  ArrowRight,
  Clock,
  Award,
} from "lucide-react";

export default function FinServHomePage() {
  return (
    <main className="space-y-24 pb-24 text-left">
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sryn-red/40 text-xs font-bold text-sryn-red uppercase tracking-widest">
              <span>SRYN FINSERV</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.1]">
              Financial Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sryn-red via-rose-400 to-amber-400">
                Designed Around
              </span>{" "}
              <br />
              Your Needs.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Explore financial assistance and credit-focused solutions with professional guidance tailored to your requirements.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/apply">
                <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
                  <span>Check Your Requirement</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/financial-solutions">
                <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                  Explore Financial Solutions
                </Button>
              </Link>
            </div>
          </div>

          {/* Premium Abstract Financial Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sryn-red/10 rounded-full blur-3xl" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2 text-sryn-red font-bold text-xs">
                  <Landmark className="w-4 h-4" />
                  <span>Requirement Evaluation</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">finserv.sryn.internal</span>
              </div>
              <div className="space-y-4 my-auto bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">FinServ Consultation</span>
                  <span className="text-emerald-400 font-bold">Active Assistance</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sryn-red w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>Documentation Readiness</span>
                    <span>Verified Guidelines</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  Tailored evaluation of loans, credit profile readiness & partner terms.
                </div>
              </div>
              <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3 text-center">
                Professional Assistance & Transparent Guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINANCIAL SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="danger">OUR SOLUTIONS</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Explore Financial Solutions
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Professional assistance across loans, credit consultation, and credit guidance tailored around individual and business profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Personal Finance Assistance", desc: "Personal loan guidance for medical, emergency, family, or personal requirements.", link: "/loans/personal-loan", icon: UserCheck },
            { title: "Business Finance Assistance", desc: "Working capital, business expansion, and equipment financing consultation.", link: "/loans/business-loan", icon: Building2 },
            { title: "Home Finance Assistance", desc: "Guidance for home purchase, construction, or property financing.", link: "/loans/home-loan", icon: Home },
            { title: "Property-Backed Finance", desc: "High-value financing assistance backed by residential or commercial property.", link: "/loans/loan-against-property", icon: Briefcase },
            { title: "Credit Consultation", desc: "Professional evaluation of your credit profile and application readiness.", link: "/credit/consultation", icon: ShieldCheck },
            { title: "Credit Card Assistance", desc: "Requirement assessment and card option guidance aligned to spending.", link: "/credit/cards", icon: CreditCard },
          ].map((item, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-sryn-red/50 transition-colors group">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-sryn-red/10 text-sryn-red border border-sryn-red/20 group-hover:bg-sryn-red group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              <Link href={item.link} className="text-xs font-semibold text-sryn-red flex items-center hover:underline pt-2">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS (5-STEP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">ASSISTANCE PROCESS</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Share Requirement", desc: "Tell us what financial assistance or credit guidance you need." },
            { step: "02", title: "Initial Discussion", desc: "Understand basic requirement scope & preliminary parameters." },
            { step: "03", title: "Documentation", desc: "Gather required documents for lender/product evaluation." },
            { step: "04", title: "Application Assistance", desc: "Proceed through official application workflows." },
            { step: "05", title: "Status & Next Steps", desc: "Receive transparent updates regarding application status." },
          ].map((s, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-5 space-y-2">
              <span className="text-xs font-mono font-bold text-sryn-red">{s.step}</span>
              <h4 className="font-bold text-white text-base">{s.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

        <p className="text-xs text-slate-500 text-center italic">
          * Processing, evaluation, approval, and disbursement timelines vary by product, provider, and customer circumstances.
        </p>
      </section>

      {/* 9. WHY SRYN FINSERV */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">OUR COMMITMENT</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why Choose SRYN FinServ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <ShieldCheck className="w-6 h-6 text-sryn-red" />
            <h3 className="font-bold text-white text-lg">Requirement-Focused</h3>
            <p className="text-xs text-slate-400 leading-relaxed">We evaluate financial solutions built around your exact personal or business requirements.</p>
          </Card>
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="font-bold text-white text-lg">Transparent Expectations</h3>
            <p className="text-xs text-slate-400 leading-relaxed">No false 100% approval promises. Clear communication regarding eligibility and terms.</p>
          </Card>
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <Clock className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-lg">Structured Process</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Digital tracking of your requirement status with dedicated assistance.</p>
          </Card>
        </div>
      </section>

      {/* REUSABLE DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinanceDisclaimer />
      </section>

      {/* 11. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Discuss Your Financial Needs?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Submit your financial requirement to connect with SRYN FinServ consultants.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/apply">
              <Button variant="danger" size="lg" className="font-semibold shadow-xl shadow-sryn-red/20">
                Check Your Requirement Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
