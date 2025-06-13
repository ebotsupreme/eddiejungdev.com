const siteMetadata = {
  title: "Eddie Jung's Portfolio",
  description:
    "Eddie Jung is a software engineer specializing in building accessible, high-performance web applications with a focus on clean UI and seamless UX.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    locale: "en_US",
    siteName: "Eddie Jung",
    type: "website",
    title: "Eddie Jung's Portfolio",
    description:
      "Eddie Jung is a software engineer who builds accessible, high-performance web apps with a focus on clean UI and seamless UX.",
    url: "https://eddiejungdev.com",
    images: [
      {
        url: "https://eddiejungdev.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eddie Jung Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eddie Jung's Portfolio",
    description:
      "Eddie Jung is a software engineer who builds accessible, high-performance web apps with a focus on clean UI and seamless UX.",
    images: ["https://eddiejungdev.com/images/og-image.png"],
  },
};

export default siteMetadata;
