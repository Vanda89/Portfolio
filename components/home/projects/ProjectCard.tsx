// ProjectCard

"use client";
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import Image from "next/image";

import { GithubIcon } from "@/components/common/icons";
import { projectCard as card, textBase, title } from "@/styles/primitives";
import { Project } from "@/types/types";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const linkUrl =
    project.url && !project.url.startsWith("_") ? project.url : project.github;
  const isGithubLink = linkUrl === project.github;

  return (
    <Link href={linkUrl} target="_blank">
      <Card className={card.slots.base}>
        <CardHeader className={card.slots.imageContainer}>
          <Image
            alt={`Miniature du projet ${project.title} réalisé par Sandrine Alcazar`}
            className="object-cover rounded-lg"
            fill
            loading="lazy"
            sizes="(max-width: 320px) 100vw, (max-width: 640px) 50vw, (max-width: 1280px) 75vw, 1280px"
            src={project.image}
          />
        </CardHeader>
        <CardBody className={card.slots.body}>
          <div className="flex items-center gap-2">
            <h3 className={title({ size: "sm" })}>{project.title}</h3>
            {isGithubLink && (
              <GithubIcon className="text-default-500 w-5 h-5" />
            )}
          </div>
          <p className={textBase({ align: "left", className: "mt-8" })}>
            {project.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
