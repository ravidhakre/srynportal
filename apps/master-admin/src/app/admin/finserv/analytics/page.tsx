import React from "react";
import { Badge, Card } from "@sryn/ui";

export default function AdminFinServAnalyticsPage() {
  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
          FINSERV ANALYTICS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Finance Metrics & Funnel</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <p className="text-slate-400 text-sm">Loan lead volumes, requirement types, application statuses, and verification velocity (Sensitive PII redacted).</p>
      </Card>
    </div>
  );
}
