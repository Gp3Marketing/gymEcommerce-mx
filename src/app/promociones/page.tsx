"use client";
import { shoes } from "@/data/content";
import ProductCard from "@/components/ProductCard";

const getPromoProducts = () =>
  shoes.filter(
    (product) =>
      product.previousPrice && product.currentPrice < product.previousPrice
  );

const PromocionesPage = () => {
  const promos = getPromoProducts();

  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold mb-8">Descubre Descuentos Irresistibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {promos.length === 0 ? (
          <div>No hay productos en promoción actualmente.</div>
        ) : (
          promos.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default PromocionesPage;