import Link from "next/link";
import type { SectionAboutMe } from "../../lib/definitions";

const SectionAboutMe = ({ title, href, header }: SectionAboutMe) => (
  <>
    <span>{header}</span>
    <Link
      href={href}
      target="_blank"
      aria-label={title}
      className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
    >
      {title}
    </Link>
  </>
);

export default SectionAboutMe;
