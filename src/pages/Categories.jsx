import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import { categories } from "../data/siteData";

const Categories = () => (
  <section className="relative mx-auto max-w-7xl px-4 py-20">

    {/* Luxury Background Glow */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#7a1020]/10 blur-[120px]" />

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#c49b63]/10 blur-[120px]" />
    </div>

    {/* PREMIUM HEADING */}
    <div className="mb-14 text-center">

      {/* Eyebrow */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#7a1020]">
        Divine Collections
      </p>

      {/* Main Title */}
      <h2 className="font-serif text-4xl font-bold tracking-wide text-[#4a2511] md:text-6xl">

        <span className="bg-gradient-to-r from-[#7a1020] via-[#c49b63] to-[#7a1020] bg-clip-text text-transparent">
          Luxury Product
        </span>

        <br />

        <span className="text-black">
          Category Universe
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-[#7a1020] via-[#c49b63] to-[#7a1020]" />

    </div>

    {/* CATEGORY GRID */}
    <div className="grid gap-5 grid-cols-2 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">

      {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          category={category}
        />
      ))}
    </div>
  </section>
);

export default Categories;