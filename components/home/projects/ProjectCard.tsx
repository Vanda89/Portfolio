// ProjectCard

"use client";
import { Link, Image, CardBody, Card, CardHeader } from "@heroui/react";

import { card, textBase, title } from "@/styles/primitives";
import { Project } from "@/types/types";
import { GithubIcon } from "@/components/common/icons";

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
        <CardHeader className={card.slots.image}>
          <Image alt={project.title} src={project.image} />
        </CardHeader>
        <CardBody className={card.slots.body}>
          <div className="flex items-center gap-2">
            <h3 className={title({ size: "sm" })}>{project.title}</h3>
            {isGithubLink && (
              <GithubIcon className="text-default-500 w-5 h-5" />
            )}
          </div>
          <p className={textBase({ align: "justify", className: "mt-8" })}>
            {project.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
