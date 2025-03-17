"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";

import Button from "../common/Button";

import { siteConfig as site } from "@/config/site";
import { subtitle, title } from "@/styles/primitives";
import { CvData } from "@/types/types";
import { DownloadIcon } from "../common/icons";

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
      startContent={<Icon className="w-4 text-secondary" />}
      href={link.href}
      rel={link.rel}
      target={link.target}
    >
      {link.label}
    </Button>
  );
};

export const Infos = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card
      className="p-6 flex flex-col items-center bg-background-200 "
      id="infos"
    >
      <CardHeader className="flex flex-col md:flex-row items-center md:justify-around px-16 gap-8 md:gap-0 ">
        {/*  <Image
  src={cvData.image && cvData.image.trim() !== "" ? cvData.image : "/images/avatar-placeholder.png"}
  width={150}
  height={150}
  className="rounded-full"
  alt={`photo de ${cvData.name}`}
/> */}
        <Button
          as="a"
          href={cvData.cv}
          startContent={<DownloadIcon className="w-4 mr-2" />}
          target="_blank"
          className="bg-secondary-400 text-md p-6 dark:bg-primary-500 text-white"
        >
          C.V.
        </Button>

        <div className="flex flex-col items-center md:items-end w-min-content">
          <h1
            className={title({
              size: "xl",
              class: "title-color text-center ",
              weight: "extrabold",
            })}
          >
            {cvData.name}
          </h1>
          <p
            className={subtitle({
              class: "text-center ",
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
