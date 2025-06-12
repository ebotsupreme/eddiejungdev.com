"use client";

import Link from "next/link";
import ArrowBackIcon from "../icons/ArrowBackIcon";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { projectArchiveData } from "@/app/lib/project-archive-data";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import Pill from "../pill/pill";

const ProjectArchive = () => {
  const pathname = usePathname();

  useEffect(() => {
    // scroll to top of page on mount
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Link
        href="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
      >
        <ArrowBackIcon /> Eddie Jung
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop:blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projectArchiveData.map((archiveData) => (
            <tr
              key={archiveData.project}
              className="border-b border-slate-300/10 last:border-none"
            >
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px whitespace-nowrap">
                  {archiveData.year}
                </div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div className="block sm:hidden">
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                    href={archiveData.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={archiveData.madeAt}
                  >
                    <span className="inline-block">
                      {archiveData.project} <ArrowUpRightIcon />
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:block">{archiveData.project}</div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">
                  {archiveData.madeAt}
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {archiveData.techStack.map((stack) => (
                    <li key={stack} className="my-1 mr-1.5">
                      <Pill stack={stack} />
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <ul className="translate-y-1">
                  <li className="mb-1 flex items-center">
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                      href={archiveData.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={archiveData.madeAt}
                    >
                      <span className="inline-block whitespace-nowrap">
                        {/* Remove https protocol */}
                        {archiveData.href.replace(/^https?:\/\//, "")}{" "}
                        <ArrowUpRightIcon />
                      </span>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProjectArchive;
