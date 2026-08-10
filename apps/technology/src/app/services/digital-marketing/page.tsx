import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Digital Marketing Solutions | SEO, PPC & Paid Ads | SRYN Technology",
  description: "Comprehensive digital growth strategies combining Search Engine Optimization, Google Ads, Meta Ads, and Analytics.",
};

const dmConfig: ServiceDetailConfig = {
  title: "Integrated Digital Marketing & Growth Strategies",
  badge: "DIGITAL MARKETING",
  tagline: "SEO, PPC & Performance Advertising",
  description: "Combine organic search optimization, targeted Google & Meta ad campaigns, and analytics tracking to drive measurable digital growth.",
  overview: "Our digital marketing team builds holistic growth engines. From technical SEO foundation to performance PPC campaigns and conversion rate optimization (CRO).",
  problemsSolved: ["Fragmented marketing efforts leading to poor ROI.", "Unclear analytics tracking preventing data-driven decisions."],
  deliverables: ["Full Digital Marketing Strategy", "SEO & Ad Setup", "Analytics Dashboard", "Monthly Growth Review"],
  features: [{ title: "Multi-Channel Growth", desc: "Coordinated strategy across Search, Social, and Direct messaging." }],
  process: [{ step: "01", title: "Strategy", desc: "Competitor & keyword research." }, { step: "02", title: "Execute", desc: "Launch organic & paid funnels." }],
  techStack: ["Google Ads", "Meta Business", "GA4", "Search Console", "Looker Studio"],
  whoItIsFor: "Companies seeking a single, integrated digital marketing partner to handle search, social, and lead acquisition.",
  faqs: [{ q: "Do you provide monthly analytics reporting?", a: "Yes, we provide transparent monthly performance reports detailing traffic, leads, and conversion metrics." }],
};

export default function DigitalMarketingPage() {
  return <ServiceDetailTemplate config={dmConfig} />;
}
