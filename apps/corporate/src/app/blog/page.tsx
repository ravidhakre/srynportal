import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type BlogDocument } from "@sryn/database";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "SRYN Blog & Insights | Corporate Articles",
  description: "Read articles and insights across technology, finance, recruitment, and business management from SRYN.",
};

async function getPublishedBlogs(): Promise<BlogDocument[]> {
  try {
    const db = getFirebaseDb();
    const q = query(collection(db, COLLECTIONS.BLOGS), where("isPublished", "==", true));
    const snap = await getDocs(q);
    const list: BlogDocument[] = [];
    snap.forEach((doc) => list.push(doc.data() as BlogDocument));
    return list;
  } catch (err) {
    console.warn("Could not fetch blogs from Firestore:", err);
    return [];
  }
}

export default async function BlogListPage() {
  const blogs = await getPublishedBlogs();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary">CORPORATE INSIGHTS</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">SRYN Blog & Articles</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Perspectives and updates on technology, financial solutions, and workforce trends.
        </p>
      </section>

      {blogs.length === 0 ? (
        <Card className="bg-slate-900 border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Published Articles Yet</h3>
          <p className="text-slate-400 text-sm">
            Our editorial team is preparing insights across Technology, FinServ, and Recruitment. Check back soon!
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Card key={post.id} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <Badge variant="tech">{post.category || "General"}</Badge>
                <h3 className="text-xl font-bold text-white leading-snug">{post.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-3">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-sryn-blue hover:underline">
                Read Full Article →
              </Link>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
