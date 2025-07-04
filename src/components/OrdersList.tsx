import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { shoes } from '@/data/content';
import type { Order } from '@/types/order';

const OrdersList: React.FC<{ orders: Order[] }> = ({ orders }) => (
  <main className="container py-16 lg:pb-28 lg:pt-20 ">
    <div className="mb-14">
      <h2 className="block text-2xl font-medium sm:text-3xl lg:text-4xl">
        Mis Pedidos
      </h2>
    </div>
    <hr className="my-10 border-neutral-300 xl:my-12" />
    {orders.length === 0 ? (
      <p>Aún no tienes adquirido productos, para procesar en tu pedido.</p>
    ) : (
      <ul>
        {orders.map((order) => (
          <li
            key={order.id}
            className="mb-12 flex flex-col border-b pb-8 lg:flex-row"
          >
            <div className="w-full divide-y divide-neutral-300 lg:w-3/5 xl:w-[55%]">
              {order.productos.map((prod) => {
                let producto = prod.slug
                  ? shoes.find((s) => s.slug === prod.slug)
                  : undefined;
                if (!producto) {
                  producto = shoes.find(
                    (s) =>
                      s.shoeName.trim().toLowerCase() ===
                      prod.nombreProducto.trim().toLowerCase(),
                  );
                }
                if (!producto)
                  return (
                    <div
                      key={prod.slug || prod.nombreProducto}
                      className="mb-2 text-red-500"
                    >
                      Producto no encontrado: {prod.nombreProducto}
                    </div>
                  );
                return (
                  <div
                    key={prod.slug || prod.nombreProducto}
                    className="flex py-5 last:pb-0"
                  >
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-xl md:size-40">
                      <Image
                        fill
                        src={producto.coverImage}
                        alt={producto.shoeName}
                        className="size-full object-contain object-center"
                      />
                      <Link
                        className="absolute inset-0"
                        href={`/products/${producto.slug}`}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="font-medium md:text-2xl ">
                              <Link href={`/products/${producto.slug}`}>
                                {producto.shoeName}
                              </Link>
                            </h3>
                            <div className="mb-1 text-sm text-neutral-500">
                              {producto.overview}
                            </div>
                          </div>
                          <span className="font-medium md:text-xl">
                            ${prod.precio}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex w-full items-end justify-between text-sm">
                        <div>
                          <span className="text-neutral-500">
                            Cantidad: {prod.cantidad}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="ml-20 flex-1 px-10 py-5">
              <div className="sticky top-28">
                <h3 className="text-2xl font-semibold">Detalles del Pedido</h3>
                <div className="mt-7 divide-y divide-neutral-300 text-sm">
                  <div className="flex justify-between pb-4">
                    <span className="font-semibold">Pedido:</span>
                    <span>{order.id}</span>
                  </div>
                  <div className="flex justify-between py-4">
                    <span className="font-semibold">Fecha de solicitud</span>
                    <span>{order.fecha}</span>
                  </div>
                  <div className="flex justify-between py-4">
                    <span className="font-semibold">Total Facturación:</span>
                    <span>${order.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </main>
);

export default OrdersList;
