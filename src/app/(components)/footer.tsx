import Link from "next/link";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkedinIcon from "../ui/icons/LinkedinIcon";

const Footer = () => (
  <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
    <li className="mr-5 shrink-0 text-xs">
      <Link
        className="block hover:text-slate-200"
        href="https://www.github.com/ebotsupreme"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Github"
        title="Github"
      >
        <span className="sr-only">Github</span>
        <GithubIcon />
      </Link>
    </li>
    <li className="mr-5 shrink-0 text-xs">
      <Link
        className="block hover:text-slate-200"
        href="https://www.linkedin.com/in/eddiejung1"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Linkedin"
        title="Linkedin"
      >
        <span className="sr-only">Linkedin</span>
        <LinkedinIcon />
      </Link>
    </li>
  </ul>
);

export default Footer;
