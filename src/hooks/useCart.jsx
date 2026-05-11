import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

const getKey = (product) => `${product.name}-${product.weight}-${product.price}`;

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const key = getKey(product);
    setItems((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { key, ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (key, nextQty) => {
    if (nextQty <= 0) {
      setItems((prev) => prev.filter((item) => item.key !== key));
      return;
    }
    setItems((prev) => prev.map((item) => (item.key === key ? { ...item, qty: nextQty } : item)));
  };

  const clearCart = () => setItems([]);
  const removeFromCart = (key) => setItems((prev) => prev.filter((item) => item.key !== key));

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
    }),
    [items, itemCount, isCartOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
