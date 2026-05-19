import {
  Instagram,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import { topbarText } from "../data/siteData";

const icons = [
  {
    type: "whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    link: "https://wa.me/919930670044",
  },
  {
    icon: Instagram,
    label: "Instagram",
    color: "#E1306C",
    link: "https://instagram.com/rajpalproducts",
  },
  {
    icon: MapPin,
    label: "Location",
    color: "#7a1020",
    link: "#",
  },
];

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 overflow-hidden border-b border-[#7a1020]/20 bg-white/40 backdrop-blur-2xl">

      {/* GOLD GLOW */}
      <div className="absolute left-1/2 top-0 h-16 w-72 -translate-x-1/2 rounded-full bg-[#E2C88B]/25 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">

          {/* Since 1981 */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden rounded-full bg-gradient-to-r from-[#7a1020] to-[#4a0712] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F5D68A] shadow-[0_0_20px_rgba(122,16,32,0.35)] md:block"
          >
            Since 1981
          </motion.div>

          {/* Desktop Text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden text-xs font-medium uppercase tracking-[0.25em] text-[#7a1020] lg:block"
          >
            {topbarText}
          </motion.p>

          {/* Mobile Brand */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-full border border-[#7a1020]/20 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7a1020] shadow-sm backdrop-blur-xl lg:hidden"
          >
            Rajpal Divine
          </motion.div>
        </div>

        {/* CENTER TEXT */}
        <div className="hidden flex-1 overflow-hidden md:block">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap text-center text-[11px] font-medium uppercase tracking-[0.35em] text-[#7a1020]"
          >
            Premium Agarbatti • Luxury Dhoop • Spiritual Fragrance • Purely Divine
          </motion.div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="hidden items-center gap-2 rounded-full border border-[#7a1020]/20 bg-white/60 px-4 py-2 text-xs font-medium text-[#7a1020] shadow-sm backdrop-blur-xl lg:flex"
          >
            <span>+91 99306 70044</span>
          </motion.div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {icons.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  title={item.label}
                  whileHover={{ scale: 1.18, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 2.4 + i * 0.2,
                    repeat: Infinity,
                  }}
                  className="group relative flex items-center justify-center rounded-full p-2.5 shadow-md transition-all hover:shadow-xl"
                  style={{
                    backgroundColor: item.color,
                    color: "white",
                  }}
                >

                  {/* WhatsApp SVG */}
                  {item.type === "whatsapp" ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="h-4 w-4"
                    />
                  ) : (
                    <Icon size={16} />
                  )}

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;