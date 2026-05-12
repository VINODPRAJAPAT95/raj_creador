import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { categories, navLinks } from "../data/siteData";

/* ─── Spiritual Auto Scroll Images ─── */
const divineImages = [
  "https://leelathestore.com/cdn/shop/files/792A1051.jpg?v=1695401733&width=1946", // hanging lights
  "https://incensecosmos.in/wp-content/uploads/2020/12/imageedit_7_3985098991.jpg", // festive lamps
  "https://m.media-amazon.com/images/I/61ssMfJ8fDL._AC_UF894,1000_QL80_.jpg", // pooja accessories
  "https://houseofnagchampa.com/wp-content/uploads/2023/12/dhoop-cones-391x391-1.jpg.webp", // temple decor
  "https://www.rajpalproducts.in/static/images/1-Homepage-Banner_3.jpg", // candles & lights
  "https://www.rajpalproducts.in/media/photos/products/tathastu_RhNa5jk.jpg", // decorative setup
];
/* ─── Floating particles ─── */
const Particle = ({ delay, x, size }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full bg-[#E2C88B]"
    style={{ left: `${x}%`, bottom: "0", width: size, height: size }}
    animate={{
      y: [-10, -80, -10],
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 5 + delay,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const particles = [
  { delay: 0, x: 10, size: 4 },
  { delay: 1.2, x: 25, size: 3 },
  { delay: 2.4, x: 45, size: 5 },
  { delay: 0.7, x: 60, size: 3 },
  { delay: 3.1, x: 75, size: 4 },
  { delay: 1.8, x: 88, size: 3 },
];

/* ─── Social Icons ─── */
const socials = [
  {
    id: "IG",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "FB",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "YT",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#0a0400"
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

  const bgY = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#0a0400]"
      style={{ marginTop: 0 }}
    >
      {/* top line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E2C88B]/30 to-transparent" />

      {/* ───── AUTO SCROLL DIVINE IMAGES ───── */}
      <div className="absolute inset-x-0 top-0 z-10 overflow-hidden border-b border-[#E2C88B]/20 bg-black/40 backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...divineImages, ...divineImages].map((img, i) => (
            <div
              key={i}
              className="relative h-[190px] w-[320px] flex-shrink-0 overflow-hidden"
            >
              <img
                src={img}
                alt="Divine"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* gold shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2C88B]/10 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute left-[15%] top-[20%] h-96 w-96 rounded-full bg-[#E2C88B]/5 blur-[120px]" />
        <div className="absolute right-[10%] top-[40%] h-72 w-72 rounded-full bg-[#8B1A1A]/10 blur-[100px]" />
        <div className="absolute left-[50%] bottom-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-[#E2C88B]/4 blur-[90px]" />
      </motion.div>

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-12 pt-56">
        {/* divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mb-14 h-px origin-left bg-gradient-to-r from-[#E2C88B]/60 via-[#F8E7B0]/40 to-transparent"
        />

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2C88B]/40 bg-[#E2C88B]/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#E2C88B]"
                  fill="currentColor"
                >
                  <path d="M12 2L9.5 9H2l6 4.5-2.3 7L12 16l6.3 4.5-2.3-7L22 9h-7.5z" />
                </svg>
              </motion.div>

              <h2 className="bg-gradient-to-r from-[#E2C88B] via-[#F8E7B0] to-[#C9A45C] bg-clip-text text-xl font-extrabold uppercase tracking-[0.18em] text-transparent">
                RAJPAL
              </h2>
            </div>

            <p className="mb-1 text-xs italic tracking-[0.4em] text-[#E2C88B]/70">
              PURELY DIVINE
            </p>

            <div className="mb-5 h-px w-20 bg-gradient-to-r from-[#E2C88B]/60 to-transparent" />

            <p className="text-sm leading-7 text-white/55">
              Premium spiritual fragrance products inspired by devotion,
              elegance and timeless Indian tradition since 1981.
            </p>

            {/* socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E2C88B]/20 bg-white/5 text-[#E2C88B]/70 backdrop-blur-md transition-all duration-300 hover:border-[#E2C88B]/60 hover:bg-[#E2C88B]/10 hover:text-[#E2C88B]"
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
            <h4 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E2C88B]">
              <span className="h-px w-4 bg-[#E2C88B]/60" />
              Quick Links
            </h4>

            <div className="space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-white/55 transition hover:text-[#E2C88B]"
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
            <h4 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E2C88B]">
              <span className="h-px w-4 bg-[#E2C88B]/60" />
              Categories
            </h4>

            <div className="space-y-3">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className="block text-sm text-white/55 transition hover:text-[#E2C88B]"
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
            <h4 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E2C88B]">
              <span className="h-px w-4 bg-[#E2C88B]/60" />
              Stay Connected
            </h4>

            <div className="rounded-2xl border border-[#E2C88B]/15 bg-white/[0.04] p-5 backdrop-blur-lg">
              <p className="mb-4 text-xs leading-6 text-white/50">
                Subscribe for latest launches, divine collections &
                premium updates.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#E2C88B]/40"
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(226,200,139,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#E2C88B] via-[#F0D898] to-[#C9A45C] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-black"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* bottom divider */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E2C88B]/35 to-transparent" />

          <span className="text-xl text-[#E2C88B]/60">ॐ</span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E2C88B]/35 to-transparent" />
        </div>

        {/* copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center md:flex-row">
          <p className="text-[11px] tracking-[0.2em] text-white/35">
            © {new Date().getFullYear()} RAJPAL PRODUCTS — PURELY DIVINE
          </p>

          <p className="text-[11px] tracking-[0.15em] text-white/25">
            Crafted with devotion • Spiritual Luxury Brand
          </p>
        </div>
      </div>

      {/* bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[#E2C88B]/50 to-transparent"
      />
    </footer>
  );
};

export default Footer;