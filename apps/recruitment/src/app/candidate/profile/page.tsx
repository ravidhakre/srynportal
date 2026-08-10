"use client";

import React, { useState } from "react";
import { Badge, Card, Button, FormInput } from "@sryn/ui";
import { useAuth } from "@sryn/database/context/auth-context";
import { Save, UserCheck } from "lucide-react";

export default function CandidateProfilePage() {
  const { userProfile } = useAuth();
  const [headline, setHeadline] = useState("");
  const [experience, setExperience] = useState("3");
  const [skills, setSkills] = useState("React, TypeScript, Node.js");
  const [expectedSalary, setExpectedSalary] = useState("₹ 12,00,000");

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CANDIDATE PROFILE
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight">Edit Candidate Profile</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 text-emerald-400 pb-4 border-b border-slate-800">
          <UserCheck className="w-6 h-6" />
          <h3 className="text-lg font-bold text-white">Professional Information</h3>
        </div>

        <FormInput label="Full Name" defaultValue={userProfile?.name || ""} disabled />
        <FormInput label="Email Address" defaultValue={userProfile?.email || ""} disabled />

        <FormInput
          label="Professional Headline"
          placeholder="Senior Full Stack Software Engineer"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Total Experience (Years)"
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <FormInput
            label="Expected Annual Salary"
            value={expectedSalary}
            onChange={(e) => setExpectedSalary(e.target.value)}
          />
        </div>

        <FormInput
          label="Primary Skills (Comma Separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
          <Save className="w-4 h-4 mr-2" /> Save Profile Updates
        </Button>
      </Card>
    </main>
  );
}
