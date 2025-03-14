"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { useTheme } from "next-themes";

import Button from "../common/Button";

import { title, subtitle } from "@/styles/primitives";
import { CvData } from "@/types/types";
import { siteConfig as site } from "@/config/site";

type ContactLink = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  target?: string;
  rel?: string;
};

const contactButton = (link: ContactLink) => {
  const Icon = link.icon;

  return (
    <Button
      as="a"
      className="text-xs md:text-md w-56 flex gap-4 bg-background-300 shadow-md "
      href={link.href}
      rel={link.rel}
      target={link.target}
    >
      <Icon className="w-4 text-secondary" /> {link.label}
    </Button>
  );
};

export const Infos = ({ cvData }: { cvData: CvData }) => {
  const { theme } = useTheme();
  const titleColor = theme === "dark" ? "blue" : "violet";

  return (
    <Card
      className="p-6 flex flex-col items-center bg-background-200 "
      id="infos"
    >
      <CardHeader className="md:w-[90%] lg:w-[80%]  flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-16 ">
        {/*  <Image
  src={cvData.image && cvData.image.trim() !== "" ? cvData.image : "/images/avatar-placeholder.png"}
  width={150}
  height={150}
  className="rounded-full"
  alt={`photo de ${cvData.name}`}
/> */}

        <div className="flex flex-col items-center md:items-end lg:items-center w-full">
          <h1
            className={title({
              size: "xl",
              color: titleColor,
              class: "text-center",
              weight: "extrabold",
            })}
          >
            {cvData.name}
          </h1>
          <p
            className={subtitle({
              class: "text-center md:text-end lg:text-center",
            })}
          >
            {cvData.role}
          </p>
        </div>
      </CardHeader>
      <CardBody className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4  place-items-center md:place-content-between">
        {site.contactLinks.map((link) => (
          <div key={link.href}>{contactButton(link)}</div>
        ))}{" "}
      </CardBody>
    </Card>
  );
};
