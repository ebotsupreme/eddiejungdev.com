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
