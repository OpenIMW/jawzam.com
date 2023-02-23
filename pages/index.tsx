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

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  features: typeof features;
  products: IProduct[];
  featuredProduct: IProduct;
}

export default function Home({
  features,
  products,
  featuredProduct,
}: IHomeProps) {
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
        <HomeHero />
        <section>
          <div className="bg-primary">
            <div className="container grid grid-cols-1 gap-12 py-14 md:grid-cols-3 md:gap-6">
              {features.map((f) => (
                <Feature
                  key={f.title}
                  src={f.icon}
                  title={f.title}
                  description={f.description}
                  alt={f.title}
                  width={230}
                  height={230}
                />
              ))}
            </div>
          </div>
          <Image
            className="-mt-1 w-screen"
            src="/features-waves-bg.svg"
            width={1440}
            height={145}
            alt=""
          />
        </section>
        <section className="container py-16">
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                {...p}
              />
            ))}
          </div>
          <FeaturedProduct
            className="mt-24 shadow-2xl shadow-primary/25"
            {...featuredProduct}
          />
        </section>
        <section className="min-h-screen bg-[url(/event-bg.svg)] bg-contain bg-bottom bg-no-repeat md:h-screen md:bg-center">
          <div className="container grid h-full items-center md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 px-6 pt-28 text-center md:px-20">
              <h2 className="text-3xl font-bold text-neutral-600">
                Ajoutez une touche personnelle à votre célébration
              </h2>
              <p className="text-gray-500">
                {
                  "Qu'il s'agisse d'un anniversaire, d'un mariage, d'une fête ou de tout autre événement, nos gâteaux sont conçus pour répondre à vos besoins. Choisissez parmi une variété de parfums, de glaçages et de décorations pour créer un gâteau qui vous ressemble."
                }
              </p>
              <div className="my-12 flex w-full flex-wrap items-center justify-around gap-4 text-primary">
                <Link
                  href="tel:+33  6 3457 3653"
                  className="block text-xl font-black transition-transform ease-in-out hover:scale-110"
                >
                  <FontAwesomeIcon
                    height={24}
                    width={24}
                    icon={faPhone}
                    className="inline"
                  />{" "}
                  +33 6 3457 3653
                </Link>
                <div className="flex justify-around gap-4">
                  <LinkIcon
                    icon={faFacebookMessenger}
                    size="32"
                    href="/facebook-messenger"
                  />
                  <LinkIcon
                    icon={faWhatsapp}
                    size="32"
                    href="/whatsapp"
                  />
                  <LinkIcon
                    icon={faEnvelope}
                    size="32"
                    href="mailto:contact@jawzam.com"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/event.svg"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="relative bg-primary">
          <Image
            className="absolute -top-1 w-full"
            src="/subscribe-waves-bg-top.svg"
            alt=""
            width={1440}
            height={200}
          />
          <div className="container grid items-center gap-10 pt-44 pb-20 sm:pt-52 md:grid-cols-2 md:gap-2 md:pt-72">
            <div className="flex justify-center">
              <Image
                src="/subscribe.svg"
                width={474}
                height={342}
                alt="S'abonner aux newsletters de Jawzam.com"
              />
            </div>
            <div className="flex flex-col gap-4 px-4 text-white md:px-12">
              <h2 className="text-3xl font-bold">
                {"S'abonner à notre Newsletter"}
              </h2>
              <p>
                Découvrez de nouvelles saveurs, apprenez de nouvelles techniques
                et obtenez des conseils et des astuces d&apos;experts pour faire
                passer votre cuisine au niveau supérieur. De plus, vous serez le
                premier à être informé des dernières promotions, remises et
                offres !
              </p>
              <div className="my-4">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </section>
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
}

export function getStaticProps() {
  return {
    props: {
      features,
      products: products.filter((p) => !p.featured),
      featuredProduct: products.find((p) => p.featured),
    },
  };
}
