import About from "./about/page";
// import Experience from "./experience/page";
import ResumeInfo from "./ui/experience/resumeInfo";

const Home = () => {
  return (
    <div>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <About />
      </section>
      <section id="experience">
        {/* <Experience /> */}
        <ResumeInfo />
      </section>
    </div>
  );
};

export default Home;
