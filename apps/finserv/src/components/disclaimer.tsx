import React from "react";
import { AlertCircle } from "lucide-react";

export function FinanceDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 text-xs leading-relaxed flex items-start space-x-3 text-left ${className}`}
    >
      <AlertCircle className="w-5 h-5 text-sryn-red shrink-0 mt-0.5" />
      <p>
        <strong className="text-slate-200">Compliance & Regulatory Disclaimer:</strong> Information provided on this website is for general informational and assistance purposes. SRYN FinServ provides financial assistance and consultation. Eligibility, sanction, interest rates, tenure, fees, documentation, and final approval are determined solely by relevant third-party lenders, financial institutions, or product providers according to their applicable policies and legal guidelines. Submission of an inquiry or application does not guarantee approval or disbursement.
      </p>
    </div>
  );
}
