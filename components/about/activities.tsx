"use client";
import { CvData, Project } from "@/types/types";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { title, subtitle } from "@/styles/primitives";

export const Activities = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="p-4">
      <CardHeader>
        <h2 className={title({ size: "md" })}>Activités</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {cvData.activities.map((activity) => {
          return (
            <div key={activity.title} className="flex flex-col gap-2">
              <div className="flex gap-4">
                <h3 className={title({ size: "xs" })}>{activity.title}</h3>
                <span>{activity.duration}</span>
                <p className={subtitle({ size: "sm", class: "w-auto" })}>
                  {activity.company}
                </p>
              </div>
              <div className="flex ">
                <h4 className={subtitle({ size: "sm" })}>
                  {activity.description}
                </h4>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
