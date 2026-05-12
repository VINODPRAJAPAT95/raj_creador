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
    <nav className="sticky top-10 z-50 border-b border-gold/25 bg-maroon text-white backdrop-blur-lg">

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-[0.18em] text-gold-soft"
        >
          <AnimatedBrandLogo />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-5 lg:gap-8 md:flex">

          {orderedLinks.map((item) => {

            // ⭐ ONLY Categories has MegaMenu
            if (item.label === "Categories") {
              return (
                <div key={item.path} className="relative group">

                  {/* LINK */}
                  <NavLink
                    to={item.path}
                    className="
                      rounded-full bg-white/10 px-3 py-1.5 text-xs uppercase
                      tracking-[0.22em] text-gold-soft transition
                      hover:bg-white/20 hover:text-white
                    "
                  >
                    {item.label}
                  </NavLink>

                  {/* MEGA MENU (CENTER FIXED) */}
                  <div
                    className="
                      absolute left-1/2 top-full mt-4
                      w-[900px]
                      -translate-x-1/2

                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible

                      transition-all duration-300 ease-out
                      z-[999]
                    "
                  >
                    <MegaMenu />
                  </div>

                </div>
              );
            }

            // NORMAL LINKS
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="
                  text-xs uppercase tracking-[0.22em]
                  text-white/90 transition hover:text-white
                "
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* Reverse menu */}
          <button
            className="rounded-full border border-gold/50 bg-white/10 p-2 text-gold-soft"
            onClick={() => setReverseMenu((v) => !v)}
            title="Reverse menu order"
          >
            <ArrowLeftRight size={16} />
          </button>

          {/* Cart */}
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

          {/* Mobile */}
          <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <MobileMenu open={open} setOpen={setOpen} />

      </div>
    </nav>
  );
};

export default Navbar;