"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";

import { textBase, title } from "@/styles/primitives";
import { CvData } from "@/types/types";
import { BriefcaseIcon, CalendarIcon } from "../common/icons";

export const Activities = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card
      className="flex flex-col gap-6 p-6  mb-6 bg-background-200 "
      id="activities"
    >
      <CardHeader className="pb-4 border-b border-foreground-300">
        <h2 className={title({ size: "md", weight: "bold" })}>Activités</h2>
      </CardHeader>
      <CardBody className="space-y-6">
        <ul className="space-y-4">
          {cvData.activities.map((activity) => (
            <li
              className="flex flex-col gap-4 lg:gap-0 p-4  rounded-lg  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 "
              key={`${activity.title}-${activity.duration}`}
            >
              <div className="flex justify-between items-center lg:mb-4">
                <div className="flex items-center justify-between gap-3">
                  <BriefcaseIcon className="text-violet-600 min-w-6 " />
                  <h3
                    className={title({
                      size: "sm",
                      weight: "bold",
                    })}
                  >
                    {activity.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <CalendarIcon className="text-blue-500 min-w-6" />
                <p className={textBase({ size: "sm" })}>{activity.duration}</p>
              </div>

              <div className="flex items-baseline flex-col ">
                <p
                  className={textBase({
                    size: "sm",
                    class: "text-foreground-500 lg:mt-3",
                  })}
                >
                  {activity.description}
                </p>

                {activity.company && (
                  <p
                    className={textBase({
                      size: "sm",
                      class: "text-foreground-500 py-1 rounded-full",
                    })}
                  >
                    {activity.company}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};
