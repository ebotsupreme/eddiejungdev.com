import Link from "next/link";

const AboutMe = () => (
  <div>
    <p className="mb-4">
      I&apos;m a Front-End Engineer passionate about building user interfaces
      that balance thoughtful design, seamless functionality, and high
      performance.
    </p>
    <p className="mb-4">
      Over the years, I’ve developed software across a range of industries—from
      <Link
        href={"https://www.pixelmotion.com"}
        target="_blank"
        aria-label="auto industry agencies"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        {" "}
        automotive agencies
      </Link>
      , and{" "}
      <Link
        href={"https://www.sunriseintegration.com"}
        target="_blank"
        aria-label="ecommerce start-ups"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        ecommerce start-ups
      </Link>{" "}
      to{" "}
      <Link
        href={"https://genvid.com"}
        target="_blank"
        aria-label="game development industries"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        interactive game development
      </Link>
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
