import {
  Instagram,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hooks/useCart";

const whatsappNumber = "919999999999";
const instagramUrl = "https://www.instagram.com/rajpalproducts";

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  const subtotal = items.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + price * item.qty;
  }, 0);

  const message = encodeURIComponent(
    [
      "🛕 Namaste RAJPAL PRODUCTS,",
      "",
      "I want to place an order from website cart:",
      ...items.map(
        (item, i) =>
          `${i + 1}. ${item.name} | ${item.weight} | ${item.price} | Qty: ${
            item.qty
          }`
      ),
      "",
      `Subtotal: ₹${subtotal}`,
      "",
      "Please share final confirmation and delivery details.",
    ].join("\n")
  );

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col overflow-hidden bg-white shadow-[0_0_80px_rgba(0,0,0,0.18)] transition-transform duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="border-b border-gray-200 bg-gradient-to-r from-[#7A1020] to-[#4A0712] px-6 py-5 text-white">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
                <ShoppingBag size={20} />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-wide">
                  Shopping Cart
                </h2>

                <p className="text-xs text-white/70">
                  {totalItems} items added
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="grid grid-cols-3 border-b border-gray-100 bg-[#fffaf6] px-4 py-4">

          <div className="flex flex-col items-center gap-1 text-center">
            <ShieldCheck size={18} className="text-[#7A1020]" />
            <span className="text-[10px] font-medium text-gray-600">
              Secure
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <Truck size={18} className="text-[#7A1020]" />
            <span className="text-[10px] font-medium text-gray-600">
              Fast Delivery
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <ShoppingBag size={18} className="text-[#7A1020]" />
            <span className="text-[10px] font-medium text-gray-600">
              Premium
            </span>
          </div>
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto bg-[#fafafa] px-4 py-4">

          {items.length === 0 ? (
            <div className="mt-20 flex flex-col items-center justify-center text-center">

              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#7A1020]/5">
                <ShoppingBag size={42} className="text-[#7A1020]" />
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Your Cart is Empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Add premium spiritual products to continue your divine shopping
                experience.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              {items.map((item) => (
                <motion.article
                  layout
                  key={item.key}
                  className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg"
                >
                  <div className="flex gap-4">

                    {/* PRODUCT IMAGE */}
                    <div className="h-24 w-24 overflow-hidden rounded-2xl bg-[#fff8f0]">

                      <img
                        src={
                          item.image ||
                          "https://via.placeholder.com/150"
                        }
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col justify-between">

                      <div>
                        <h4 className="line-clamp-2 text-[15px] font-bold text-gray-800">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-xs font-medium text-gray-400">
                          {item.weight}
                        </p>

                        <p className="mt-2 text-lg font-extrabold text-[#7A1020]">
                          {item.price}
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="mt-3 flex items-center justify-between">

                        {/* QTY */}
                        <div className="flex items-center overflow-hidden rounded-full border border-gray-200">

                          <button
                            onClick={() =>
                              updateQty(item.key, item.qty - 1)
                            }
                            className="bg-gray-50 p-2 transition hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="min-w-[40px] text-center text-sm font-semibold">
                            {item.qty}
                          </span>

                          <button
                            onClick={() =>
                              updateQty(item.key, item.qty + 1)
                            }
                            className="bg-gray-50 p-2 transition hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-5">

            {/* PRICE */}
            <div className="mb-5 rounded-2xl bg-[#faf7f2] p-4">

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Total Items
                </span>

                <span className="font-semibold text-gray-700">
                  {totalItems}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-base font-medium text-gray-700">
                  Subtotal
                </span>

                <span className="text-2xl font-extrabold text-[#7A1020]">
                  ₹{subtotal}
                </span>
              </div>
            </div>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7A1020] to-[#4A0712] px-5 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>

            {/* INSTAGRAM */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#7A1020]/20 bg-white px-5 py-4 text-sm font-bold text-[#7A1020] transition hover:bg-[#fff8f4]"
            >
              <Instagram size={18} />
              Order on Instagram
            </a>

            {/* CLEAR */}
            <button
              onClick={clearCart}
              className="mt-4 w-full text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 transition hover:text-red-500"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
