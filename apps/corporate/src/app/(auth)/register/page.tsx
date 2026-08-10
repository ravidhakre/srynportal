"use client";

import React, { useState } from "react";
import { AuthCard, FormInput, Button } from "@sryn/ui";
import { registerUserWithEmail } from "@sryn/database/firebase/auth";
import { SystemRole, mapFirebaseAuthError } from "@sryn/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // Always register as CUSTOMER for public self-service registration
      await registerUserWithEmail(email, password, name, SystemRole.CUSTOMER, null, phone);
      router.push("/");
    } catch (err) {
      setError(mapFirebaseAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create Account"
      description="Register for SRYN Management platform services"
      subtitle="Public Registration"
      footer={
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-sryn-blue hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
            {error}
          </div>
        )}
        <FormInput
          label="Full Name *"
          placeholder="Rahul Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          label="Email Address *"
          type="email"
          placeholder="rahul@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Mobile Number *"
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <FormInput
          label="Password *"
          isPassword
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          label="Confirm Password *"
          isPassword
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </AuthCard>
  );
}
