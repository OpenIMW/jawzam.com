import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Feature from "./Feature";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";
import Image from "next/image";

export type FeatureItem = {
  icon: SanityImageSource;
  title: string;
  description?: string;
};

type FeatureSectionProps = {
  features: FeatureItem[];
};

export default function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <section>
      <div className="bg-primary">
        <div className="container grid grid-cols-1 gap-12 py-14 md:grid-cols-3 md:gap-6">
          {features.length > 0 &&
            features.map((feature) => (
              <Feature
                key={feature.title}
                {...feature}
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
  );
}
