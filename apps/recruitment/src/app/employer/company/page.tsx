"use client";

import React, { useState } from "react";
import { Badge, Card, Button, FormInput } from "@sryn/ui";
import { useAuth } from "@sryn/database/context/auth-context";
import { Building2, Save } from "lucide-react";

export default function EmployerCompanyProfilePage() {
  const { userProfile } = useAuth();
  const [companyName, setCompanyName] = useState(userProfile?.name || "");
  const [industry, setIndustry] = useState("Technology");
  const [location, setLocation] = useState("Bengaluru");

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          COMPANY PROFILE
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight">Employer Company Details</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 text-emerald-400 pb-4 border-b border-slate-800">
          <Building2 className="w-6 h-6" />
          <h3 className="text-lg font-bold text-white">Company Profile Information</h3>
        </div>

        <FormInput
          label="Company Name *"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <FormInput
          label="Industry *"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <FormInput
          label="Headquarters / Location *"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
          <Save className="w-4 h-4 mr-2" /> Save Company Profile
        </Button>
      </Card>
    </main>
  );
}
