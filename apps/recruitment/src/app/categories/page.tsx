import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Categories | SRYN Recruitment",
  description: "Browse job openings by industry, department, and specialization.",
};

const categories = [
  { name: "IT & Software Development", slug: "it-software" },
  { name: "Sales & Business Development", slug: "sales" },
  { name: "Marketing & Digital Growth", slug: "marketing" },
  { name: "Human Resources & Talent", slug: "hr" },
  { name: "Finance & Accounting", slug: "finance" },
  { name: "Operations & Logistics", slug: "operations" },
  { name: "Customer Support", slug: "customer-support" },
  { name: "Engineering & Technical", slug: "engineering" },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CATEGORIES
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Job Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}`}>
            <Card className="bg-slate-900 border-slate-800 p-6 space-y-2 hover:border-emerald-500/50 transition-colors">
              <h3 className="font-bold text-white text-base">{c.name}</h3>
              <span className="text-xs text-emerald-400 font-semibold">View Openings →</span>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
