export interface Project {
  id: number;
  title: string;
  date: string;
  technologies: string[];
  category: { [key: string]: string[] };
  resume: string;
  description: string;
  url: string;
  image: string;
  github: string;
}
