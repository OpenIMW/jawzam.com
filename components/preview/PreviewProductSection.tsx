import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import { IProduct } from "@/types/product";
import ProductSection from "@/components/ProductSection";

const token = process.env.SANITY_API_TOKEN!;

export default function PreviewProductSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    products[]->,
    featuredProduct->
  }[0]`;
  const data = usePreview(null, query) as {
    products: IProduct[];
    featuredProduct: IProduct;
  };

  return <>{data && <ProductSection {...data} />}</>;
}
