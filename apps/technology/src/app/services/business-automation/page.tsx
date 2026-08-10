import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Business Process Automation Services | SRYN Technology",
  description: "Automate repetitive business processes, CRM lead triggers, email notifications, and data workflows.",
};

const autoConfig: ServiceDetailConfig = {
  title: "Business Process Automation & Workflows",
  badge: "BUSINESS AUTOMATION",
  tagline: "Streamline Operations & Save Time",
  description: "Eliminate manual data entry and speed up operational response times with custom business workflow automation.",
  overview: "We audit manual business processes and implement automated webhooks, database triggers, email notifications, and CRM status workflows.",
  problemsSolved: ["Human errors in manual data entry.", "Delayed customer response times after form submission."],
  deliverables: ["Workflow Automation Blueprint", "Webhook Trigger Scripts", "System Health Monitoring"],
  features: [{ title: "Zero Manual Repetition", desc: "Automate lead routing, status updates, and invoice receipts." }],
  process: [{ step: "01", title: "Process Audit", desc: "Identify bottlenecks." }, { step: "02", title: "Automation", desc: "Deploy triggers." }],
  techStack: ["Node.js", "Firebase Functions", "Zapier / Make API", "Webhooks"],
  whoItIsFor: "Businesses looking to scale operations without increasing administrative headcount.",
  faqs: [{ q: "Can automation connect our existing tools?", a: "Yes, we connect third-party APIs and custom software into unified automated workflows." }],
};

export default function BusinessAutomationPage() {
  return <ServiceDetailTemplate config={autoConfig} />;
}
