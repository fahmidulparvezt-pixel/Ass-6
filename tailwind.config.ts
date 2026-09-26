import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        surface: "#161616",
        surface2: "#1e1e1e",
        edge: "#2a2a2a",
        ink: "#f4f4f2",
        muted: "#9a9a96",
        accent: "#ccff00",
        accentInk: "#0c0c0c",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
