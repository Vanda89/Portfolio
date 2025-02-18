// ProjectCard

"use client";
import { Link, Image } from "@heroui/react";
import NextImage from "next/image";

import { title } from "@/components/primitives";
import { Project } from "@/types/Project";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="px-4 py-8 shadow-cardShadowLight dark:shadow-cardShadowDark text-foreground bg-default-100 flex flex-col items-center rounded-xl gap-16 h-full">
        <Image
          alt={project.title}
          as={NextImage}
          className="border-2 border-gray-100"
          height={260}
          src={project.image}
          width={350}
        />
        <div className="text-center">
          <h3 className={title({ size: "xs" })}>{project.title}</h3>
          <p className="text-justify mt-8">{project.resume}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
