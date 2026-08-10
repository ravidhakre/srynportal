"use client";

import React from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { Download, FileSpreadsheet } from "lucide-react";

export default function AdminReportsPage() {
  const handleExportCsv = (reportName: string) => {
    const csvContent = "data:text/csv;charset=utf-8,Report,Timestamp,Status\n" + reportName + "," + new Date().toISOString() + ",Exported";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${reportName.toLowerCase().replace(/\s+/g, "_")}_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          REPORTS & EXPORTS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Master Data Exporter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
          <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-lg">Technology Leads & Projects</h3>
          <p className="text-xs text-slate-400">Export software enquiries, project milestones, and tech quotations as CSV.</p>
          <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold" onClick={() => handleExportCsv("Technology_Leads")}>
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
          <FileSpreadsheet className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-white text-lg">FinServ Applications</h3>
          <p className="text-xs text-slate-400">Export loan applications and customer lead summaries (Sensitive PII excluded).</p>
          <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold" onClick={() => handleExportCsv("FinServ_Applications")}>
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
          <FileSpreadsheet className="w-6 h-6 text-sky-400" />
          <h3 className="font-bold text-white text-lg">Recruitment Requisitions</h3>
          <p className="text-xs text-slate-400">Export job requisitions, candidate application counts, and placement metrics.</p>
          <Button size="sm" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold" onClick={() => handleExportCsv("Recruitment_Jobs")}>
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </Card>
      </div>
    </div>
  );
}
