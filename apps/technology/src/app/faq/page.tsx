import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Technology FAQs | SRYN Technology",
  description: "Find answers to frequently asked questions about web development, software tools, payment gateways, and digital marketing.",
};

const techFaqs = [
  { q: "How do I start a project with SRYN Technology?", a: "Submit your requirement through our Start Your Project page. Our technical team will review your scope and set up a discovery call." },
  { q: "How long does website or software development take?", a: "Websites take 2 to 4 weeks, custom web software takes 4 to 8 weeks, depending on custom features and API integrations." },
  { q: "Can you build custom CRM or ERP systems for our team?", a: "Yes, we build tailored CRM and ERP management software with role-based access control and automated follow-ups." },
  { q: "Can you integrate payment gateways like Razorpay or UPI?", a: "Yes, we integrate Razorpay, Stripe, and UPI payment gateways with automated webhooks and payment verification." },
  { q: "Do you provide post-launch maintenance and support?", a: "Yes, we offer ongoing maintenance, security updates, feature additions, and technical retainers." },
  { q: "Can SRYN Technology handle digital marketing and lead ads?", a: "Yes, we manage Google Search Ads, Meta Ads (Facebook/Instagram), SEO, and WhatsApp API automation." },
];

export default function FaqPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4">
        <Badge variant="tech">TECHNOLOGY QUESTIONS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Common questions regarding our software development process, technologies, timelines, and digital marketing.
        </p>
      </section>

      <div className="space-y-4">
        {techFaqs.map((faq, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-2">
            <h3 className="font-bold text-white text-base">{faq.q}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
