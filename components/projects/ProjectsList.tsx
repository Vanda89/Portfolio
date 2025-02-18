// ProjectsList

"use client";
import ProjectCard from "./ProjectCard";

import { Project } from "@/types/Project";

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-28 ">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
