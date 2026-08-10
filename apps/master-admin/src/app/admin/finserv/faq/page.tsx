"use client";

import React from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { HelpCircle } from "lucide-react";

export default function FinServFaqAdminPage() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="danger">CMS MANAGEMENT</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">FinServ FAQ CMS</h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage financial FAQs across loan categories and credit consultation</p>
        </div>
        <Button variant="danger">Add FAQ</Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-4">
        <HelpCircle className="w-12 h-12 text-sryn-red mx-auto" />
        <h3 className="text-xl font-bold text-white">FinServ FAQ CMS Active</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Manage FAQs in Firestore collection <span className="text-sryn-red font-mono">faqs</span>.
        </p>
      </Card>
    </main>
  );
}
