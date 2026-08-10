"use client";

import React, { useState, useEffect } from "react";
import { Button, Card, Input, Badge, Dialog } from "@sryn/ui";
import { collection, getDocs, doc, updateDoc, addDoc, serverTimestamp, getFirebaseDb, COLLECTIONS, useAuth } from "@sryn/database";
import type { FinanceLeadDocument, FinanceLeadStatus, FinanceLeadPriority } from "@sryn/database";
import { BusinessVertical, canAccessBusiness } from "@sryn/auth";
import { Search, ShieldAlert, Phone } from "lucide-react";

const FINSERV_STATUSES: FinanceLeadStatus[] = [
  "NEW",
  "CONTACTED",
  "INTERESTED",
  "ELIGIBILITY_CHECK",
  "DOCUMENTS_REQUIRED",
  "DOCUMENTS_RECEIVED",
  "APPLICATION",
  "UNDER_PROCESS",
  "APPROVED",
  "REJECTED",
  "DISBURSED",
  "CLOSED",
  "ON_HOLD",
];

export default function FinServLeadsAdminPage() {
  const { userProfile, role, businessVertical } = useAuth();
  const [leads, setLeads] = useState<FinanceLeadDocument[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [priorityFilter, setPriorityFilter] = useState<string>("ALL");

  // Selected lead for detail/status update
  const [selectedLead, setSelectedLead] = useState<FinanceLeadDocument | null>(null);
  const [newStatus, setNewStatus] = useState<FinanceLeadStatus>("NEW");
  const [newPriority, setNewPriority] = useState<FinanceLeadPriority>("NORMAL");
  const [noteText, setNoteText] = useState("");
  const [updating, setUpdating] = useState(false);

  const getSeconds = (ts: unknown): number => {
    if (ts && typeof ts === "object" && "seconds" in ts) {
      return (ts as { seconds: number }).seconds;
    }
    return 0;
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.FINANCE_LEADS));
      const list: FinanceLeadDocument[] = [];
      snap.forEach((d) => list.push(d.data() as FinanceLeadDocument));
      // Sort newest first
      list.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
      setLeads(list);
    } catch (err) {
      console.error("Failed to fetch finance leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Vertical authorization check
  const isAuthorized = canAccessBusiness(role, businessVertical, BusinessVertical.FINSERV);

  if (!isAuthorized) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="bg-slate-900 border-slate-800 p-8 max-w-md text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-sryn-red mx-auto" />
          <h2 className="text-xl font-bold text-white">403 — Unauthorized Vertical Access</h2>
          <p className="text-slate-400 text-sm">
            Your account ({role}) is not authorized to access SRYN FinServ lead CRM data.
          </p>
        </Card>
      </main>
    );
  }

  const handleOpenLead = (lead: FinanceLeadDocument) => {
    setSelectedLead(lead);
    setNewStatus(lead.status);
    setNewPriority(lead.priority || "NORMAL");
    setNoteText("");
  };

  const handleUpdateLead = async () => {
    if (!selectedLead || !userProfile) return;
    setUpdating(true);

    try {
      const docRef = doc(getFirebaseDb(), COLLECTIONS.FINANCE_LEADS, selectedLead.id || selectedLead.leadId);
      await updateDoc(docRef, {
        status: newStatus,
        priority: newPriority,
        updatedAt: serverTimestamp(),
      });

      // Log Lead Activity
      const activityRef = collection(getFirebaseDb(), COLLECTIONS.FINANCE_LEAD_ACTIVITIES);
      await addDoc(activityRef, {
        leadId: selectedLead.leadId,
        userId: userProfile.uid,
        userName: userProfile.name,
        action: "STATUS_CHANGED",
        oldStatus: selectedLead.status,
        newStatus,
        note: noteText || undefined,
        createdAt: serverTimestamp(),
      });

      await fetchLeads();
      setSelectedLead(null);
    } catch (err) {
      console.error("Failed to update finance lead:", err);
      alert("Error updating lead status.");
    } finally {
      setUpdating(false);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.leadId.toLowerCase().includes(search.toLowerCase()) ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.email && l.email.toLowerCase().includes(search.toLowerCase())) ||
      l.phone.includes(search) ||
      (l.city && l.city.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = statusFilter === "ALL" || l.status === statusFilter;
    const matchesPriority = priorityFilter === "ALL" || l.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Badge variant="danger">SRYN FINSERV CRM</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Finance Lead Pipeline</h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage financial inquiries, credit evaluations, and lender application statuses</p>
        </div>
        <Button variant="danger" onClick={fetchLeads}>
          Refresh Pipeline
        </Button>
      </div>

      {/* Pipeline Summary Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {FINSERV_STATUSES.slice(0, 7).map((st) => {
          const count = leads.filter((l) => l.status === st).length;
          return (
            <div
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                statusFilter === st
                  ? "bg-slate-800 border-sryn-red text-white"
                  : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider">{st}</div>
              <div className="text-xl font-bold text-white mt-1">{count}</div>
            </div>
          );
        })}
      </div>

      {/* Filter Controls */}
      <Card className="bg-slate-800/80 border-slate-700 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <Input
              placeholder="Search Lead ID, Name, Phone, City..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-slate-900 border-slate-700 text-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-900 px-3 text-sm text-slate-200"
          >
            <option value="ALL">All Statuses</option>
            {FINSERV_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="h-11 rounded-lg border border-slate-700 bg-slate-900 px-3 text-sm text-slate-200"
          >
            <option value="ALL">All Priorities</option>
            <option value="LOW">LOW</option>
            <option value="NORMAL">NORMAL</option>
            <option value="HIGH">HIGH</option>
            <option value="URGENT">URGENT</option>
          </select>
        </div>
      </Card>

      {/* Leads Table */}
      <Card className="bg-slate-800/80 border-slate-700 text-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80 uppercase text-xs text-slate-400 font-semibold tracking-wider border-b border-slate-700">
              <tr>
                <th className="p-4">Lead ID & Date</th>
                <th className="p-4">Applicant</th>
                <th className="p-4">Requirement</th>
                <th className="p-4">Employment</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400">
                    Loading finance leads...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400">
                    No finance leads found matching current filters.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((l) => (
                  <tr key={l.leadId} className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-4 font-mono">
                      <div className="font-bold text-sryn-red">{l.leadId}</div>
                      <div className="text-[11px] text-slate-400">
                        {getSeconds(l.createdAt) ? new Date(getSeconds(l.createdAt) * 1000).toLocaleDateString() : "Recent"}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-white">{l.name}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {l.phone} {l.city ? `(${l.city})` : ""}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-slate-200 font-medium">{l.requirementType}</span>
                      {l.requestedAmount && <div className="text-[11px] text-slate-400">{l.requestedAmount}</div>}
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-slate-300 font-mono">{l.employmentType}</span>
                    </td>
                    <td className="p-4">
                      <Badge variant={l.priority === "URGENT" || l.priority === "HIGH" ? "danger" : "secondary"}>
                        {l.priority || "NORMAL"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge variant={l.status === "DISBURSED" || l.status === "APPROVED" ? "success" : l.status === "REJECTED" ? "danger" : "danger"}>
                        {l.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="outline" size="sm" onClick={() => handleOpenLead(l)}>
                        View & Edit
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Lead Detail & Status Modal */}
      <Dialog
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        title={`FinServ Lead: ${selectedLead?.leadId}`}
        description={`Applicant: ${selectedLead?.name}`}
      >
        {selectedLead && (
          <div className="space-y-4 text-left pt-2">
            <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-slate-100 text-xs text-slate-700">
              <div>
                <strong>Phone:</strong> {selectedLead.phone}
              </div>
              <div>
                <strong>Email:</strong> {selectedLead.email || "N/A"}
              </div>
              <div>
                <strong>City / State:</strong> {selectedLead.city} {selectedLead.state ? `, ${selectedLead.state}` : ""}
              </div>
              <div>
                <strong>Employment:</strong> {selectedLead.employmentType}
              </div>
              <div>
                <strong>Income:</strong> {selectedLead.income || "N/A"}
              </div>
              <div>
                <strong>Credit Score Range:</strong> {selectedLead.creditScoreRange || "N/A"}
              </div>
              <div>
                <strong>Requested Amount:</strong> {selectedLead.requestedAmount || "N/A"}
              </div>
              <div>
                <strong>Existing Loans:</strong> {selectedLead.existingObligations || "N/A"}
              </div>
            </div>

            {selectedLead.message && (
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Applicant Note</label>
                <p className="p-3 rounded-lg bg-slate-50 text-xs text-slate-800 mt-1 border border-slate-200 leading-relaxed">
                  {selectedLead.message}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Update Pipeline Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as FinanceLeadStatus)}
                  className="mt-1 w-full h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900"
                >
                  {FINSERV_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Priority Level</label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as FinanceLeadPriority)}
                  className="mt-1 w-full h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900"
                >
                  <option value="LOW">LOW</option>
                  <option value="NORMAL">NORMAL</option>
                  <option value="HIGH">HIGH</option>
                  <option value="URGENT">URGENT</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Executive Call / Follow-up Note</label>
              <textarea
                rows={2}
                placeholder="Add consultation notes or status feedback..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-900 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setSelectedLead(null)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleUpdateLead} disabled={updating}>
                {updating ? "Saving..." : "Save Finance Updates"}
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </main>
  );
}
