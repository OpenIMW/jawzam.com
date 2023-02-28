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
    <section className="container py-16">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            {...p}
          />
        ))}
      </div>
      <FeaturedProduct
        className="mt-24 shadow-2xl shadow-primary/25"
        {...featuredProduct}
      />
    </section>
  );
}
