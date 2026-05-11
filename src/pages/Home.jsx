import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import CategoryCard from "../components/CategoryCard";
import { categories, faqs, testimonials } from "../data/siteData";

const Home = () => (
  <>
    <Hero />

    {/* 💎 FEATURED CATEGORIES (ONLY BACKGROUND CHANGED) */}
    <section className="relative mx-auto max-w-7xl px-4 py-16 overflow-hidden">

      <SectionTitle
        eyebrow="Featured Categories"
        title="Premium Divine Collections"
        subtitle="Bento-inspired luxury sections with cinematic incense and fragrance visuals."
      />

      {/* 🌟 NEW LUXURY BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff7f0] to-[#f6efe6]" />

        {/* soft maroon glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,0,0.08),transparent_60%)]" />

        {/* texture image */}
        <img
          src="https://i.pinimg.com/736x/c3/ca/ce/c3cacec81ef726eaaaf1ef58049eef0c.jpg"
          alt="bg"
          className="h-full w-full object-cover opacity-5 mix-blend-overlay"
        />

      </div>

      {/* CATEGORY GRID (UNCHANGED) */}
      <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>

    {/* PREMIUM COLLECTIONS */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Premium Collections" title="Curated Signature Fragrance Lines" />
      <div className="grid gap-6 md:grid-cols-3">
        {["Royal Oud", "Temple Sandal", "Divine Floral"].map((item) => (
          <article key={item} className="glass-card rounded-2xl p-6">
            <h3 className="text-gold-soft">{item}</h3>
            <p className="mt-2 text-sm text-beige/80">
              Luxury showcase block for your real catalog sections.
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* PRODUCT SHOWCASE */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Product Showcase" title="Luxury Ecommerce Product Experience" />
      <div className="rounded-3xl border border-silver/70 bg-white/75 p-10 text-center text-beige/90">
        Dynamic product sections are routed under each category with reusable product card architecture.
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Why Choose Us" title="Heritage, Purity, Premium Craft" />
      <div className="grid gap-4 md:grid-cols-4">
        {["Since 1981", "Premium Quality", "Export Ready", "Spiritual Excellence"].map((item) => (
          <div key={item} className="rounded-xl border border-gold/20 p-4 text-center text-sm">
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* SPIRITUAL EXPERIENCE */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Spiritual Experience" title="A Cinematic Divine Atmosphere" />
      <div className="overflow-hidden rounded-3xl border border-gold/20">
        <img
          src="https://images.unsplash.com/photo-1573318542007-3efcb8f57dd1?auto=format&fit=crop&w=1400&q=80"
          alt="Spiritual banner"
          className="h-80 w-full object-cover"
        />
      </div>
    </section>

    {/* BEST SELLERS */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Best Sellers" title="Top Selling Divine Picks" />
      <div className="grid gap-6 md:grid-cols-3">
        {["Best Seller 01", "Best Seller 02", "Best Seller 03"].map((item) => (
          <article key={item} className="rounded-2xl border border-silver/70 bg-white/75 p-6">
            <h3>{item}</h3>
            <p className="mt-2 text-sm text-beige/80">
              Replace with best-seller products from your provided catalog.
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* ABOUT BRAND */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="About Brand" title="Crafted Heritage Since 1981" />
      <div className="glass-card grid gap-8 rounded-3xl p-8 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
          className="h-80 w-full rounded-2xl object-cover"
          alt="Brand heritage"
        />
        <p className="self-center text-beige/85">
          RAJPAL PRODUCTS — PURELY DIVINE blends traditional incense craftsmanship with modern
          fragrance innovation for premium spiritual and lifestyle experiences.
        </p>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="Testimonials" title="Trusted by Retail & Export Partners" />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle eyebrow="FAQs" title="Everything You Need To Know" />
      <FAQAccordion items={faqs} />
    </section>

    {/* CONTACT */}
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2">
      <div>
        <SectionTitle
          eyebrow="Contact CTA"
          title="Start Your Premium Fragrance Partnership"
          subtitle="Send your inquiry for wholesale, private label, export, and custom fragrance requirements."
        />
      </div>
      <ContactForm />
    </section>
  </>
);

export default Home;