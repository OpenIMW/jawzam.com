import { IProduct } from "@/types/product";
import classNames from "classnames";
import Image from "next/image";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";

interface IFeaturedProduct extends IProduct {
  className?: string;
}

export default function FeaturedProduct({
  className,
  name,
  description,
  image,
  price,
}: IFeaturedProduct) {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-md border-4 border-dashed border-primary bg-secondary sm:flex-row",
        className
      )}
    >
      <div className="flex flex-1 justify-center">
        <Image
          src={sanityImageBuilder.image(image).size(432, 242).url()}
          width={432}
          height={242}
          alt={name}
        />
      </div>
      <div className="z-10 -mt-0.5 flex h-full flex-1 flex-col items-center gap-4 border-primary/5 px-4 py-12 text-center md:px-16">
        <h2 className="bg-primary bg-clip-text text-3xl font-black text-transparent">
          {name}
        </h2>
        <p className="flex-grow text-white">{description}</p>
        <p className="py-2">
          <span className="bg-primary bg-clip-text text-3xl font-bold text-transparent">
            {price}&euro;
          </span>
          &nbsp;
          <span className="bg-primary bg-clip-text text-lg font-bold text-transparent">
            / Box{" "}
            <i className="text-sm font-normal text-neutral-100">
              (12pieces ~ 1Kg)
            </i>
          </span>
        </p>
        <button className="mt-6 rounded-lg border bg-primary px-12 py-2 text-xl font-black uppercase text-secondary shadow-2xl transition duration-300 ease-in-out hover:scale-105 md:px-24">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
