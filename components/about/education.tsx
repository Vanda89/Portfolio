"use client";

import {
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
} from "@heroui/react";
import { title, subtitle, textBase } from "@/styles/primitives";
import { CvData, Project } from "@/types/types";

const formationCategoryMap: { [key: string]: string } = {
  "Développeur Front-end JavaScript/React": "dev js",
  "Développeur/Intégrateur Web": "dev web",
};
export const Education = ({
  cvData,
  projects,
}: {
  cvData: CvData;
  projects: Project[];
}) => {
  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardHeader>
        <h2 className={title({ size: "md" })}>Formations</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {cvData.formation.map((formation) => {
          const category = formationCategoryMap[formation.title];
          const formationProjects = projects.filter(
            (project) => project.category === category
          );

          return (
            <div
              key={`${formation.title}-${formation.duration}`}
              className="mb-6"
            >
              <div className="flex flex-col items-start">
                <h3 className={title({ size: "xs", class: "text-secondary" })}>
                  {formation.title}
                </h3>
                <p className={subtitle({ size: "sm" })}>
                  {formation.company} - {formation.duration}
                </p>
              </div>
              {formationProjects.length > 0 && (
                <ul className=" pl-7">
                  {formationProjects.map((project) => (
                    <li key={project.id} className="before:content-['⭐'] mb-2">
                      <a
                        href={project.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-secondary font-semibold hover:underline"
                      >
                        {project.title} :
                      </a>

                      <span className={textBase({ size: "sm" })}>
                        &nbsp;{project.resume}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
