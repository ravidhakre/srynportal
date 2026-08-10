import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import { cn } from "../lib/utils";

export interface AuthCardProps {
  title: string;
  description?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function AuthCard({ title, description, subtitle, children, footer, className }: AuthCardProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-900 text-slate-100">
      <Card className={cn("w-full max-w-md border-slate-800 bg-slate-900/90 text-white shadow-2xl backdrop-blur-md", className)}>
        <CardHeader className="text-center space-y-2 pb-4">
          <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-sryn-navy border border-sryn-red/40 px-3 py-1 text-xs font-bold tracking-wider text-sryn-red uppercase">
            SRYN Management
          </div>
          {subtitle && <p className="text-xs text-sryn-blue font-semibold uppercase tracking-wider">{subtitle}</p>}
          <CardTitle className="text-2xl font-extrabold tracking-tight text-white">{title}</CardTitle>
          {description && <CardDescription className="text-slate-400 text-sm">{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">{children}</CardContent>
        {footer && <div className="p-6 pt-0 text-center text-xs text-slate-400 border-t border-slate-800/60 mt-4">{footer}</div>}
      </Card>
    </div>
  );
}
