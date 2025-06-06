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
        <div className="group/spotlight relative">
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            // style={{
            //   background:
            //     "radial-gradient(600px at 1722px 796px, rgba(29, 78, 216, 0.15), transparent 80%)",
            // }}
          ></div>
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
