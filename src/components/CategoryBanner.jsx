const CategoryBanner = ({ title, image, subtitle }) => (
  <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-black shadow-[0_15px_40px_rgba(0,0,0,0.15)]">

    {/* Background Image */}
    <img
      src={image}
      alt={title}
      className="h-[220px] w-full object-cover md:h-[280px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent"></div>

    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-2xl px-6 md:px-10">

        {/* Small Tag */}
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d6a77a]">
          Divine Collection
        </p>

        {/* Title */}
        <h1 className="mt-3 font-serif text-3xl font-bold tracking-wide text-white md:text-5xl">
          <span className="text-[#8b5e3c]">
            {title}
          </span>
        </h1>

        {/* Divider */}
        <div className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-[#4a2511] via-[#8b5e3c] to-white"></div>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
          {subtitle}
        </p>

        {/* Button */}
        <button className="mt-5 rounded-full bg-[#4a2511] px-5 py-2 text-xs font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-black">
          Explore Collection
        </button>
      </div>
    </div>
  </section>
);

export default CategoryBanner;