import Section from "./ui/section/section";
import { headerData } from "./lib/header-data";
import { sectionComponents } from "./ui/section/sectionComponents";

const Home = () => {
  return (
    <>
      {headerData.map((headerItem) => (
        <Section
          key={headerItem.id}
          id={headerItem.id}
          title={headerItem.title}
        >
          {sectionComponents[headerItem.componentKey]}
        </Section>
      ))}
      <footer className="max-w-md text-sm text-slate-500 sm:pb:0">
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
