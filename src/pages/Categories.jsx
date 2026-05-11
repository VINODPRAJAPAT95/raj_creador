import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import { categories } from "../data/siteData";

const Categories = () => (
  <section className="mx-auto max-w-7xl px-4 py-16">
    <SectionTitle eyebrow="All Categories" title="Luxury Product Category Universe" />
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  </section>
);

export default Categories;
