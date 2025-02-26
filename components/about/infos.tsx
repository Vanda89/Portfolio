"use client";

import { Button, Card, CardBody, CardHeader, Avatar } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/styles/primitives";
import { CvData } from "@/types/types";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

export const Infos = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-6 flex flex-col items-center">
      <CardHeader className="md:w-[90%] lg:w-[80%]  flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-16 ">
        {/*  <Image
  src={cvData.image && cvData.image.trim() !== "" ? cvData.image : "/images/avatar-placeholder.png"}
  width={150}
  height={150}
  className="rounded-full"
  alt={`photo de ${cvData.name}`}
/> */}

        <Avatar className="min-w-content min-h-content w-32 h-24" />

        <div className="flex flex-col items-center w-full">
          <h1
            className={title({
              size: "xl",
              color: "violet",
              class: "text-center",
            })}
          >
            {cvData.name}
          </h1>
          <p className={subtitle({ class: "text-center" })}>{cvData.role}</p>
        </div>
      </CardHeader>
      <CardBody className="md:w-[90%] lg:w-[80%] flex flex-col md:flex-row md:justify-center w-full items-center gap-4">
        <Button
          as="a"
          className={buttonStyles({
            variant: "shadow",
            fullWidth: true,
            class: "text-xs md:text-md",
          })}
          color="default"
          href={siteConfig.links.mail}
        >
          <MailIcon className="w-4 text-secondary" /> {cvData.contacts.email}
        </Button>
        <Button
          as="a"
          className={buttonStyles({
            variant: "shadow",
            fullWidth: true,
            class: "text-xs md:text-md",
          })}
          color="default"
          href={siteConfig.links.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          variant="shadow"
        >
          <LinkedInIcon className="w-4 text-secondary" />
          LinkedIn
        </Button>
        <Button
          as="a"
          className={buttonStyles({
            variant: "shadow",
            fullWidth: true,
            class: "text-xs md:text-md",
          })}
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon className="w-5 text-secondary" /> GitHub
        </Button>
      </CardBody>
    </Card>
  );
};
