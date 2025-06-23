"use client";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import { useState } from "react";

interface WishlistProductCardProps {
  product: any;
}

const WishlistProductCard: React.FC<WishlistProductCardProps> = ({ product }) => {
  const [showFull, setShowFull] = useState(false);
  const overview = product.overview || "";
  const shortOverview = overview.length > 100 ? overview.slice(0, 100) + "..." : overview;

  return (
    <div className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white shadow p-4 h-full">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={product.coverImage}
          alt={product.shoeName || product.nombreProducto}
          fill
          className="object-contain rounded-xl"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <LikeButton className="absolute right-2 top-2" product={product} />
      </div>
      <Link href={`/products/${product.slug || product.id}`}>
        <h3 className="font-bold text-lg mb-1">{product.shoeName || product.nombreProducto}</h3>
      </Link>
      <div className="text-sm text-neutral-500 mb-1">{product.shoeCategory}</div>
      <div className="text-primary font-semibold text-lg mb-2">${product.currentPrice || product.precio}</div>
      <div className="text-xs text-neutral-700 mb-2">
        {showFull ? overview : shortOverview}
        {overview.length > 100 && (
          <button
            className="ml-1 text-primary underline"
            onClick={() => setShowFull((v) => !v)}
          >
            {showFull ? "Leer menos" : "Leer más"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistProductCard;