// ProjectCard

"use client";
import { Link, Image, CardBody, Card, CardHeader } from "@heroui/react";
import { card, textBase, title } from "@/styles/primitives";
import { Project } from "@/types/types";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className={card.slots.base}>
        <CardHeader className={card.slots.image}>
          <Image alt={project.title} src={project.image} />
        </CardHeader>
        <CardBody className={card.slots.body}>
          <h3 className={title({ size: "xs" })}>{project.title}</h3>
          <p className={textBase({ align: "justify", className: "mt-8" })}>
            {project.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
