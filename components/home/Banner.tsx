"use client";
import React, { forwardRef } from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

const Banner = () => {
  return (
    <section
      id="banner"
      className="inline-block  pt-20 w-full text-center justify-center items-center  min-h-[calc(100vh-12rem)] bg-center bg-cover "
      style={{}}
    >
      <div className="mb-8">
        <span className={title({ size: "md" })}>Bienvenue sur&nbsp;</span>
        <span className={title({ color: "violet", size: "md" })}>
          mon portfolio&nbsp;
        </span>
      </div>
      <br />
      <div className="gap-2 flex flex-col">
        <span className={title({ size: "md" })}>Je suis Sandrine Alcazar,</span>
        <div className={title({ size: "md" })}>
          Développeuse d&#39;applications{" "}
          <span className={title({ color: "violet", size: "md" })}>JS </span>
        </div>
      </div>
      <div className={subtitle({ class: "mt-8 text-xl text-gray-600" })}>
        Découvrez mes réalisations et projets, peu importe votre domaine.
      </div>
      <div className="flex gap-3 mt-16 justify-center">
        <Link
          isExternal
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
          href="mailto:sandrinealcazar@gmail.com?subject=Opportunité%20professionnelle%20-%20Contact%20via%20votre%20portfolio"
        >
          Contactez-moi
        </Link>
        <Link
          isExternal
          className={clsx(
            buttonStyles({
              variant: "ghost",
              radius: "full",
            }),
            " hover:opacity-100 text-foreground hover:bg-foreground border-foreground hover:text-white dark:hover:text-black"
          )}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default Banner;
