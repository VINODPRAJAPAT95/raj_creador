import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import CategoryBanner from "../components/CategoryBanner";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/product/ProductGrid";
import { productCatalog } from "../data/siteData";

const toAnchor = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const CategoryPageTemplate = ({ category }) => {
  const { hash } = useLocation();

  const sections =
    productCatalog[category.slug]?.sections || [];

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hash, category.slug]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">

      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">

        <Link
          to="/"
          className="transition hover:text-[#4a2511]"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          to="/categories"
          className="transition hover:text-[#4a2511]"
        >
          Categories
        </Link>

        <span>/</span>

        <span className="font-medium text-[#4a2511]">
          {category.name}
        </span>
      </div>

      {/* Back Button */}
      <Link
        to="/categories"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#4a2511] transition hover:gap-3"
      >
        <ArrowLeft size={16} />

        Back to Categories
      </Link>

      {/* Banner */}
      <CategoryBanner
        title={category.name}
        subtitle="Curated directly from your RAJPAL PRODUCTS catalog."
        image={category.image}
      />

      {/* Section Title */}
      <SectionTitle
        eyebrow="Subcategories"
        subtitle={category.subcategories.join(" • ")}
      />

      {/* Product Sections */}
      <div className="space-y-12">
        {sections.map((section) => (
          <div
            key={section.title}
            id={toAnchor(section.title)}
            className="scroll-mt-40"
          >

            {/* Section Heading */}
            <h3 className="mb-5 font-serif text-2xl font-semibold tracking-wide text-[#4a2511]">
              {section.title}
            </h3>

            {/* Products */}
            <ProductGrid
              products={section.products}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPageTemplate;