import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Recruiter Follow-ups | SRYN Recruitment",
  description: "Tasks and follow-up reminders.",
};

export default function RecruiterFollowupsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          FOLLOW-UPS & TASKS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Pending Follow-ups</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <p className="text-slate-400 text-sm">No pending follow-up tasks.</p>
      </Card>
    </main>
  );
}
