"use client";

import React, { useState } from "react";
import { Badge, Button, FormInput } from "@sryn/ui";
import { collection, addDoc, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { RecruitmentWorkMode, RecruitmentEmploymentType } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export default function EmployerJobCreatePage() {
  const { currentUser: user, userProfile } = useAuth();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Engineering");
  const [location, setLocation] = useState("Bengaluru");
  const [workMode, setWorkMode] = useState<RecruitmentWorkMode>("HYBRID");
  const [employmentType, setEmploymentType] = useState<RecruitmentEmploymentType>("FULL_TIME");
  const [expMin, setExpMin] = useState("2");
  const [expMax, setExpMax] = useState("5");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [skillsStr, setSkillsStr] = useState("React, TypeScript, Node.js");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !user) return;
    setSubmitting(true);

    try {
      const db = getFirebaseDb();
      const jobId = `JOB-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now().toString().slice(-4);
      const skills = skillsStr.split(",").map((s) => s.trim()).filter(Boolean);

      await addDoc(collection(db, COLLECTIONS.JOBS), {
        jobId,
        slug,
        employerUid: user.uid,
        companyName: userProfile?.name || "Hiring Partner",
        title,
        department,
        industry: "Technology",
        description,
        responsibilities,
        requirements,
        skills,
        experienceYearsMin: Number(expMin) || 0,
        experienceYearsMax: Number(expMax) || 5,
        location,
        workMode,
        employmentType,
        vacanciesCount: 1,
        status: "PENDING_REVIEW", // Mandatory moderation status
        businessVertical: "recruitment",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      alert("Job posting submitted successfully! It is now pending moderation by SRYN Recruitment admins.");
      router.push("/employer/jobs");
    } catch (err) {
      console.error("Failed to post job:", err);
      alert("Failed to submit job posting.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          REQUISITION SUBMISSION
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight">Post a New Job Opening</h1>
        <p className="text-slate-400 text-xs">Job requisitions enter PENDING_REVIEW status and require moderation prior to public portal publishing.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
        <FormInput
          label="Job Title *"
          placeholder="Senior Full Stack Software Engineer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Department / Function *"
            placeholder="Software Engineering"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          <FormInput
            label="Location *"
            placeholder="Bengaluru / Remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Work Mode *</label>
            <select
              value={workMode}
              onChange={(e) => setWorkMode(e.target.value as RecruitmentWorkMode)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white"
            >
              <option value="HYBRID">Hybrid</option>
              <option value="REMOTE">Remote</option>
              <option value="ON_SITE">On-Site</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Employment Type *</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value as RecruitmentEmploymentType)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white"
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="CONTRACT">Contract</option>
              <option value="PART_TIME">Part Time</option>
              <option value="INTERNSHIP">Internship</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Min Experience (Years)"
            type="number"
            value={expMin}
            onChange={(e) => setExpMin(e.target.value)}
          />
          <FormInput
            label="Max Experience (Years)"
            type="number"
            value={expMax}
            onChange={(e) => setExpMax(e.target.value)}
          />
        </div>

        <FormInput
          label="Required Skills (Comma separated) *"
          placeholder="React, TypeScript, Node.js, GraphQL"
          value={skillsStr}
          onChange={(e) => setSkillsStr(e.target.value)}
          required
        />

        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Job Description *</label>
          <textarea
            rows={4}
            placeholder="Detailed job description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Responsibilities</label>
          <textarea
            rows={3}
            placeholder="Key daily responsibilities..."
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Requirements & Qualifications</label>
          <textarea
            rows={3}
            placeholder="Educational background, tech stack expectations..."
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-emerald-600 hover:bg-emerald-500 font-semibold text-white"
          disabled={submitting}
        >
          <Send className="w-4 h-4 mr-2" /> {submitting ? "Submitting Requisition..." : "Submit Job Opening for Moderation"}
        </Button>
      </form>
    </main>
  );
}
