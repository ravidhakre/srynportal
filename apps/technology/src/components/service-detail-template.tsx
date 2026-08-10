import React from "react";
import { Badge, Button, Card } from "@sryn/ui";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export interface ServiceDetailConfig {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  overview: string;
  problemsSolved: string[];
  deliverables: string[];
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  whoItIsFor: string;
  faqs: { q: string; a: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export function ServiceDetailTemplate({ config }: { config: ServiceDetailConfig }) {
  return (
    <main className="space-y-16 pb-24 text-left">
      {/* Hero */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-sryn-navy to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
          <Badge variant="tech">{config.badge}</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            {config.title}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">{config.description}</p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/start-project">
              <Button variant="tech" size="lg" className="font-semibold shadow-xl shadow-sryn-blue/20">
                <span>{config.ctaTitle || "Start Your Project"}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-slate-700 text-white">
                Discuss Requirement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Problems Solved */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">{config.overview}</p>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sryn-blue" />
            Problems We Solve
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {config.problemsSolved.map((prob, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sryn-red shrink-0 mt-0.5" />
                <span>{prob}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="secondary">WHAT WE OFFER</Badge>
          <h2 className="text-3xl font-extrabold text-white">Key Capabilities & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.features.map((feat, idx) => (
            <Card key={idx} className="bg-slate-900/90 border-slate-800 p-6 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-lg">{feat.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="secondary">METHODOLOGY</Badge>
          <h2 className="text-3xl font-extrabold text-white">Execution Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.process.map((step, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-5 space-y-2">
              <span className="text-xs font-mono font-bold text-sryn-blue">{step.step}</span>
              <h4 className="font-bold text-white text-base">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack & Who It Is For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {config.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white">Who It Is For</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{config.whoItIsFor}</p>
        </div>
      </section>

      {/* Service FAQs */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {config.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-semibold text-white text-base">{faq.q}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Service CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sryn-navy to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Ready to Start Your {config.title} Project?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Submit your requirements to receive a technical evaluation and custom quote from SRYN Technology.
          </p>
          <div className="pt-2">
            <Link href="/start-project">
              <Button variant="tech" size="lg" className="font-semibold">
                Start Your Project Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
