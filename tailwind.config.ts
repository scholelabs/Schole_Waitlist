import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/waitlistbg.png')",
      },
      fontFamily: {
        segoe: ["var(--font-segoe)"],
        tttravels: ["var(--font-tttravels)"],
      },
    },
  },
  plugins: [],
};
export default config;
