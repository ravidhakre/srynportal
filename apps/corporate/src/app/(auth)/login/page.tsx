"use client";

import React, { useState } from "react";
import { AuthCard, FormInput, Button } from "@sryn/ui";
import { signInWithEmailAndPassword } from "@sryn/database/firebase/auth";
import { getFirebaseAuth } from "@sryn/database/firebase/client";
import { mapFirebaseAuthError } from "@sryn/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PublicLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const auth = getFirebaseAuth();
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(mapFirebaseAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      description="Sign in to your SRYN Management account"
      subtitle="Public Portal Access"
      footer={
        <p>
          Don't have an account?{" "}
          <Link href="/register" className="text-sryn-blue hover:underline font-semibold">
            Create Account
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
            {error}
          </div>
        )}
        <FormInput
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          isPassword
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex items-center justify-end">
          <Link href="/forgot-password" className="text-xs text-slate-400 hover:text-white transition-colors">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </AuthCard>
  );
}
