import { useState } from "react";

import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
import CategoryCard from "../components/CategoryCard";

import { categories, faqs, testimonials } from "../data/siteData";

import rajpalsince from "../assets/images/rajpalsince.png";

const Home = () => {

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* PREMIUM FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .lux-font {
          font-family: 'Space Mono', monospace;
          letter-spacing: 1px;
        }

        .section-heading {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1.2;
          background: linear-gradient(
            90deg,
            #7a1020 0%,
            #b68a35 50%,
            #7a1020 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <Hero />

      {/* FEATURED CATEGORIES */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16">

        <div className="relative z-10 mb-14 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#7a1020]">
            Featured Categories
          </p>

          <h2 className="section-heading text-[42px] md:text-[64px]">
            Premium Divine Collections
          </h2>

          <p className="mx-auto mt-5 max-w-3xl lux-font text-[15px] leading-8 text-[#6d4c41]">
            Bento-inspired luxury sections with cinematic incense and fragrance visuals.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-[#7a1020] via-[#b68a35] to-[#7a1020]" />

        </div>

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff7f0] to-[#f6efe6]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,16,32,0.08),transparent_60%)]" />

          <img
            src="https://i.pinimg.com/736x/c3/ca/ce/c3cacec81ef726eaaaf1ef58049eef0c.jpg"
            alt="bg"
            className="h-full w-full object-cover opacity-5 mix-blend-overlay"
          />
        </div>

        {/* CATEGORY GRID */}
        <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* PREMIUM COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#7a1020]">
            Premium Collections
          </p>

          <h2 className="section-heading text-[44px] md:text-[58px]">
            Curated Signature Fragrance Lines
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {["Royal Oud", "Temple Sandal", "Divine Floral"].map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-[#7a1020]/10 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#7a1020] to-[#b68a35]" />

              <h3 className="section-heading text-[26px]">
                {item}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#6d4c41]">
                Luxury showcase block for your real catalog sections.
              </p>

            </article>
          ))}
        </div>
      </section>

      {/* MAIN BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-10">

        <div className="grid overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fff6ef] via-[#fffaf6] to-[#f8ece5] shadow-[0_20px_80px_rgba(122,16,32,0.08)] md:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col justify-center px-8 py-14 md:px-14">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#7a1020]">
              Traditional Pooja Collection
            </p>

            <h2 className="section-heading max-w-xl text-[42px] md:text-[60px]">
              Sacred Items <br />
              For Every Pooja
            </h2>

            <p className="mt-6 max-w-lg text-[16px] leading-8 text-[#6b5b4b]">
              Explore premium agarbatti, diyas, idols, pooja thali,
              incense sticks, kalash, flowers, and spiritual essentials
              for your divine celebrations.
            </p>

            <button className="mt-8 w-fit rounded-2xl bg-gradient-to-r from-[#7a1020] to-[#4a0712] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(122,16,32,0.25)]">
              Shop Now
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center p-6">

            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(122,16,32,0.08),transparent_70%)]" />

            <img
              src="https://totacart.in/wp-content/uploads/2026/05/BB-Dhoop-Batti6.jpg"
              alt="Pooja Store"
              className="relative z-10 h-full max-h-[450px] w-full object-contain transition duration-700 hover:scale-105"
            />

          </div>
        </div>
      </section>

      {/* ABOUT BRAND */}
      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#7a1020]">
            About Brand
          </p>

          <h2 className="section-heading text-[44px] md:text-[58px]">
            Crafted Heritage Since 1981
          </h2>

        </div>

        <div className="grid gap-8 rounded-[32px] border border-[#7a1020]/10 bg-white/70 p-8 shadow-xl backdrop-blur-xl md:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
            className="h-80 w-full rounded-3xl object-cover"
            alt="Brand heritage"
          />

          <div className="flex flex-col justify-center">

            <h3 className="section-heading text-[36px]">
              RAJPAL PRODUCTS
            </h3>

            <p className="mt-5 text-[16px] leading-8 text-[#6d4c41]">
              PURELY DIVINE blends traditional incense craftsmanship with modern
              fragrance innovation for premium spiritual and lifestyle experiences.

              {showMore && (
                <>
                  {" "}
                  Since 1981, RAJPAL PRODUCTS has been committed to crafting
                  premium agarbatti, incense sticks, dhoop, pooja essentials,
                  and aromatic spiritual products inspired by Indian traditions.
                  Our fragrances are carefully designed using high-quality raw
                  materials, authentic formulas, and modern fragrance innovation
                  to create peaceful and divine experiences for homes, temples,
                  meditation spaces, and celebrations across India and global markets.
                </>
              )}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="
                mt-6 w-fit rounded-full
                bg-gradient-to-r from-[#7a1020] to-[#4a0712]
                px-6 py-3
                text-sm font-semibold uppercase tracking-[0.2em]
                text-white
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(122,16,32,0.25)]
              "
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#7a1020]">
            Testimonials
          </p>

          <h2 className="section-heading text-[44px] md:text-[58px]">
            Trusted by Retail & Export Partners
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

      </section>

    </>
  );
};

export default Home;