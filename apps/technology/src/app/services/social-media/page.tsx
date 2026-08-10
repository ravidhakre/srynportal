import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Social Media Management | SRYN Technology",
  description: "Social media management: content strategy, post design, reels, community management, and analytics.",
};

const smmConfig: ServiceDetailConfig = {
  title: "Social Media Management & Brand Content Strategy",
  badge: "SOCIAL MEDIA MANAGEMENT",
  tagline: "Content Design & Channel Growth",
  description: "Maintain a professional social media presence across LinkedIn, Instagram, Facebook, and YouTube.",
  overview: "Our social media management service handles content calendar planning, custom post graphics, short video reels, caption copywriting, and monthly performance tracking.",
  problemsSolved: ["Inconsistent posting schedule creating an inactive brand appearance."],
  deliverables: ["Monthly Content Calendar", "Graphic Design & Copywriting", "Publishing & Scheduling"],
  features: [{ title: "Brand Alignment", desc: "Cohesive visual identity across all social channels." }],
  process: [{ step: "01", title: "Calendar", desc: "Plan monthly topics." }, { step: "02", title: "Publish", desc: "Design & schedule posts." }],
  techStack: ["Meta Business Suite", "Canva Pro", "Buffer", "Analytics Tools"],
  whoItIsFor: "Businesses wanting a consistent, active, and professional brand image across major social networks.",
  faqs: [{ q: "How many posts are included each month?", a: "Packages range from 12 to 24 posts per month depending on strategy requirements." }],
};

export default function SocialMediaPage() {
  return <ServiceDetailTemplate config={smmConfig} />;
}
