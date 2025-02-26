"use client";
import React from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/styles/primitives";
import { GithubIcon } from "@/components/common/icons";

const Banner = () => {
  return (
    <section
      id="banner"
      className="inline-block  pt-20 w-full text-center justify-center items-center  min-h-[calc(100vh-12rem)] bg-center bg-cover "
      style={{}}
    >
      <div className="flex flex-col gap-4">
        <h1>
          <span className={title({ size: "xl" })}>Bienvenue sur </span>
          <span className={title({ color: "violet", size: "xl" })}>
            mon portfolio
          </span>
        </h1>
        <p>
          <span className={title({ size: "xl" })}>
            Je suis Sandrine Alcazar,{" "}
          </span>
        </p>
        <p>
          <span className={title({ size: "xl" })}>
            Développeuse d&#39;applications{" "}
            <span className={title({ color: "violet", size: "xl" })}>JS </span>
          </span>
        </p>
      </div>

      <div className={subtitle({ size: "lg", class: "mt-8 text-gray-600" })}>
        Découvrez mes réalisations et projets, peu importe votre domaine.
      </div>
      <div className="flex gap-3 mt-16 justify-center">
        <Link
          isExternal
          className={buttonStyles({
            size: "lg",
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
          href="mailto:sandrinealcazar@gmail.com?subject=Opportunité%20professionnelle%20-%20Contact%20via%20votre%20portfolio"
          role="button"
        >
          Contactez-moi
        </Link>
        <Link
          isExternal
          className={clsx(
            buttonStyles({
              size: "lg",
              variant: "ghost",
              radius: "full",
            }),
            " hover:opacity-100 text-foreground hover:bg-foreground border-foreground hover:text-white dark:hover:text-black"
          )}
          href={siteConfig.links.github}
          role="button"
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default Banner;
