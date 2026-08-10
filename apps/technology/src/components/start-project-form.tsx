"use client";

import React, { useState, useEffect } from "react";
import { Button, FormInput } from "@sryn/ui";
import { addDoc, collection, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { parseUtmFromSearchParams } from "@sryn/analytics";
import { BusinessVertical } from "@sryn/auth";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(10, "Valid 10-digit mobile number required"),
  email: z.string().email("Valid email address required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  currentWebsite: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  preferredContactMethod: z.string().optional(),
});

export function StartProjectForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Web Development");
  const [projectType, setProjectType] = useState("New Project");
  const [budgetRange, setBudgetRange] = useState("Flexible");
  const [timeline, setTimeline] = useState("1-2 Months");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("WhatsApp / Phone");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [refId, setRefId] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search);
      setUtmParams(parseUtmFromSearchParams(search));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const formData = {
      name,
      phone,
      email,
      company,
      service,
      projectType,
      budgetRange,
      timeline,
      currentWebsite,
      description,
      preferredContactMethod,
    };

    const parsed = leadSchema.safeParse(formData);
    if (!parsed.success) {
      const formattedErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) formattedErrors[issue.path[0].toString()] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setLoading(true);

    try {
      const year = new Date().getFullYear();
      const randomSeq = Math.floor(100000 + Math.random() * 900000);
      const generatedLeadId = `TECH-${year}-${randomSeq}`;

      const colRef = collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_LEADS);

      await addDoc(colRef, {
        leadId: generatedLeadId,
        name,
        phone,
        email,
        company: company || undefined,
        service,
        projectType,
        budgetRange,
        timeline,
        currentWebsite: currentWebsite || undefined,
        description,
        preferredContactMethod,
        businessVertical: BusinessVertical.TECHNOLOGY,
        status: "NEW",
        priority: "NORMAL",
        source: "TECHNOLOGY_WEBSITE",
        utm: utmParams,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setRefId(generatedLeadId);
    } catch (err) {
      console.error("Failed to submit lead:", err);
      setErrors({ form: "Failed to submit project requirements. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (refId) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-2xl">
        <CheckCircle className="w-12 h-12 text-sryn-blue mx-auto" />
        <h3 className="text-2xl font-extrabold text-white">Project Enquiry Received!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you for sharing your project details. Our SRYN Technology engineering team will review your requirement and reach out within 24 hours.
        </p>
        <div className="inline-block p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
          Lead Reference ID: <span className="font-bold text-sryn-blue">{refId}</span>
        </div>
        <div className="pt-2">
          <Button variant="secondary" onClick={() => setRefId(null)}>
            Submit Another Project Requirement
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-left shadow-2xl">
      {errors.form && (
        <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
          {errors.form}
        </div>
      )}

      <FormInput
        label="Full Name *"
        placeholder="Rahul Sharma"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          label="Mobile Number *"
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          required
        />
        <FormInput
          label="Email Address *"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          label="Company / Business Name"
          placeholder="Acme Enterprises"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <FormInput
          label="Current Website (If Any)"
          placeholder="https://example.com"
          value={currentWebsite}
          onChange={(e) => setCurrentWebsite(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Service Required *</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          >
            <option value="Web Development">Web Development</option>
            <option value="Software Development">Software Development (CRM/ERP)</option>
            <option value="E-Commerce Development">E-Commerce Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="API & Payment Integration">API & Payment Integration</option>
            <option value="Digital Marketing (SEO/Ads)">Digital Marketing (SEO/Ads)</option>
            <option value="Business Automation">Business Automation</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Project Scope</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          >
            <option value="New Project">New Project</option>
            <option value="Redesign / Upgrade">Redesign / Upgrade</option>
            <option value="Maintenance / Fixes">Maintenance / Fixes</option>
            <option value="Ongoing Retainer">Ongoing Retainer</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Budget Range</label>
          <select
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          >
            <option value="Flexible">Flexible</option>
            <option value="< ₹50,000">&lt; ₹50,000</option>
            <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
            <option value="₹2,00,000+">₹2,00,000+</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Target Timeline</label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          >
            <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
            <option value="1-2 Months">1-2 Months</option>
            <option value="3+ Months">3+ Months</option>
            <option value="Exploring Options">Exploring Options</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Preferred Contact Method</label>
          <select
            value={preferredContactMethod}
            onChange={(e) => setPreferredContactMethod(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          >
            <option value="WhatsApp / Phone">WhatsApp / Phone</option>
            <option value="Email Only">Email Only</option>
            <option value="Video Call">Video Call</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Project Description *</label>
        <textarea
          rows={4}
          placeholder="Describe your requirements, goals, feature expectations..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          required
        />
        {errors.description && <p className="text-xs text-sryn-red font-medium">{errors.description}</p>}
      </div>

      <Button type="submit" variant="tech" size="lg" className="w-full mt-4 font-semibold shadow-lg shadow-sryn-blue/20" disabled={loading}>
        {loading ? "Submitting Requirement..." : "Submit Project Requirement"}
        {!loading && <Send className="w-4 h-4 ml-2" />}
      </Button>
    </form>
  );
}
