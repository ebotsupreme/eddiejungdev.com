"use client";

import Link from "next/link";
import ArrowBackIcon from "../icons/ArrowBackIcon";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
      <table
        id="content"
        className="mt-12 w-full border-collapse text-left"
      ></table>
    </>
  );
};

export default ProjectArchive;
