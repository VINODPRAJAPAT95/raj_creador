import {
  Menu,
  ShoppingCart,
  X,
  House,
  LayoutGrid,
  Info,
  HelpCircle,
  Phone,
} from "lucide-react";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";
import { useCart } from "../hooks/useCart";
import AnimatedBrandLogo from "./AnimatedBrandLogo";
import MegaMenu from "./navigation/MegaMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { itemCount, setIsCartOpen } = useCart();

  const orderedLinks = navLinks;

  // ICONS
  const navIcons = {
    Home: <House size={14} />,
    Categories: <LayoutGrid size={14} />,
    About: <Info size={14} />,
    FAQs: <HelpCircle size={14} />,
    Contact: <Phone size={14} />,
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E2C88B]/20 bg-[#5C0000] text-white">

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-[0.18em] text-[#F5D98F]"
        >
          <AnimatedBrandLogo />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-5 lg:gap-8 md:flex">

          {orderedLinks.map((item) => {

            // CATEGORY MENU
            if (item.label === "Categories") {
              return (
                <div key={item.path} className="relative group">

                  <NavLink
                    to={item.path}
                    className="
                      flex items-center gap-2
                      rounded-full  px-4 py-2
                      text-xs uppercase tracking-[0.22em]
                      text-[#fffefc]
                      transition-all duration-300
                      hover: hover:text-[#F5D98F]
                    "
                  >
                    {navIcons[item.label]}
                    {item.label}
                  </NavLink>

                  {/* MEGA MENU */}
                  <div
                    className="
                      absolute left-1/2 top-full mt-4
                      w-[900px]
                      -translate-x-1/2
                      opacity-0 invisible
                      group-hover:opacity-100
                      group-hover:visible
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
                  flex items-center gap-2
                  text-xs uppercase tracking-[0.22em]
                  text-white/90
                  transition-all duration-300
                  hover:text-[#F5D98F]
                "
              >
                {navIcons[item.label]}
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* AMAZON STYLE CART */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="
              relative flex items-center gap-2
              rounded-full border border-[#E2C88B]/40
              bg-white/10
              px-4 py-2
              transition-all duration-300
              hover:bg-[#E2C88B]
              hover:text-[#5C0000]
            "
          >
            {/* COUNT */}
            {itemCount > 0 && (
              <span
                className="
                  absolute -top-2 left-5
                  flex h-5 min-w-[20px]
                  items-center justify-center
                  rounded-full bg-[#FFB703]
                  px-1 text-[10px]
                  font-bold text-black
                "
              >
                {itemCount}
              </span>
            )}

            <ShoppingCart size={20} />

            <span className="hidden text-xs font-semibold uppercase tracking-[0.15em] sm:block">
              Cart
            </span>
          </button>

          {/* MOBILE MENU */}
          <button
            className="
              rounded-full border border-white/20
              bg-white/10 p-2 md:hidden
            "
            onClick={() => setOpen((v) => !v)}
          >
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