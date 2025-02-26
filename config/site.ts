export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },

    {
      label: "C.V.",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "C.V.",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/Vanda89",
    linkedin: "https://www.linkedin.com/in/alcazar-sandrine/",
    docs: "https://heroui.com",
    mail: "mailto:sandrinealcazar@gmail.com?subject=Opportunité%20professionnelle%20-%20Contact%20via%20votre%20portfolio",
  },
};
