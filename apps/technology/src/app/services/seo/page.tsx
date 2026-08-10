import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "SEO Optimization Services | Search Visibility | SRYN Technology",
  description: "Technical SEO, on-page optimization, local SEO, and keyword strategy to improve organic search visibility.",
};

const seoConfig: ServiceDetailConfig = {
  title: "SEO Optimization Services for Organic Growth",
  badge: "SEO SERVICES",
  tagline: "Improve Search Visibility & Organic Traffic",
  description: "Drive relevant organic visitors to your website with structured technical SEO, keyword optimization, and content architecture.",
  overview: "Our SEO team focuses on sustainable organic visibility. We optimize Core Web Vitals, fix technical crawling errors, create schema structured data, and target high-intent search keywords.",
  problemsSolved: ["Low website traffic from search engines.", "Technical indexing issues blocking Google crawler access."],
  deliverables: ["Technical SEO Audit", "On-Page Keyword Optimization", "Schema Structured Data", "Monthly Ranking Reports"],
  features: [{ title: "Technical Optimization", desc: "Speed, sitemap, robots.txt, and canonical URL fixes." }],
  process: [{ step: "01", title: "Audit", desc: "Review site health." }, { step: "02", title: "Optimize", desc: "On-page & technical fixes." }],
  techStack: ["Google Search Console", "Lighthouse", "Schema.org", "Google Analytics"],
  whoItIsFor: "Businesses looking to build reliable, long-term organic search traffic and qualified leads without relying solely on paid ads.",
  faqs: [{ q: "Do you guarantee #1 ranking on Google?", a: "No ethical agency guarantees #1 rankings. We focus on proven white-hat SEO practices that systematically improve search visibility." }],
};

export default function SeoPage() {
  return <ServiceDetailTemplate config={seoConfig} />;
}
