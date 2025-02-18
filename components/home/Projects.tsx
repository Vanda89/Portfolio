// Projects

"use client";
import clsx from "clsx";

import ProjectsList from "../projects/ProjectsList";
import ProjectsFilter from "../projects/ProjectsFilter";

import { title } from "@/components/primitives";
import { projects } from "@/data/projects";
import { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { Project } from "@/types/Project";

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
        Object.keys(project.category).some((key) =>
          project.category[key].some((item) =>
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
        min-h-screen w-full pt-20 mx-auto flex flex-col items-center gap-8 "
    >
      <h2 className={clsx(title(), "mb-6")}>Mes Projets</h2>
      <div className="">
        <ProjectsFilter
          activeTag={activeTag}
          handleTag={handleTag}
          tagList={tagList}
        />
      </div>
      <ProjectsList projects={filteredList} />
    </section>
  );
};

export default Projects;
