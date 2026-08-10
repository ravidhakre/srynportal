"use client";

import React, { useState } from "react";
import { Badge, Card } from "@sryn/ui";
import { BusinessVertical } from "@sryn/auth";
import { PieChart } from "lucide-react";

export default function AdminAnalyticsPage() {
  const [tab, setTab] = useState<"OVERVIEW" | typeof BusinessVertical.TECHNOLOGY | typeof BusinessVertical.FINSERV | typeof BusinessVertical.RECRUITMENT>("OVERVIEW");

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            BUSINESS ANALYTICS
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Master Performance Analytics</h1>
        </div>

        <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
          {["OVERVIEW", BusinessVertical.TECHNOLOGY, BusinessVertical.FINSERV, BusinessVertical.RECRUITMENT].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                tab === t ? "bg-slate-800 text-white border border-slate-700" : "text-slate-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <PieChart className="w-10 h-10 text-slate-500 mx-auto" />
        <h3 className="text-lg font-bold text-white">Analytics View: {tab}</h3>
        <p className="text-slate-400 text-sm">Lead acquisition trends, application conversion funnels, and business performance metrics.</p>
      </Card>
    </div>
  );
}
