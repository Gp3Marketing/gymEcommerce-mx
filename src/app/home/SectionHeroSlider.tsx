"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SectionHeroSlider() {
  const slides = [
    {
      title: "Energía, fuerza y recuperación",
      description: "Todo lo que necesitas para alcanzar tus metas.",
      image: "/images/products/hero_bg_1_1.png",
    },
    {
      title: "Encuentra el suplemento perfecto",
      description: "Potencia tu rendimiento con nuestras fórmulas avanzadas.",
      image: "/images/products/hero_bg_1_2.png",
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
        className="w-full h-[80vh] mb-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-between px-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="max-w-xl bg-black bg-opacity-60 p-8 rounded-xl text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
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
