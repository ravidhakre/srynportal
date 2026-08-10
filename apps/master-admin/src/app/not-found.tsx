import React from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";

export default function MasterAdminNotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 text-center font-sans">
      <div className="max-w-md w-full space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl font-extrabold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Admin Page Not Found</h1>
          <p className="text-slate-400 text-sm">
            The resource you requested does not exist or you may lack administrative privileges to view it.
          </p>
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Link href="/admin/dashboard">
            <Button size="md" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
              Return to Master Control Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
