"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { CommunicationLogDocument } from "@sryn/database";
import { MessageSquare } from "lucide-react";

export default function AdminCommunicationsPage() {
  const [logs, setLogs] = useState<CommunicationLogDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [channelFilter, setChannelFilter] = useState("ALL");

  useEffect(() => {
    async function fetchLogs() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.COMMUNICATION_LOGS));
        const list: CommunicationLogDocument[] = [];
        snap.forEach((d) => list.push(d.data() as CommunicationLogDocument));
        setLogs(list);
      } catch (err) {
        console.error("Error fetching communication logs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLogs();
  }, []);

  const filtered = channelFilter === "ALL" ? logs : logs.filter((l) => l.channel === channelFilter);

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            MULTI-CHANNEL COMMUNICATIONS
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Communication Logs</h1>
        </div>

        <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
          {["ALL", "IN_APP", "EMAIL", "WHATSAPP", "SMS"].map((ch) => (
            <button
              key={ch}
              onClick={() => setChannelFilter(ch)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                channelFilter === ch ? "bg-slate-800 text-white border border-slate-700" : "text-slate-400 hover:text-white"
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading communication logs...</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-8 space-y-3">
            <MessageSquare className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No communication dispatch logs recorded for filter ({channelFilter}).</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((log) => (
              <div key={log.communicationId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{log.communicationId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{log.recipient}</h4>
                  <p className="text-slate-400 text-[11px]">{log.channel} • Direction: {log.direction} • Template: {log.template || "GENERAL"}</p>
                </div>
                <Badge variant="secondary">{log.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
