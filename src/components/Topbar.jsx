import {
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";

import { motion } from "framer-motion";
import { topbarText } from "../data/siteData";

const icons = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    icon: Instagram,
    label: "Instagram",
  },
  {
    icon: MapPin,
    label: "Location",
  },
  {
    icon: Route,
    label: "Directions",
  },
  {
    icon: Phone,
    label: "Call",
  },
];

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 overflow-hidden border-b border-[#7a1020]/20 bg-white/40 backdrop-blur-2xl">

      {/* GOLD GLOW */}
      <div className="absolute left-1/2 top-0 h-16 w-72 -translate-x-1/2 rounded-full bg-[#E2C88B]/25 blur-3xl" />

      {/* TOPBAR */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">

          {/* SINCE BADGE */}
          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="hidden rounded-full bg-gradient-to-r from-[#7a1020] to-[#4a0712] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F5D68A] shadow-[0_0_20px_rgba(122,16,32,0.35)] md:block"
          >
            Since 1981
          </motion.div>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden text-xs font-medium uppercase tracking-[0.25em] text-[#7a1020] lg:block"
          >
            {topbarText}
          </motion.p>
        </div>

        {/* CENTER SCROLLING TEXT */}
        <div className="hidden flex-1 overflow-hidden md:block">
          <motion.div
            animate={{
              x: ["100%", "-100%"],
            }}
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

          {/* PHONE NUMBER */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="hidden items-center gap-2 rounded-full border border-[#7a1020]/20 bg-white/60 px-4 py-2 text-xs font-medium text-[#7a1020] shadow-sm backdrop-blur-xl lg:flex"
          >
            <Phone size={13} />
            <span>+91 99306 70044</span>
          </motion.div>

          {/* ICONS */}
          <div className="flex items-center gap-2">
            {icons.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={i}
                  title={item.label}
                  whileHover={{
                    scale: 1.12,
                    rotate: 6,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                  }}
                  className="group relative rounded-full border border-[#7a1020]/40 bg-gradient-to-br from-[#7a1020] to-[#4a0712] p-2 text-[#F5D68A] shadow-[0_0_15px_rgba(122,16,32,0.35)] transition duration-300 hover:shadow-[0_0_22px_rgba(122,16,32,0.65)]"
                >
                  {/* ICON */}
                  <Icon size={15} />

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-full bg-[#E2C88B]/10 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;