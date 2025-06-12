import Section from "./ui/section/section";
import { headerData } from "./lib/header-data";
import { sectionComponents } from "./ui/section/sectionComponents";
import SectionFooter from "./ui/sectionFooter/sectionFooter";
import { sectionFooterData } from "./lib/section-footer-data";

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
          {sectionFooterData.map((sectionFooter) => (
            <SectionFooter
              key={sectionFooter.title}
              title={sectionFooter.title}
              href={sectionFooter.href}
              header={sectionFooter.header}
            />
          ))}
        </p>
      </footer>
    </>
  );
};

export default Home;
