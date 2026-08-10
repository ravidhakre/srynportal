"use client";

import React from "react";
import { BusinessVertical } from "@sryn/auth";
import { Building2, Cpu, Landmark, Users } from "lucide-react";

export type SelectedVerticalFilter = "ALL" | typeof BusinessVertical.TECHNOLOGY | typeof BusinessVertical.FINSERV | typeof BusinessVertical.RECRUITMENT;

interface BusinessSwitcherProps {
  selectedVertical: SelectedVerticalFilter;
  onSelectVertical: (vertical: SelectedVerticalFilter) => void;
  allowedVerticals?: BusinessVertical[] | null;
}

export function BusinessSwitcher({ selectedVertical, onSelectVertical, allowedVerticals }: BusinessSwitcherProps) {
  const options: Array<{ label: string; value: SelectedVerticalFilter; icon: React.FC<{ className?: string }> }> = [
    { label: "All Businesses", value: "ALL", icon: Building2 },
    { label: "Technology", value: BusinessVertical.TECHNOLOGY, icon: Cpu },
    { label: "FinServ", value: BusinessVertical.FINSERV, icon: Landmark },
    { label: "Recruitment", value: BusinessVertical.RECRUITMENT, icon: Users },
  ];

  return (
    <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = selectedVertical === opt.value;
        const isDisabled =
          allowedVerticals &&
          opt.value !== "ALL" &&
          !allowedVerticals.includes(opt.value as BusinessVertical);

        if (isDisabled) return null;

        return (
          <button
            key={opt.value}
            onClick={() => onSelectVertical(opt.value)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              isActive
                ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
