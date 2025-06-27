'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { LuInfo } from 'react-icons/lu';
import { MdStar } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

import ImageShowCase from '@/components/ImageShowCase';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
// import ShoeSizeButton from "@/components/ShoeSizeButton";
// import { shoeSizes } from "@/data/content";
import nike_profile from '@/images/nike_profile.png';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

interface SectionProductHeaderProps {
  shots: StaticImageData[];
  shoeName: string;
  prevPrice: number;
  currentPrice: number;
  rating: number;
  pieces_sold: number;
  reviews: number;
  coverImage: string;
  slug: string;
  shoeCategory?: string;
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  shots,
  shoeName,
  prevPrice,
  currentPrice,
  rating,
  pieces_sold,
  reviews,
  coverImage,
  slug,
  shoeCategory,
}) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [error, setError] = useState<string | null>(null);

  const producto = {
    id: slug,
    nombreProducto: shoeName,
    coverImage,
    precio: currentPrice,
    cantidad: 1,
    shoeCategory,
    rating,
  };

  const handleAddToCart = () => {
    if (!user) {
      setError('Debes iniciar sesión para agregar productos al carrito.');
      return;
    }
    setError(null);
    addToCart(producto);
  };

  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-1/2">
        <ImageShowCase shots={shots} product={producto} />
      </div>

      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="new arrival!">
          {shoeName}
        </Heading>

        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <ButtonCircle3
              className="overflow-hidden border border-neutral-400"
              size="w-11 h-11"
            >
              <Image
                src={nike_profile}
                alt="nike_profile"
                className="size-full object-cover"
              />
            </ButtonCircle3>
            <span className="font-medium">FITMEX STORE</span>
            <PiSealCheckFill className="text-blue-600" />
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <div className="flex items-center gap-1">
            <MdStar className="text-yellow-400" />
            <p className="text-sm">
              {rating}{' '}
              <span className="text-neutral-500">{`(${reviews} Reviews)`}</span>
            </p>
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <p className="text-neutral-500">{`${pieces_sold} items sold`}</p>
        </div>

        <div className="mb-5 space-y-1">
          <p className="text-neutral-500 line-through">${prevPrice}</p>
          <h1 className="text-3xl font-medium">${currentPrice}</h1>
        </div>

        <div className="mb-5 flex items-end justify-between">
          <p className="text-xl">Available sizes</p>
          <p className="flex items-center gap-1 text-sm text-neutral-500">
            Size guide <LuInfo />
          </p>
        </div>

        {/* <div className="grid grid-cols-3 gap-3">
          {shoeSizes.map((size) => (
            <ShoeSizeButton key={size} size={size} />
          ))}
        </div> */}

        {error && (
          <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
            {error}
          </div>
        )}

        <div className="mt-5 flex items-center gap-5">
          <ButtonPrimary className="w-full">Buy Now</ButtonPrimary>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded border-2 border-primary py-2 text-primary"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
