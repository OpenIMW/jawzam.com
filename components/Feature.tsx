import classNames from "classnames";
import Image, { ImageProps, StaticImageData } from "next/image";
import { FeatureItem } from "./FeatureSection";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";

interface IFeatureProps extends FeatureItem {
  className?: string;
}

export default function Feature({
  icon,
  title,
  description,
  className,
  ...props
}: IFeatureProps) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-4 text-center text-white",
        className
      )}
    >
      <Image
        className="h-56 w-56 max-w-full"
        src={sanityImageBuilder.image(icon).width(200).height(200).url()}
        width={200}
        height={200}
        alt={title}
        {...props}
      />
      <div className="flex flex-col gap-2 px-4 sm:px-12 md:px-16">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}
