import Link from "next/link";

const AboutMe = () => (
  <div>
    <p>
      I&apos;m passionate about creating user interfaces that combine design,
      functionality, and performance.
    </p>
    <p>
      Currently, I&apos;m a Front-End Engineer looking for new opportunities.{" "}
    </p>
    <p>
      In the past, I&apos;ve developed software in various industries - from
      <Link
        href={"https://www.pixelmotion.com"}
        target="_blank"
        aria-label="auto industry agencies"
      >
        {" "}
        auto industry agencies
      </Link>
      ,{" "}
      <Link
        href={"https://www.sunriseintegration.com"}
        target="_blank"
        aria-label="ecommerce start-ups"
      >
        ecommerce start-ups
      </Link>{" "}
      and{" "}
      <Link
        href={"https://genvid.com"}
        target="_blank"
        aria-label="game development industries"
      >
        game development industries
      </Link>
      .
    </p>
    <p>
      My hobbies include: going to concerts, watching tv shows and sports,
      weightlifting and gaming.
    </p>
  </div>
);

export default AboutMe;
