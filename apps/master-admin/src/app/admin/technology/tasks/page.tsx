"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { TechnologyProjectTaskDocument } from "@sryn/database";
import { CheckSquare } from "lucide-react";

export default function AdminTechTasksPage() {
  const [tasks, setTasks] = useState<TechnologyProjectTaskDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.TECHNOLOGY_TASKS));
        const list: TechnologyProjectTaskDocument[] = [];
        snap.forEach((d) => list.push(d.data() as TechnologyProjectTaskDocument));
        setTasks(list);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-sky-500/10 text-sky-400 border-sky-500/20">
          PROJECT TASKS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Tech Task Board</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <CheckSquare className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No project tasks created yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((t) => (
              <div key={t.taskId} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-mono text-sky-400 font-bold">{t.taskId}</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{t.title}</h4>
                </div>
                <Badge variant="secondary">{t.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
