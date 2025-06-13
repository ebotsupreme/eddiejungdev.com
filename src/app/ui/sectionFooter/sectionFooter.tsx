import type { SectionFooter } from "../../lib/definitions";

const SectionFooter = ({ title, href, header }: SectionFooter) => (
  <>
    <span>{header}</span>
    <a
      href={href}
      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
      target="_blank"
      rel="noreferrer noopener"
      aria-label={title}
    >
      {title}
    </a>
  </>
);

export default SectionFooter;
