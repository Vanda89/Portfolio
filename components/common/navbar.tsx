import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";
import { tv } from "tailwind-variants";

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
      "text-md lg:text-lg header-links data-[active=true]:text-primary-600 data-[active=true]:font-medium",
    desktopIcon: "flex gap-7 md:ml-auto",
    icons: "text-default-500 header-links",
    navbarMobileMenu: "flex items-center sm:hidden",
    mobileLinksContainer: "mx-4 mt-2 flex flex-col gap-2",
    navbarMobileItem:
      "text-lg text-foreground hover:text-primary py-2 px-4 rounded-md",
  },
});

export const Navbar = () => {
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
          aria-hidden="true"
          className={navbarVariants.slots.linksContainer}
          data-hidden-mobile="true"
        >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                aria-current={
                  typeof window !== "undefined" &&
                  item.href === window.location.pathname
                    ? "page"
                    : undefined
                }
                className={navbarVariants.slots.navbarLinks}
                href={item.href}
              >
                {item.label}
              </NextLink>
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
          aria-label="Toggle navigation menu"
          className={navbarVariants.slots.navbarMobileMenu} // Aligné avec les icônes sur mobile
        />
      </NavbarContent>

      {/* Menu Hamburger (Mobile) */}
      <NavbarMenu className="mt-16" id="navbar-menu">
        <div className={navbarVariants.slots.mobileLinksContainer}>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                aria-current={
                  typeof window !== "undefined" &&
                  item.href === window.location.pathname
                    ? "page"
                    : undefined
                }
                className={navbarVariants.slots.navbarMobileItem}
                href={item.href}
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
