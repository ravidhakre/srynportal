"use client";

import React, { useState, useEffect } from "react";
import { Button, FormInput } from "@sryn/ui";
import { addDoc, collection, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { EmploymentType } from "@sryn/database";
import { parseUtmFromSearchParams } from "@sryn/analytics";
import { BusinessVertical } from "@sryn/auth";
import { z } from "zod";
import { CheckCircle, Send, ShieldCheck } from "lucide-react";

const applySchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(10, "Valid 10-digit mobile number required"),
  email: z.string().email("Valid email address required").or(z.literal("")),
  city: z.string().min(2, "City is required"),
  state: z.string().optional(),
  employmentType: z.enum(["SALARIED", "SELF_EMPLOYED", "BUSINESS_OWNER", "PROFESSIONAL", "OTHER"]),
  income: z.string().optional(),
  companyOrBusiness: z.string().optional(),
  experience: z.string().optional(),
  requirementType: z.string().min(1, "Please select a requirement type"),
  requestedAmount: z.string().optional(),
  existingObligations: z.string().optional(),
  creditScoreRange: z.string().optional(),
  preferredContactMethod: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to be contacted regarding your requirement" }),
  }),
});

export function ApplyForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [employmentType, setEmploymentType] = useState<EmploymentType>("SALARIED");
  const [income, setIncome] = useState("");
  const [companyOrBusiness, setCompanyOrBusiness] = useState("");
  const [experience, setExperience] = useState("");
  const [requirementType, setRequirementType] = useState("Personal Loan");
  const [requestedAmount, setRequestedAmount] = useState("");
  const [existingObligations, setExistingObligations] = useState("No Existing Loans");
  const [creditScoreRange, setCreditScoreRange] = useState("750+ (Good)");
  const [preferredContactMethod, setPreferredContactMethod] = useState("WhatsApp / Phone");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

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
      city,
      state,
      employmentType,
      income,
      companyOrBusiness,
      experience,
      requirementType,
      requestedAmount,
      existingObligations,
      creditScoreRange,
      preferredContactMethod,
      message,
      consent,
    };

    const parsed = applySchema.safeParse(formData);
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
      const generatedLeadId = `FIN-${year}-${randomSeq}`;

      const colRef = collection(getFirebaseDb(), COLLECTIONS.FINANCE_LEADS);

      await addDoc(colRef, {
        leadId: generatedLeadId,
        name,
        phone,
        email: email || undefined,
        city,
        state: state || undefined,
        employmentType,
        income: income || undefined,
        companyOrBusiness: companyOrBusiness || undefined,
        experience: experience || undefined,
        requirementType,
        requestedAmount: requestedAmount || undefined,
        existingObligations: existingObligations || undefined,
        creditScoreRange: creditScoreRange || undefined,
        preferredContactMethod,
        message: message || undefined,
        consent: true,
        businessVertical: BusinessVertical.FINSERV,
        status: "NEW",
        priority: "NORMAL",
        source: "FINSERV_WEBSITE",
        utm: utmParams,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setRefId(generatedLeadId);
    } catch (err) {
      console.error("Failed to submit financial requirement:", err);
      setErrors({ form: "Failed to submit requirement. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (refId) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-2xl">
        <CheckCircle className="w-12 h-12 text-sryn-red mx-auto" />
        <h3 className="text-2xl font-extrabold text-white">Financial Requirement Received!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you for sharing your financial requirement. Our SRYN FinServ consultation team will evaluate your profile and contact you within 24 hours.
        </p>
        <div className="inline-block p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
          Requirement Reference ID: <span className="font-bold text-sryn-red">{refId}</span>
        </div>
        <div className="pt-2">
          <Button variant="secondary" onClick={() => setRefId(null)}>
            Submit Another Requirement
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 text-left shadow-2xl">
      {errors.form && (
        <div className="p-3 rounded-lg bg-sryn-red/10 border border-sryn-red/30 text-sryn-red text-xs font-medium">
          {errors.form}
        </div>
      )}

      {/* Section 1: Personal Information */}
      <div className="space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-sryn-red flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> 1. Personal Information
        </h4>

        <FormInput
          label="Full Name *"
          placeholder="Rajesh Kumar"
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
            placeholder="rajesh@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="City *"
            placeholder="Mumbai / Delhi / Bengaluru"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={errors.city}
            required
          />
          <FormInput
            label="State"
            placeholder="Maharashtra / Karnataka"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>

      {/* Section 2: Employment / Business Details */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-sryn-red">
          2. Employment & Income Details
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Employment Type *</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-red"
            >
              <option value="SALARIED">Salaried Employee</option>
              <option value="SELF_EMPLOYED">Self Employed Professional</option>
              <option value="BUSINESS_OWNER">Business Owner / Enterprise</option>
              <option value="PROFESSIONAL">Doctor / CA / Lawyer</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <FormInput
            label="Monthly / Annual Income"
            placeholder="₹ 50,000 / month"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Company / Business Name"
            placeholder="TCS / Self Business"
            value={companyOrBusiness}
            onChange={(e) => setCompanyOrBusiness(e.target.value)}
          />
          <FormInput
            label="Total Work / Business Experience"
            placeholder="3 Years"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
      </div>

      {/* Section 3: Financial Requirement Details */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-sryn-red">
          3. Financial Requirement Details
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-1.5 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Requirement Type *</label>
            <select
              value={requirementType}
              onChange={(e) => setRequirementType(e.target.value)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-red"
            >
              <option value="Personal Loan">Personal Loan Assistance</option>
              <option value="Business Loan">Business Loan Assistance</option>
              <option value="Home Loan">Home Loan Assistance</option>
              <option value="Loan Against Property">Loan Against Property (LAP)</option>
              <option value="Credit Consultation">Credit Consultation</option>
              <option value="Credit Guidance">Credit Guidance</option>
              <option value="Credit Card Assistance">Credit Card Assistance</option>
              <option value="Other">Other Financial Solution</option>
            </select>
          </div>

          <FormInput
            label="Requested Amount"
            placeholder="₹ 5,00,000"
            value={requestedAmount}
            onChange={(e) => setRequestedAmount(e.target.value)}
          />

          <div className="flex flex-col space-y-1.5 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Approx. Credit Score Range</label>
            <select
              value={creditScoreRange}
              onChange={(e) => setCreditScoreRange(e.target.value)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-red"
            >
              <option value="750+ (Good)">750+ (Good / Excellent)</option>
              <option value="700 - 749">700 - 749 (Average)</option>
              <option value="650 - 699">650 - 699 (Fair)</option>
              <option value="Below 650">Below 650 / Low</option>
              <option value="Not Sure / New to Credit">Not Sure / New to Credit</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Existing Obligations / Loans</label>
            <select
              value={existingObligations}
              onChange={(e) => setExistingObligations(e.target.value)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-red"
            >
              <option value="No Existing Loans">No Existing Loans</option>
              <option value="1 Active EMI">1 Active EMI</option>
              <option value="Multiple EMIs">Multiple Active EMIs</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1.5 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Preferred Contact Method</label>
            <select
              value={preferredContactMethod}
              onChange={(e) => setPreferredContactMethod(e.target.value)}
              className="h-11 rounded-lg border border-slate-700 bg-slate-800/80 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sryn-red"
            >
              <option value="WhatsApp / Phone">WhatsApp / Phone Call</option>
              <option value="Email Only">Email Only</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Additional Message / Note</label>
          <textarea
            rows={3}
            placeholder="Tell us more about your specific requirement..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sryn-red"
          />
        </div>
      </div>

      {/* Mandatory Consent Checkbox */}
      <div className="pt-2 space-y-2">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-800 text-sryn-red focus:ring-sryn-red"
          />
          <span className="text-xs text-slate-300 leading-relaxed">
            I consent to SRYN FinServ contacting me regarding my financial requirement and understand that submission does not guarantee approval, sanction, or disbursement.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-sryn-red font-medium">{errors.consent}</p>}
      </div>

      <Button type="submit" variant="danger" size="lg" className="w-full mt-4 font-semibold shadow-lg shadow-sryn-red/20" disabled={loading}>
        {loading ? "Submitting Requirement..." : "Submit Financial Requirement"}
        {!loading && <Send className="w-4 h-4 ml-2" />}
      </Button>
    </form>
  );
}
