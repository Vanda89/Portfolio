import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Project {
  id: number;
  category: string;
  title: string;
  date: string;
  technologies: string[];
  filters: { [key: string]: string[] };
  resume: string;
  description: string;
  url: string;
  image: string;
  github: string;
}

export interface Contacts {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Formation {
  title: string;
  company: string;
  duration: string;
  projects?: string[];
}

export interface Activities {
  title: string;
  company?: string;
  duration: string;
  description?: string;
}

export interface CvData {
  name: string;
  role: string;
  contacts: Contacts;
  skills: string[];
  formation: Formation[];
  activities: Activities[];
}
