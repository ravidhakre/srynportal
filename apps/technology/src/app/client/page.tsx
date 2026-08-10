"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyProjectDocument, TechnologyQuoteDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { FolderKanban, FileText, Lock } from "lucide-react";

export default function TechnologyClientPortalPage() {
  const { currentUser: user } = useAuth();
  const [projects, setProjects] = useState<TechnologyProjectDocument[]>([]);
  const [quotes, setQuotes] = useState<TechnologyQuoteDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClientData() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const db = getFirebaseDb();
        const prjQ = query(
          collection(db, COLLECTIONS.TECHNOLOGY_PROJECTS),
          where("clientUid", "==", user.uid)
        );
        const qteQ = query(
          collection(db, COLLECTIONS.TECHNOLOGY_QUOTES),
          where("clientId", "==", user.uid)
        );

        const [prjSnap, qteSnap] = await Promise.all([getDocs(prjQ), getDocs(qteQ)]);

        const pList: TechnologyProjectDocument[] = [];
        prjSnap.forEach((d) => pList.push(d.data() as TechnologyProjectDocument));

        const qList: TechnologyQuoteDocument[] = [];
        qteSnap.forEach((d) => qList.push(d.data() as TechnologyQuoteDocument));

        setProjects(pList);
        setQuotes(qList);
      } catch (err) {
        console.error("Error fetching client portal data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchClientData();
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <Lock className="w-12 h-12 text-sky-400 mx-auto" />
          <h2 className="text-xl font-bold text-white">Client Portal Authentication Required</h2>
          <p className="text-slate-400 text-xs">Please log in to your SRYN Technology client account to view your projects and quotes.</p>
        </Card>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 text-left">
        <div className="border-b border-slate-800 pb-6">
          <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
            SRYN TECHNOLOGY CLIENT PORTAL
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Client Workspace</h1>
          <p className="text-slate-400 text-xs mt-0.5">Logged in as {user.email}</p>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <FolderKanban className="w-5 h-5 text-sky-400" />
            <span>My Software Projects</span>
          </div>

          <Card className="bg-slate-900 border-slate-800 p-6">
            {loading ? (
              <p className="text-slate-400 text-sm text-center">Loading client projects...</p>
            ) : projects.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No active technology projects linked to your account.</p>
            ) : (
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.projectId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="font-mono text-sky-400 font-bold">{p.projectId}</span>
                      <h4 className="text-base font-bold text-white mt-0.5">{p.name}</h4>
                      <p className="text-slate-400 text-[11px]">{p.service}</p>
                    </div>
                    <Badge variant="secondary">{p.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Quotes Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span>My Quotation Proposals</span>
          </div>

          <Card className="bg-slate-900 border-slate-800 p-6">
            {loading ? (
              <p className="text-slate-400 text-sm text-center">Loading quotes...</p>
            ) : quotes.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No quotation proposals assigned.</p>
            ) : (
              <div className="space-y-3">
                {quotes.map((q) => (
                  <div key={q.quoteId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="font-mono text-sky-400 font-bold">{q.quoteId}</span>
                      <h4 className="text-base font-bold text-white mt-0.5">{q.title}</h4>
                      <p className="text-slate-400 text-[11px]">Total: ₹{q.total?.toLocaleString()}</p>
                    </div>
                    <Badge variant="secondary">{q.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
