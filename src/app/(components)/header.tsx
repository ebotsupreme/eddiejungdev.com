import Link from "next/link";

const Header = () => (
  <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 className="text-4xl font-bold trackiong-tight text-slate-200 sm:text-5xl">
        <Link href="/">Eddie Jung</Link>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Front End Engineer
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I build web interfaces that combine accessibility, precision, and
        performance.
      </p>
      <nav className="hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>
    </div>
    {/* TODO: Footer */}
  </header>
);

export default Header;
