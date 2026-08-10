import React from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl font-extrabold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Recruitment Page Not Found</h1>
          <p className="text-slate-400 text-sm">
            The page or job requisition you're looking for may have expired or moved.
          </p>
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Link href="/">
            <Button size="md" className="w-full bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
              Back to Recruitment Home
            </Button>
          </Link>
          <Link href="/jobs">
            <Button variant="outline" size="md" className="w-full border-slate-700">
              Browse Active Jobs
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
