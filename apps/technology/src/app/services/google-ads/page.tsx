import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Google Ads PPC Campaigns | Search & Display | SRYN Technology",
  description: "Performance Google Ads campaigns: Search Ads, Display Network, Remarketing, and Conversion Tracking.",
};

const googleAdsConfig: ServiceDetailConfig = {
  title: "Google Ads Campaigns Engineered for Lead Conversion",
  badge: "GOOGLE ADS PPC",
  tagline: "Search & Performance Max Campaigns",
  description: "Capture high-intent customer searches on Google with targeted pay-per-click (PPC) ad campaigns.",
  overview: "We design and manage Google Search and Performance Max campaigns targeting high-conversion keywords. We set up precise conversion tracking to measure exact cost-per-lead (CPL) metrics.",
  problemsSolved: ["High ad spend with poor lead quality.", "Lack of proper conversion tracking on ad campaigns."],
  deliverables: ["Keyword Research", "Ad Copy & Landing Page Alignment", "Conversion Pixel Setup", "Campaign Optimization"],
  features: [{ title: "Conversion Tracking", desc: "Track actual form submissions and phone calls generated." }],
  process: [{ step: "01", title: "Setup", desc: "Keyword & ad setup." }, { step: "02", title: "Optimize", desc: "Negative keywords & bid adjustments." }],
  techStack: ["Google Ads", "Google Tag Manager", "Google Analytics 4"],
  whoItIsFor: "Businesses requiring immediate qualified leads from customers actively searching for services.",
  faqs: [{ q: "What is the recommended monthly ad budget?", a: "Ad budgets depend on industry competition. We help structure appropriate daily budgets tailored to your lead goals." }],
};

export default function GoogleAdsPage() {
  return <ServiceDetailTemplate config={googleAdsConfig} />;
}
