// ProjectsList

"use client";
import ProjectCard from "./ProjectCard";

import { Project } from "@/types/types";

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24  lg:gap-8 lg:mx-8 xl:gap-16 xl:mx-0">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
