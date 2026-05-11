import { Link } from "react-router-dom";
import { categories } from "../../data/siteData";
import { motion } from "framer-motion";

const toAnchor = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const MegaMenu = () => (
  <div
    className="
      absolute left-0 top-full z-50
      invisible opacity-0
      w-full
      border-y border-[#800000]/20
      bg-white/95
      p-8
      backdrop-blur-xl
      transition-all duration-300
      group-hover:visible
      group-hover:opacity-100
    "
  >
    {/* GOLD GLOW */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/5 via-transparent to-[#E2C88B]/10" />

    <div className="relative mx-auto grid max-w-7xl grid-cols-4 gap-6">

      {categories.map((category, index) => (
        <motion.div
          key={category.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          className="
            group/card
            rounded-2xl
            border border-[#800000]/10
            bg-white/70
            p-5
            shadow-lg
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#800000]/30
            hover:shadow-[0_0_25px_rgba(128,0,0,0.15)]
          "
        >

          {/* CATEGORY TITLE */}
          <h4
            className="
              mb-4
              border-b border-[#E2C88B]/20
              pb-3
              text-sm
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#800000]
            "
          >
            {category.name}
          </h4>

          {/* SUBCATEGORIES */}
          <div className="space-y-2">
            {category.subcategories.map((sub) => (
              <Link
                key={sub}
                to={`/categories/${category.slug}#${toAnchor(sub)}`}
                className="
                  block
                  text-sm
                  text-gray-600
                  transition-all duration-300
                  hover:translate-x-1
                  hover:text-[#800000]
                "
              >
                {sub}
              </Link>
            ))}
          </div>

          {/* VIEW COLLECTION */}
          <Link
            to={`/categories/${category.slug}`}
            className="
              mt-5
              inline-flex
              items-center
              rounded-full
              bg-gradient-to-r
              from-[#800000]
              to-[#5c0000]
              px-4
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              transition-all duration-300
              hover:scale-105
            "
          >
            View Collection
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MegaMenu;
