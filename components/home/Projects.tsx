// Projects

"use client";

import ProjectsList from "../projects/ProjectsList";
import ProjectsFilter from "../projects/ProjectsFilter";

import { title } from "@/styles/primitives";
import { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import projects from "@/data/projects.json";
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
      id="projects"
      className="container
        min-h-screen w-full pt-20 px-2 mx-auto flex flex-col items-center gap-8 "
    >
      <h2 className={title({ size: "md", class: "mb-6" })}>Mes Projets</h2>

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
