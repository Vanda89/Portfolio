import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xxs: "text-[1.25rem] lg:text-2xl leading-6",
      xs: "text-[1.75rem] lg:text-3xl leading-7",
      sm: "text-[2rem] lg:text-4xl leading-8",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl leading-10",
      xl: "text-6xl lg:text-7xl leading-[3.5rem]",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-semibold",
      extrabold: "font-extrabold",
    },
    fullWidth: {
      true: "w-full block",
    },
  },

  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full my-2 text-default-600 block max-w-full",
  variants: {
    size: {
      sm: "text-base md:text-lg",
      md: "text-lg md:text-xl",
      lg: "text-xl md:text-2xl",
      xl: "text-2xl md:text-3xl",
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
    base: "flex flex-col items-center h-full rounded-xl gap-16 p-4 text-foreground bg-foreground-100 shadow-lg dark:shadow-cardShadowDark",
    image:
      "border-2 border-gray-100 h-[250px] p-0 overflow-hidden rounded-lg bg-cover",
    body: "text-center",
  },
});

export const buttonVariants = {
  base: "inline-flex items-center justify-center px-2 py-1 cursor-pointer text-xs md:text-sm rounded-full",
  active: "bg-secondary text-white dark:text-violet-500 dark:bg-white",
  inactive: "bg-default-50",

  compoundVariants: [
    {
      activeTag: true,
      className: "bg-secondary text-white dark:text-violet-500 dark:bg-white",
    },
    {
      activeTag: false,
      className: "bg-default-50",
    },
  ],
};
