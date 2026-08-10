import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Web Development Services | Corporate & Custom Web Apps | SRYN Technology",
  description: "Custom web development services: responsive corporate websites, web applications, landing pages, and API integrations.",
};

const webDevConfig: ServiceDetailConfig = {
  title: "Web Development Solutions Built for Growth",
  badge: "WEB DEVELOPMENT",
  tagline: "Custom Corporate Websites & Web Applications",
  description: "From corporate websites to custom web applications, we build responsive, fast, and scalable digital experiences engineered for performance and conversions.",
  overview: "We engineer web solutions using modern frontend frameworks (Next.js, React) and scalable backend cloud infrastructure. Every web project is built to deliver fast page loads, responsive mobile experience, clean code architecture, and search engine visibility.",
  problemsSolved: [
    "Slow page loading speeds harming Google search rankings and user retention.",
    "Outdated non-responsive website layouts breaking on mobile screens.",
    "Difficulty updating content or adding custom lead collection features.",
    "Lack of proper security, SSL encryption, and analytics integration.",
  ],
  deliverables: [
    "Responsive Corporate Websites",
    "Custom Web Applications",
    "High-Converting Landing Pages",
    "Admin Content Dashboards",
  ],
  features: [
    { title: "Custom Design & UX", desc: "Clean corporate visual aesthetics with intuitive user interfaces." },
    { title: "Lightning Speed", desc: "Optimized Core Web Vitals LCP & CLS using Server Components." },
    { title: "SEO-Ready Architecture", desc: "Dynamic sitemaps, structured data schema, and semantic tags." },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Scope definition & wireframes." },
    { step: "02", title: "Design", desc: "Figma UI/UX prototype." },
    { step: "03", title: "Build", desc: "Clean TypeScript & Next.js code." },
    { step: "04", title: "Deploy", desc: "Vercel / Cloud server launch." },
  ],
  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Node.js"],
  whoItIsFor: "Businesses, startups, and established enterprises needing a fast, modern, and reliable web presence to showcase services and capture customer leads.",
  faqs: [
    { q: "How long does a website project take?", a: "Standard corporate websites take 2 to 4 weeks, while complex web applications take 4 to 8 weeks." },
    { q: "Will my website be mobile-responsive?", a: "Yes, 100% of our web solutions are designed mobile-first and tested across all screen resolutions." },
  ],
};

export default function WebDevelopmentPage() {
  return <ServiceDetailTemplate config={webDevConfig} />;
}
