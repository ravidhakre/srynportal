import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) | SRYN Technology",
  description: "Targeted Facebook and Instagram ad campaigns for lead generation, brand awareness, and retargeting.",
};

const metaAdsConfig: ServiceDetailConfig = {
  title: "Meta Ads (Facebook & Instagram) Lead Campaigns",
  badge: "META ADS",
  tagline: "Targeted Social Media Advertising",
  description: "Reach your ideal audience on Facebook and Instagram with visually compelling ad campaigns.",
  overview: "We craft targeted Meta ad strategies incorporating Instant Lead Forms, Messenger campaigns, custom audience lookalikes, and website retargeting pixels.",
  problemsSolved: ["Low brand awareness on social platforms.", "High ad cost per lead without audience segmentation."],
  deliverables: ["Meta Pixel Setup", "Ad Creative & Copywriting", "Lead Form Configuration", "A/B Testing"],
  features: [{ title: "Lead Instant Forms", desc: "Capture customer contact info directly within Facebook/Instagram." }],
  process: [{ step: "01", title: "Targeting", desc: "Audience demographic research." }, { step: "02", title: "Scale", desc: "Retargeting & budget scaling." }],
  techStack: ["Meta Business Manager", "Facebook Pixel", "Instagram Ads API"],
  whoItIsFor: "B2B and B2C businesses looking to generate direct leads and increase brand visibility on social media.",
  faqs: [{ q: "Do leads go directly to our CRM?", a: "Yes, we integrate Meta Lead Forms directly into your SRYN Technology CRM or email inbox." }],
};

export default function MetaAdsPage() {
  return <ServiceDetailTemplate config={metaAdsConfig} />;
}
