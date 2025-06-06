// "use client";

import { resumeData } from "@/app/lib/resume-data";
import Link from "next/link";
import Pill from "../pill/pill";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

const ResumeInfo = () => {
  return (
    <div>
      <ol className="group/list">
        {resumeData.map((data, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid items-start pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="mt-1 mb-2 text-xs font-semibold uppercase text-slate-500 sm:col-span-2 tracking-wide"
                aria-label={data.date}
              >
                {data.date}
              </header>
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                      href={data.href}
                      target="_blank"
                      aria-label={data.ariaLabel}
                      className="inline-flex items-baseline group/link font-medium text-base leading-tight text-shadow-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {data.title} ·{" "}
                        <span className="inline-block">
                          {data.ariaLabel}
                          <ArrowUpRightIcon />
                        </span>
                      </span>
                    </Link>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  {data.description}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {data.techStack.map((stack, index) => (
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
          href="/Eddie Jung Resume V4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              Resume
              <ArrowUpRightIcon />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ResumeInfo;
