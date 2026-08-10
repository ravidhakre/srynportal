"use client";

import React, { useState } from "react";
import { AuthCard, FormInput, Button } from "@sryn/ui";
import { sendResetPassword } from "@sryn/database/firebase/auth";
import { mapFirebaseAuthError } from "@sryn/auth";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await sendResetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(mapFirebaseAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Reset Password"
      description="Enter your email to receive password reset instructions"
      subtitle="Security Recovery"
      footer={
        <p>
          Remember your password?{" "}
          <Link href="/login" className="text-sryn-blue hover:underline font-semibold">
            Back to Sign In
          </Link>
        </p>
      }
    >
      {success ? (
        <div className="p-4 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-sm text-center">
          <p className="font-semibold">Password reset email sent!</p>
          <p className="mt-1 text-xs text-emerald-400">
            Please check your inbox at <span className="font-bold">{email}</span> and follow the instructions to reset your password.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
              {error}
            </div>
          )}
          <FormInput
            label="Registered Email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </Button>
        </form>
      )}
    </AuthCard>
  );
}
