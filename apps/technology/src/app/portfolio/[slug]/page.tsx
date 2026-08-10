import React from "react";
import { Metadata } from "next";
import { Badge, Button } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type TechnologyPortfolioDocument } from "@sryn/database";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | SRYN Technology Portfolio`,
    description: "Project case study overview from SRYN Technology.",
  };
}

async function getPortfolioDetail(slug: string): Promise<TechnologyPortfolioDocument | null> {
  try {
    const db = getFirebaseDb();
    const q = query(collection(db, COLLECTIONS.TECHNOLOGY_PORTFOLIO), where("slug", "==", slug), where("isPublished", "==", true));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return snap.docs[0]?.data() as TechnologyPortfolioDocument;
  } catch (err) {
    console.warn("Error fetching portfolio:", err);
    return null;
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getPortfolioDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <Link href="/portfolio">
        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Button>
      </Link>

      <div className="space-y-3">
        <Badge variant="tech">{project.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{project.title}</h1>
        <p className="text-slate-300 text-sm">{project.shortDescription}</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 border-t border-slate-800 pt-6">
        {project.description}
      </div>
    </main>
  );
}
