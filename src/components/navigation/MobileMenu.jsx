import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, navLinks } from "../../data/siteData";

const toAnchor = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const MobileMenu = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-full border-b border-gold/25 bg-white/95 p-5 md:hidden">
      <div className="space-y-4">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="block text-sm uppercase tracking-[0.2em]">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-gold/20 p-4">
        <h4 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
          Categories <ChevronDown size={14} />
        </h4>
        <div className="grid grid-cols-1 gap-3 text-xs">
          {categories.map((cat) => (
            <div key={cat.slug} className="rounded-lg border border-silver/60 p-2">
              <Link to={`/categories/${cat.slug}`} className="text-beige hover:text-gold">
                {cat.name}
              </Link>
              <div className="mt-2 grid grid-cols-2 gap-1">
                {cat.subcategories.slice(0, 4).map((sub) => (
                  <Link
                    key={sub}
                    to={`/categories/${cat.slug}#${toAnchor(sub)}`}
                    className="text-[11px] text-cream/80 hover:text-maroon"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
