import { IProduct } from "@/types/product";
import classNames from "classnames";
import Image from "next/image";

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
        "flex flex-col border border-dashed border-amber-300 bg-amber-200/5 sm:flex-row",
        className
      )}
    >
      <div className="flex flex-1 justify-center">
        <Image
          src={image}
          width={432}
          height={242}
          alt={name}
        />
      </div>
      <div className="z-10 -mt-0.5 flex h-full flex-1 flex-col items-center gap-4 border-t border-primary/5 px-4 py-6 text-center sm:border-l md:px-16">
        <h2 className="text-3xl font-black text-primary">{name}</h2>
        <p className="flex-grow text-gray-500">{description}</p>
        <p className="rounded-md bg-amber-200/5 py-2 px-4">
          <span className="text-3xl font-bold text-primary">{price}&euro;</span>
          &nbsp;
          <span className="text-lg font-bold text-gray-600">
            / Box{" "}
            <i className="text-sm font-normal text-gray-500">
              (12pieces ~ 1Kg)
            </i>
          </span>
        </p>
        <button className="mt-6 w-full rounded-lg border-2 border-dashed border-primary bg-white py-2 px-4 font-bold uppercase text-primary">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
