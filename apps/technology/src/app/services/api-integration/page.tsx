import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "API & Webhook Integration Services | SRYN Technology",
  description: "Seamless REST API, GraphQL, payment gateway, and third-party software integrations.",
};

const apiConfig: ServiceDetailConfig = {
  title: "API & System Integration Services",
  badge: "API INTEGRATION",
  tagline: "Connecting Applications & Software Services",
  description: "Connect your web applications with payment gateways, SMS gateways, CRMs, WhatsApp APIs, and external databases.",
  overview: "Modern web platforms rely on interconnected APIs. SRYN Technology builds secure RESTful API layers and integrates third-party webhooks for seamless real-time data exchange.",
  problemsSolved: ["Manual data copying between different software tools.", "Lack of instant payment and SMS notification confirmations."],
  deliverables: ["Custom REST API Endpoints", "Webhook Listener Services", "Third-Party Integration Testing"],
  features: [{ title: "Secure Authentication", desc: "Bearer tokens, OAuth2, and secret key encryption." }],
  process: [{ step: "01", title: "API Audit", desc: "Review documentation." }, { step: "02", title: "Integration", desc: "Build & test webhooks." }],
  techStack: ["Node.js", "Express", "Next.js API Routes", "Firebase Functions"],
  whoItIsFor: "Businesses wanting to connect disparate software platforms into one automated ecosystem.",
  faqs: [{ q: "Do you integrate payment gateways like Razorpay?", a: "Yes, we integrate Razorpay, Stripe, and UPI APIs." }],
};

export default function ApiIntegrationPage() {
  return <ServiceDetailTemplate config={apiConfig} />;
}
