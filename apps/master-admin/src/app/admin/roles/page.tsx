import React from "react";
import { Badge, Card } from "@sryn/ui";
import { SystemRole, ROLE_PERMISSIONS } from "@sryn/auth";
import { ShieldCheck } from "lucide-react";

export default function AdminRolesPage() {
  const rolesList = Object.values(SystemRole);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          ROLE MANAGEMENT
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">System Roles Directory</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rolesList.map((roleKey) => {
          const perms = ROLE_PERMISSIONS[roleKey] || [];
          return (
            <Card key={roleKey} className="bg-slate-900 border-slate-800 p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-base">{roleKey}</h3>
              </div>
              <p className="text-xs text-slate-400">Assigned permissions: {perms.length} items</p>
              <div className="flex flex-wrap gap-1 pt-2">
                {perms.slice(0, 5).map((p, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-emerald-400 font-mono">
                    {p}
                  </span>
                ))}
                {perms.length > 5 && (
                  <span className="text-[10px] text-slate-500 self-center">+{perms.length - 5} more</span>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
