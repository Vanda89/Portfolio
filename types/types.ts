import Link from "next/link";
import { ReactNode, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
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
  url?: string;
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
  image: string;
  name: string;
  role: string;
  contacts: Contacts;
  hardSkills: string[];
  softSkills: { name: string; description: string }[];
  formation: Formation[];
  activities: Activities[];
}

export interface Form {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface Button {
  as?: "a" | "button" | typeof Link;
  href?: string;
  rel?: string;
  target?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  children: ReactNode;
  icon?: string | ReactNode;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: "solid" | "ghost" | "shadow";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  value?: string;
  className?: string;
  onPress?: () => void;
}
