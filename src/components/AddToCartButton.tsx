'use client';

import { useState } from 'react';
import { BsBag } from 'react-icons/bs';

import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';

interface AddToCartButtonProps {
  producto: any;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ producto }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!user) {
      setError('Debes iniciar sesión');
      return;
    }
    setError(null);
    addToCart(producto);
  };

  return (
    <>
      {error && (
        <div className="mb-2 rounded bg-red-100 px-4 py-2 text-red-700">
          {error}
        </div>
      )}
      <button
        onClick={handleAddToCart}
        className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary px-5 py-3 text-primary"
        type="button"
      >
        <BsBag /> Agregar al carrito
      </button>
    </>
  );
};

export default AddToCartButton;
