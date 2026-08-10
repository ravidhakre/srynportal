import React from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-sryn-navy border border-sryn-blue/40 flex items-center justify-center text-sryn-blue text-2xl font-extrabold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Technology Page Not Found</h1>
          <p className="text-slate-400 text-sm">
            The page you're looking for may have moved or is no longer available.
          </p>
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Link href="/">
            <Button variant="tech" size="md" className="w-full">
              Back to Technology Home
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="md" className="w-full">
              Explore Technology Services
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
