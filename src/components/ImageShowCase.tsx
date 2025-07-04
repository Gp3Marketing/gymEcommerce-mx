'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { pathOr } from 'ramda';
import type { FC } from 'react';
import React, { useState } from 'react';

import LikeButton from './LikeButton';

interface ImageShowCaseProps {
  shots: StaticImageData[];
  product: any;
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ shots, product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[720px]">
        <LikeButton
          className="absolute right-2 top-2"
          product={{
            ...product,
            id: product.id || product.slug,
          }}
        />
        <Image
          src={pathOr('', [activeImageIndex], shots)}
          alt="shoe image"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {shots.map((shot, index) => (
          <div
            key={shot.src}
            className={`${
              activeImageIndex === index ? 'border-2 border-primary' : ''
            } h-[100px] overflow-hidden rounded-lg`}
          >
            <button
              className="size-full"
              type="button"
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={shot}
                alt="shoe image"
                className="size-full object-cover object-center"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowCase;
