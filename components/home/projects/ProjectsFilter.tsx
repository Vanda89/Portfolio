"use client";
import { Button } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";

interface Props {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

const ProjectsFilter = ({ activeTag, handleTag, tagList }: Props) => {
  return (
    <div className="w-full grid grid-cols-3 justify-center lg:flex lg:justify-between gap-2 ">
      {tagList.map((tag) => {
        return (
          <Button
            key={tag}
            aria-label={tag.toLowerCase()}
            className={buttonStyles({
              radius: "full",
              variant: "shadow",
              color: "default",
              className: ` px-2 md:px-8 py-1 md:py-2 cursor-pointer text-sm md:text-md 
      ${activeTag === tag ? "bg-secondary text-white dark:text-violet-500 dark:bg-white" : "bg-default-50"}`,
            })}
            value={activeTag}
            onPress={() => handleTag(tag)}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
