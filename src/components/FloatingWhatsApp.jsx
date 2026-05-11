import { MessageCircle } from "lucide-react";
import { useCart } from "../hooks/useCart";

const FloatingWhatsApp = () => {
  const { setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gold p-4 text-white shadow-luxury transition hover:scale-105"
      aria-label="WhatsApp cart order"
    >
      <MessageCircle size={22} />
    </button>
  );
};

export default FloatingWhatsApp;
