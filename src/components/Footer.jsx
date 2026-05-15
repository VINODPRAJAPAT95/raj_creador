import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { categories, navLinks } from "../data/siteData";

/* ───────────────── DIVINE IMAGES ───────────────── */
const divineImages = [
  "https://leelathestore.com/cdn/shop/files/792A1051.jpg?v=1695401733&width=1946",
  "https://incensecosmos.in/wp-content/uploads/2020/12/imageedit_7_3985098991.jpg",
  "https://m.media-amazon.com/images/I/61ssMfJ8fDL._AC_UF894,1000_QL80_.jpg",
  "https://houseofnagchampa.com/wp-content/uploads/2023/12/dhoop-cones-391x391-1.jpg.webp",
  "https://www.rajpalproducts.in/static/images/1-Homepage-Banner_3.jpg",
  "https://www.rajpalproducts.in/media/photos/products/tathastu_RhNa5jk.jpg",
];

/* ───────────────── FLOATING PARTICLES ───────────────── */
const Particle = ({ delay, x, size }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full bg-[#C49B63]"
    style={{
      left: `${x}%`,
      bottom: "0",
      width: size,
      height: size,
    }}
    animate={{
      y: [-10, -90, -10],
      opacity: [0, 0.7, 0],
      scale: [0.7, 1.3, 0.7],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const particles = [
  { delay: 0, x: 10, size: 4 },
  { delay: 1, x: 24, size: 3 },
  { delay: 2, x: 45, size: 5 },
  { delay: 1.5, x: 66, size: 3 },
  { delay: 3, x: 80, size: 4 },
];

/* ───────────────── SOCIALS ───────────────── */
const socials = [
  {
    id: "IG",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "FB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "YT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#000"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <>
      {/* PREMIUM FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        .footer-heading{
          font-family:'Cinzel', serif;
          font-weight:800;
          letter-spacing:0.18em;
        }

        .footer-text{
          font-family:'Inter', sans-serif;
          letter-spacing:0.03em;
        }

        .footer-brand{
          font-family:'Cinzel', serif;
          font-weight:900;
          letter-spacing:0.22em;
        }
      `}</style>

      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-[#070201]"
      >
        {/* TOP BORDER */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49B63]/60 to-transparent" />

        {/* ─────────── AUTO IMAGE SCROLL ─────────── */}
        <div className="absolute inset-x-0 top-0 z-10 overflow-hidden border-b border-[#C49B63]/10 bg-black/40 backdrop-blur-xl">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...divineImages, ...divineImages].map((img, i) => (
              <div
                key={i}
                className="relative h-[210px] w-[340px] flex-shrink-0 overflow-hidden"
              >
                <img
                  src={img}
                  alt="Divine"
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C49B63]/10 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* AMBIENT GLOW */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute left-[10%] top-[25%] h-96 w-96 rounded-full bg-[#7A1020]/10 blur-[120px]" />

          <div className="absolute right-[10%] top-[40%] h-80 w-80 rounded-full bg-[#C49B63]/10 blur-[120px]" />

          <div className="absolute bottom-0 left-1/2 h-60 w-[650px] -translate-x-1/2 rounded-full bg-[#C49B63]/5 blur-[100px]" />
        </motion.div>

        {/* PARTICLES */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-12 pt-60">
          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="mb-16 h-px origin-left bg-gradient-to-r from-[#C49B63]/70 via-[#EAD3A1]/30 to-transparent"
          />

          {/* GRID */}
          <div className="grid gap-14 md:grid-cols-4">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-4">

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C49B63]/30 bg-[#C49B63]/10"
                >
                  <span className="text-lg text-[#EAD3A1]">ॐ</span>
                </motion.div>

                <h2 className="footer-brand bg-gradient-to-r from-[#EAD3A1] via-[#C49B63] to-[#FFF1D0] bg-clip-text text-2xl text-transparent">
                  RAJPAL
                </h2>
              </div>

              <p className="mb-2 text-xs tracking-[0.4em] text-[#C49B63]/70">
                PURELY DIVINE
              </p>

              <div className="mb-6 h-px w-24 bg-gradient-to-r from-[#C49B63]/60 to-transparent" />

              <p className="footer-text text-sm leading-7 text-white/55">
                Premium spiritual fragrance collections crafted with
                devotion, heritage and timeless Indian elegance since 1981.
              </p>

              {/* SOCIALS */}
              <div className="mt-7 flex items-center gap-3">
                {socials.map((s) => (
                  <motion.button
                    key={s.id}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C49B63]/20 bg-white/[0.04] text-[#C49B63]/70 backdrop-blur-xl transition-all duration-300 hover:border-[#C49B63]/70 hover:bg-[#C49B63]/10 hover:text-[#EAD3A1]"
                  >
                    {s.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="footer-heading mb-8 flex items-center gap-3 text-xs uppercase text-[#EAD3A1]">
                <span className="h-px w-5 bg-[#C49B63]/60" />
                Quick Links
              </h4>

              <div className="space-y-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="footer-text block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-[#EAD3A1]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* CATEGORIES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="footer-heading mb-8 flex items-center gap-3 text-xs uppercase text-[#EAD3A1]">
                <span className="h-px w-5 bg-[#C49B63]/60" />
                Categories
              </h4>

              <div className="space-y-4">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/categories/${cat.slug}`}
                    className="footer-text block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-[#EAD3A1]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* NEWSLETTER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="footer-heading mb-8 flex items-center gap-3 text-xs uppercase text-[#EAD3A1]">
                <span className="h-px w-5 bg-[#C49B63]/60" />
                Stay Connected
              </h4>

              <div className="rounded-[28px] border border-[#C49B63]/15 bg-white/[0.04] p-6 backdrop-blur-2xl">

                <p className="footer-text mb-5 text-sm leading-7 text-white/50">
                  Subscribe for divine launches, spiritual collections &
                  premium fragrance updates.
                </p>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-text w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C49B63]/40"
                />

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(196,155,99,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="footer-text mt-4 w-full rounded-2xl bg-gradient-to-r from-[#7A1020] via-[#A31E34] to-[#7A1020] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* DIVIDER */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C49B63]/30 to-transparent" />

            <span className="text-2xl text-[#C49B63]/60">ॐ</span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C49B63]/30 to-transparent" />
          </div>

          {/* COPYRIGHT */}
          <div className="mt-7 flex flex-col items-center justify-between gap-3 text-center md:flex-row">

            <p className="footer-text text-[11px] tracking-[0.2em] text-white/35">
              © {new Date().getFullYear()} RAJPAL PRODUCTS — PURELY DIVINE
            </p>

            <p className="footer-text text-[11px] tracking-[0.15em] text-white/25">
              Crafted with devotion • Luxury Spiritual Brand
            </p>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#C49B63]/50 to-transparent"
        />
      </footer>
    </>
  );
};

export default Footer;