import Link from "next/link";

interface FooterProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

const FooterWrapper = ({ title, href, children }: FooterProps) => (
  <li className="mr-5 shrink-0 text-xs">
    <Link
      className="block hover:text-slate-200"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={title}
      title={title}
    >
      <span className="sr-only">{title}</span>
      {children}
    </Link>
  </li>
);

export default FooterWrapper;
