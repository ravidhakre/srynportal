import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import { getAppUrls } from "@sryn/config/env";
import { ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About SRYN Technology | Software & Digital Engineering Division",
  description: "Learn about SRYN Technology, a specialized business vertical of SRYN Management Pvt. Ltd.",
};

export default function TechnologyAboutPage() {
  const appUrls = getAppUrls();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">ABOUT SRYN TECHNOLOGY</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technology That Moves Your Business Forward
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN Technology is the dedicated digital engineering and software division of SRYN Management Pvt. Ltd.
        </p>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Engineering Philosophy</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We focus on practical, scalable, and secure digital solutions. We combine clean code practices with modern cloud infrastructure to build systems that automate business operations and accelerate growth.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            As a business division of SRYN Management Pvt. Ltd., SRYN Technology works alongside SRYN FinServ and SRYN Recruitment to deliver multi-sector enterprise support.
          </p>
          <div className="pt-2">
            <a href={appUrls.corporate} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">
                <span>Visit SRYN Management Corporate</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <Cpu className="w-5 h-5 text-sryn-blue" />
            <h4 className="font-bold text-white text-base">Modern Stack</h4>
            <p className="text-xs text-slate-400">Next.js, React, Node, Firebase Cloud Firestore, Tailwind CSS.</p>
          </Card>
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-base">Security & Performance</h4>
            <p className="text-xs text-slate-400">Strict RBAC, Firestore security rules, optimized bundle delivery.</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
