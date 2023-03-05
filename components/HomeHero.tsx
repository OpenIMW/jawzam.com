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
      className={`box-content h-[calc(100vh_-_5rem)] min-h-[600px] bg-gradient-to-r from-gray-100 to-gray-300 pt-20`}
    >
      <div className="container grid h-full md:grid-cols-2">
        <div className="flex h-full flex-col items-center justify-center gap-4 py-8 px-2 md:px-6">
          <Image
            className="h-auto w-96 max-w-full"
            src="/logo.svg"
            alt="Jawzam.com"
            width={368}
            height={262}
          />
          <p className="text-center text-xl text-secondary">
            {/* Gâteaux faits maison où chaque bouchée est une célébration de&nbsp;
            <span className="font-bold text-primary">saveurs</span> et de&nbsp;
            <span className="font-bold text-secondary">souvenirs</span>. */}
            {catchPhrase}
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-md bg-[#004B41] py-3 px-6 text-lg font-black uppercase text-gray-700 shadow-lg ring ring-neutral-100 transition-transform duration-300 ease-in-out hover:scale-105 focus-visible:outline-primary">
            <Cake
              className="bg-primary bg-clip-content fill-transparent text-transparent"
              strokeWidth={2}
            />{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              {buttonLabel}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
