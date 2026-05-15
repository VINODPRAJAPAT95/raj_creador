// ProductGrid.jsx

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  title = "Our Premium Collection",
  subtitle = "Discover handcrafted fragrances and divine essentials made with purity and tradition.",
}) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleProducts = products.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="relative py-16 lg:py-20">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#fffdf8] to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          
          <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Rajpal Products
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Products */}
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id || index}
              product={product}
            />
          ))}

          {/* View More Image Card */}
          {visibleCount < products.length && (
            <button
              onClick={handleViewMore}
              className="group relative overflow-hidden rounded-3xl bg-black"
            >
              
              {/* Background Image */}
              <img
                src="/images/view-more.jpg"
                alt="View More"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-80"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:scale-110">
                  <ChevronRight className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  View More
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Explore More Products
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;