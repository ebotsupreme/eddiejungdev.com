import Link from "next/link";

const AboutMe = () => (
  <div>
    <p className="mb-4">
      I&apos;m passionate about creating user interfaces that combine design,
      functionality, and performance.
    </p>
    <p className="mb-4">
      Currently, I&apos;m a Front-End Engineer looking for new opportunities.{" "}
    </p>
    <p className="mb-4">
      In the past, I&apos;ve developed software in various industries - from
      <Link
        href={"https://www.pixelmotion.com"}
        target="_blank"
        aria-label="auto industry agencies"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        {" "}
        auto industry agencies
      </Link>
      ,{" "}
      <Link
        href={"https://www.sunriseintegration.com"}
        target="_blank"
        aria-label="ecommerce start-ups"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        ecommerce start-ups
      </Link>{" "}
      and{" "}
      <Link
        href={"https://genvid.com"}
        target="_blank"
        aria-label="game development industries"
        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        game development industries
      </Link>
      .
    </p>
    <p>
      I&apos;m usually going to concerts, watching tv shows and sports, hanging
      out with my wife and dog, weightlifting and gaming.
    </p>
  </div>
);

export default AboutMe;
