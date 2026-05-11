import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, navLinks } from "../data/siteData";

const Footer = () => (
  <footer className="relative mt-24 overflow-hidden border-t border-[#E2C88B]/10">

    {/* VIDEO BACKGROUND */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="https://www.shutterstock.com/shutterstock/videos/3891428043/preview/stock-footage-traditional-dhup-batti-thali-for-hindu-puja-ritual.mp4" />
    </video>

    {/* LIGHTER OVERLAY */}
    <div className="absolute inset-0 bg-black/55" />

    {/* SOFT GOLD BLUR */}
    <motion.div
      className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E2C88B]/10 blur-[120px]"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
    />

    {/* CONTENT */}
    <div className="relative z-20 mx-auto max-w-7xl px-4 py-20">

      {/* TOP SECTION */}
      <div className="grid gap-14 md:grid-cols-4">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="bg-gradient-to-r from-[#E2C88B] via-[#F8E7B0] to-[#C9A45C] bg-clip-text text-2xl font-extrabold uppercase tracking-[0.18em] text-transparent">
            RAJPAL PRODUCTS
          </h2>

          <p className="mt-3 text-sm italic tracking-[0.35em] text-[#E2C88B]/80">
            PURELY DIVINE
          </p>

          <div className="mt-5 h-[1px] w-24 bg-gradient-to-r from-[#E2C88B] to-transparent" />

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Premium spiritual fragrance products inspired by devotion,
            elegance, and timeless Indian tradition since 1981.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex items-center gap-3">
            {["IG", "FB", "YT"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[#E2C88B] backdrop-blur-md transition"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#E2C88B]">
            Quick Links
          </h4>

          <div className="space-y-4">
            {navLinks.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 5 }}
              >
                <Link
                  to={item.path}
                  className="text-sm text-white/65 transition hover:text-[#E2C88B]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CATEGORIES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#E2C88B]">
            Categories
          </h4>

          <div className="space-y-4">
            {categories.slice(0, 6).map((cat) => (
              <motion.div
                key={cat.slug}
                whileHover={{ x: 5 }}
              >
                <Link
                  to={`/categories/${cat.slug}`}
                  className="text-sm text-white/65 transition hover:text-[#E2C88B]"
                >
                  {cat.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#E2C88B]">
            Stay Connected
          </h4>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

            <p className="mb-4 text-sm leading-6 text-white/60">
              Subscribe for latest launches, divine collections & premium updates.
            </p>

            <input
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-md"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[#E2C88B] to-[#C9A45C] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(226,200,139,0.35)]"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DIVIDER */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#E2C88B]/40 to-transparent"
      />

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row"
      >
        <p className="text-xs tracking-[0.18em] text-white/40">
          © {new Date().getFullYear()} RAJPAL PRODUCTS — PURELY DIVINE
        </p>

        <p className="text-xs tracking-[0.15em] text-white/30">
          Crafted with elegance • Spiritual Luxury Brand
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;