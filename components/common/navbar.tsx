"use client";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";
import { tv } from "tailwind-variants";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { GithubIcon, LinkedInIcon } from "@/components/common/icons";
import { ThemeSwitch } from "@/components/common/theme-switch";
import { siteConfig } from "@/config/site";
import cvData from "@/data/cv.json";
import { title } from "@/styles/primitives";

export const navbarVariants = tv({
  slots: {
    navbarBase: "static py-4 bg-background-100 z-10 ",
    navbarBrand:
      "gap-3 max-w-fit font-bold text-inherit text-lg lg:text-xl uppercase",
    linksContainer: "gap-6 justify-start ml-2 hidden md:flex text-lg",
    navbarLinks:
      "text-lg text-foreground active:opacity-100 py-2 px-4 lg:py-0 lg:px-0 rounded-md",
    desktopIcon: "flex gap-7 md:ml-auto",
    icons: "text-default-500 header-links",
    navbarMobileMenu: "flex items-center sm:hidden",
    mobileLinksContainer: "mx-4 mt-2 flex flex-col gap-2",
  },
});

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <HeroUINavbar
      className={navbarVariants.slots.navbarBase}
      id="navbar"
      role="navigation"
    >
      {/* Logo et liens (Desktop et Mobile) */}
      <NavbarContent className="basis-1/5 sm:basis-full gap-16" justify="start">
        <NavbarBrand className={navbarVariants.slots.navbarBrand}>
          <h2 className={title({ size: "sm" })}>sandrine alcazar</h2>
        </NavbarBrand>

        <div
          className={navbarVariants.slots.linksContainer}
          data-hidden-mobile="true"
        >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={`${navbarVariants.slots.navbarLinks} ${
                  pathname === item.href
                    ? "! dark:text-primary-500 text-secondary underline underline-offset-4 font-medium"
                    : "text-foreground"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Social Links, Theme Switch, et Menu Hamburger (Desktop et Mobile) */}
      <NavbarContent
        className="basis-1/5 sm:basis-auto flex gap-7"
        justify="end"
      >
        <NavbarItem className={navbarVariants.slots.desktopIcon}>
          <Link
            isExternal
            aria-label="LinkedIn profile of Sandrine Alcazar"
            href={cvData.contacts.linkedin}
          >
            <LinkedInIcon className={navbarVariants.slots.icons} />
            <span className="sr-only text-primary-600">LinkedIn</span>
          </Link>
          <Link
            isExternal
            aria-label="GitHub profile of Sandrine Alcazar"
            href={cvData.contacts.github}
          >
            <GithubIcon className={navbarVariants.slots.icons} />
            <span className="sr-only text-primary-600">GitHub</span>
          </Link>
          <ThemeSwitch aria-label="Toggle dark/light theme" />
        </NavbarItem>
        <NavbarMenuToggle
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={navbarVariants.slots.navbarMobileMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {/* Menu Hamburger (Mobile) */}
      <NavbarMenu className="mt-16" id="navbar-menu">
        <div className={navbarVariants.slots.mobileLinksContainer}>
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={`${item}`}>
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={`${navbarVariants.slots.navbarLinks} ${
                  pathname === item.href
                    ? "dark:text-primary-500 text-secondary underline underline-offset-4 font-medium"
                    : "text-foreground"
                }`}
                href={item.href}
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
