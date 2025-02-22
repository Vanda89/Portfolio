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
import { title, subtitle } from "@/styles/primitives";
import { CvData, Project } from "@/types/types";

export const Skills = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-4 gap-4">
      <CardHeader>
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
            <Chip key={skill} variant="solid" color="secondary">
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
