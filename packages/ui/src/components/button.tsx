import * as React from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "tech" | "finserv" | "recruitment";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

    const variants = {
      primary: "bg-sryn-navy text-white hover:bg-sryn-navy-500 active:scale-[0.98]",
      secondary: "bg-sryn-gray text-sryn-navy hover:bg-sryn-gray-border active:scale-[0.98]",
      outline: "border border-sryn-gray-border text-sryn-navy hover:bg-sryn-gray active:scale-[0.98]",
      ghost: "text-sryn-navy hover:bg-sryn-gray active:scale-[0.98]",
      danger: "bg-sryn-red text-white hover:bg-sryn-red-hover active:scale-[0.98]",
      tech: "bg-sryn-navy border border-sryn-blue/30 text-white hover:bg-sryn-blue active:scale-[0.98] shadow-md shadow-sryn-blue/20",
      finserv: "bg-sryn-navy text-white border-l-4 border-sryn-red hover:bg-sryn-navy-500 active:scale-[0.98]",
      recruitment: "bg-sryn-navy text-white hover:bg-sryn-red active:scale-[0.98]",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-5 text-sm",
      lg: "h-13 px-7 text-base font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
