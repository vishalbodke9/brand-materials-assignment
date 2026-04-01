import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#060608",
          surface: "#0d0d12",
          card: "#111118",
          card2: "#16161f",
          orange: "#f97316",
          "orange-dark": "#ea580c",
          purple: "#7c3aed",
          muted: "#6b6b80",
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "33%": { transform: "translateY(-18px) scale(1.03)" },
          "66%": { transform: "translateY(10px) scale(0.97)" },
        },
        blobMove: {
          from: { transform: "translate(0, 0) scale(1)" },
          to:   { transform: "translate(30px, 20px) scale(1.1)" },
        },
        linePulse: {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "0.7" },
        },
        lineGrow: {
          from: { height: "0", opacity: "0" },
          to:   { height: "220px", opacity: "1" },
        },
        revealUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease both",
        float: "float 8s ease-in-out infinite",
        blobMove: "blobMove 10s ease-in-out infinite alternate",
        linePulse: "linePulse 4s ease-in-out infinite",
        lineGrow: "lineGrow 1.2s 0.4s ease forwards",
        revealUp: "revealUp 0.7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
