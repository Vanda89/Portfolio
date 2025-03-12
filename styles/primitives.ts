import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",

      blue: "from-[#5EA2EF] to-[#0072F5]",

      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xs: "text-[1rem] sm:text-[1.4rem] lg:text-xl leading-7",
      sm: "text-[1.1rem] sm:text-[1.5rem] lg:text-2xl leading-8",
      md: "text-[1.5rem] sm:text-[1.8rem] lg:text-3xl leading-9",
      lg: "text-[1.75rem] sm:text-[2.1rem] lg:text-4xl leading-10",
      xl: "text-[2rem] sm:text-[2.3rem] lg:text-5xl !leading-[3.5rem]",
    },

    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    fullWidth: {
      true: "w-full block",
    },
  },

  compoundVariants: [
    {
      color: ["violet", "foreground", "blue"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: " my-2 text-default-500 block max-w-full",
  variants: {
    size: {
      sm: "text-sm md:text-base",
      md: "text-base md:text-lg",
      lg: "text-lg md:text-xl",
      xl: "text-xl md:text-2xl",
    },

    fullWidth: {
      true: "!w-full",
      false: "md:w-1/2",
    },
  },
  defaultVariants: {
    size: "md",
    fullWidth: true,
  },
});

export const textBase = tv({
  base: "text-foreground leading-relaxed",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  },
});

export const card = tv({
  slots: {
    base: "background-none flex flex-col items-center h-full rounded-xl gap-16 p-4 text-foreground bg-foreground-200 shadow-lg ",
    imageContainer:
      "relative flex justify-center border-1 border-gray-200  p-0 overflow-hidden rounded-lg bg-cover",
    body: "text-center",
  },
});
