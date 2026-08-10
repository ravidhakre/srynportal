import type { Config } from "tailwindcss";

const sharedTailwindConfig: Omit<Config, "content"> = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sryn: {
          navy: {
            DEFAULT: "#0B132B",
            50: "#F0F4F8",
            100: "#D9E2EC",
            500: "#1C315E",
            700: "#0B132B",
            900: "#060A17",
          },
          red: {
            DEFAULT: "#D90429",
            hover: "#EF233C",
            dark: "#A0001C",
          },
          blue: {
            DEFAULT: "#0066FF",
            accent: "#00D2FF",
            dark: "#0047AB",
          },
          charcoal: {
            DEFAULT: "#1C1C1E",
            muted: "#3A3A3C",
          },
          gray: {
            DEFAULT: "#F8F9FA",
            border: "#E2E8F0",
            text: "#64748B",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Manrope", "sans-serif"],
        heading: ["var(--font-heading)", "Manrope", "Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default sharedTailwindConfig;
