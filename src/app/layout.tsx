import "./globals.css";
import { Inter } from "next/font/google";
import LayoutShell from "./(components)/layoutShell";
import siteMetadata from "./lib/siteMetadata";

export const metadata = siteMetadata;

export const generateViewport = () => ({
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f172a",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
};

export default RootLayout;
