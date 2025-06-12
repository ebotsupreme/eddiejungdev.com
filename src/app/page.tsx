import About from "./about/page";
import EntryInfo from "./ui/experience/entryInfo";
import { resumeData } from "./lib/resume-data";
import { projectsData } from "./lib/projects-data";

const Home = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <About />
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <EntryInfo entries={resumeData} type="resume" />
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <EntryInfo entries={projectsData} type="project" />
      </section>
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb:0">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Vercel"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS"
          >
            Tailwind CSS,
          </a>{" "}
          deployed with{" "}
          <a
            href="https://vercel.com"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Vercel"
          >
            Vercel.
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
