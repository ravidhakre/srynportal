import * as React from "react";
import { Input, type InputProps } from "./input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../lib/utils";

export interface FormInputProps extends InputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, isPassword = false, type = "text", className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const actualType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="flex flex-col space-y-1.5 w-full text-left">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          {label}
        </label>
        <div className="relative w-full">
          <Input
            ref={ref}
            type={actualType}
            className={cn(
              "bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-sryn-blue",
              isPassword && "pr-10",
              error && "border-sryn-red focus-visible:ring-sryn-red",
              className
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
        </div>
        {error && <p className="text-xs text-sryn-red font-medium mt-0.5">{error}</p>}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
