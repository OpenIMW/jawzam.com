import { Cake } from "lucide-react";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";

export type HomeHeroProps = {
  bgImage: SanityImageSource;
  catchPhrase: string;
};

export default function HomeHero({ bgImage, catchPhrase }: HomeHeroProps) {
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
            src="/jawzam-text-logo.svg"
            alt="Jawzam.com"
            width={300}
            height={150}
          />
          <p className="text-center text-xl text-gray-800">
            {/* Gâteaux faits maison où chaque bouchée est une célébration de&nbsp;
            <span className="font-bold text-primary">saveurs</span> et de&nbsp;
            <span className="font-bold text-secondary">souvenirs</span>. */}
            {catchPhrase}
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-md border-2 border-dashed border-primary bg-rose-300 py-3 px-6 text-lg font-black uppercase text-white shadow-lg shadow-pink-200">
            <Cake strokeWidth={2} /> Commandez maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
