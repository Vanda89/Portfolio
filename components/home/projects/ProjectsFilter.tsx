"use client";

import { Button } from "@heroui/react";

interface Props {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

const ProjectsFilter = ({ activeTag, handleTag, tagList }: Props) => {
  return (
    <div className="w-full grid grid-cols-3 justify-center lg:flex lg:justify-between gap-2 md:gap-4">
      {tagList.map((tag) => {
        return (
          <Button
            aria-label={tag.toLowerCase()}
            as="button"
            className={`px-2 md:px-8 py-1 md:py-2 cursor-pointer text-sm md:text-md  font-medium
           ${activeTag === tag ? "bg-secondary font-semibold text-white  dark:bg-primary" : "bg-background-200"}`}
            key={tag}
            radius="full"
            value={tag}
            variant="shadow"
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
