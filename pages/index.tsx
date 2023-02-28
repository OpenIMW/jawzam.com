import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import HomeHero from "@/components/HomeHero";
import features from "@/data/features";
import products from "@/data/products";
import Feature from "@/components/Feature";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/product";
import FeaturedProduct from "@/components/FeaturedProduct";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import LinkIcon from "@/components/LinkIcon";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import SubscribeForm from "@/components/SubscribeForm";
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

      <main className="mt-20">
        {preview ? (
          <PreviewSuspense fallback="Loading...">
            <PreviewHomeHero />
            <PreviewFeatureSection />
            <PreviewProductSection />
            <PreviewSpecialOrderSection />
            <PreviewNewsletterSection />
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

        <Image
          className="-mt-1 w-full"
          src="/subscribe-waves-bg-bottom.svg"
          alt=""
          width={1440}
          height={200}
        />
      </main>
    </>
  );
};

HomePage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
