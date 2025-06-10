"use client";

import Link from "next/link";
import { aboutData } from "../lib/about-data";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [activeItem, setActiveItem] = useState("About");

  return (
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
            {aboutData.map((about) => (
              <li key={about.title}>
                <Link
                  href={about.href}
                  className="group flex items-center py-3"
                  onClick={() => setActiveItem(about.title)}
                >
                  <span
                    className={clsx(
                      "nav-indicator mr-4 h-px transition-all motion-reduce:transition-none",
                      activeItem === about.title
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                    )}
                  />
                  <span
                    className={clsx(
                      "nav-text text-xs font-bold uppercase tracking-widest",
                      activeItem === about.title
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    )}
                  >
                    {about.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* TODO: Footer */}
    </header>
  );
};

export default Header;
