import React from "react";
import { Metadata } from "next";
import { Badge } from "@sryn/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Jobs in ${slug.replace(/-/g, " ")} | SRYN Recruitment`,
    description: `Browse job openings located in ${slug.replace(/-/g, " ")}.`,
  };
}

export default async function SingleLocationPage({ params }: Props) {
  const { slug } = await params;
  const locationName = slug.replace(/-/g, " ");

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          LOCATION
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white capitalize">Jobs in {locationName}</h1>
      </div>
    </main>
  );
}
