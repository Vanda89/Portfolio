"use client";

import { Card, CardBody, CardHeader, Avatar } from "@heroui/react";

import Button from "../common/Button";

import { title, subtitle } from "@/styles/primitives";
import { CvData } from "@/types/types";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/common/icons";

export const Infos = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-6 flex flex-col items-center" id="infos">
      <CardHeader className="md:w-[90%] lg:w-[80%]  flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-16 ">
        {/*  <Image
  src={cvData.image && cvData.image.trim() !== "" ? cvData.image : "/images/avatar-placeholder.png"}
  width={150}
  height={150}
  className="rounded-full"
  alt={`photo de ${cvData.name}`}
/> */}

        <Avatar className="min-w-content min-h-content w-32 h-24" />

        <div className="flex flex-col items-center md:!items-end w-full">
          <h1
            className={title({
              size: "xl",
              color: "violet",
              class: "text-center",
            })}
          >
            {cvData.name}
          </h1>
          <p className={subtitle({ class: "text-center md:text-end" })}>
            {cvData.role}
          </p>
        </div>
      </CardHeader>
      <CardBody className="w-full   grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4  place-items-center md:place-content-between">
        <Button
          as="a"
          className="text-xs md:text-md w-56 "
          color="default"
          href={cvData.contacts.email}
          variant="shadow"
        >
          <MailIcon className="w-4 text-secondary" /> {cvData.contacts.email}
        </Button>
        <Button
          as="a"
          className="text-xs md:text-md w-56  "
          color="default"
          href={cvData.contacts.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          variant="shadow"
        >
          <LinkedInIcon className="w-4 text-secondary" />
          LinkedIn
        </Button>
        <Button
          as="a"
          className="text-xs md:text-md w-56 "
          href={cvData.contacts.github}
          rel="noopener noreferrer"
          target="_blank"
          variant="shadow"
        >
          <GithubIcon className="w-5 text-secondary" /> GitHub
        </Button>
        <Button
          as="a"
          className="text-xs md:text-md w-56 "
          color="default"
          href={`tel:${cvData.contacts.phone}`}
          variant="shadow"
        >
          <PhoneIcon className="w-4 text-secondary" /> {cvData.contacts.phone}
        </Button>
      </CardBody>
    </Card>
  );
};
