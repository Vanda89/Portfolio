"use client";
import { Divider, tv } from "@heroui/react";
import Link from "next/link";

const footerVariants = tv({
  slots: {
    footer:
      "w-full flex flex-col md:flex-row items-center md:justify-center gap-3 md:h-24 bg-gray-900 text-white py-4 mt-10 text-center rounded-none",
    copyright: "text-sm opacity-80",
    credits: "text-sm opacity-80 ",
    mentions: "underline underline-offset-4 text-xs pl-1 opacity-80",
    dividerVertical: "hidden h-6 md:block bg-gray-700",
    dividerHorizontal: "block md:hidden w-48 bg-gray-700",
  },
});

const Footer = () => {
  return (
    <footer className={footerVariants.slots.footer} id="footer">
      <p className={footerVariants.slots.copyright}>
        © {new Date().getFullYear()} Sandrine Alcazar - Tous droits réservés.
      </p>

      <Divider
        className={footerVariants.slots.dividerVertical}
        orientation="vertical"
      />
      <Divider
        className={footerVariants.slots.dividerHorizontal}
        orientation="horizontal"
      />

      <p className={footerVariants.slots.credits}>
        Développé avec ❤️ par Sandrine Alcazar
      </p>
      <Divider
        className={footerVariants.slots.dividerVertical}
        orientation="vertical"
      />
      <Divider
        className={footerVariants.slots.dividerHorizontal}
        orientation="horizontal"
      />
      <Link className={footerVariants.slots.mentions} href="/mentions">
        Mentions légales
      </Link>
    </footer>
  );
};

export default Footer;
