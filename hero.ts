import { heroui } from "@heroui/react";

export default heroui({
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
});
