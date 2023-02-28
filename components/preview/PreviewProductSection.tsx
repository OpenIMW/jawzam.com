import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import { IProduct } from "@/types/product";
import ProductSection from "@/components/ProductSection";

export default function PreviewProductSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    products[]->,
    featuredProduct->
  }[0]`;
  const data = usePreview("home-products", query) as {
    products: IProduct[];
    featuredProduct: IProduct;
  };

  return <>{data && <ProductSection {...data} />}</>;
}
