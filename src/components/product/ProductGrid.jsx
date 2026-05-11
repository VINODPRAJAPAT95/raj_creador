import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((product, idx) => (
      <ProductCard key={`${product.name}-${idx}`} product={product} />
    ))}
  </div>
);

export default ProductGrid;
