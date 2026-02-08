"use client";

import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";
import { subtitle, textBase, title } from "@/styles/primitives";
import type { CvData, Project } from "@/types/types";
import { GithubIcon, WorldIcon } from "../common/icons";

const formationCategoryMap: { [key: string]: string } = {
  "Conceptrice Développeuse d'Applications Full Stack": "dev fullstack",
  "Développeuse Front-end JavaScript/React": "dev js",
  "Développeur/Intégrateur Web": "dev web",
};

export const Education = ({ cvData, projects }: { cvData: CvData; projects: Project[] }) => {
  return (
    <Card className="flex flex-col gap-4 p-6 bg-background-200 " id="education">
      <CardHeader className="pb-4 border-b border-gray-300">
        <h2 className={title({ size: "md", weight: "bold" })}>Formations</h2>
      </CardHeader>
      <CardBody>
        <ul className="space-y-4 flex flex-col gap-8">
          {cvData.formation.map((formation) => {
            const category = formationCategoryMap[formation.title];
            const formationProjects = projects.filter((project) => project.category === category);

            return (
              <li
                className="flex flex-col gap-1 md:pl-3"
                key={`${formation.title}-${formation.duration}`}
              >
                <h3 className={title({ size: "sm" })}>{formation.title}</h3>
                <h4 className={title({ size: "sm" })}>{formation.level}</h4>

                <p className={subtitle({ size: "sm" })}>
                  {formation.company} - {formation.duration} - {formation.location}
                </p>

                {formation.stage && (
                  <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <h4 className={title({ size: "xs", weight: "semibold" })}>
                      Stage - {formation.stage.company}
                    </h4>
                    <p className={subtitle({ size: "sm" })}>
                      {formation.stage.location} - {formation.stage.duration}
                    </p>
                    <p className={textBase({ size: "sm" })}>{formation.stage.description}</p>
                    {formation.stage.technologies && formation.stage.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-x-2 gap-y-4 mt-3">
                        {formation.stage.technologies.map((techno) => (
                          <Chip
                            aria-label={`Technologie utilisée : ${techno}`}
                            className="text-white bg-secondary dark:bg-primary"
                            key={techno}
                            variant="solid"
                          >
                            {techno}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {formationProjects.length > 0 && (
                  <ul className="flex flex-col  gap-4  mt-2  space-y-2">
                    {formationProjects.map((project) => (
                      <li
                        className="flex flex-col gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer"
                        key={project.id}
                      >
                        <div className="flex items-center gap-2">
                          <a
                            className="flex items-center gap-2 hover:text-primary hover:underline"
                            href={project.url || project.github}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <WorldIcon className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold  ">{project.title}</h4>
                          </a>
                          <Divider className="w-0.5 h-4 mx-2" />
                          <a
                            className="flex items-center gap-2 hover:text-secondary duration-300 hover:underline"
                            href={project.github}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <GithubIcon className=" w-5 h-5 text-secondary " />
                            <h4 className="font-semibold    ">Github</h4>
                          </a>
                        </div>
                        <p
                          className={textBase({
                            size: "sm",
                            class: "text-foreground-500 py-1",
                          })}
                        >
                          {project.resume}
                        </p>
                        <div className="flex flex-wrap gap-x-2 gap-y-4">
                          {project.technologies.map((techno, index) => (
                            <Chip
                              aria-label={`Technologie utilisée : ${techno}`}
                              className="text-white bg-secondary dark:bg-primary"
                              key={`${project.id}-${index}`}
                              variant="solid"
                            >
                              {techno}
                            </Chip>
                          ))}
                        </div>
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
