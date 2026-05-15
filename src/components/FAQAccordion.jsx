import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* GOOGLE FONTS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="
          relative overflow-hidden
          rounded-[40px]
          border border-[#7a1020]/10
          bg-white
          px-6 py-16
          shadow-[0_20px_80px_rgba(122,16,32,0.08)]
          md:px-12
        "
        style={{
          fontFamily: "'Outfit', sans-serif",
        }}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffdfd] via-[#fff7f9] to-[#fffdfd]" />

        {/* TOP GLOW */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#7a1020]/5 blur-3xl" />

        {/* HEADER */}
        <div className="relative z-10 mb-14 text-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* SMALL TITLE */}
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.5em]
                text-[#7a1020]
                font-semibold
              "
            >
              Need Help
            </p>

            {/* MAIN TITLE */}
            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                text-[#3b0911]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Frequently Asked
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#7a1020]
                  via-[#a32739]
                  to-[#5c0d18]
                  bg-clip-text
                  text-transparent
                "
              >
                Questions
              </span>
            </h2>

            {/* SUB TITLE */}
            <h3
              className="
                mt-5
                text-2xl
                md:text-3xl
                tracking-wide
                bg-gradient-to-r
                from-[#7a1020]
                via-[#a32739]
                to-[#5c0d18]
                bg-clip-text
                text-transparent
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Premium Support Answers
            </h3>

            {/* LINE */}
            <div className="mx-auto mt-6 h-[3px] w-32 rounded-full bg-gradient-to-r from-[#7a1020] via-[#c2185b] to-[#7a1020]" />

          </motion.div>
        </div>

        {/* FAQ ITEMS */}
        <div className="relative z-10 mx-auto max-w-4xl space-y-5">

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
                  overflow-hidden
                  rounded-[30px]
                  border
                  transition-all duration-500
                  ${
                    isOpen
                      ? "border-[#7a1020]/20 bg-white shadow-[0_15px_50px_rgba(122,16,32,0.12)]"
                      : "border-[#7a1020]/10 bg-white/80 hover:border-[#7a1020]/20 hover:bg-white"
                  }
                `}
              >

                {/* QUESTION */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="
                    flex w-full items-center justify-between
                    px-6 py-6
                    text-left
                  "
                >

                  {/* LEFT */}
                  <div className="flex items-start gap-5">

                    {/* NUMBER */}
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        text-sm
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-[#7a1020] text-white shadow-lg"
                            : "bg-[#f8e9ee] text-[#7a1020]"
                        }
                      `}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      0{i + 1}
                    </div>

                    {/* TEXT */}
                    <div>

                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          text-[#3b0911]
                        "
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 700,
                        }}
                      >
                        {item.q}
                      </h3>

                      <p className="mt-2 text-sm text-[#8b5d68]">
                        Click to view answer
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
                      flex h-11 w-11 items-center justify-center
                      rounded-full
                      transition-all duration-300
                      ${
                        isOpen
                          ? "bg-[#7a1020] text-white"
                          : "bg-[#f8e9ee] text-[#7a1020]"
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
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
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

                      <div className="px-6 pb-6 pl-[96px]">

                        <div
                          className="
                            rounded-[24px]
                            border border-[#7a1020]/10
                            bg-[#fff9fb]
                            p-6
                          "
                        >

                          <p
                            className="
                              text-[16px]
                              leading-8
                              text-[#5b3340]
                            "
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 400,
                            }}
                          >
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

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-0 left-1/2 h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-[#7a1020]/5 blur-3xl" />

      </section>
    </>
  );
};

export default FAQAccordion;