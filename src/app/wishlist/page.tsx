'use client';

import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

import { useWishlist } from '@/hooks/useWishlist';

import WishlistProductCard from './WishlistProductCard';

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container py-16 lg:pb-28 lg:pt-20">
      <div className="mb-14">
        <h2 className="block text-2xl font-medium sm:text-3xl lg:text-4xl">
          PRODUCTOS DE INTERÉS
        </h2>
      </div>

      <hr className="my-10 border-neutral-300 xl:my-12" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {wishlist.length === 0 ? (
            <div className="text-gray-500 col-span-full text-left">
              No tienes productos en tu lista de interes.
            </div>
          ) : (
            wishlist.map((product) => (
              <WishlistProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-28">
            <Splide
              options={{
                type: 'loop',
                autoplay: true,
                interval: 5000,
                arrows: false,
                pagination: false,
                height: 600,
              }}
              aria-label="Publicidad carrusel"
              className="overflow-hidden rounded-xl"
            >
              <SplideSlide>
                <Image
                  src="/OFF.webp"
                  alt="Proteina Whey - Vainilla Crema"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/OFF2.webp"
                  alt="Proteina Whey - Vainilla Crema"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/PreEntreno.webp"
                  alt="Pre Entreno - Stark"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
