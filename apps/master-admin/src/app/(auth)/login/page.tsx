"use client";

import React, { useState } from "react";
import { AuthCard, FormInput, Button } from "@sryn/ui";
import { signInWithEmailAndPassword, getUserProfile } from "@sryn/database/firebase/auth";
import { getFirebaseAuth } from "@sryn/database/firebase/client";
import { mapFirebaseAuthError, isAdmin } from "@sryn/auth";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
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
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const profile = await getUserProfile(cred.user.uid);

      if (!profile || !isAdmin(profile.role)) {
        setError("Your account does not have administrative access permissions.");
        return;
      }

      if (profile.status !== "ACTIVE") {
        setError("Your administrative account is suspended or inactive.");
        return;
      }

      router.push("/");
    } catch (err) {
      setError(mapFirebaseAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Admin Authentication"
      description="Secure login for SRYN Master & Vertical Administrators"
      subtitle="Enterprise Security Portal"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
            {error}
          </div>
        )}
        <FormInput
          label="Admin Email"
          type="email"
          placeholder="admin@sryn.online"
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
        <Button type="submit" variant="tech" size="lg" className="w-full mt-2" disabled={loading}>
          {loading ? "Authenticating..." : "Authorize Login"}
        </Button>
      </form>
    </AuthCard>
  );
}
