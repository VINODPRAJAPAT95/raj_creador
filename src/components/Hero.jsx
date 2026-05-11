import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const heroImages = [
  "https://5.imimg.com/data5/SELLER/Default/2022/4/WP/ZS/AK/32149380/agarbatti-incense-stick-packaging-boxes-customized-mono-carton.jpg",

  "https://designatheme.net/wp-content/uploads/2022/05/incense-stick6.jpg",

  "https://i.pinimg.com/736x/a2/fb/47/a2fb4742ae6e626d4495e2c79366fa96.jpg",
];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-36">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/luminous-light-yellow-gold-saffron-blank-horizontal-vector-background-adorned-with-citrus-mandalas_179530-1308.jpg?w=2000')",
        }}
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[#fff4d6]/20" />

      {/* GOLD SHINE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff3c4]/10 via-transparent to-[#ffe08a]/10" />

      {/* FLOATING GLOW */}
      <motion.div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E2C88B]/20 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.55em] text-[#9c6b00]"
          >
            PURELY DIVINE
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >

            {/* SCRIPT TEXT */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.08em" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="block font-['Cormorant_Garamond'] text-4xl italic text-[#a97800] md:text-6xl"
            >
              𝓡𝓪𝓳𝓹𝓪𝓵
            </motion.span>

            {/* PRODUCTS */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-2 block bg-gradient-to-r from-[#5c3d00] via-[#a97800] to-[#e2b648] bg-clip-text text-5xl font-black uppercase leading-[1] tracking-[0.12em] text-transparent md:text-7xl"
            >
              PRODUCTS
            </motion.span>

            {/* SUBTITLE */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-5 block text-sm font-light uppercase tracking-[0.55em] text-[#5e4514] md:text-lg"
            >
              Luxury Spiritual Fragrance Since 1981
            </motion.span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 max-w-xl text-lg leading-8 text-[#3b2b0f]"
          >
            Premium incense, dhoop, pooja deep and handcrafted aroma
            collections with cinematic luxury aesthetics for modern
            spiritual lifestyles.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              to="/categories"
              className="rounded-full bg-gradient-to-r from-[#E2C88B] to-[#C9A45C] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_35px_rgba(226,200,139,0.35)] transition duration-300 hover:scale-105"
            >
              Explore Collection
            </Link>

            <Link
              to="/categories"
              className="rounded-full border border-[#caa34a]/40 bg-white/40 px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#6f4e00] backdrop-blur-xl transition hover:bg-white/60"
            >
              View Categories
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* IMAGE CARD */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-[#7a1020] bg-white/20 p-3 backdrop-blur-md shadow-[0_20px_60px_rgba(122,16,32,0.35)]">

            {/* MEHROON + GOLD GLOW */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#7a1020]/20 via-transparent to-[#E2C88B]/20 opacity-80" />

            {/* IMAGE */}
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={heroImages[currentImage]}
              alt="Luxury incense showcase"
              className="h-[540px] w-full rounded-[2rem] object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#00000015] via-transparent to-transparent" />

            {/* LEFT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/60 text-[#7a1020] backdrop-blur-xl transition hover:bg-[#E2C88B]"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* RIGHT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/60 text-[#7a1020] backdrop-blur-xl transition hover:bg-[#E2C88B]"
            >
              <ChevronRight size={20} />
            </motion.button>

            {/* INDICATORS */}
            <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-10 bg-[#7a1020]"
                      : "w-2 bg-[#ffffff90]"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;