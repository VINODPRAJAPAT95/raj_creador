import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// LOCAL IMPORT IMAGES
import hero1 from "../assets/heroimage/hero1.png";
import hero2 from "../assets/heroimage/hero2.png";
import hero3 from "../assets/heroimage/hero3.png";

const slides = [
  {
    image: hero1,
    tag: "Divine Collection",
    title1: "Premium",
    title2: "Agarbatti",
    desc:
      "Experience pure spiritual fragrance with handcrafted incense sticks and luxury pooja essentials.",
  },

  {
    image: hero2,
    tag: "Festival Special",
    title1: "Sacred",
    title2: "Dhoop Batti",
    desc:
      "Traditional dhoop collections designed for peaceful rituals and divine atmosphere in every home.",
  },

  {
    image: hero3,
    tag: "Luxury Pooja",
    title1: "Spiritual",
    title2: "Pooja Items",
    desc:
      "Discover premium pooja essentials crafted beautifully for modern spiritual lifestyles.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // NEXT
  const nextSlide = () => {
    setDirection(1);

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setDirection(-1);

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* GOOGLE FONT */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
      />

      <section className="relative w-full overflow-hidden">
        <div className="relative h-screen min-h-[650px] w-full overflow-hidden">

          {/* SLIDER */}
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{
                x: direction > 0 ? "100%" : "-100%",
              }}
              animate={{ x: 0 }}
              exit={{
                x: direction > 0 ? "-100%" : "100%",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >

              {/* IMAGE */}
              <img
                src={slides[currentSlide].image}
                alt="Rajpal Products"
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3a0d0d]/40 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* CONTENT */}
              <div
                className="absolute inset-0 z-20 flex items-start px-6 pt-32 md:px-12 md:pt-40 lg:px-20 lg:pt-44"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl text-white"
                >

                  {/* BRAND */}
                  <p
                    className="mb-4 text-xs uppercase tracking-[0.45em] text-[#f4d58d]"
                    style={{
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    Rajpal Products
                  </p>

                  {/* TAG */}
                  <span
                    className="inline-block rounded-full border border-white/30 bg-[#7a1020] px-5 py-2 text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    {slides[currentSlide].tag}
                  </span>

                  {/* TITLE */}
                  <h1 className="mt-6 leading-none">
                    <span
                      className="block text-3xl font-light tracking-wide text-white md:text-4xl lg:text-5xl"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {slides[currentSlide].title1}
                    </span>

                    <span
                      className="mt-1 block text-4xl font-bold uppercase tracking-wider text-[#f4d58d] md:text-5xl lg:text-6xl"
                      style={{
                        fontFamily: "'Cinzel', serif",
                      }}
                    >
                      {slides[currentSlide].title2}
                    </span>
                  </h1>

                  {/* DESC */}
                  <p
                    className="mt-6 max-w-md text-[15px] leading-relaxed text-white/90 md:text-base"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {slides[currentSlide].desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-8">
                    <Link
                      to="/categories"
                      className="inline-block rounded-full bg-gradient-to-r from-[#7a1020] to-[#5c0c18] px-10 py-4 text-sm uppercase tracking-widest text-white transition duration-300 hover:scale-105"
                      style={{
                        fontFamily: "'Cinzel', serif",
                      }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 rounded-full bg-[#f4d58d]"
                    : "w-3 rounded-full bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;