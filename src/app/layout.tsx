import LayoutShell from "./(components)/layoutShell";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="font-sans">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
};

export default RootLayout;
