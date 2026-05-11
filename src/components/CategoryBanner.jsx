const CategoryBanner = ({ title, image, subtitle }) => (
  <section className="relative mb-10 overflow-hidden rounded-3xl border border-gold/20">
    <img src={image} alt={title} className="h-72 w-full object-cover md:h-96" />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent p-8 md:p-12">
      <p className="text-xs uppercase tracking-[0.25em] text-gold">Divine Collection</p>
      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-beige/85">{subtitle}</p>
    </div>
  </section>
);

export default CategoryBanner;
