import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About SRYN Management Pvt. Ltd. | Vision, Mission & Values",
  description:
    "Learn about SRYN Management Pvt. Ltd., a diversified organization operating across Technology, Financial Services and Recruitment.",
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary">ABOUT SRYN MANAGEMENT</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          One Organization. Three Growth-Focused Businesses.
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          SRYN Management Pvt. Ltd. brings together technology, financial solutions and recruitment expertise under one unified corporate structure.
        </p>
      </section>

      {/* Company Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-white">Company Overview</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            SRYN Management Pvt. Ltd. is a diversified organization operating across Technology, Financial Services and Recruitment.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our specialized business verticals operate independently while sharing a common commitment to professionalism, innovation and customer-focused solutions. By combining technical execution, financial advisory, and human capital sourcing, SRYN delivers comprehensive support for modern business challenges.
          </p>
        </div>
        <div className="space-y-4">
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <div className="flex items-center space-x-3 text-sryn-blue">
              <Eye className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">Our Vision</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              "To build a diversified organization that creates sustainable value through technology, financial solutions and human capital."
            </p>
          </Card>
          <Card className="bg-slate-950 border-slate-800 p-5 space-y-2">
            <div className="flex items-center space-x-3 text-sryn-red">
              <Target className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">Our Mission</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              "To deliver accessible, reliable and technology-enabled solutions while creating long-term value for our customers, clients and partners."
            </p>
          </Card>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <Badge variant="secondary">OUR GUIDING PRINCIPLES</Badge>
          <h2 className="text-3xl font-extrabold text-white">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Integrity", desc: "Honesty, transparency and ethical standards across every interaction." },
            { title: "Customer Focus", desc: "Designing solutions specifically around practical client needs." },
            { title: "Innovation", desc: "Leveraging modern technology and streamlined processes." },
            { title: "Professionalism", desc: "Structured operations and dedicated subject-matter teams." },
            { title: "Growth", desc: "Focusing on sustainable long-term value for partners and clients." },
            { title: "Responsibility", desc: "Upholding legal compliance, data privacy, and trust." },
          ].map((val, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-6 text-left space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sryn-blue/10 border border-sryn-blue/20 text-sryn-blue flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <h3 className="font-bold text-white text-base">{val.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Ready to Connect With SRYN?</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Explore our business verticals or reach out to our corporate management team today.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link href="/businesses">
            <Button variant="primary" size="md">
              Explore Verticals
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="md">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
