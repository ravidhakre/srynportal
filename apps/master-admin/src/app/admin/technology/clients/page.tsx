"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyClientDocument } from "@sryn/database";
import { Users } from "lucide-react";

export default function AdminTechClientsPage() {
  const [clients, setClients] = useState<TechnologyClientDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_CLIENTS));
        const list: TechnologyClientDocument[] = [];
        snap.forEach((d) => list.push(d.data() as TechnologyClientDocument));
        setClients(list);
      } catch (err) {
        console.error("Error fetching clients:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchClients();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          CLIENT DIRECTORY
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Technology Client Accounts</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading client accounts...</p>
        ) : clients.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No client accounts registered yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {clients.map((c) => (
              <div key={c.clientId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-sky-400 font-bold">{c.clientId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{c.name}</h4>
                  <p className="text-slate-400 text-[11px]">{c.email} • {c.company}</p>
                </div>
                <Badge variant="secondary">{c.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
