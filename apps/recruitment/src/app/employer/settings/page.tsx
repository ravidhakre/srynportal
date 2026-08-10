import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";

export const metadata: Metadata = {
  title: "Employer Settings | SRYN Recruitment",
  description: "Employer account settings and team preferences.",
};

export default function EmployerSettingsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-left">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          ACCOUNT SETTINGS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Employer Settings</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-4 text-slate-300 text-sm">
        <p>Employer account notification preferences and hiring team permissions.</p>
      </Card>
    </main>
  );
}
