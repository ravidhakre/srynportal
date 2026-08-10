import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-sryn-gray-border bg-white px-3.5 py-2 text-sm text-sryn-charcoal placeholder:text-sryn-gray-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sryn-navy disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
