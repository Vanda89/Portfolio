// ProjectCard

"use client";
import { Link, Image, CardBody, Card, CardHeader } from "@heroui/react";
import { card, textBase } from "../../styles/primitives";
import { title } from "@/styles/primitives";
import { Project } from "@/types/Project";

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
            {project.resume}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
