'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SectionHeroSlider() {
  const slides = [
    {
      title: 'Energía, fuerza y recuperación',
      description: 'Todo lo que necesitas para alcanzar tus metas.',
      image: '/images/products/hero_bg_1_1.png',
    },
    {
      title: 'Encuentra el suplemento perfecto',
      description: 'Potencia tu rendimiento con nuestras fórmulas avanzadas.',
      image: '/images/products/hero_bg_1_2.png',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="mb-20 h-[80vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex size-full items-center justify-between bg-cover bg-center px-10"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="max-w-xl rounded-xl bg-black bg-opacity-60 p-8 text-white">
                <h2 className="mb-4 text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SectionHeroSlider;
