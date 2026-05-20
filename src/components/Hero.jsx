import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// DESKTOP IMAGES
import hero1 from "../assets/heroimage/hero1.png";
import hero2 from "../assets/heroimage/hero2.png";
import hero3 from "../assets/heroimage/hero3.png";

// MOBILE IMAGES
import hero1Mobile from "../assets/heroimage/hero1-mobile.png";
import hero2Mobile from "../assets/heroimage/hero2-mobile.png";
import hero3Mobile from "../assets/heroimage/hero3-mobile.png";

const slides = [
  {
    desktopImage: hero1,
    mobileImage: hero1Mobile,

    tag: "Luxury Car Fragrance",
    title1: "Premium",
    title2: "Car Aroma",

    desc:
      "Refresh every drive with long-lasting luxury car fragrances crafted for a smooth, fresh, and premium experience.",
  },

  {
    desktopImage: hero2,
    mobileImage: hero2Mobile,

    tag: "Festival Special",
    title1: "Sacred",
    title2: "Dhoop Batti",

    desc:
      "Traditional dhoop collections designed for peaceful rituals and divine atmosphere in every home.",
  },

  {
    desktopImage: hero3,
    mobileImage: hero3Mobile,

    tag: "Khadi Natural Care",
    title1: "Natural",
    title2: "Khadi Soaps",

    desc:
      "Experience the goodness of herbal ingredients with refreshing Khadi soaps made for soft, healthy, and glowing skin.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // MOBILE DETECTION
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <>
      {/* GOOGLE FONT */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
      />

      <section className="relative w-full overflow-hidden">

        {/* HERO SECTION */}
        <div
          className="
            relative
            h-[92vh]
            min-h-[650px]
            md:h-[90vh]
            lg:h-screen
            w-full
            overflow-hidden
          "
        >

          {/* SLIDER */}
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="sync"
          >

            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{
                x: direction > 0 ? "100%" : "-100%",
                opacity: 1,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? "-100%" : "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >

              {/* HERO IMAGE */}
              <img
                src={
                  isMobile
                    ? slides[currentSlide].mobileImage
                    : slides[currentSlide].desktopImage
                }
                alt="Rajpal Products"
                className="
                  h-full
                  w-full
                  object-cover
                  md:object-center
                  object-[65%_center]
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  inset-0
                  z-20
                  flex
                  items-center
                  px-5
                  sm:px-10
                  lg:px-20
                "
              >

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                  }}
                  className="
                    w-full
                    max-w-[340px]
                    sm:max-w-xl
                    md:max-w-2xl
                    text-white
                  "
                >

                  {/* BRAND */}
                  <p
                    className="
                      mb-3
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-[#f4d58d]
                      sm:text-xs
                    "
                    style={{
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    Rajpal Products
                  </p>

                  {/* TAG */}
                  <span
                    className="
                      inline-block
                      rounded-full
                      border
                      border-white/30
                      bg-[#7a1020]
                      px-4
                      py-2
                      text-[10px]
                      uppercase
                      tracking-widest
                      sm:text-xs
                    "
                    style={{
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    {slides[currentSlide].tag}
                  </span>

                  {/* TITLE */}
                  <h1 className="mt-5 leading-none">

                    <span
                      className="
                        block
                        text-[28px]
                        font-light
                        tracking-wide
                        text-white
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {slides[currentSlide].title1}
                    </span>

                    <span
                      className="
                        mt-2
                        block
                        text-[38px]
                        leading-none
                        font-bold
                        uppercase
                        tracking-wide
                        text-[#f4d58d]
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                      "
                      style={{
                        fontFamily: "'Cinzel', serif",
                      }}
                    >
                      {slides[currentSlide].title2}
                    </span>

                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-4
                      max-w-[300px]
                      text-[14px]
                      leading-relaxed
                      text-white/90
                      sm:text-base
                      md:max-w-md
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {slides[currentSlide].desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-7">

                    <Link
                      to="/categories"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-[#7a1020]
                        to-[#5c0c18]
                        px-7
                        py-3
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        sm:px-10
                        sm:py-4
                        sm:text-sm
                      "
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
          <div
            className="
              absolute
              bottom-6
              left-1/2
              z-30
              flex
              -translate-x-1/2
              gap-2
              sm:gap-3
            "
          >

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(
                    index > currentSlide ? 1 : -1
                  );

                  setCurrentSlide(index);
                }}
                className={`
                  h-2
                  transition-all
                  duration-300
                  sm:h-3
                  ${
                    currentSlide === index
                      ? "w-8 rounded-full bg-[#f4d58d] sm:w-10"
                      : "w-2 rounded-full bg-white/60 sm:w-3"
                  }
                `}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;