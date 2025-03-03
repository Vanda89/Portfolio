"use client";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ArrowDown, ArrowUp } from "./icons";

const ScrollArrow = () => {
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState(0);
  const [elementIds, setElementIds] = useState<string[]>([]);

  useEffect(() => {
    // Définir les sections selon la page
    let mainSectionIds: string[] = [];

    switch (pathname) {
      case "/":
        mainSectionIds = ["banner", "projects", "footer"];
        break;
      case "/about":
        mainSectionIds = [
          "infos",
          "skills",
          "education",
          "activities",
          "footer",
        ];
        break;
      case "/contact":
        mainSectionIds = ["contact", "footer"];
        break;
      case "/mentions":
        mainSectionIds = ["mentions", "footer"];
        break;
      default:
        mainSectionIds = [];
    }

    const elements = Array.from(document.querySelectorAll("[id]"))
      .map((el) => el.id)
      .filter((id) => mainSectionIds.includes(id));

    setElementIds(elements);
    setCurrentSection(0); // Reset la section courante lors du changement de page
  }, [pathname]);

  const scrollToElement = (index: number) => {
    const targetId = elementIds[index];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    if (currentSection === elementIds.length - 1) {
      setCurrentSection(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      scrollToElement(nextSection);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const viewportMiddle = window.innerHeight / 2;

        elementIds.forEach((id, index) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
              setCurrentSection(index);
            }
          }
        });

        // Détection du bas de page
        if (
          window.innerHeight + window.pageYOffset >=
          document.documentElement.scrollHeight - 20
        ) {
          setCurrentSection(elementIds.length - 1);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [elementIds]);

  // Ne pas afficher la flèche s'il n'y a pas de sections ou une seule section
  if (elementIds.length <= 1) return null;

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <Button
        isIconOnly
        aria-label={
          currentSection === elementIds.length - 1
            ? "Retourner en haut"
            : "Section suivante"
        }
        className="p-1 rounded-full bg-gray-200 stroke-gray-800 hover:bg-black hover:stroke-white"
        onPress={handleClick}
      >
        {currentSection === elementIds.length - 1 ? <ArrowUp /> : <ArrowDown />}
      </Button>
    </div>
  );
};

export default ScrollArrow;
