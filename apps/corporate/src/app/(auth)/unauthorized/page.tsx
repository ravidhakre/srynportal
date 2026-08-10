import { Button } from "@sryn/ui";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        <div className="w-16 h-16 mx-auto rounded-full bg-sryn-red/10 border border-sryn-red/30 flex items-center justify-center text-sryn-red text-3xl font-extrabold">
          🚫
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-white">403 — Access Denied</h1>
          <p className="text-slate-400 text-sm">
            Your account does not have permission to access this area or business vertical.
          </p>
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Link href="/login">
            <Button variant="primary" size="lg" className="w-full">
              Sign In with Authorized Account
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="md" className="w-full text-slate-400 hover:text-white">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
