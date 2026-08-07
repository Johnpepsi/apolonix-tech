import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1B2D",
        blueprint: "#1E3A5F",
        gridline: "#3D6D8C",
        paper: "#F5F3EC",
        amber: "#E8A33D",
        slate: {
          soft: "#8B9BAA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(61,109,140,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(61,109,140,0.16) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "20px 20px",
      },
    },
  },
  plugins: [],
};
export default config;
