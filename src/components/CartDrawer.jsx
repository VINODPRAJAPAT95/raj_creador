import { Instagram, MessageCircle, Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "../hooks/useCart";

const whatsappNumber = "919999999999";
const instagramUrl = "https://www.instagram.com/rajpalproducts";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQty, removeFromCart, clearCart } = useCart();

  const message = encodeURIComponent(
    [
      "Namaste RAJPAL PRODUCTS,",
      "",
      "I want to place an order from website cart:",
      ...items.map(
        (item, i) =>
          `${i + 1}. ${item.name} | ${item.weight} | ${item.price} | Qty: ${item.qty}`
      ),
      "",
      "Please share final confirmation and delivery details.",
    ].join("\n")
  );

  return (
    <>
      {isCartOpen && (
        <button className="fixed inset-0 z-50 bg-black/20" onClick={() => setIsCartOpen(false)} />
      )}
      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-full max-w-md border-l border-gold/30 bg-[#fffdf8] p-5 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gold">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[62vh] space-y-3 overflow-y-auto pr-1">
          {items.length === 0 && (
            <p className="rounded-xl border border-silver/60 bg-white p-4 text-sm text-beige">
              Cart is empty. Add products to order via WhatsApp or Instagram.
            </p>
          )}
          {items.map((item) => (
            <article key={item.key} className="rounded-xl border border-silver/60 bg-white p-3">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-xs text-beige">{item.weight}</p>
              <p className="text-sm text-gold-soft">{item.price}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.key, item.qty - 1)}
                    className="rounded-full border border-gold/30 p-1"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.key, item.qty + 1)}
                    className="rounded-full border border-gold/30 p-1"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.key)} className="text-red-500">
                  <Trash2 size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} /> Order on WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-3 text-sm font-semibold text-gold"
          >
            <Instagram size={16} /> Order on Instagram
          </a>
          <button
            onClick={clearCart}
            className="w-full rounded-full border border-silver/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-beige"
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
