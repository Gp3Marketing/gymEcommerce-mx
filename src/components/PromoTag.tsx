import React from "react";

import { promotionTag } from "@/data/content";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";

const PromoTag = () => {
  return (
    <div className='relative h-full space-y-10 rounded-2xl bg-primary bg-[url("/OFF.webp")] bg-cover bg-center bg-no-repeat p-5 text-white'>
      <div className="absolute inset-0 rounded-2xl bg-black/50" />
      <div className="relative z-10">
        <h1
          className="text-[40px] font-medium mb-20 uppercase"
          style={{ lineHeight: "1em" }}
        >
          {promotionTag.heading}
        </h1>
        <ButtonSecondary
          className="bg-white text-primary"
          sizeClass="px-5 py-4"
        >
          Conocer Más
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default PromoTag;
