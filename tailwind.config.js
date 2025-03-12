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
            background: { DEFAULT: "#FFF", 100: "#F4F4F5" },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: { DEFAULT: "#000", 100: "#18181B" },
            secondary: "#ae7ede",
          },
        },
      },
    }),
  ],
};
