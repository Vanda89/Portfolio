"use client";
import { Button, Select, SelectItem } from "@heroui/react";
import clsx from "clsx";
import { button as buttonStyles } from "@heroui/theme";

interface Props {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

const ProjectsFilter = ({ activeTag, handleTag, tagList }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center md:flex-row md:justify-between gap-2">
      {tagList.map((tag) => {
        return (
          <Button
            aria-label={tag.toLowerCase()}
            value={activeTag}
            onPress={() => handleTag(tag)}
            className={`${clsx(
              buttonStyles({
                radius: "full",
                variant: "shadow",
                color: "default",
              })
            )}
            inline-flex items-center justify-center min-w-[min-content] px-8 py-2-flex cursor-pointer text-sm
          ${activeTag === tag ? "bg-white text-violet-500 " : "bg-default-50"}`}
            key={tag}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
