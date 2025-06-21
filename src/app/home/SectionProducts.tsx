"use client";

import React, { useState } from "react";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import { productsSection, shoes, filterShoes } from "@/data/content";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading/Heading";

const PRODUCTS_PER_PAGE = 8;
const PRODUCTS_PER_ROW = 4;

const initialFilters = {
  type: "Tipo",
  discount: "Descuento",
  price: "Precios",
};

const SectionProducts = () => {
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [showMore, setShowMore] = useState(false);

  const getPriceRange = (price: string) => {
    if (price === "Menos de 100") return [0, 99];
    if (price === "100 - 500") return [100, 500];
    if (price === "500 - 1000") return [501, 1000];
    if (price === "Más de 1000") return [1001, Infinity];
    return [0, Infinity];
  };

  const filteredShoes = filterShoes(shoes, {
    type: activeFilters.type,
    discount: activeFilters.discount,
    priceRange: getPriceRange(activeFilters.price),
  });

  const visibleCount = showMore
    ? Math.min(PRODUCTS_PER_PAGE + PRODUCTS_PER_ROW, filteredShoes.length)
    : Math.min(PRODUCTS_PER_PAGE, filteredShoes.length);

  const visibleShoes = filteredShoes.slice(0, visibleCount);

  const handleToggle = () => setShowMore((prev) => !prev);

  const handleFilter = (selected: string[]) => {
    setActiveFilters({
      type: selected[0],
      discount: selected[1],
      price: selected[2],
    });
  };

  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>
      <Filter onFilter={handleFilter} />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {visibleShoes.map((shoe) => (
          <ProductCard
            key={shoe.shoeName}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>

      {filteredShoes.length > PRODUCTS_PER_PAGE && (
        <div className="mt-14 flex items-center justify-center">
          <ButtonPrimary onClick={handleToggle}>
            {showMore ? "Ver menos" : "Ver más"}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default SectionProducts;