"use client";

import { Divider, tv } from "@heroui/react";
import Link from "next/link";

const footerVariants = tv({
  slots: {
    footer:
      "z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 bg-gray-900 text-white py-6 mt-10 text-center rounded-none",
    copyright: "text-sm text-gray-200",
    credits: "text-sm text-gray-300",
    mentions:
      "underline underline-offset-4 text-xs text-gray-300 hover:text-gray-200 transition-colors",
    dividerVertical: "hidden lg:block h-6 bg-gray-500 w-px",
    dividerHorizontal: "block lg:hidden w-48 bg-gray-500 h-px",
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerVariants.slots.footer} id="footer">
      <p className={footerVariants.slots.copyright}>
        © {currentYear} Sandrine Alcazar - Tous droits réservés.
      </p>
      <Divider className={footerVariants.slots.dividerVertical} orientation="vertical" />
      <Divider className={footerVariants.slots.dividerHorizontal} orientation="horizontal" />
      <p className={footerVariants.slots.credits}>Développé avec ❤️ par Sandrine Alcazar</p>
      <Divider className={footerVariants.slots.dividerVertical} orientation="vertical" />
      <Divider className={footerVariants.slots.dividerHorizontal} orientation="horizontal" />
      <Link
        aria-label="Accéder aux mentions légales"
        className={footerVariants.slots.mentions}
        href="/mentions"
      >
        Mentions légales
      </Link>
    </footer>
  );
};

export default Footer;
