import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        darkBackground: "hsl(207, 26%, 17%)",
        darkHeader:"hsl(210,24%,22%)",
        lightText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 52%)",
        lightBackground: "hsl(0, 0%, 98%)",
        darkTextLightElements: "hsl(0, 0%, 100%)"},
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
