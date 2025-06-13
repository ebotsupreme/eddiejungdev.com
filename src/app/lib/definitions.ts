import { sectionComponents } from "../ui/section/sectionComponents";
import { footerComponents } from "../ui/footer/footerComponents";
import { PROJECT, RESUME } from "./constants";

export type BaseList = {
  type: string;
  title: string;
  description: string;
  href: string;
  techStack: string[];
};

export type Resume = BaseList & {
  type: typeof RESUME;
  ariaLabel: string;
  date: string;
};

export type Project = BaseList & {
  type: typeof PROJECT;
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

export type SectionFooter = About & {
  header: string;
};

export type SectionAboutMe = SectionFooter;

type FooterComponentKey = keyof typeof footerComponents;

export type FooterData = About & {
  componentKey: FooterComponentKey;
};
