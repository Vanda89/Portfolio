const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        cardShadowLight:
          "0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(255, 255, 255, 0.15)",
        cardShadowDark:
          "0px 10px 10px rgba(255, 255, 255, 0.15), 0px 20px 40px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {},
          colors: { background: { DEFAULT: "#FFF", 100: "#F4F4F5" } },
        },
        dark: {
          layout: {},
          colors: { background: { DEFAULT: "#000", 100: "#18181B" } },
        },
      },
    }),
  ],
};
