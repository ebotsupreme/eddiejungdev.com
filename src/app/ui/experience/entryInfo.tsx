// "use client";

import Image from "next/image";
import Link from "next/link";
import Pill from "../pill/pill";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import { Entry } from "@/app/lib/definitions";

type EntryProps = {
  entries: Entry[];
  type: string;
};

const EntryInfo = ({ entries, type }: EntryProps) => {
  const capitilized = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      <ol className="group/list">
        {entries.map((entry, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid items-start pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              {entry.type === "resume" ? (
                <header
                  className="z-10 mt-1 mb-2 text-xs font-semibold uppercase text-slate-500 sm:col-span-2 tracking-wide"
                  aria-label={entry.type === "resume" ? entry.date : undefined}
                >
                  {entry.date}
                </header>
              ) : (
                <header className="z-10 sm:col-span-2 tracking-wide mt-[-2px]">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    loading="lazy"
                    width={200}
                    height={113}
                    decoding="async"
                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: "transparent" }}
                  />
                </header>
              )}
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                      href={entry.href}
                      target="_blank"
                      aria-label={
                        entry.type === "resume" ? entry.ariaLabel : undefined
                      }
                      rel="noreferrer noopener"
                      className="inline-flex items-baseline group/link font-medium text-base leading-tight text-slate-200 text-shadow-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {entry.title}
                        {entry.type === "resume" && <span> · </span>}
                        <span className="inline-block">
                          {entry.type === "resume" && entry.ariaLabel}
                          <ArrowUpRightIcon />
                        </span>
                      </span>
                    </Link>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  {entry.description}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {entry.techStack.map((stack, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <Pill stack={stack} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <Link
          // href="/Eddie Jung Resume V4.pdf"
          href={type === "resume" ? "/Eddie Jung Resume V4.pdf" : "/archive"}
          target={type === "resume" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              {capitilized(type)}
              <ArrowUpRightIcon />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EntryInfo;
