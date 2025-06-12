import { sectionAboutMeData } from "@/app/lib/section-aboutMe-data";
import SectionAboutMe from "./sectionAboutMe";

const AboutMe = () => (
  <div>
    <p className="mb-4">
      I&apos;m a Front-End Engineer passionate about building user interfaces
      that balance thoughtful design, seamless functionality, and high
      performance.
    </p>
    <p className="mb-4">
      {sectionAboutMeData.map((aboutMe) => (
        <SectionAboutMe
          key={aboutMe.title}
          title={aboutMe.title}
          href={aboutMe.href}
          header={aboutMe.header}
        />
      ))}
      . I&apos;m currently seeking new opportunities where I can continue to
      grow and make an impact.
    </p>
    <p>
      Outside of work, you’ll usually find me at concerts, watching TV shows or
      sports, lifting weights, gaming, or spending time with my wife and our
      dog, Teddy.
    </p>
  </div>
);

export default AboutMe;
