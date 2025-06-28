import { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import {
  addToCart,
  clearUserCart,
  removeFromCart,
  subscribeToCart,
  updateCartItemQuantity,
} from '@/utils/cartUtils';

export interface CartItem {
  id: string;
  cantidad: number;
  precio: number;
  nombreProducto: string;
  slug?: string;
}

export function useCart() {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setCart([]);
      return undefined;
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

  const handleUpdateQuantity = async (itemId: string, cantidad: number) => {
    if (!user) return;
    await updateCartItemQuantity(user.uid, itemId, cantidad);
  };

  const handleClearCart = async () => {
    if (!user) return;
    await clearUserCart(user.uid);
    setCart([]);
  };

  return {
    cart,
    loading,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
  };
}
