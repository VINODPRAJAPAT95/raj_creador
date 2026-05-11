import { motion } from "framer-motion";
import logo from "../assets/rajpal logo PNG.png";

const title = "RAJPAL PRODUCTS";
const subtitle = "PURELY DIVINE";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
    },
  }),
};

const AnimatedBrandLogo = ({
  size = "h-14 w-40",
  showText = true,
}) => {
  return (
    <div className="flex items-center gap-4">

      {/* Logo */}
      <motion.div
        className={`relative ${size} flex items-center justify-center`}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* LEFT ROUND GLOW */}
        <motion.div
          className="absolute -left-3 h-3 w-3 rounded-full bg-[#E2C88B] shadow-[0_0_20px_rgba(226,200,139,0.8)]"
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* RIGHT ROUND GLOW */}
        <motion.div
          className="absolute -right-3 h-3 w-3 rounded-full bg-[#E2C88B] shadow-[0_0_20px_rgba(226,200,139,0.8)]"
          animate={{
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute left-[-40%] top-0 z-20 h-full w-[20%] bg-white/20 blur-lg"
          animate={{
            left: ["-30%", "120%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        {/* Logo Image */}
        <img
          src={logo}
          alt="Rajpal Products"
          className="relative z-10 h-full w-full object-contain"
        />
      </motion.div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">

          {/* Title */}
          <div className="flex flex-wrap leading-none">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="bg-gradient-to-r from-[#E2C88B] via-[#F5E6B3] to-[#C9A45C] bg-clip-text text-lg font-bold uppercase tracking-[0.22em] text-transparent md:text-2xl"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="h-2" />

          {/* Subtitle */}
          <div className="flex flex-wrap leading-none">
            {subtitle.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index + 20}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="font-['Cormorant_Garamond'] text-[10px] italic tracking-[0.45em] text-[#E2C88B]/80 md:text-xs"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedBrandLogo;