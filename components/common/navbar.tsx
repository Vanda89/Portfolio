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

export const navbarVariants = tv({
  slots: {
    navbarBase: "static py-4 bg-background-100 z-10",
    navbarBrand:
      "gap-3 max-w-fit font-bold text-inherit text-lg lg:text-xl uppercase",
    linksContainer: "gap-6 justify-start ml-2 hidden md:flex text-lg",
    navbarLinks:
      "text-md lg:text-lg header-links data-[active=true]:text-primary data-[active=true]:font-medium",
    desktopIcon: "hidden sm:flex gap-4",
    icons: "text-default-500 header-links",
    navbarMobileMenu: "sm:hidden basis-1 pl-4",
    mobileLinksContainer: "mx-4 mt-2 flex flex-col gap-2",
    navbarMobileItem:
      "text-lg text-foreground hover:text-primary py-2 px-4 rounded-md",
  },
});

export const Navbar = () => {
  return (
    <HeroUINavbar className={navbarVariants.slots.navbarBase} id="navbar">
      {/* Logo et links (Desktop) */}
      <NavbarContent className="basis-1/5 sm:basis-full gap-12" justify="start">
        <NavbarBrand className={navbarVariants.slots.navbarBrand}>
          <NextLink href="/">sandrine alcazar</NextLink>
        </NavbarBrand>

        <div className={navbarVariants.slots.linksContainer}>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={navbarVariants.slots.navbarLinks}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Social Links & Theme Switch (Desktop) */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className={navbarVariants.slots.desktopIcon}>
          <Link
            isExternal
            aria-label="Linkedin"
            href={cvData.contacts.linkedin}
          >
            <LinkedInIcon className={navbarVariants.slots.icons} />
          </Link>
        </NavbarItem>
        <NavbarItem className={navbarVariants.slots.desktopIcon}>
          <Link isExternal aria-label="Github" href={cvData.contacts.github}>
            <GithubIcon className={navbarVariants.slots.icons} />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Social Links & Theme Switch (Mobile) */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={cvData.contacts.github}>
          <GithubIcon className={navbarVariants.slots.icons} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menu Hamburger */}
      <NavbarMenu className="mt-16">
        <div className={navbarVariants.slots.mobileLinksContainer}>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
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
