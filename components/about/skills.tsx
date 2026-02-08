"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { textBase, title } from "@/styles/primitives";
import type { CvData } from "@/types/types";
import { CheckCircleIcon } from "../common/icons";

export const Skills = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-6 gap-6 bg-background-200 " id="skills">
      <CardHeader className="pb-4 border-b border-gray-300 dark:border-gray-700">
        <h2
          className={title({
            size: "md",
            weight: "bold",
          })}
        >
          Compétences
        </h2>
      </CardHeader>
      <CardBody className="gap-12 pl-6">
        {/* Hard Skills */}
        <div className="space-y-4">
          <h3
            className={title({
              size: "sm",
              weight: "semibold",
            })}
          >
            Hard Skills
          </h3>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            {cvData.hardSkills.map((skill) => (
              <Chip
                aria-label={`Compétence technique : ${skill}`}
                className="text-white bg-secondary dark:bg-primary"
                key={skill}
                variant="solid"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-4">
          <h3
            className={title({
              size: "sm",
              weight: "semibold",
            })}
          >
            Soft Skills
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {cvData.softSkills.map((skill) => (
              <div
                className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 "
                key={skill.name}
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className="fill-secondary stroke-white  dark:fill-primary dark:stroke-gray-800 mt-1 flex-shrink-0"
                  size={16}
                />
                <div className="flex flex-col gap-1">
                  <p className={textBase({ size: "md", weight: "semibold" })}>{skill.name}</p>
                  <p
                    className={textBase({
                      class: "text-gray-600 dark:text-gray-400 text-sm",
                    })}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
