import AppLayout from "@/components/AppLayout";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
          ::selection {
            color: white;
            background: #f871a6;
          }
        `}
      </style>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
