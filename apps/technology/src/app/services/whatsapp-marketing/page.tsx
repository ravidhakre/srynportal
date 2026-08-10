import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "WhatsApp Business API & Automation | SRYN Technology",
  description: "WhatsApp Business API integration, customer notifications, lead follow-ups, and template messaging.",
};

const waConfig: ServiceDetailConfig = {
  title: "WhatsApp Business API & Customer Messaging",
  badge: "WHATSAPP AUTOMATION",
  tagline: "Instant Customer Communication & Alerts",
  description: "Connect with customers on WhatsApp using official WhatsApp Business API integrations and automated notification triggers.",
  overview: "Send automated order receipts, appointment reminders, lead confirmations, and compliant broadcast templates through official WhatsApp Cloud API.",
  problemsSolved: ["Low open rates on traditional email marketing campaigns.", "Slow manual WhatsApp follow-ups by sales executives."],
  deliverables: ["WhatsApp API Account Setup", "Template Message Approval", "Automated Webhook Triggers"],
  features: [{ title: "High Open Rates", desc: "WhatsApp messages achieve over 90% open rates within minutes." }],
  process: [{ step: "01", title: "API Onboarding", desc: "Meta business verification." }, { step: "02", title: "Automation", desc: "Integrate trigger webhooks." }],
  techStack: ["Meta WhatsApp Cloud API", "Node.js", "Firebase Webhooks"],
  whoItIsFor: "Businesses requiring instant, reliable customer communication and automated CRM notifications.",
  faqs: [{ q: "Is WhatsApp messaging compliant with Meta policies?", a: "Yes, we use official Meta WhatsApp Cloud API with approved messaging templates." }],
};

export default function WhatsappMarketingPage() {
  return <ServiceDetailTemplate config={waConfig} />;
}
