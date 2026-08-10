"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { AutomationRuleDocument, AutomationRunDocument } from "@sryn/database";
import { Sliders, Play } from "lucide-react";

export default function AdminAutomationsPage() {
  const [rules, setRules] = useState<AutomationRuleDocument[]>([]);
  const [runs, setRuns] = useState<AutomationRunDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAutomationData() {
      try {
        const db = getFirebaseDb();
        const [rulesSnap, runsSnap] = await Promise.all([
          getDocs(collection(db, COLLECTIONS.AUTOMATION_RULES)),
          getDocs(collection(db, COLLECTIONS.AUTOMATION_RUNS)),
        ]);

        const rList: AutomationRuleDocument[] = [];
        rulesSnap.forEach((d) => rList.push(d.data() as AutomationRuleDocument));

        const runList: AutomationRunDocument[] = [];
        runsSnap.forEach((d) => runList.push(d.data() as AutomationRunDocument));

        setRules(rList);
        setRuns(runList);
      } catch (err) {
        console.error("Error fetching automation data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAutomationData();
  }, []);

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          WORKFLOW ENGINE
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Automation Rules & Event Triggers</h1>
        <p className="text-slate-400 text-xs mt-0.5">Predefined safe event automation rules and execution logs</p>
      </div>

      {/* Rules */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Sliders className="w-5 h-5 text-emerald-400" />
          <span>Configured Automation Rules</span>
        </h3>

        <Card className="bg-slate-900 border-slate-800 p-6">
          {loading ? (
            <p className="text-slate-400 text-sm text-center">Loading rules...</p>
          ) : rules.length === 0 ? (
            <div className="text-center py-6 space-y-2">
              <p className="text-slate-400 text-sm">No custom rules added yet. Default predefined triggers are active.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {["NEW_LEAD → Notify Team", "INTERVIEW_CREATED → Candidate Alert", "PAYMENT_SUCCESS → Invoice Update", "JOB_EXPIRING → Employer Alert"].map((r, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-400">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {rules.map((rule) => (
                <div key={rule.ruleId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <h4 className="text-base font-bold text-white">{rule.name}</h4>
                    <p className="text-slate-400 text-[11px]">Event: {rule.eventType} • Vertical: {rule.businessVertical || "ALL"}</p>
                  </div>
                  <Badge variant={rule.status === "ACTIVE" ? "success" : "secondary"}>{rule.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Execution Runs */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Play className="w-5 h-5 text-sky-400" />
          <span>Recent Execution Runs</span>
        </h3>

        <Card className="bg-slate-900 border-slate-800 p-6">
          {loading ? (
            <p className="text-slate-400 text-sm text-center">Loading execution logs...</p>
          ) : runs.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">No execution run logs recorded yet.</p>
          ) : (
            <div className="space-y-3">
              {runs.map((run) => (
                <div key={run.runId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <span className="font-mono text-sky-400 font-bold">{run.runId}</span>
                    <p className="text-slate-400 text-[11px]">Rule: {run.ruleId} • Event: {run.eventId}</p>
                  </div>
                  <Badge variant={run.status === "SUCCESS" ? "success" : "danger"}>{run.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
