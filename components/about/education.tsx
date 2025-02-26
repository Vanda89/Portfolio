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
    <Card className="flex flex-col gap-4 p-6" id="education">
      <CardHeader className="pb-4 border-b border-gray-300">
        <h2 className={title({ size: "md" })}>Formations</h2>
      </CardHeader>
      <CardBody>
        <ul className="space-y-4 flex flex-col gap-8">
          {cvData.formation.map((formation) => {
            const category = formationCategoryMap[formation.title];
            const formationProjects = projects.filter(
              (project) => project.category === category,
            );

            return (
              <li
                key={`${formation.title}-${formation.duration}`}
                className="flex flex-col gap-1 md:pl-4"
              >
                <h3 className={title({ size: "sm" })}>{formation.title}</h3>
                <p className={subtitle({ size: "sm" })}>
                  {formation.company} - {formation.duration}
                </p>

                {formationProjects.length > 0 && (
                  <ul className="flex flex-col  gap-4  mt-2 lg:pl-4 space-y-2">
                    {formationProjects.map((project) => (
                      <li key={project.id} className="flex flex-col gap-2">
                        <div>
                          <span>🔹</span>
                          <a
                            className="text-secondary font-semibold hover:underline hover:underline-offset-2"
                            href={project.url || "#"}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {project.title}
                          </a>
                        </div>
                        <p className={textBase({ size: "xs" })}>
                          {project.resume}
                        </p>
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
