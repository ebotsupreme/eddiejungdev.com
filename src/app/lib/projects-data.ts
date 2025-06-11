import { Project } from "./definitions";

export const projectsData: Project[] = [
  {
    type: "project",
    image: "/sha_main.png",
    title: "Silent Hill: Ascension",
    description:
      "Silent Hill: Ascension was an interactive streaming series where the audience influenced the story in real time using Influence Points earned through engagement or a season pass. Viewers shaped narrative decisions, participated in live character survival events, and could even win cameo roles that became canon in the Silent Hill universe.",
    href: "https://genvid.com/titles/silent-hill-ascension",
    techStack: ["Typescript", "React", "Redux Toolkit"],
  },
  {
    type: "project",
    image: "/twd_main.png",
    title: "The Walking Dead Last Mile",
    description:
      "The Walking Dead: Last Mile was a massively interactive live experience where millions of fans shaped the evolving story of a coastal Alaskan community through daily gameplay and weekly live streams. By earning and bidding Influence Points, players made critical decisions, created their own survivors, and even impacted who lived or died—leaving a permanent mark on the official Walking Dead canon.",
    href: "https://genvid.com/titles/the-walking-dead-last-mile",
    techStack: ["Typescript", "React", "Context API"],
  },
  {
    type: "project",
    image: "/payloadcms.png",
    title: "PayloadCMS - Internal CMS Tool",
    description:
      "Headless CMS implemented to replace error-prone Google Sheets for internal data management. This shift empowered game producers and directors to safely create and update in-game JSON data for specific features through a user-friendly interface, significantly reducing errors while storing assets securely via AWS S3 and CDN integration.",
    href: "https://payloadcms.com",
    techStack: [
      "Typescript",
      "React",
      "PayloadCMS",
      "Express",
      "Node",
      "MongoDB",
    ],
  },
];
