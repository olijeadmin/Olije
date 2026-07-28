import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: "#102A43",
        navyDeep: "#0A1D30",
        gold: "#B1763F",
        goldLight: "#D9B27C",
        ivory: "#F7F3EA",
        ink: "#0D1C2E",
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1240px",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.4)", opacity: "1" },
          "100%": { transform: "scale(3.6)", opacity: "0" },
        },
        heroZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.09)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.4s ease-out infinite",
        heroZoom: "heroZoom 7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
