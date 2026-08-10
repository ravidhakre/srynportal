import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Candidate Job Discovery | SRYN Recruitment",
  description: "Explore recommended jobs matching your candidate profile.",
};

export default function CandidateJobsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            RECOMMENDED JOBS
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Recommended Openings</h1>
        </div>
        <Link href="/jobs">
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
            <Search className="w-3.5 h-3.5 mr-1" /> All Openings
          </Button>
        </Link>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 text-center space-y-3">
        <p className="text-slate-400 text-sm">Job recommendations matching your skills and experience will appear here.</p>
      </Card>
    </main>
  );
}
