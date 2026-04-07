// ProjectsList

import type { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24  lg:gap-8 lg:mx-8 xl:gap-16 xl:mx-0">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} priority={index === 0} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
