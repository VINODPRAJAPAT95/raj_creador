import { motion } from "framer-motion";
import logo from "../assets/rajpal logo PNG.png";

const AnimatedBrandLogo = ({ 
  size = "h-11 w-36 sm:h-14 sm:w-44", 
  showText = true 
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">

      {/* Logo */}
      <motion.div
        className={`relative ${size} flex-shrink-0`}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={logo}
          alt="Rajpal Products"
          className="h-full w-full object-contain drop-shadow-sm"
        />
      </motion.div>

      {/* Text Section */}
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight">

          {/* RAJPAL PRODUCTS - Premium Style */}
          <div className="flex items-baseline gap-1.5">
            <span 
              className="text-[#E2C88B] text-lg sm:text-xl md:text-2xl font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              RAJPAL
            </span>
            <span 
              className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              PRODUCTS
            </span>
          </div>

          {/* PURELY DIVINE - Elegant Style */}
          <span 
            className="text-[#E2C88B] text-[10px] sm:text-xs md:text-sm tracking-[3px] uppercase font-medium mt-0.5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            PURELY DIVINE
          </span>
        </div>
      )}

      {/* Short version for mobile menu */}
      {!showText && (
        <div 
          className="text-white font-bold text-lg tracking-wider uppercase sm:hidden"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          RAJPAL
        </div>
      )}
    </div>
  );
};

export default AnimatedBrandLogo;