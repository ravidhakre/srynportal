"use client";

import React, { useState } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { FileText, Lock, Upload, CheckCircle2 } from "lucide-react";

export default function CandidateResumePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;
    setUploaded(true);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <div className="space-y-2">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          RESUME MANAGEMENT
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight">Candidate Resume Upload</h1>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
        <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Strict Storage Security:</strong> Your uploaded resume (PDF, DOC, DOCX) is stored in private cloud storage (<code className="text-emerald-400 font-mono">/private/recruitment/candidates/...</code>) and is never accessible to public users or third-party web crawlers.
        </p>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-8 space-y-6 shadow-2xl">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-400" />
          Primary Resume Document
        </h3>

        {uploaded ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> {selectedFile?.name || "Resume_Document.pdf"} (Uploaded)
            </span>
            <Button variant="outline" size="sm" onClick={() => setUploaded(false)}>
              Replace Resume
            </Button>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 rounded-2xl p-8 text-center space-y-3 cursor-pointer">
              <Upload className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-slate-300 text-xs font-medium">Click to select PDF, DOC, or DOCX resume (Max 5MB)</p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="hidden"
                id="resume-upload-input"
              />
              <label htmlFor="resume-upload-input" className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-xs text-white font-semibold cursor-pointer">
                Select File
              </label>
              {selectedFile && <p className="text-xs text-emerald-400 font-mono">{selectedFile.name}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 font-semibold text-white" disabled={!selectedFile}>
              Upload Private Resume
            </Button>
          </form>
        )}
      </Card>
    </main>
  );
}
