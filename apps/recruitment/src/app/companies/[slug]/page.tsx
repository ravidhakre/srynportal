import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | SRYN Recruitment Company Profile`,
    description: "Employer profile and open job postings on SRYN Recruitment.",
  };
}

export default async function SingleCompanyPage({ params }: Props) {
  const { slug } = await params;
  const companyName = slug.replace(/-/g, " ");

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          COMPANY PROFILE
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white capitalize">{companyName}</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
        <p className="text-slate-300 text-sm">
          Detailed company profile and verified open requisitions for {companyName}.
        </p>
      </Card>
    </main>
  );
}
