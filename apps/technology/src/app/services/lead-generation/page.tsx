import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Multi-Channel Lead Generation Services | SRYN Technology",
  description: "End-to-end B2B and B2C lead generation funnels combining landing pages, ads, and CRM capture.",
};

const leadGenConfig: ServiceDetailConfig = {
  title: "Multi-Channel Lead Generation Funnels",
  badge: "LEAD GENERATION",
  tagline: "Qualified Inquiries & Customer Acquisition",
  description: "Capture predictable streams of qualified business inquiries combining targeted PPC ads, high-converting landing pages, and automated CRM routing.",
  overview: "We engineer full lead acquisition funnels. From ad copy to dedicated landing pages, instant SMS/WhatsApp alerts, and CRM pipeline tracking.",
  problemsSolved: ["Unpredictable revenue due to inconsistent lead flow.", "High ad expenditure on unoptimized landing pages."],
  deliverables: ["Dedicated Conversion Landing Page", "PPC Ad Setup (Google & Meta)", "Instant CRM Lead Delivery"],
  features: [{ title: "Qualified Leads", desc: "Form validation & qualification fields ensure real customer inquiries." }],
  process: [{ step: "01", title: "Funnel Build", desc: "Page & ad setup." }, { step: "02", title: "Optimize", desc: "A/B testing for lowest CPL." }],
  techStack: ["Google Ads", "Meta Ads", "Next.js Landing Pages", "Firebase CRM"],
  whoItIsFor: "Growth-focused companies seeking a steady stream of verified sales inquiries.",
  faqs: [{ q: "How quickly can a lead generation campaign launch?", a: "Campaigns typically launch within 5 to 7 business days." }],
};

export default function LeadGenerationPage() {
  return <ServiceDetailTemplate config={leadGenConfig} />;
}
