"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { ContactSubmissionDocument } from "@sryn/database";
import { Mail } from "lucide-react";

export default function AdminContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmissionDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.CONTACT_SUBMISSIONS));
        const list: ContactSubmissionDocument[] = [];
        snap.forEach((d) => list.push(d.data() as ContactSubmissionDocument));
        setSubmissions(list);
      } catch (err) {
        console.error("Error fetching contact submissions:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CONTACT ENQUIRIES
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Central Contact Submissions</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading contact submissions...</p>
        ) : submissions.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <Mail className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No contact form submissions recorded yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div key={s.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{s.name}</h4>
                  <Badge variant="secondary">{s.businessVertical}</Badge>
                </div>
                <p className="text-slate-400">{s.email} • {s.phone}</p>
                <p className="text-slate-300 font-medium">{s.message}</p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
