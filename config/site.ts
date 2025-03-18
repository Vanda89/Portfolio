import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  PhoneIcon,
} from "@/components/common/icons";
import cvData from "@/data/cv.json";

export const siteConfig = {
  name: "Portfolio - Sandrine ALCAZAR",

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
  footer: [
    {
      label: "Mentions légales",
      href: "/mentions",
    },
  ],
  contactLinks: [
    {
      href: cvData.contacts.email,
      icon: MailIcon,
      label: cvData.contacts.email,
    },
    {
      href: cvData.contacts.linkedin,
      icon: LinkedInIcon,
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: cvData.contacts.github,
      icon: GithubIcon,
      label: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: `tel:${cvData.contacts.phone}`,
      icon: PhoneIcon,
      label: cvData.contacts.phone,
    },
  ],
};
