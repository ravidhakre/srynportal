import React from "react";
import { Badge, Card } from "@sryn/ui";
import { Clock, CheckCircle2 } from "lucide-react";

export default function AdminScheduledJobsPage() {
  const jobs = [
    { name: "processDueFollowups", schedule: "Every 15 mins", description: "Trigger follow-up notifications for due CRM leads and projects" },
    { name: "processInterviewReminders", schedule: "Hourly", description: "Send candidate/interviewer reminders 24h & 2h before interviews" },
    { name: "processJobExpiry", schedule: "Daily at 00:00 UTC", description: "Flag expired recruitment job requisitions automatically" },
    { name: "processFinanceDocumentReminders", schedule: "Daily at 09:00 UTC", description: "Send pending document submission reminders for loan applications" },
    { name: "processOverdueTasks", schedule: "Daily at 08:00 UTC", description: "Alert team leads on overdue technology project tasks" },
  ];

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          SCHEDULED WORKFLOWS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Server-Side Scheduled Jobs</h1>
      </div>

      <div className="space-y-4">
        {jobs.map((j, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800 p-6 flex items-center justify-between text-xs text-slate-300">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-white text-base">{j.name}</h3>
              </div>
              <p className="text-slate-400 text-xs">{j.description}</p>
              <span className="text-sky-400 font-mono text-[11px]">Schedule: {j.schedule}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Badge variant="success" className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Ready / Active
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
