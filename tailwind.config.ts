import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#1C1C1C",
        coral: {
          DEFAULT: "#FF5722",
          hover: "#F4511E",
          glow: "rgba(255, 87, 34, 0.35)",
        },
        muted: "#A0A0A0",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-plus-jakarta)", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "32": "32px",
        "folio": "32px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
