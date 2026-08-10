"use client";

import React from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { FileText } from "lucide-react";

export default function FinServContentAdminPage() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="danger">CMS MANAGEMENT</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">FinServ Content & Disclaimers CMS</h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage public site content disclaimers and page copies</p>
        </div>
        <Button variant="danger">Update Disclaimers</Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-4">
        <FileText className="w-12 h-12 text-sryn-red mx-auto" />
        <h3 className="text-xl font-bold text-white">Content CMS Active</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Manage regulatory compliance statements and copy blocks in Firestore collection <span className="text-sryn-red font-mono">pages</span>.
        </p>
      </Card>
    </main>
  );
}
