"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { FiCalendar, FiBriefcase } from "react-icons/fi"; // Icônes

import { CvData } from "@/types/types";
import { title, textBase } from "@/styles/primitives";

export const Activities = ({ cvData }: { cvData: CvData }) => {
  return (
    <Card className="flex flex-col gap-6 p-6 bg-gray-50">
      <CardHeader className="pb-4 border-b border-gray-300">
        <h2 className={title({ size: "md" })}>Activités</h2>
      </CardHeader>
      <CardBody className="space-y-6">
        <ul className="space-y-4">
          {cvData.activities.map((activity) => (
            <li
              key={activity.title}
              className="flex flex-col gap-4 lg:gap-0 p-4 bg-white border-2 border-violet-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center lg:mb-4">
                <div className="flex items-center justify-between gap-3">
                  <FiBriefcase className="text-violet-600 min-w-6 " />
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
                <FiCalendar className="text-blue-500 min-w-6" />
                <p className={textBase({ size: "sm" })}>{activity.duration}</p>
              </div>

              <div className="flex items-baseline flex-col ">
                <p
                  className={textBase({
                    size: "sm",
                    class: "text-gray-800 lg:mt-3",
                  })}
                >
                  {activity.description}
                </p>

                {activity.company && (
                  <p
                    className={textBase({
                      size: "sm",
                      class: "text-gray-500 py-1 rounded-full",
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
