import Head from "next/head";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#f871a6"
        />
        <meta
          name="msapplication-TileColor"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </Head>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
