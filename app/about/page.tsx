import cvData from "@/data/cv.json";
import projects from "@/data/projects.json";
import { Infos } from "@/components/about/infos";
import { Skills } from "@/components/about/skills";
import { Education } from "@/components/about/education";
import { Activities } from "@/components/about/activities";
import CTA from "@/components/common/CTA";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 gap-6 flex flex-col ">
      <Infos cvData={cvData} />

      <Skills cvData={cvData} />

      <Education cvData={cvData} projects={projects} />

      <Activities cvData={cvData} />

      <CTA />
    </div>
  );
}
