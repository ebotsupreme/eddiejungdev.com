import Header from "./(components)/header";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* background color / gradient */}
        <div className="flex">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header />
              <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
