import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-fixed": "#CAFD00",
        "primary-container": "#CAFD00",
        "on-primary-fixed": "#3A4A00",
        "on-primary-container": "#4A5E00",
        background: "#0E0E0E",
        surface: "#0E0E0E",
        "surface-container": "#1A1A1A",
        "surface-container-high": "#20201F",
        "surface-container-highest": "#262626",
        "surface-container-low": "#131313",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#ADAAAA",
        "outline-variant": "#484847",
        "inverse-primary": "#516700",
      },
      fontFamily: {
        headline: ["var(--font-plus-jakarta-sans)"],
        body: ["var(--font-manrope)"],
        label: ["var(--font-manrope)"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        "lime-soft": "0 0 20px rgba(202, 253, 0, 0.3)",
        "lime-strong": "0 0 30px rgba(202, 253, 0, 0.4)",
        "pro-card": "0 20px 40px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
