import LayoutShell from "../(components)/layoutShell";

type ArchiveLayoutProps = {
  children: React.ReactNode;
};

const ArchiveLayout = ({ children }: ArchiveLayoutProps) => (
  <LayoutShell>{children}</LayoutShell>
);

export default ArchiveLayout;
