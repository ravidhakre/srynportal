import * as React from "react";
import { cn } from "../lib/utils";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, description, children, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className={cn(
          "w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-sryn-gray-border animate-in zoom-in-95 duration-200",
          className
        )}
      >
        {title && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-sryn-navy">{title}</h2>
            {description && <p className="text-sm text-sryn-gray-text mt-1">{description}</p>}
          </div>
        )}
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sryn-gray-text hover:text-sryn-navy focus:outline-none"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
