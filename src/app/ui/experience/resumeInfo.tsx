// "use client";

import { resumeData } from "@/app/lib/resume-data";
import Link from "next/link";

const ResumeInfo = () => {
  console.log(resumeData);
  return (
    <div>
      <ol className="group/list">
        {resumeData.map((data, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid">
              <div className="absolute" />
              <header>{data.date}</header>
              <div>
                <h3>
                  <div>
                    <Link
                      href={data.href}
                      target="_blank"
                      aria-label={data.ariaLabel}
                      className="inline-flex items-baseline group/link"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {data.title} ·
                        <span className="inline-block">
                          {data.ariaLabel}
                          {/* TODO: Add svg */}
                          {/* <svg></svg> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                </h3>
                <p className="mt-2 text-sm">{data.description}</p>
                {/* TODO: Add pill component */}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ResumeInfo;
