// "use client";

import { resumeData } from "@/app/lib/resume-data";
import Link from "next/link";
import Pill from "../pill/pill";

const ResumeInfo = () => {
  return (
    <div>
      <ol className="group/list">
        {resumeData.map((data, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid items-start pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="absolute -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:block" />
              <header
                className="mt-1 mb-2 text-xs font-semibold uppercase  text-slate-500 sm:col-span-2"
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
                      className="inline-flex items-baseline group/link font-medium text-base leading-tight"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {data.title} ·{" "}
                        <span className="inline-block">
                          {data.ariaLabel}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            />
                          </svg>
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
    </div>
  );
};

export default ResumeInfo;
