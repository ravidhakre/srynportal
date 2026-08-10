import React from "react";
import { Metadata } from "next";
import { Badge, Card, Button } from "@sryn/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at SRYN | Internal Openings",
  description: "Explore career opportunities within SRYN Management Pvt. Ltd. and sister companies.",
};

export default function InternalCareersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          INTERNAL CAREERS
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Work at SRYN Management</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-4 text-slate-300 text-sm leading-relaxed text-center">
        <h3 className="text-xl font-bold text-white">Join Our Team</h3>
        <p className="max-w-lg mx-auto">
          Explore open positions across SRYN Technology, SRYN FinServ, SRYN Recruitment, and SRYN Corporate.
        </p>
        <div className="pt-4 flex justify-center">
          <Link href="/jobs?q=SRYN">
            <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
              Search SRYN Openings
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  );
}
