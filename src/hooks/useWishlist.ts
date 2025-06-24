"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { addToWishlist, removeFromWishlist, subscribeToWishlist } from "@/utils/wishlistUtils";

export function useWishlist() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      setWishlist([]);
      return;
    }
    const unsub = subscribeToWishlist(user.uid, setWishlist);
    return () => unsub();
  }, [user]);

  const add = async (product: any) => {
    if (!user) return;
    await addToWishlist(user.uid, product);
  };

  const remove = async (productId: string) => {
    if (!user) return;
    await removeFromWishlist(user.uid, productId);
  };

  const isInWishlist = (productId: string) => wishlist.some(p => p.id === productId);

  return { wishlist, add, remove, isInWishlist };
}