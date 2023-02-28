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
      <div className="z-10 -mt-0.5 flex h-full w-full flex-col items-center gap-4 border-x border-b border-primary/10 bg-white px-4 py-6 text-center">
        <h2 className="text-2xl font-bold text-neutral-600">{name}</h2>
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
