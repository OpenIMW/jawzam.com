import { Cake } from "lucide-react";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";

export type HomeHeroProps = {
  bgImage: SanityImageSource;
  catchPhrase: string;
  buttonLabel: string;
};

export default function HomeHero({
  bgImage,
  catchPhrase,
  buttonLabel,
}: HomeHeroProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${sanityImageBuilder.image(bgImage).url()})`,
      }}
      className={`h-[calc(100vh_-_5rem)]`}
    >
      <div className="container grid h-full md:grid-cols-2">
        <div className="flex h-full flex-col items-center justify-center gap-4 py-8 px-2 md:px-6">
          <Image
            className="h-auto w-80 max-w-full"
            src="/logo.svg"
            alt="Jawzam.com"
            width={717}
            height={664}
          />
          <p className="text-center text-xl text-gray-800">
            {/* Gâteaux faits maison où chaque bouchée est une célébration de&nbsp;
            <span className="font-bold text-primary">saveurs</span> et de&nbsp;
            <span className="font-bold text-secondary">souvenirs</span>. */}
            {catchPhrase}
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-md bg-neutral-900 py-3 px-6 text-lg font-black uppercase text-primary shadow-lg shadow-amber-100 transition-transform duration-300 ease-in-out hover:scale-105">
            <Cake strokeWidth={2} /> {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
