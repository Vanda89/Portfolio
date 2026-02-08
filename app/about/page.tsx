import { Activities } from "@/components/about/activities";
import { Education } from "@/components/about/education";
import { Infos } from "@/components/about/infos";
import { Skills } from "@/components/about/skills";
import CTA from "@/components/common/CTA";
import cvData from "@/data/cv.json";
import projects from "@/data/projects.json";

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
