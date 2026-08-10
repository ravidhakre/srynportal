"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { AuditLogDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { isSuperAdmin } from "@sryn/auth";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export default function AdminAuditLogsPage() {
  const { role } = useAuth();
  const [logs, setLogs] = useState<AuditLogDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAuditLogs() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.AUDIT_LOGS));
        const list: AuditLogDocument[] = [];
        snap.forEach((d) => list.push(d.data() as AuditLogDocument));
        setLogs(list);
      } catch (err) {
        console.error("Error fetching audit logs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAuditLogs();
  }, []);

  if (!isSuperAdmin(role)) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-8">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — SUPER_ADMIN Access Required</h2>
          <p className="text-slate-400 text-sm">
            System audit logs are strictly restricted to SUPER_ADMIN accounts.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          SECURITY & COMPLIANCE AUDIT
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">System Audit Trail</h1>
        <p className="text-slate-400 text-xs mt-0.5">Immutable log of system mutations, access updates, and administrative events</p>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading security audit records...</p>
        ) : logs.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <ShieldCheck className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No security audit logs recorded yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((l) => (
              <div key={l.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{l.action}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{l.entity} • {l.entityId}</h4>
                  <p className="text-slate-400 text-[11px]">Actor: {l.actorEmail} ({l.actorRole})</p>
                </div>
                <Badge variant="secondary">{l.businessVertical || "SYSTEM"}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
