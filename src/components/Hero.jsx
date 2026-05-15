import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://t4.ftcdn.net/jpg/08/15/65/93/360_F_815659306_tTb0YDQnu76nX7jIs091pBWVkKso5yH7.jpg",
    tag: "Divine Collection",
    title1: "Premium",
    title2: "Agarbatti",
    desc: "Experience pure spiritual fragrance with handcrafted incense sticks and luxury pooja essentials.",
  },
  {
    image: "https://charustore.com/cdn/shop/articles/Hero_Image_1_e337c502-b51c-430e-8a1b-335d1f1ab510.png?v=1773135317",
    tag: "Festival Special",
    title1: "Sacred",
    title2: "Dhoop Batti",
    desc: "Traditional dhoop collections designed for peaceful rituals and divine atmosphere in every home.",
  },
  {
    image: "https://st2.depositphotos.com/10614052/42551/i/450/depositphotos_425517450-stock-photo-female-hands-diya-lamp-aroma.jpg",
    tag: "Luxury Pooja",
    title1: "Spiritual",
    title2: "Pooja Items",
    desc: "Discover premium pooja essentials crafted beautifully for modern spiritual lifestyles.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
      />

      <section className="relative w-full overflow-hidden">
        <div className="relative h-screen w-full min-h-[650px] overflow-hidden">

          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: direction > 0 ? "-100%" : "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].image}
                alt="Rajpal Products"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#3a0d0d]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute inset-0 z-20 flex items-center px-6 md:px-12 lg:px-20">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl text-white"
                >
                  {/* Tag */}
                  <span
                    className="inline-block rounded-full border border-white/30 bg-[#7a1020] px-5 py-2 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {slides[currentSlide].tag}
                  </span>

                  {/* Titles - Small & Elegant */}
                  <h1 className="mt-6 leading-none">
                    <span
                      className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {slides[currentSlide].title1}
                    </span>

                    <span
                      className="mt-1 block text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-[#f4d58d]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {slides[currentSlide].title2}
                    </span>
                  </h1>

                  {/* Description */}
                  <p
                    className="mt-6 max-w-md text-[15px] md:text-base leading-relaxed text-white/90"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {slides[currentSlide].desc}
                  </p>

                  {/* Only Shop Now Button */}
                  <div className="mt-8">
                    <Link
                      to="/categories"
                      className="inline-block rounded-full bg-gradient-to-r from-[#7a1020] to-[#5c0c18] px-10 py-4 text-sm uppercase tracking-widest text-white transition hover:scale-105"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-xl hover:bg-[#7a1020]"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-xl hover:bg-[#7a1020]"
          >
            <ChevronRight size={26} />
          </button>

          {/* Dots */}
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