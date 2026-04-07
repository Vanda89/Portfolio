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
        <div>
          <h3 className={title({ size: "sm", weight: "semibold" })}>Stack technique</h3>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
          {cvData.technicalSkills.map((category) => (
            <div
              className="flex flex-col gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              key={category.category}
            >
              <p className={textBase({ size: "md", weight: "semibold" })}>{category.category}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {category.skills.map((skill) => (
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
          ))}
          </div>
        </div>

        <div>
          <h3 className={title({ size: "sm", weight: "semibold" })}>Compétences métier</h3>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
          {cvData.competencies.map((competency) => (
            <div
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              key={competency}
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="fill-secondary stroke-white dark:fill-primary dark:stroke-gray-800 mt-1 flex-shrink-0"
                size={16}
              />
              <p className={textBase({ size: "md", weight: "semibold" })}>{competency}</p>
            </div>
          ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
