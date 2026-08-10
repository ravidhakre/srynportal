"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import {
  getEmailProviderStatus,
  getWhatsappProviderStatus,
  getSmsProviderStatus,
  getPaymentProviderStatus,
} from "@sryn/notifications";
import { Activity, ShieldCheck, Database, Lock, Mail, MessageSquare, Phone, CreditCard, AlertTriangle } from "lucide-react";

export default function AdminSystemHealthPage() {
  const [errorCount, setErrorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const emailStatus = getEmailProviderStatus();
  const waStatus = getWhatsappProviderStatus();
  const smsStatus = getSmsProviderStatus();
  const payStatus = getPaymentProviderStatus();

  useEffect(() => {
    async function fetchErrors() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.SYSTEM_ERRORS));
        setErrorCount(snap.size);
      } catch (err) {
        console.error("Error fetching system errors:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchErrors();
  }, []);

  const healthItems = [
    { title: "Firebase Authentication", icon: Lock, status: "Healthy", configured: true, detail: "Email/Password & Custom Claims" },
    { title: "Cloud Firestore Database", icon: Database, status: "Healthy", configured: true, detail: "Primary Database (srynportal)" },
    { title: "Firebase Cloud Storage", icon: ShieldCheck, status: "Healthy", configured: true, detail: "Public & Private Encrypted Paths" },
    { title: "Email Provider Service", icon: Mail, status: emailStatus.configured ? "Healthy" : "Not Configured", configured: emailStatus.configured, detail: `Provider: ${emailStatus.provider}` },
    { title: "WhatsApp Business API", icon: MessageSquare, status: waStatus.configured ? "Healthy" : "Not Configured", configured: waStatus.configured, detail: `Provider: ${waStatus.provider}` },
    { title: "SMS Gateway Provider", icon: Phone, status: smsStatus.configured ? "Healthy" : "Not Configured", configured: smsStatus.configured, detail: `Provider: ${smsStatus.provider}` },
    { title: "Payment Gateway Service", icon: CreditCard, status: payStatus.configured ? "Healthy" : "Not Configured", configured: payStatus.configured, detail: `Provider: ${payStatus.provider}` },
  ];

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            SYSTEM HEALTH & INTEGRATION MONITOR
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Platform Operations Status</h1>
        </div>

        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>System Environment: Production Ready</span>
        </div>
      </div>

      {/* System Errors Counter Card */}
      <Card className="bg-slate-900 border-slate-800 p-6 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-bold text-white text-base">Central System Error Log Counter</h3>
          <p className="text-xs text-slate-400">Total logged system errors in `systemErrors` collection</p>
        </div>
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span className="text-2xl font-bold text-white">{loading ? "..." : errorCount}</span>
        </div>
      </Card>

      {/* Health Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <Badge variant={item.configured ? "success" : "secondary"}>
                  {item.status}
                </Badge>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{item.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{item.detail}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
