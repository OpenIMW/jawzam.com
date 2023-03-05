import { IProduct } from "../types/product";
import ProductCard from "./ProductCard";
import FeaturedProduct from "./FeaturedProduct";

type ProductSectionProps = {
  products: IProduct[];
  featuredProduct: IProduct;
};

export default function ProductSection({
  products,
  featuredProduct,
}: ProductSectionProps) {
  return (
    <section className="container py-12 sm:py-32">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            {...p}
          />
        ))}
      </div>
      <FeaturedProduct
        className="mt-20 shadow-2xl shadow-secondary/25 sm:mt-32 md:mt-52"
        {...featuredProduct}
      />
    </section>
  );
}
