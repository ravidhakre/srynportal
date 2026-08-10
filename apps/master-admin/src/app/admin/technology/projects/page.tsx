"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button, FormInput } from "@sryn/ui";
import { collection, getDocs, addDoc, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyProjectDocument, TechnologyProjectStatus, TechnologyProjectPriority } from "@sryn/database";
import { FolderKanban, Plus } from "lucide-react";

export default function AdminTechProjectsPage() {
  const [projects, setProjects] = useState<TechnologyProjectDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [name, setName] = useState("");
  const [service, setService] = useState("Web Development");
  const [status, setStatus] = useState<TechnologyProjectStatus>("PLANNING");
  const [priority, setPriority] = useState<TechnologyProjectPriority>("NORMAL");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("150000");

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_PROJECTS));
      const list: TechnologyProjectDocument[] = [];
      snap.forEach((d) => list.push({ ...d.data(), id: d.id } as TechnologyProjectDocument));
      setProjects(list);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;

    try {
      const projectId = `PRJ-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      await addDoc(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_PROJECTS), {
        projectId,
        name,
        service,
        status,
        priority,
        description,
        budget: Number(budget) || 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setShowCreateModal(false);
      setName("");
      setDescription("");
      await fetchProjects();
    } catch (err) {
      console.error("Error creating project:", err);
      alert("Failed to create project.");
    }
  };

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
            TECHNOLOGY PROJECTS
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Project Management</h1>
        </div>
        <Button size="sm" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold" onClick={() => setShowCreateModal(true)}>
          <Plus className="w-4 h-4 mr-1" /> Create Project
        </Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading projects...</p>
        ) : projects.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <FolderKanban className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No technology projects recorded yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.id || p.projectId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="space-y-1">
                  <span className="font-mono text-sky-400 font-bold">{p.projectId}</span>
                  <h4 className="text-base font-bold text-white">{p.name}</h4>
                  <p className="text-slate-400 text-[11px]">{p.service} • Priority: {p.priority}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={p.status === "COMPLETED" ? "success" : "secondary"}>
                    {p.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* CREATE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-slate-900 border border-slate-800 p-8 max-w-xl w-full space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Create Tech Project</h3>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <FormInput label="Project Name *" value={name} onChange={(e) => setName(e.target.value)} required />
              <FormInput label="Service *" value={service} onChange={(e) => setService(e.target.value)} required />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-slate-300">Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value as TechnologyProjectStatus)} className="h-11 rounded-lg border border-slate-700 bg-slate-800 px-3 text-xs text-white">
                    <option value="PLANNING">PLANNING</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="ON_HOLD">ON_HOLD</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-slate-300">Priority</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value as TechnologyProjectPriority)} className="h-11 rounded-lg border border-slate-700 bg-slate-800 px-3 text-xs text-white">
                    <option value="LOW">LOW</option>
                    <option value="NORMAL">NORMAL</option>
                    <option value="HIGH">HIGH</option>
                    <option value="URGENT">URGENT</option>
                  </select>
                </div>
              </div>
              <FormInput label="Budget (INR)" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-300">Description *</label>
                <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white focus:outline-none" required />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)}>Cancel</Button>
                <Button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold">Save Project</Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
