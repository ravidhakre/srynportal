import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "CRM & ERP Custom Systems | Lead & Operations Software | SRYN Technology",
  description: "Custom CRM and ERP systems for lead management, sales tracking, inventory, and enterprise operations.",
};

const crmErpConfig: ServiceDetailConfig = {
  title: "Tailored CRM & ERP Systems for Enterprise Operations",
  badge: "CRM & ERP SYSTEMS",
  tagline: "Lead Pipelines & Operational Control",
  description: "Take control of lead pipelines, customer interactions, sales follow-ups, and operational resources with custom CRM & ERP systems.",
  overview: "Our CRM and ERP solutions replace generic software with tailored workflows. Track leads from initial inquiry through status progression, team assignments, and final conversion with complete visibility.",
  problemsSolved: ["Leads falling through the cracks without assigned follow-ups.", "Inability to track sales pipeline metrics across executive teams."],
  deliverables: ["Custom CRM Dashboard", "Lead Status Pipelines", "Follow-up Notification Engine", "Analytics Reports"],
  features: [
    { title: "Visual Pipeline", desc: "Track leads through custom statuses (NEW, QUALIFIED, PROPOSAL, WON)." },
    { title: "Team Assignment", desc: "Assign leads to specific account executives with notification triggers." },
  ],
  process: [
    { step: "01", title: "Audit", desc: "Review sales workflow." },
    { step: "02", title: "Build", desc: "Custom CRM & ERP development." },
    { step: "03", title: "Train", desc: "Team onboarding & launch." },
  ],
  techStack: ["Next.js", "Firebase Firestore", "TypeScript", "Node.js"],
  whoItIsFor: "Sales teams, agencies, service organizations, and growing businesses needing structured lead management.",
  faqs: [{ q: "Can leads be exported to Excel?", a: "Yes, our CRM dashboards support one-click CSV/Excel exports." }],
};

export default function CrmErpPage() {
  return <ServiceDetailTemplate config={crmErpConfig} />;
}
