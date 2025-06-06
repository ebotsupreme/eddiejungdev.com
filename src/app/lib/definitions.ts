export type BaseList = {
  title: string;
  description: string;
  href: string;
  techStack: string[];
};

export type Resume = BaseList & {
  ariaLabel: string;
  date: string;
};

export type Project = BaseList & {
  image: string;
};
