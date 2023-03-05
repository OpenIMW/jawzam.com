import { IProduct } from "@/types/product";
import Image from "next/image";
import sanityImageBuilder from "@/sanity/utils/sanityImageBuilder";

export default function ProductCard({
  image,
  name,
  description,
  price,
}: IProduct) {
  return (
    <div className="group relative flex flex-col items-center">
      <Image
        className="h-52 max-w-[80%] translate-y-[45%] transition-transform duration-200 ease-in-out group-hover:translate-y-0"
        src={sanityImageBuilder.image(image).size(200, 200).url()}
        height={200}
        width={200}
        alt={name}
      />
      <Image
        className="z-10 w-full max-w-full"
        src="/line-shadow.png"
        height={25}
        width={422}
        alt={name}
      />
      <div className="z-10 -mt-0.5 flex h-full w-full flex-col items-center gap-4 rounded-b border-x border-b border-secondary/30 bg-white px-4 py-6 text-center">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        {description && (
          <p className="flex-grow text-secondary/80">{description}</p>
        )}
        <p className="rounded-md bg-amber-200/5 py-2 px-4">
          <span className="text-3xl font-bold text-secondary">
            {price}&euro;
          </span>
          &nbsp;
          <span className="text-lg font-bold text-secondary">
            / Box{" "}
            <i className="text-sm font-normal text-gray-500">
              (12pieces ~ 1Kg)
            </i>
          </span>
        </p>
        <button className="mt-6 w-full rounded-lg border-primary bg-secondary py-2 px-4 font-bold uppercase shadow-xl transition duration-300 ease-in-out hover:scale-105 focus-visible:outline-primary">
          <span className="bg-primary bg-clip-text text-transparent">
            Ajouter au panier
          </span>
        </button>
      </div>
    </div>
  );
}
