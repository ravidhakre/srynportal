"use client";

import React, { useState, useEffect } from "react";
import { Button, FormInput } from "@sryn/ui";
import { addDoc, collection, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import { parseUtmFromSearchParams } from "@sryn/analytics";
import { BusinessVertical } from "@sryn/auth";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(10, "Valid 10-digit mobile number required"),
  email: z.string().email("Invalid email address").or(z.literal("")),
  company: z.string().optional(),
  businessVertical: z.nativeEnum(BusinessVertical),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function CorporateContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [businessVertical, setBusinessVertical] = useState<BusinessVertical>(BusinessVertical.TECHNOLOGY);
  const [message, setMessage] = useState("");

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
      businessVertical,
      message,
    };

    const parsed = contactSchema.safeParse(formData);
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
      const generatedRefId = `SRYN-${Date.now().toString().slice(-6)}`;
      const colRef = collection(getFirebaseDb(), COLLECTIONS.CONTACT_SUBMISSIONS);

      await addDoc(colRef, {
        referenceId: generatedRefId,
        name,
        phone,
        email: email || undefined,
        company: company || undefined,
        businessVertical,
        message,
        source: "CORPORATE_WEBSITE",
        status: "NEW",
        utm: utmParams,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setRefId(generatedRefId);
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      setErrors({ form: "Failed to submit enquiry. Please check your network and try again." });
    } finally {
      setLoading(false);
    }
  };

  if (refId) {
    return (
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="text-2xl font-extrabold text-white">Thank You!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Your enquiry has been submitted successfully to SRYN Management. Our team will connect with you shortly.
        </p>
        <div className="inline-block p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
          Enquiry Reference ID: <span className="font-bold text-sryn-blue">{refId}</span>
        </div>
        <div className="pt-2">
          <Button variant="secondary" onClick={() => setRefId(null)}>
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-left">
      {errors.form && (
        <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
          {errors.form}
        </div>
      )}

      <FormInput
        label="Full Name *"
        placeholder="Enter your full name"
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
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
      </div>

      <FormInput
        label="Company / Organization"
        placeholder="SRYN Enterprises Pvt. Ltd."
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Business Vertical *
        </label>
        <select
          value={businessVertical}
          onChange={(e) => setBusinessVertical(e.target.value as BusinessVertical)}
          className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sryn-blue"
        >
          <option value={BusinessVertical.TECHNOLOGY}>SRYN Technology (Web, Software & Marketing)</option>
          <option value={BusinessVertical.FINSERV}>SRYN FinServ (Loan & Credit Solutions)</option>
          <option value={BusinessVertical.RECRUITMENT}>SRYN Recruitment (IT & Non-IT Hiring)</option>
          <option value={BusinessVertical.CORPORATE}>General Corporate Enquiry</option>
        </select>
      </div>

      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Requirement / Message *
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your requirement or project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sryn-blue"
          required
        />
        {errors.message && <p className="text-xs text-sryn-red font-medium">{errors.message}</p>}
      </div>

      <Button type="submit" variant="danger" size="lg" className="w-full mt-4 font-semibold" disabled={loading}>
        {loading ? "Submitting..." : "Send Enquiry"}
        {!loading && <Send className="w-4 h-4 ml-2" />}
      </Button>
    </form>
  );
}
