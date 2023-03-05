import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeHero from "@/components/HomeHero";
import { IProduct } from "@/types/product";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import AppLayout from "@/components/AppLayout";
import { fetchHomePage } from "@/sanity/client";
import { SanityDocument } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import FeatureSection, { FeatureItem } from "@/components/FeatureSection";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewHomeHero from "@/components/preview/PreviewHomeHero";
import PreviewFeatureSection from "@/components/preview/PreviewFeatureSection";
import ProductSection from "@/components/ProductSection";
import PreviewProductSection from "@/components/preview/PreviewProductSection";
import SpecialOrderSection from "@/components/SpecialOrderSection";
import PreviewSpecialOrderSection from "@/components/preview/PreviewSpecialOrderSection";
import NewsletterSection from "@/components/NewsletterSection";
import PreviewNewsletterSection from "../components/preview/PreviewNewsletterSectionProps";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps extends SanityDocument {
  bgImage: SanityImageSource;
  catchPhrase: string;
  buttonLabel: string;
  features: FeatureItem[];
  products: IProduct[];
  featuredProduct: IProduct;
  specialOrderBannerTitle: string;
  specialOrderBannerSentence: string;
  newsletterBannerTitle: string;
  newsletterBannerSentence: string;
}

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }

  const data = (await fetchHomePage()) as IHomeProps;

  return {
    props: {
      preview,
      ...data,
    },
  };
}

const HomePage: NextPageWithLayout<IHomeProps> = ({
  preview,
  bgImage,
  catchPhrase,
  buttonLabel,
  features,
  products,
  featuredProduct,
  specialOrderBannerTitle,
  specialOrderBannerSentence,
  newsletterBannerTitle,
  newsletterBannerSentence,
  ...props
}: IHomeProps) => {
  return (
    <>
      <Head>
        <title>
          Where every bite is a celebration of flavors and memories | Jawzam.com
        </title>
        <meta
          name="description"
          content="Hand made cake with high-quality ingredients."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        {preview ? (
          <PreviewSuspense fallback="Loading...">
            <PreviewHomeHero />
            <PreviewFeatureSection />
            <PreviewProductSection />
            <PreviewSpecialOrderSection />
            <PreviewNewsletterSection />
            <Link
              className="fixed bottom-0 right-0 z-40 rounded-tl-lg bg-gray-800 px-6 py-2 font-bold text-white"
              href="/api/exit-preview"
            >
              Exit Preview
            </Link>
          </PreviewSuspense>
        ) : (
          <>
            <HomeHero
              bgImage={bgImage}
              catchPhrase={catchPhrase}
              buttonLabel={buttonLabel}
            />
            <FeatureSection features={features} />
            <ProductSection
              products={products}
              featuredProduct={featuredProduct}
            />
            <SpecialOrderSection
              headline={specialOrderBannerTitle}
              subtitle={specialOrderBannerSentence}
            />
            <NewsletterSection
              newsletterBannerTitle={newsletterBannerTitle}
              newsletterBannerSentence={newsletterBannerSentence}
            />
          </>
        )}

        <svg
          className="-mt-0.5 h-auto w-full text-secondary"
          width="1440"
          height="95"
          viewBox="0 0 1440 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0 50.3333L14.1 41.9895C28.2 33.7708 56 16.8958 85 21.9895C112.9 26.8958 141 53.7708 169 60.3333C197.6 66.8958 226 53.7708 254 45.3333C282.4 36.8958 311 33.7708 339 28.677C367.1 23.7708 395 16.8958 424 13.677C451.8 10.3333 480 10.3333 508 10.3333C536.5 10.3333 565 10.3333 593 8.677C621.2 6.89575 649 3.77075 678 15.3333C705.9 26.8958 734 53.7708 762 53.677C790.6 53.7708 819 26.8958 847 20.3333C875.3 13.7708 904 26.8958 932 41.9895C960 56.8958 988 73.7708 1016 76.9895C1044.7 80.3333 1073 70.3333 1101 63.677C1129.4 56.8958 1158 53.7708 1186 43.677C1214.1 33.7708 1242 16.8958 1271 11.9895C1298.8 6.89575 1327 13.7708 1355 21.9895C1383.5 30.3333 1412 40.3333 1426 45.3333L1440 50.3333V0.333252H1425.9C1411.8 0.333252 1384 0.333252 1355 0.333252C1327.1 0.333252 1299 0.333252 1271 0.333252C1242.4 0.333252 1214 0.333252 1186 0.333252C1157.6 0.333252 1129 0.333252 1101 0.333252C1072.9 0.333252 1045 0.333252 1016 0.333252C988.2 0.333252 960 0.333252 932 0.333252C903.5 0.333252 875 0.333252 847 0.333252C818.8 0.333252 791 0.333252 762 0.333252C734.1 0.333252 706 0.333252 678 0.333252C649.4 0.333252 621 0.333252 593 0.333252C564.7 0.333252 536 0.333252 508 0.333252C480 0.333252 452 0.333252 424 0.333252C395.3 0.333252 367 0.333252 339 0.333252C310.6 0.333252 282 0.333252 254 0.333252C225.9 0.333252 198 0.333252 169 0.333252C141.2 0.333252 113 0.333252 85 0.333252C56.5 0.333252 28 0.333252 14 0.333252H0V50.3333Z"
          />
        </svg>
      </main>
    </>
  );
};

HomePage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
