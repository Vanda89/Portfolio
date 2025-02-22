"use client";

import {
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
} from "@heroui/react";
import { title, subtitle } from "@/styles/primitives";
import { CvData, Project } from "@/types/types";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

export const Infos = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col items-center">
        <Image
          src="@/images/profile.jpg"
          width={150}
          height={150}
          radius="full"
          alt={`photo de ${cvData.name}`}
        />
        <h1
          className={title({
            size: "lg",
            color: "violet",
          })}
        >
          {cvData.name}
        </h1>
        <p className={subtitle({ class: "text-center" })}>{cvData.role}</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-4">
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
        </div>
      </CardBody>
    </Card>
  );
};
