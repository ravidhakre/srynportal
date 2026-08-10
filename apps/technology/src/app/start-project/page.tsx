import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";
import { StartProjectForm } from "../../components/start-project-form";

export const metadata: Metadata = {
  title: "Start Your Project | Technical Evaluation & Quote | SRYN Technology",
  description: "Submit your project requirements for web development, software tools, or digital marketing to receive a technical proposal.",
};

export default function StartProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <section className="text-center space-y-4">
        <Badge variant="tech">PROJECT ENQUIRY</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Tell Us About Your Project</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Share your project goals, technical requirements, and target timeline. Our engineering team will review and provide a detailed proposal.
        </p>
      </section>

      <StartProjectForm />
    </main>
  );
}
