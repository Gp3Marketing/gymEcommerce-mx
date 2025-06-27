'use client';

import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';

import { promotionTag } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const promoImages = [
  { src: '/OFF.webp', alt: 'Promo OFF' },
  { src: '/OFF2.webp', alt: 'Promo OFF2' },
  { src: '/PreEntreno.webp', alt: 'Promo PreEntreno' },
];

const PromoTag = () => {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl text-white">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: false,
        }}
        className="absolute inset-0 z-0"
      >
        {promoImages.map((img) => (
          <SplideSlide key={img.src}>
            <div
              className="h-[420px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img.src})` }}
              aria-label={img.alt}
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="absolute inset-0 z-10 bg-black/75" />

      <div className="absolute inset-0 z-30 flex flex-col justify-between p-8">
        <h1 className="text-[32px] font-medium uppercase leading-tight md:text-[40px]">
          {promotionTag.title}
        </h1>
        <div>
          <ButtonSecondary
            className="bg-white text-primary"
            sizeClass="px-5 py-4"
          >
            Conocer Más
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default PromoTag;
