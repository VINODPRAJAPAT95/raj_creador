import { ArrowLeftRight, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";
import { useCart } from "../hooks/useCart";
import AnimatedBrandLogo from "./AnimatedBrandLogo";
import MegaMenu from "./navigation/MegaMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [reverseMenu, setReverseMenu] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const orderedLinks = reverseMenu ? [...navLinks].reverse() : navLinks;

  return (
    <nav className="sticky top-10 z-40 border-b border-gold/25 bg-maroon text-white backdrop-blur-lg">
      <div className="group relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-gold-soft">
          <AnimatedBrandLogo />
        </Link>

        <div className="hidden items-center gap-5 lg:gap-8 md:flex">
          {orderedLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={
                item.label === "Categories"
                  ? "relative rounded-full bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-gold-soft transition after:absolute after:-bottom-1 after:left-2 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:bg-white/20 hover:text-white hover:after:w-[calc(100%-16px)]"
                  : "text-xs uppercase tracking-[0.22em] text-white/90 transition hover:text-white"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-gold/50 bg-white/10 p-2 text-gold-soft"
            onClick={() => setReverseMenu((v) => !v)}
            title="Reverse menu order"
          >
            <ArrowLeftRight size={16} />
          </button>
          <button
            className="relative rounded-full border border-gold/50 bg-white/10 p-2 text-gold-soft"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-gold px-1.5 text-[10px] text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <MobileMenu open={open} />
        <MegaMenu />
      </div>
    </nav>
  );
};

export default Navbar;
