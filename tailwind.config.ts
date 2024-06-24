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
        'custom-image': "url('/waitlistbg.png')"
      },
      fontFamily: {
        segoe: ['SegoeUI', 'sans-serif'],
        tttravels: ['TTTravelsNextTrialBlack', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
