import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { FaqAccordion, FaqItem } from "../../components/faq-accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SRYN Management Pvt. Ltd.",
  description: "Find answers to corporate, technology, financial assistance, and recruitment FAQs at SRYN Management.",
};

const corporateFaqs: FaqItem[] = [
  {
    id: "1",
    category: "General",
    question: "What is SRYN Management Pvt. Ltd.?",
    answer:
      "SRYN Management Pvt. Ltd. is a diversified organization operating across three core business verticals — SRYN Technology, SRYN FinServ, and SRYN Recruitment.",
  },
  {
    id: "2",
    category: "General",
    question: "What business verticals does SRYN operate?",
    answer:
      "SRYN operates SRYN Technology (websites, software, digital marketing & automation), SRYN FinServ (loan assistance & credit consultation), and SRYN Recruitment (staffing, hiring & career portal).",
  },
  {
    id: "3",
    category: "General",
    question: "How can I contact SRYN Management?",
    answer:
      "You can submit an enquiry through our Contact page (/contact) or email us directly at contact@sryn.online.",
  },
  {
    id: "4",
    category: "Technology",
    question: "How can I request technology or web development services?",
    answer:
      "You can visit technology.sryn.online or submit an enquiry selecting SRYN Technology as your desired vertical.",
  },
  {
    id: "5",
    category: "FinServ",
    question: "How does SRYN FinServ assist with loan requirements?",
    answer:
      "SRYN FinServ offers professional consultation and documentation assistance for personal, business, home loans, and credit score guidance. Loan approvals remain subject to lender terms and eligibility.",
  },
  {
    id: "6",
    category: "Recruitment",
    question: "How can employers hire or candidates find jobs through SRYN Recruitment?",
    answer:
      "Visit recruitment.sryn.online to register as a candidate or employer and access our specialized IT and Non-IT recruitment services.",
  },
];

export default function FaqPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary">QUESTIONS & ANSWERS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Common questions regarding SRYN Management, our business divisions, and services.
        </p>
      </section>

      <FaqAccordion items={corporateFaqs} />
    </main>
  );
}
