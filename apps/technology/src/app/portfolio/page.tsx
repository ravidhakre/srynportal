import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type TechnologyPortfolioDocument } from "@sryn/database";
import Link from "next/link";
import { FolderGit2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Portfolio & Project Case Studies | SRYN Technology",
  description: "Explore engineering case studies and project portfolios built by SRYN Technology.",
};

async function getPortfolioProjects(): Promise<TechnologyPortfolioDocument[]> {
  try {
    const db = getFirebaseDb();
    const q = query(collection(db, COLLECTIONS.TECHNOLOGY_PORTFOLIO), where("isPublished", "==", true));
    const snap = await getDocs(q);
    const list: TechnologyPortfolioDocument[] = [];
    snap.forEach((doc) => list.push(doc.data() as TechnologyPortfolioDocument));
    return list;
  } catch (err) {
    console.warn("Could not fetch portfolio from Firestore:", err);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="tech">FEATURED WORK</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Project Portfolio</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Case studies and technology projects engineered across web development, software systems, and digital marketing.
        </p>
      </section>

      {projects.length === 0 ? (
        <Card className="bg-slate-900 border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-2xl">
          <FolderGit2 className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Public Case Studies Available Yet</h3>
          <p className="text-slate-400 text-sm">
            Our engineering team is documenting client case studies. Connect with us directly to discuss past work and technical references.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <Card key={proj.id} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <Badge variant="tech">{proj.category}</Badge>
                <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-3">{proj.shortDescription}</p>
              </div>
              <Link href={`/portfolio/${proj.slug}`} className="text-xs font-semibold text-sryn-blue hover:underline">
                View Case Study →
              </Link>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
