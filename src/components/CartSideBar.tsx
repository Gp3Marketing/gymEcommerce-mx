'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaBagShopping } from 'react-icons/fa6';
import { MdClose, MdStar } from 'react-icons/md';

import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

import LikeButton from './LikeButton';

const CartSideBar: React.FC = () => {
  const [isVisable, setIsVisable] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user } = useAuth();

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderProduct = (item: any) => {
    const { nombreProducto, coverImage, precio, id, shoeCategory, cantidad } =
      item;
    return (
      <div key={id} className="flex py-5 last:pb-0">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            fill
            src={coverImage}
            alt={nombreProducto}
            className="size-full object-contain object-center"
          />
          <Link
            onClick={handleCloseMenu}
            className="absolute inset-0"
            href={`/products/${id}`}
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-medium ">
                  <Link onClick={handleCloseMenu} href={`/products/${id}`}>
                    {nombreProducto}
                  </Link>
                </h3>
                <span className="my-1 text-sm text-neutral-500">
                  {shoeCategory}
                </span>
                <div className="flex items-center gap-1">
                  <MdStar className="text-yellow-400" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
              <span className=" font-medium">${precio}</span>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div className="flex items-center gap-3">
              <LikeButton
                product={{
                  ...item,
                  id: item.id || item.productId || item.slug,
                }}
              />
              <AiOutlineDelete
                className="cursor-pointer text-2xl"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.cantidad - 1))
                }
                className="flex size-8 items-center justify-center rounded-full border border-neutral-300 text-lg font-bold"
                disabled={item.cantidad <= 1}
              >
                -
              </button>
              <span className="mx-2">{cantidad}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                className="flex size-8 items-center justify-center rounded-full border border-neutral-300 text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20">
                <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                  <div className="relative h-screen bg-white">
                    <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                          Carro de Compra
                        </h3>
                        <ButtonCircle3 onClick={handleCloseMenu}>
                          <MdClose className="text-2xl" />
                        </ButtonCircle3>
                      </div>
                      {!user ? (
                        <div className="py-8 text-center text-neutral-500">
                          Debes iniciar sesión para ver los productos que has
                          añadido a tu carrito.
                        </div>
                      ) : (
                        <>
                          {cart.length === 0 && (
                            <div className="py-8 text-center text-neutral-500">
                              Todavía no tienes productos agregados
                            </div>
                          )}
                          <div className="divide-y divide-neutral-300">
                            {cart.map((item) => renderProduct(item))}
                          </div>
                        </>
                      )}
                    </div>
                    {!user ? (
                      <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
                        <ButtonPrimary
                          href="/login"
                          onClick={handleCloseMenu}
                          className="w-full"
                        >
                          Ingresar sesión
                        </ButtonPrimary>
                      </div>
                    ) : (
                      <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
                        <p className="flex justify-between">
                          <span>
                            <span className="font-medium">Subtotal</span>
                            <span className="block text-sm text-neutral-500">
                              Los gastos de envío e impuestos se calculan al
                              finalizar la compra.
                            </span>
                          </span>
                          <span className="text-xl font-medium">
                            $
                            {cart.reduce(
                              (acc, item) =>
                                acc + item.precio * (item.cantidad || 1),
                              0,
                            )}
                          </span>
                        </p>
                        <div className="mt-5 flex items-center gap-5">
                          <ButtonPrimary
                            href="/checkout"
                            onClick={handleCloseMenu}
                            className="w-full flex-1"
                          >
                            Checkout
                          </ButtonPrimary>
                          <ButtonSecondary
                            onClick={handleCloseMenu}
                            href="/cart"
                            className="w-full flex-1 border-2 border-primary text-primary"
                          >
                            Ver carrito
                          </ButtonSecondary>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="mx-5 flex items-center gap-1 rounded-full bg-neutral-100 p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <FaBagShopping className="text-2xl" />
        <span className="hidden text-sm lg:block">
          {cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)} items
        </span>
      </button>
      {renderContent()}
    </>
  );
};

export default CartSideBar;
