'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import LikeButton from '@/components/LikeButton';

interface WishlistProductCardProps {
  product: any;
}

const WishlistProductCard: React.FC<WishlistProductCardProps> = ({
  product,
}) => {
  const [showFull, setShowFull] = useState(false);
  const overview = product.overview || '';
  const shortOverview =
    overview.length > 100 ? `${overview.slice(0, 100)}...` : overview;

  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow">
      <div className="relative mb-3 h-48 w-full">
        <Image
          src={product.coverImage}
          alt={product.shoeName || product.nombreProducto}
          fill
          className="rounded-xl object-contain"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <LikeButton className="absolute right-2 top-2" product={product} />
      </div>
      <Link href={`/products/${product.slug || product.id}`}>
        <h3 className="mb-1 text-lg font-bold">
          {product.shoeName || product.nombreProducto}
        </h3>
      </Link>
      <div className="mb-1 text-sm text-neutral-500">
        {product.shoeCategory}
      </div>
      <div className="mb-2 text-lg font-semibold text-primary">
        ${product.currentPrice || product.precio}
      </div>
      <div className="mb-2 text-xs text-neutral-700">
        {showFull ? overview : shortOverview}
        {overview.length > 100 && (
          <button
            type="button"
            className="ml-1 text-primary underline"
            onClick={() => setShowFull((v) => !v)}
          >
            {showFull ? 'Leer menos' : 'Leer más'}
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistProductCard;
