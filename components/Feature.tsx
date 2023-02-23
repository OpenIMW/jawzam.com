import classNames from "classnames";
import Image, { ImageProps, StaticImageData } from "next/image";

interface IFeatureProps extends ImageProps {
  title: string;
  description: string;
  className?: string;
}

export default function Feature({
  title,
  description,
  className,
  alt,
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
        alt={alt ?? title}
        {...props}
      />
      <div className="flex flex-col gap-2 px-4 sm:px-12 md:px-16">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
}
