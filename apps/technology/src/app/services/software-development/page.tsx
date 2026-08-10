import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Custom Software Development | Enterprise Tools & Systems | SRYN Technology",
  description: "Tailored business software development: internal tools, operational software, admin portals, and cloud backends.",
};

const softwareConfig: ServiceDetailConfig = {
  title: "Custom Business Software Engineered for Operations",
  badge: "SOFTWARE DEVELOPMENT",
  tagline: "Tailored Internal Tools & Management Systems",
  description: "We build custom software, management portals, and automated business platforms tailored precisely to your operational workflows.",
  overview: "When off-the-shelf software falls short, SRYN Technology designs custom web-based software applications. From multi-user permissions to automated task pipelines, our custom software reduces manual labor and improves team coordination.",
  problemsSolved: [
    "Inefficient manual data entry and spreadsheet errors.",
    "Lack of role-based access control leading to data security risks.",
    "Siloed business processes that cannot communicate with external tools.",
  ],
  deliverables: [
    "Custom Web Applications",
    "Internal Operations Portals",
    "Admin Command Dashboards",
    "Cloud Database Systems",
  ],
  features: [
    { title: "Role-Based Access", desc: "Granular permissions for Admins, Managers, and Executives." },
    { title: "Real-Time Cloud Sync", desc: "Powered by Firebase Firestore for immediate data synchronization." },
    { title: "Automated Triggers", desc: "Email, WhatsApp, and database webhooks on status change." },
  ],
  process: [
    { step: "01", title: "Requirement", desc: "Workflow analysis." },
    { step: "02", title: "Architecture", desc: "Database schema & API spec." },
    { step: "03", title: "Development", desc: "Incremental feature builds." },
    { step: "04", title: "Deployment", desc: "Role configuration & launch." },
  ],
  techStack: ["Node.js", "Next.js", "Firebase Admin SDK", "TypeScript", "Firestore"],
  whoItIsFor: "Organizations seeking tailored software systems to manage internal teams, inventory, clients, or custom operational pipelines.",
  faqs: [
    { q: "Can custom software be hosted on our own domain?", a: "Yes, all software systems can be deployed to your custom subdomains or cloud infrastructure." },
  ],
};

export default function SoftwareDevelopmentPage() {
  return <ServiceDetailTemplate config={softwareConfig} />;
}
