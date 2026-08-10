import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import Link from "next/link";
import { Laptop, Code, ShoppingBag, Smartphone, Database, Link as LinkIcon, Megaphone, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Services | Web, Software, E-Commerce & Marketing",
  description: "Explore services provided by SRYN Technology: Web Development, Custom Software, CRM/ERP, Digital Marketing, and Business Automation.",
};

const allServices = [
  { slug: "web-development", title: "Web Development", desc: "Corporate sites, landing pages, responsive custom web applications.", icon: Laptop },
  { slug: "software-development", title: "Software Development", desc: "Management systems, custom internal tools, admin dashboards.", icon: Code },
  { slug: "ecommerce", title: "E-Commerce Development", desc: "Online stores, order tracking, product catalogs, payment systems.", icon: ShoppingBag },
  { slug: "mobile-app-development", title: "Mobile App Development", desc: "Android, iOS, cross-platform mobile business applications.", icon: Smartphone },
  { slug: "crm-erp", title: "CRM & ERP Systems", desc: "Lead pipelines, sales tracking, inventory, operations software.", icon: Database },
  { slug: "api-integration", title: "API & Integration", desc: "Payment gateways, webhooks, third-party software integrations.", icon: LinkIcon },
  { slug: "seo", title: "SEO Optimization", desc: "Technical, on-page, local SEO to improve organic search visibility.", icon: Megaphone },
  { slug: "google-ads", title: "Google Ads Campaigns", desc: "Search, display, and remarketing performance ad campaigns.", icon: Megaphone },
  { slug: "meta-ads", title: "Meta Ads Marketing", desc: "Facebook and Instagram lead generation and retargeting ads.", icon: Megaphone },
  { slug: "social-media", title: "Social Media Management", desc: "Content strategy, post design, reels, and community engagement.", icon: Megaphone },
  { slug: "whatsapp-marketing", title: "WhatsApp Marketing", desc: "WhatsApp Business API, notification triggers, and customer messaging.", icon: Zap },
  { slug: "lead-generation", title: "Lead Generation", desc: "Multi-channel funnel strategies capturing qualified business leads.", icon: Megaphone },
  { slug: "business-automation", title: "Business Automation", desc: "Workflow automation, CRM triggers, and automated customer follow-ups.", icon: Zap },
  { slug: "digital-marketing", title: "Digital Marketing Overview", desc: "Comprehensive growth strategy combining SEO, PPC, and Social.", icon: Megaphone },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">OUR SERVICES</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Technology & Digital Services</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Full-lifecycle digital services for businesses seeking modern web applications, software tools, or performance marketing.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((srv) => (
          <Card key={srv.slug} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-sryn-blue transition-colors">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20">
                <srv.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{srv.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{srv.desc}</p>
            </div>
            <Link href={`/services/${srv.slug}`} className="text-xs font-semibold text-sryn-blue flex items-center hover:underline pt-2">
              <span>View Service Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
