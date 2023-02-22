import AppHeader from "./AppHeader";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
}
