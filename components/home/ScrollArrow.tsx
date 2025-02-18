"use client";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "../icons";

const ScrollArrow = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sectionIds = ["navbar", "banner", "projects", "footer"];

  const scrollToSection = (index: number) => {
    const targetId = sectionIds[index];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    if (currentSection === sectionIds.length - 1) {
      setCurrentSection(0);
      scrollToSection(0);
    } else {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      scrollToSection(nextSection);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentSection(index);
          }
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setCurrentSection(sectionIds.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Button
        aria-label="Passer à la section suivante"
        isIconOnly
        onPress={handleClick}
        className="p-2 rounded-full bg-gray-200 stroke-gray-800 hover:bg-black hover:stroke-white "
      >
        {currentSection === sectionIds.length - 1 ? <ArrowUp /> : <ArrowDown />}
      </Button>
    </div>
  );
};

export default ScrollArrow;
