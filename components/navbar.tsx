import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { tv } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    navbarBase: "static py-8 bg-background-100",
    navbarBrand: "gap-3 max-w-fit font-bold text-inherit text-2xl uppercase",
    linksContainer: "gap-6 justify-start ml-2 hidden lg:flex",
    navbarLinks:
      "text-xl header-links data-[active=true]:text-primary data-[active=true]:font-medium",
    desktopIcon: "hidden sm:flex gap-4",
    icons: "text-default-500 header-links",
    navbarMobileMenu: "sm:hidden basis-1 pl-4",
    mobileLinksContainer: "mx-4 mt-2 flex flex-col gap-2",
    navbarMobileItem: "text-lg hover:text-primary py-2 px-4 rounded-md",
  },
  variants: {
    color: {
      default: "text-inherit",
      primary: "text-primary",
      secondary: "text-secondary",
      danger: "text-danger",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
    visibility: {
      hidden: "hidden",
      visible: "visible",
    },
  },
});

export const Navbar = () => {
  return (
    <HeroUINavbar id="navbar" className={navbarVariants.slots.navbarBase}>
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
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon className={navbarVariants.slots.icons} />
          </Link>
        </NavbarItem>
        <NavbarItem className={navbarVariants.slots.desktopIcon}>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className={navbarVariants.slots.icons} />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Social Links & Theme Switch (Mobile) */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className={navbarVariants.slots.icons} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menu Hamburger */}
      <NavbarMenu>
        <div className={navbarVariants.slots.mobileLinksContainer}>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
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
