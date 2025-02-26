"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

import { title } from "@/styles/primitives";
import { CvData } from "@/types/types";

export const Skills = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-6 gap-4" id="skills">
      <CardHeader className="pb-4 border-b border-gray-300">
        <h2
          className={title({
            size: "md",
          })}
        >
          Compétences
        </h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap  gap-x-2 gap-y-4">
          {cvData.skills.map((skill) => (
            <Chip key={skill} color="secondary" variant="solid">
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
