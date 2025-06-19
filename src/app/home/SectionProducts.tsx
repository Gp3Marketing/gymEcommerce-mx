"use client";

import React, { useState } from "react";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import { productsSection, shoes, filterShoes } from "@/data/content";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading/Heading";

const SectionProducts = () => {
  const [activeFilters, setActiveFilters] = useState(["Marca", "Reviews", "Tipo"]);
  const filteredShoes = filterShoes(shoes, activeFilters);

  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>
      <Filter onFilter={setActiveFilters} />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {filteredShoes.map((shoe) => (
          <ProductCard
            key={shoe.shoeName}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View Mores</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionProducts;