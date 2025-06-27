'use client';

import ProductCard from '@/components/ProductCard';
import { shoes } from '@/data/content';

const getPromoProducts = () =>
  shoes.filter(
    (product) =>
      product.previousPrice && product.currentPrice < product.previousPrice,
  );

const PromocionesPage = () => {
  const promos = getPromoProducts();

  return (
    <div className="container py-10">
      <h2 className="mb-8 text-3xl font-bold">
        Descubre Descuentos Irresistibles
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
