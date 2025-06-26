'use client';

import { BsBag } from 'react-icons/bs';

import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';

interface AddToCartButtonProps {
  producto: any;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ producto }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!user) {
      alert('Debes iniciar sesión');
      return;
    }
    console.log('Producto a agregar al carrito:', producto);
    addToCart(producto);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex w-full items-center justify-center gap-2
        rounded-full border-2 border-primary px-5 py-3 text-primary"
      type="button"
    >
      <BsBag /> Agregar al carrito
    </button>
  );
};

export default AddToCartButton;
