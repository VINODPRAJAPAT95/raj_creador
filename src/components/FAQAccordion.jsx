import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-yellow-200/20 bg-gradient-to-br from-[#fff8ec] via-[#fff4df] to-[#fff0d6] p-6 md:p-10 shadow-[0_20px_80px_rgba(255,180,0,0.15)]">

      {/* ✨ GOLDEN GLOW */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-300/20 blur-3xl" />

      {/* 🌟 BACKGROUND AGARBATTI IMAGE */}
      <motion.img
        animate={{
          x: [0, 30, 0],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1200&q=80"
        alt="agarbatti"
        className="absolute left-0 top-0 h-full w-full object-cover opacity-[0.06]"
      />

      {/* 🪔 FLOATING DIYA */}
      <motion.img
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        src="https://cdn-icons-png.flaticon.com/512/4474/4474859.png"
        alt="diya"
        className="absolute bottom-10 left-10 w-20 opacity-30"
      />

      {/* 🌿 FLOATING INCENSE */}
      <motion.img
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        src="https://cdn-icons-png.flaticon.com/512/2933/2933911.png"
        alt="incense"
        className="absolute right-10 top-10 w-24 opacity-20"
      />

      {/* 🌟 HEADER */}
      <div className="relative mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
            Divine Support
          </p>

          <h2 className="text-4xl font-black text-[#3b1d0f] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500" />
        </motion.div>
      </div>

      {/* FAQ ITEMS */}
      <div className="relative mx-auto max-w-4xl space-y-5">

        {items.map((item, i) => {
          const isOpen = active === i;

          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
              }}
              className={`
                overflow-hidden rounded-3xl border backdrop-blur-xl
                transition-all duration-500
                ${
                  isOpen
                    ? "border-yellow-300 bg-white/90 shadow-[0_10px_40px_rgba(255,180,0,0.25)]"
                    : "border-yellow-100 bg-white/60 hover:bg-white/80"
                }
              `}
            >

              {/* QUESTION */}
              <button
                onClick={() => setActive(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <div className="flex items-start gap-4">

                  {/* NUMBER */}
                  <div
                    className={`
                      flex h-12 w-12 items-center justify-center rounded-2xl
                      font-bold transition-all duration-300
                      ${
                        isOpen
                          ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    0{i + 1}
                  </div>

                  {/* TITLE */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#3b1d0f] md:text-xl">
                      {item.q}
                    </h3>

                    <p className="mt-1 text-sm text-[#8c6a43]">
                      Click to explore answer
                    </p>
                  </div>
                </div>

                {/* ICON */}
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    rounded-full p-2
                    ${
                      isOpen
                        ? "bg-yellow-400 text-white"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-[88px]">
                      <div className="rounded-2xl border border-yellow-100 bg-gradient-to-br from-yellow-50 to-white p-5">
                        <p className="leading-8 text-[#5a4634]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>

      {/* ✨ BOTTOM GLOW */}
      <div className="absolute bottom-0 left-1/2 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-200/20 blur-3xl" />
    </section>
  );
};

export default FAQAccordion;