import About from "./about/page";
// import Experience from "./experience/page";
import ResumeInfo from "./ui/experience/resumeInfo";

const Home = () => {
  return (
    <div>
      <section id="about">
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
