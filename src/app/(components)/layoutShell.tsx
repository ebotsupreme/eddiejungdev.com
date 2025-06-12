"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

type LayoutShellProps = {
  children: React.ReactNode;
};

const LayoutShell = ({ children }: LayoutShellProps) => {
  const pathName = usePathname();
  const showHeader = !pathName.startsWith("/archive");

  return (
    <div className="group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        {showHeader ? (
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main className="pt-24 lg:w-[52%] lg:py-24">{children}</main>
          </div>
        ) : (
          <main className="lg:py-24">{children}</main>
        )}
      </div>
    </div>
  );
};

export default LayoutShell;
