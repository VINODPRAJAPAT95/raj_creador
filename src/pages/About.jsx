import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const About = () => (
  <section
    className="relative overflow-hidden py-20"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/traditional-shubh-deepavali-yellow-background-with-text-space-diya-design_1017-47541.jpg?semt=ais_hybrid&w=740&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative mx-auto max-w-7xl px-4">
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          eyebrow="About"
          title="RAJPAL PRODUCTS — PURELY DIVINE"
        />
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass-card mt-10 rounded-[32px] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Fancy Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 font-serif text-4xl font-bold tracking-wide text-[#E2C88B]"
        >
          Spreading Fragrance Since 1981
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-sans text-lg leading-9 text-black/90"
        >
          Since 1981, our journey has centered around fragrance craftsmanship,
          spiritual purity, and premium category innovation. We blend timeless
          traditions with modern luxury to create divine aromatic experiences
          that inspire peace, positivity, and devotion.
        </motion.p>

        {/* Animated Stats */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { number: "45+", label: "Years Legacy" },
            { number: "500+", label: "Products" },
            { number: "10K+", label: "Happy Customers" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <h3 className="font-serif text-4xl font-bold text-[#E2C88B]">
                {item.number}
              </h3>
              <p className="mt-2 text-white/80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
