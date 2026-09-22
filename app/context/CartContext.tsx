"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../../types/product";
import { CartItem } from "../../types/cart";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    setItems(JSON.parse(saved));
  }
  setIsLoaded(true);
}, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);


  function addToCart(product: Product) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

function removeFromCart(id: string) {
  setItems((prev) => prev.filter((item) => item.id !== id));
}

function updateQuantity(id: string, quantity: number) {
  if (quantity <= 0) {
    setItems((prev) => prev.filter((item) => item.id !== id));
    return;
  }
  setItems((prev) => 
 prev.map((item) => (item.id === id ? { ...item, quantity } : item)) 
);
}

function clearCart() {
  setItems([]);
}

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve essere usato dentro un CartProvider");
  }
  return context;
} 




