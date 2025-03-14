"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "../common/Button";

import { GithubIcon } from "@/components/common/icons";
import cvData from "@/data/cv.json";
import { subtitle, title } from "@/styles/primitives";
import { useTheme } from "next-themes";

const Banner = () => {
  const { theme } = useTheme();
  const titleColor = theme === "dark" ? "blue" : "violet";

  return (
    <section
      className=" px-2 w-full text-center  flex flex-col items-center  gap-8  min-h-[calc(100vh-12rem)] bg-center bg-cover "
      id="banner"
      style={{}}
    >
      <Image
        alt="Image d'une femme entrain de coder sur son ordinateur portable"
        className="rounded-full my-10"
        height={200}
        src="/images/dev_web_img.webp"
        width={200}
      />
      <div className="flex flex-col gap-4">
        <h1 className={title({ size: "xl" })}>
          <span>Bienvenue sur </span>
          <span className={title({ color: titleColor })}>mon portfolio</span>
          <br />
          <span>Je suis Sandrine Alcazar,</span>
          <br />
          <span>
            Développeuse d&#39;applications
            <span className={title({ color: titleColor })}> Front-End </span>
          </span>
        </h1>
      </div>

      <p
        className={subtitle({ size: "lg", class: "mt-8 text-foreground-500" })}
      >
        Découvrez{" "}
        <Link
          className="text-foreground font-bold hover:underline"
          href="/about"
        >
          qui je suis
        </Link>{" "}
        et mes{" "}
        <Link
          className="text-foreground font-bold hover:underline"
          href="#projects"
        >
          réalisations
        </Link>
        , peu importe votre domaine.
      </p>

      <div className="flex gap-3 mt-28 justify-center">
        <Button
          as={Link}
          className="bg-violet-600 dark:bg-primary text-white"
          href="/contact"
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
