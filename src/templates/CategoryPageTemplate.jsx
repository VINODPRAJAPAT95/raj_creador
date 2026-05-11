import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategoryBanner from "../components/CategoryBanner";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/product/ProductGrid";
import { productCatalog } from "../data/siteData";

const toAnchor = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const CategoryPageTemplate = ({ category }) => {
  const { hash } = useLocation();
  const sections = productCatalog[category.slug]?.sections || [];

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, category.slug]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <CategoryBanner
        title={category.name}
        subtitle="Curated directly from your RAJPAL PRODUCTS catalog."
        image={category.image}
      />
      <SectionTitle
        eyebrow="Subcategories"
        title={`${sections.length} Curated Collections`}
        subtitle={category.subcategories.join(" • ")}
      />
      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.title} id={toAnchor(section.title)} className="scroll-mt-40">
            <h3 className="mb-5 text-xl font-semibold text-gold">{section.title}</h3>
            <ProductGrid products={section.products} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPageTemplate;
