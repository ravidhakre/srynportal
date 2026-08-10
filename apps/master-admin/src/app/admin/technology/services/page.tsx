import React from "react";
import { Badge, Card } from "@sryn/ui";

export default function AdminTechServicesPage() {
  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          TECHNOLOGY SERVICES CMS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Tech Offerings CMS</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <p className="text-slate-400 text-sm">Technology service offerings managed in the centralized CMS.</p>
      </Card>
    </div>
  );
}
