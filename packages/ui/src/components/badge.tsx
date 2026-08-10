import * as React from "react";
import { cn } from "../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "danger" | "success" | "tech" | "fin" | "rec";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-sryn-navy text-white",
    secondary: "bg-sryn-gray text-sryn-navy border border-sryn-gray-border",
    outline: "text-sryn-navy border border-sryn-navy",
    danger: "bg-sryn-red/10 text-sryn-red border border-sryn-red/20",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    tech: "bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20",
    fin: "bg-amber-50 text-amber-700 border border-amber-200",
    rec: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
