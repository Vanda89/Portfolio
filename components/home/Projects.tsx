// Projects

"use client";

import { useState } from "react";

import ProjectsFilter from "../home/projects/ProjectsFilter";
import ProjectsList from "../home/projects/ProjectsList";

import projects from "@/data/projects.json";
import { title } from "@/styles/primitives";
import { Project } from "@/types/types";

const Projects = () => {
  const [activeTag, setActiveTag] = useState("Tous");

  const tagList = [
    "Tous",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
  ];

  const handleTag = (tag: string) => {
    setActiveTag(tag);
  };

  const filterTags = (array: Project[]) => {
    if (activeTag.toLowerCase() === "tous") {
      return array;
    } else {
      return array.filter((project) =>
        Object.keys(project.filters).some((key) =>
          project.filters[key].some((item) =>
            item.toLowerCase().includes(activeTag.toLowerCase())
          )
        )
      );
    }
  };

  const filteredList = filterTags(projects);

  return (
    <section
      className="container
        min-h-screen w-full pt-20 px-2 mx-auto flex flex-col items-center gap-12 "
      id="projects"
    >
      <h2 className={title({ size: "lg" })}>Mes Projets</h2>

      <ProjectsFilter
        activeTag={activeTag}
        handleTag={handleTag}
        tagList={tagList}
      />

      <ProjectsList projects={filteredList} />
    </section>
  );
};

export default Projects;
