import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  X,
  Search,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";

import { productCatalog } from "../data/siteData";

const FloatingAI = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "✨ Welcome to RAJPAL PRODUCTS\nHow can I help you today?",
    },
  ]);

  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // ✅ Your WhatsApp Number
  const whatsappNumber = "919930670044";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // 🔍 Product Search
  const searchProducts = (query) => {
    const allProducts = [];

    Object.values(productCatalog).forEach((category) => {
      category.sections.forEach((section) => {
        section.products.forEach((product) => {
          allProducts.push(product);
        });
      });
    });

    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // 📲 Open WhatsApp
  const openWhatsApp = (text) => {
    const encoded = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encoded}`,
      "_blank"
    );
  };

  // 🤖 AI Reply
  const generateReply = (userMessage) => {
    const lower = userMessage.toLowerCase();

    const foundProducts = searchProducts(lower);

    if (foundProducts.length > 0) {
      return `🛍️ I found ${foundProducts.length} matching products:\n\n${foundProducts
        .slice(0, 4)
        .map(
          (p) =>
            `• ${p.name}\n₹ ${p.price}\n${p.weight}`
        )
        .join(
          "\n\n"
        )}\n\n📞 Order on WhatsApp`;
    }

    if (
      lower.includes("hi") ||
      lower.includes("hello") ||
      lower.includes("hey")
    ) {
      return `🙏 Welcome to RAJPAL PRODUCTS.\n\nWe offer premium agarbatti, dhoop sticks, pooja items, aroma products & soaps.\n\n📞 Order on WhatsApp`;
    }

    if (lower.includes("price")) {
      return `💰 Product prices depend on fragrance and pack size.\n\nTell me product name for exact price.\n\n📞 Order on WhatsApp`;
    }

    if (
      lower.includes("bulk") ||
      lower.includes("wholesale")
    ) {
      return `📦 Wholesale & distributor orders available.\n\n📞 Contact on WhatsApp`;
    }

    return `✨ Thank you for contacting RAJPAL PRODUCTS.\n\n📞 Please contact us on WhatsApp for order & inquiry.`;
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");
    setTyping(true);

    setTimeout(() => {
      const aiReply = {
        type: "ai",
        text: generateReply(currentMessage),
      };

      setMessages((prev) => [...prev, aiReply]);

      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating AI Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <Bot size={20} />

          <span className="hidden text-sm font-medium md:block">
            AI Assistant
          </span>

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-ping"></span>
        </button>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[430px] w-[320px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />

              <div>
                <h3 className="text-sm font-semibold">
                  Rajpal AI
                </h3>

                <p className="text-[11px] opacity-90">
                  Online Now
                </p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#181818] p-3">
            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "ml-auto bg-yellow-500 text-black"
                      : "bg-[#2a2a2a] text-white"
                  }`}
                >
                  <pre className="whitespace-pre-wrap font-sans">
                    {msg.text}
                  </pre>

                  {/* ✅ WhatsApp Button inside AI reply */}
                  {msg.type === "ai" && (
                    <button
                      onClick={() =>
                        openWhatsApp(
                          "Hello RAJPAL PRODUCTS, I want to place an order."
                        )
                      }
                      className="mt-3 flex items-center gap-2 rounded-full bg-green-500 px-3 py-2 text-xs font-medium text-white transition hover:scale-105"
                    >
                      <MessageCircle size={14} />
                      Chat on WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Typing */}
            {typing && (
              <div className="w-fit rounded-2xl bg-[#2a2a2a] px-4 py-2 text-sm text-white">
                <div className="flex gap-1">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce delay-100">
                    •
                  </span>
                  <span className="animate-bounce delay-200">
                    •
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Quick Buttons */}
          <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-[#151515] px-3 py-2">
            <button
              onClick={() => setMessage("Show incense sticks")}
              className="flex items-center gap-1 rounded-full bg-[#252525] px-3 py-1 text-xs text-white hover:bg-[#333]"
            >
              <Search size={12} />
              Incense
            </button>

            <button
              onClick={() => setMessage("Show soaps")}
              className="flex items-center gap-1 rounded-full bg-[#252525] px-3 py-1 text-xs text-white hover:bg-[#333]"
            >
              <ShoppingBag size={12} />
              Soaps
            </button>

            <button
              onClick={() => setMessage("Wholesale order")}
              className="rounded-full bg-[#252525] px-3 py-1 text-xs text-white hover:bg-[#333]"
            >
              Wholesale
            </button>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-white/10 bg-[#111111] p-3">
            <input
              type="text"
              placeholder="Ask products..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 rounded-full border border-white/10 bg-[#1d1d1d] px-4 py-2 text-sm text-white outline-none placeholder:text-gray-400"
            />

            <button
              onClick={sendMessage}
              className="rounded-full bg-yellow-500 p-2 text-black transition hover:scale-105"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAI;