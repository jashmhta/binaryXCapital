import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // Binary Capital Brand Colors
        primary: {
          DEFAULT: "#1e3a8a", // Navy Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Golden Yellow
          foreground: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#f59e0b",
          foreground: "#1e3a8a",
        },
        background: "#ffffff",
        foreground: "#1e3a8a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1e3a8a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1e3a8a",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#1e3a8a",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
