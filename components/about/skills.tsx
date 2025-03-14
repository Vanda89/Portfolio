"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

import { title, textBase } from "@/styles/primitives";
import { CvData } from "@/types/types";

export const Skills = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-6 gap-6" id="skills">
      <CardHeader className="pb-4 border-b border-gray-300 dark:border-gray-700">
        <h2
          className={title({
            size: "md",
            weight: "bold",
            class: "text-gray-900 dark:text-gray-100",
          })}
        >
          Compétences
        </h2>
      </CardHeader>
      <CardBody className="space-y-8">
        {/* Hard Skills */}
        <div className="space-y-4">
          <h3
            className={title({
              size: "sm",
              weight: "semibold",
              class: "text-gray-800 dark:text-gray-200",
            })}
          >
            Compétences Techniques
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
              class: "text-gray-800 dark:text-gray-200",
            })}
          >
            Compétences Humaines
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {cvData.softSkills.map((skill) => (
              <div className="flex flex-col gap-1" key={skill.name}>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {skill.name}
                </p>
                <p
                  className={textBase({
                    class: "text-gray-700 dark:text-gray-300",
                  })}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
