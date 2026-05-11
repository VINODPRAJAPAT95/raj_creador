import { motion } from "framer-motion";

const WebsiteLoader = () => (
  <div className="fixed inset-0 z-[100] grid place-items-center bg-[#fff8ec]">
    <div className="text-center">
      <motion.div
        className="mx-auto mb-4 h-20 w-20 rounded-full border-4 border-gold/40 border-t-maroon"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-xs uppercase tracking-[0.35em] text-maroon">RAJPAL PRODUCTS</p>
      <p className="mt-2 text-sm text-beige">Purely Divine</p>
    </div>
  </div>
);

export default WebsiteLoader;
