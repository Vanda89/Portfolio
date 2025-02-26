"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
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
      <CardHeader className="pb-4 border-b border-gray-300">
        <h2 className={title({ size: "md" })}>Formations</h2>
      </CardHeader>
      <CardBody>
        <ul className="space-y-4 flex flex-col gap-8">
          {cvData.formation.map((formation) => {
            const category = formationCategoryMap[formation.title];
            const formationProjects = projects.filter(
              (project) => project.category === category
            );

            return (
              <li
                key={`${formation.title}-${formation.duration}`}
                className="flex flex-col gap-1 pl-4"
              >
                <h3 className={title({ size: "xs" })}>{formation.title}</h3>
                <p className={subtitle({ size: "sm" })}>
                  {formation.company} - {formation.duration}
                </p>

                {formationProjects.length > 0 && (
                  <ul className="mt-2 pl-4 space-y-2">
                    {formationProjects.map((project) => (
                      <li key={project.id} className="flex items-center gap-2">
                        <span>🔹</span>
                        <a
                          href={project.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-semibold hover:underline"
                        >
                          {project.title}
                        </a>
                        <span className={textBase({ size: "xs" })}>
                          {project.resume}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};
