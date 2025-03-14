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
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: {
              DEFAULT: "#FFF",
              100: "#F3F4F6",
              200: "#E5E7EB",
              300: "#D1D5DB",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: {
              DEFAULT: "#010415",
              100: "#0F172B",
              200: "#101828",
              300: "#1F2937",
            },
          },
        },
      },
    }),
  ],
};
