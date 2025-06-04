import About from "./about/page";
import Experience from "./experience/page";

const Home = () => {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
};

export default Home;
