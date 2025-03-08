"use client";
import React from "react";

import Button from "../common/Button";
import Image from "next/image";
import cvData from "@/data/cv.json";
import { title, subtitle } from "@/styles/primitives";
import { GithubIcon } from "@/components/common/icons";
import Background from "../common/background/Background";

const Banner = () => {
  return (
    <section
      className=" px-2 w-full text-center  flex flex-col items-center justify-around  min-h-[calc(100vh-12rem)] bg-center bg-cover "
      id="banner"
      style={{}}
    >
      <Image
        src="/images/dev_web_img.png"
        alt="Image d'une femme entrain de coder sur son ordinateur portable"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-col gap-4">
        <h1 className={title({ size: "xl" })}>
          <span>Bienvenue sur </span>
          <span className={title({ color: "violet" })}>mon portfolio</span>
        </h1>
        <p className={title({ size: "xl" })}>
          <span>Je suis Sandrine Alcazar,</span>
        </p>
        <p className={title({ size: "xl" })}>
          <span>
            Développeuse d&#39;applications
            <span className={title({ color: "violet" })}> Front-End </span>
          </span>
        </p>
      </div>

      <p className={subtitle({ size: "lg", class: "mt-8 text-gray-500" })}>
        Découvrez mes réalisations et projets, peu importe votre domaine.
      </p>
      <div className="flex gap-3 mt-16 justify-center">
        <Button
          as="a"
          color="secondary"
          href="mailto:sandrinealcazar@gmail.com?subject=Opportunité%20professionnelle%20-%20Contact%20via%20votre%20portfolio"
          icon=""
          radius="full"
          size="lg"
          variant="shadow"
        >
          Contactez-moi
        </Button>

        <Button
          as="a"
          className=" text-foreground data-[hover=true]:!bg-foreground border-foreground hover:text-white dark:hover:text-black"
          href={cvData.contacts.github}
          icon="github"
          radius="full"
          size="lg"
          variant="ghost"
        >
          <GithubIcon size={20} />
          GitHub
        </Button>
      </div>
    </section>
  );
};

export default Banner;
