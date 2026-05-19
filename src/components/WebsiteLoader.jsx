import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const poojaItems = ["🌸", "🪔", "✨", "🌺", "🪷"];

const WebsiteLoader = () => {
  const [hide, setHide] = useState(false);

  // AUTO HIDE
  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] overflow-hidden bg-[#0f0604]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7a1020]/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#c8a96b]/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7a1020]/10 blur-[120px]" />
      </div>

      {/* FALLING POOJA ITEMS */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -120,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-2xl md:text-3xl"
        >
          {poojaItems[Math.floor(Math.random() * poojaItems.length)]}
        </motion.div>
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">

        {/* SPIN RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#c8a96b]/20"
        >
          {/* INNER GLOW */}
          <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-[#7a1020] to-[#2b0610] shadow-[0_0_60px_rgba(122,16,32,0.6)]" />

          {/* GOLD RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-32 w-32 rounded-full border-[3px] border-transparent border-t-[#c8a96b] border-r-[#c8a96b]/70"
          />

          {/* OM SYMBOL */}
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="relative z-10 text-5xl text-[#f7d48b]"
          >
            ॐ
          </motion.div>
        </motion.div>

        {/* BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-gradient-to-r from-[#f7d48b] via-[#fff2c9] to-[#c8a96b] bg-clip-text text-3xl font-black uppercase tracking-[0.45em] text-transparent md:text-5xl"
          style={{
            fontFamily: "'Cinzel', serif",
          }}
        >
          RAJPAL
        </motion.h1>

        {/* SUBTITLE */}
        <p className="mt-3 text-xs uppercase tracking-[0.7em] text-[#c8a96b]/70 md:text-sm">
          PURELY DIVINE
        </p>

        {/* LOADING BAR */}
        <div className="mt-10 h-[3px] w-64 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#f7d48b] to-transparent"
          />
        </div>

        {/* LOADING TEXT */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-5 text-sm tracking-[0.25em] text-white/40"
        >
          LOADING DIVINE EXPERIENCE...
        </motion.p>
      </div>

      {/* BOTTOM LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent"
      />
    </motion.div>
  );
};

export default WebsiteLoader;