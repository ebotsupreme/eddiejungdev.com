import Header from "./(components)/header";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        {/* background color / gradient */}
        <div className="flex">
          <div className="flex justify-center w-full px-20 mx-40">
            <div className="flex w-full gap-4">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
