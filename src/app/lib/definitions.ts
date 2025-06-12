import { sectionComponents } from "../ui/section/sectionComponents";

export type BaseList = {
  type: string;
  title: string;
  description: string;
  href: string;
  techStack: string[];
};

export type Resume = BaseList & {
  type: "resume";
  ariaLabel: string;
  date: string;
};

export type Project = BaseList & {
  type: "project";
  image: string;
};

export type Entry = Resume | Project;

export type About = {
  title: string;
  href: string;
};

export type ProjectArchive = {
  project: string;
  madeAt: string;
  href: string;
  techStack: string[];
  year: string;
};

type SectionComponentKey = keyof typeof sectionComponents;

export type HeaderData = {
  id: string;
  title: string;
  componentKey: SectionComponentKey;
};
