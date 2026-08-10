import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs by Location | SRYN Recruitment",
  description: "Browse job openings across major Indian metros and remote hubs.",
};

const locations = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Remote",
];

export default function LocationsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          LOCATIONS
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Jobs by Location</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {locations.map((loc) => (
          <Link key={loc} href={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}>
            <Card className="bg-slate-900 border-slate-800 p-5 text-center space-y-1 hover:border-emerald-500/50 transition-colors">
              <h3 className="font-bold text-white text-base">{loc}</h3>
              <span className="text-xs text-emerald-400 font-semibold">View Jobs →</span>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
