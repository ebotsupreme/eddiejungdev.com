import About from "@/app/about/page";
import Experience from "../experience/Experience";
import { resumeData } from "@/app/lib/resume-data";
import { projectsData } from "@/app/lib/projects-data";
import { PROJECT, RESUME } from "@/app/lib/constants";

export const sectionComponents = {
  About: <About />,
  Experience: <Experience entries={resumeData} type={RESUME} />,
  Projects: <Experience entries={projectsData} type={PROJECT} />,
};
