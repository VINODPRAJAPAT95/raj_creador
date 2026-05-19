import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Headphones,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import aboutimage from "../assets/rajpalabout.png";
import rajpalabout from "../assets/rajpal.png";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    desc: "Serving customers with devotion, trust and purity since 1981.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Reliable assistance and fast response for all our clients.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Crafted with authentic ingredients and divine fragrances.",
  },
];

function ImageStack() {
  return (
    <div className="relative h-[480px] w-full">

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="
          absolute left-0 bottom-0
          w-[72%] h-[380px]
          rounded-[28px]
          overflow-hidden
          border border-[#7a1022]/10
          shadow-[0_25px_80px_rgba(0,0,0,0.12)]
        "
      >
        <img
          src={aboutimage}
          alt="Rajpal Products"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#7a1022]/10 to-transparent" />
      </motion.div>

      {/* Small Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        whileHover={{ scale: 1.03 }}
        className="
          absolute right-0 top-0
          w-[58%] h-[290px]
          rounded-[28px]
          overflow-hidden
          border border-[#7a1022]/10
          shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          z-10
        "
      >
        <img
          src={rajpalabout}
          alt="Rajpal Agarbatti"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#7a1022]/10 to-transparent" />
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="
          absolute bottom-8 right-8 z-20
          h-24 w-24 rounded-full
          bg-gradient-to-br
          from-[#5a0b16]
          via-[#7a1022]
          to-[#8f1730]
          border-4 border-white/70
          flex flex-col items-center justify-center
          shadow-2xl
        "
      >
        <span className="text-[10px] tracking-[0.2em] text-white">
          SINCE
        </span>

        <span className="text-2xl font-bold text-white">
          1981
        </span>
      </motion.div>

      {/* Diya */}
      <div
        className="
          absolute top-5 left-5 z-20
          h-14 w-14 rounded-full
          bg-white/80 backdrop-blur-md
          border border-[#7a1022]/10
          flex items-center justify-center
          text-2xl
          shadow-xl
        "
      >
        🪔
      </div>
    </div>
  );
}

const About = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const end = 21000;

    const duration = 2200;

    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500;600;700;800&family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />

      <section
        ref={ref}
        className="
          relative overflow-hidden
          py-28 lg:py-36
          bg-gradient-to-br
          from-[#fffdf4]
          via-[#fff9e7]
          to-[#fff4cf]
        "
      >

        {/* Background Glow */}
        <div
          className="
            absolute top-0 left-1/2
            -translate-x-1/2
            w-[900px] h-[500px]
            rounded-full
            bg-[#7a1022]/10
            blur-3xl
            pointer-events-none
          "
        />

        {/* Pattern */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            bg-[radial-gradient(circle_at_center,_#7a1022_1px,_transparent_1px)]
            [background-size:32px_32px]
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="mb-12">

            <p
              className="
                uppercase
                tracking-[0.45em]
                text-[12px]
                text-[#7a1022]
                font-semibold
                text-center
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              About Us
            </p>

            <h1
              className="
                mt-5
                text-4xl md:text-5xl lg:text-6xl
                leading-[1.05]
                font-bold
                tracking-[-2px]
                text-center
                text-[#2f1b00]
              "
              style={{
                fontFamily: "'Bodoni Moda', serif",
              }}
            >
              RAJPAL PRODUCTS —
              <span className="text-[#7a1022]">
                {" "}PURELY DIVINE
              </span>
            </h1>

          </div>

          {/* Center Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mt-12"
          >
            <div className="text-center">

              <div
                className="
                  text-6xl lg:text-7xl
                  font-bold
                  tracking-[-2px]
                  bg-gradient-to-r
                  from-[#5a0b16]
                  via-[#8f1730]
                  to-[#5a0b16]
                  bg-clip-text
                  text-transparent
                "
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {count.toLocaleString()}+
              </div>

              <p
                className="mt-3 text-xl text-[#4a0d18] font-semibold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Happy Customers
              </p>

              <p
                className="text-sm text-[#8f1730] mt-1 tracking-[0.15em]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Across India & Global Markets
              </p>

            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mt-14
              grid lg:grid-cols-[1.05fr_0.95fr]
              gap-16
              items-center
              rounded-[32px]
              p-8 lg:p-14
              border border-[#7a1022]/10
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(255,248,220,0.78))",
            }}
          >

            {/* Left */}
            <div>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-[#7a1022]/40" />

                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[11px]
                    text-[#7a1022]
                    font-medium
                  "
                >
                  Our Story
                </p>
              </div>

              <h2
                className="
                  text-4xl lg:text-6xl
                  leading-[1.05]
                  font-bold
                  tracking-[-1px]
                  text-[#2f1b00]
                "
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Crafting Divine
                <br />
                Fragrance Since 1981
              </h2>

              <p
                className="
                  mt-7
                  text-[17px]
                  leading-[1.9]
                  text-[#6f4b00]
                "
              >
                RAJPAL PRODUCTS combines traditional incense craftsmanship
                with modern fragrance excellence. Every product is created
                with devotion, purity, and premium quality.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-10 mt-10">

                {[
                  ["43+", "Years Legacy"],
                  ["300+", "Products"],
                  ["50+", "Retail Partners"],
                ].map(([num, label], i) => (
                  <div key={i}>
                    <div
                      className="
                        text-4xl
                        font-bold
                        text-[#7a1022]
                      "
                      style={{
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {num}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-[#8f1730]
                      "
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/contact")}
                className="
                  group relative overflow-hidden
                  mt-10
                  rounded-full
                  px-8 py-4
                  text-sm
                  tracking-[0.25em]
                  uppercase
                  font-medium
                  bg-gradient-to-r
                  from-[#5a0b16]
                  via-[#7a1022]
                  to-[#8f1730]
                  text-white
                  shadow-xl
                  transition-all duration-500
                  hover:scale-105
                  hover:shadow-[#7a1022]/40
                "
              >
                Learn More
              </button>

            </div>

            {/* Right */}
            <ImageStack />

          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    relative overflow-hidden
                    rounded-[28px]
                    p-8
                    border border-[#7a1022]/10
                    shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                    transition-all duration-500
                  "
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(12px)",
                  }}
                >

                  <div
                    className="
                      absolute top-0 left-0 right-0
                      h-[2px]
                      bg-gradient-to-r
                      from-transparent
                      via-[#7a1022]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      h-16 w-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#f8d7de]
                      to-[#f1b7c3]
                      flex items-center justify-center
                      text-[#7a1022]
                      shadow-lg
                    "
                  >
                    <Icon size={32} strokeWidth={1.7} />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-[#3d2200]
                    "
                    style={{
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-8
                      text-[#7a5a00]
                    "
                  >
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}
          </div>

        </div>

      </section>
    </>
  );
};

export default About;