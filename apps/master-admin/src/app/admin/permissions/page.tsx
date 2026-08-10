import React from "react";
import { Badge, Card } from "@sryn/ui";
import { PermissionCode } from "@sryn/auth";

export default function AdminPermissionsPage() {
  const permList = Object.values(PermissionCode);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          PERMISSIONS MATRIX
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">System Permission Codes</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {permList.map((p, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400">
              {p}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
