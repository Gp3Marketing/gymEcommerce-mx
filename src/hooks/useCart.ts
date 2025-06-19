import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { addToCart, removeFromCart, subscribeToCart } from "@/utils/cartUtils";

export interface CartItem {
  id: string;
  cantidad: number;
  precio: number;
  nombreProducto: string;
  // ...otros campos que necesites (nombre, precio, etc.)
}

export function useCart() {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }
    setLoading(true);
    const unsubscribe = subscribeToCart(user.uid, (items) => {
      setCart(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const handleAddToCart = async (item: CartItem) => {
    if (!user) return;
    await addToCart(user.uid, item);
  };

  const handleRemoveFromCart = async (itemId: string) => {
    if (!user) return;
    await removeFromCart(user.uid, itemId);
  };

  return {
    cart,
    loading,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
  };
}