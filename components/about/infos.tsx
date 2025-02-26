"use client";

import {
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
  Avatar,
} from "@heroui/react";
import { title, subtitle } from "@/styles/primitives";
import { CvData, Project } from "@/types/types";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

export const Infos = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col md:flex-row items-center md:justify-center gap-16 ">
        {/*  <Image
  src={cvData.image && cvData.image.trim() !== "" ? cvData.image : "/images/avatar-placeholder.png"}
  width={150}
  height={150}
  className="rounded-full"
  alt={`photo de ${cvData.name}`}
/> */}

        <Avatar className="w-32 h-32"></Avatar>

        <div>
          <h1
            className={title({
              size: "xl",
              color: "violet",
            })}
          >
            {cvData.name}
          </h1>
          <p className={subtitle({ class: "text-center" })}>{cvData.role}</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col md:flex-row md:justify-center w-full items-center gap-4">
        <Button
          as="a"
          variant="shadow"
          color="default"
          href={siteConfig.links.mail}
        >
          <MailIcon className="w-4 text-secondary" /> {cvData.contacts.email}
        </Button>
        <Button
          as="a"
          variant="shadow"
          color="default"
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="w-4 text-secondary" />
          LinkedIn
        </Button>
        <Button
          as="a"
          variant="shadow"
          color="default"
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-5 text-secondary" /> GitHub
        </Button>
      </CardBody>
    </Card>
  );
};
