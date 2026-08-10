"use client";

import React, { useState } from "react";
import { Badge, Card, Button, FormInput } from "@sryn/ui";
import { Settings, Shield, Sliders } from "lucide-react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("SRYN Management Pvt. Ltd.");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maxUploadSize, setMaxUploadSize] = useState("10");

  return (
    <div className="space-y-8 text-left max-w-4xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          SYSTEM CONFIGURATION
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Global Admin Settings</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-2 text-white font-bold text-lg border-b border-slate-800 pb-3">
          <Sliders className="w-5 h-5 text-emerald-400" />
          <span>General System Settings</span>
        </div>

        <FormInput
          label="Corporate Entity Name *"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />

        <FormInput
          label="Max Document Upload Limit (MB) *"
          type="number"
          value={maxUploadSize}
          onChange={(e) => setMaxUploadSize(e.target.value)}
        />

        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div>
            <h4 className="font-bold text-white text-sm">System Maintenance Mode</h4>
            <p className="text-xs text-slate-400">Restrict access to emergency maintenance operations</p>
          </div>
          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={(e) => setMaintenanceMode(e.target.checked)}
            className="w-5 h-5 accent-emerald-500 cursor-pointer"
          />
        </div>

        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white">
          <Settings className="w-4 h-4 mr-2" /> Save System Configuration
        </Button>
      </Card>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-4">
        <div className="flex items-center space-x-2 text-white font-bold text-lg border-b border-slate-800 pb-3">
          <Shield className="w-5 h-5 text-sky-400" />
          <span>Security Architecture</span>
        </div>
        <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
          <p><strong className="text-white">Firebase App Check:</strong> Architecture prepared for reCAPTCHA Enterprise app check verification.</p>
          <p><strong className="text-white">Strict Custom Claims:</strong> Firebase Authentication custom claims validate user role and vertical scope on every request.</p>
        </div>
      </Card>
    </div>
  );
}
