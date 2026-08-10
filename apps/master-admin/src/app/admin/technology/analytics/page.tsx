import React from "react";
import { Badge, Card } from "@sryn/ui";

export default function AdminTechAnalyticsPage() {
  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          TECH ANALYTICS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Technology Metrics & Conversion</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <p className="text-slate-400 text-sm">Tech lead sources, service demand, project delivery times, and quote conversions.</p>
      </Card>
    </div>
  );
}
