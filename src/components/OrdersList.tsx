import React from "react";
import Image from "next/image";
import Link from "next/link";
import { shoes } from "@/data/content";

interface PedidoProducto {
  slug?: string;
  nombreProducto: string;
  cantidad: number;
  precio: number;
}

interface Order {
  id: string;
  productos: PedidoProducto[];
  fecha: string;
  total: number;
}

interface OrdersListProps {
  orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => (
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
        {orders.map((order) => {
          // Calcular totales del pedido
          const subtotal = order.productos.reduce(
            (acc, item) => acc + item.precio * (item.cantidad || 1),
            0
          );
          const totalProductos = order.productos.reduce(
            (acc, item) => acc + (item.cantidad || 1),
            0
          );
          const taxes = subtotal * 0.1;
          const total = subtotal + taxes;

          return (
            <li
              key={order.id}
              className="mb-12 border-b pb-8 flex flex-col lg:flex-row"
            >
              {/* Productos a la izquierda */}
              <div className="w-full divide-y divide-neutral-300 lg:w-[60%] xl:w-[55%]">
                {order.productos.map((prod, idx) => {
                  let producto = prod.slug
                    ? shoes.find((s) => s.slug === prod.slug)
                    : undefined;
                  if (!producto) {
                    producto = shoes.find(
                      (s) =>
                        s.shoeName.trim().toLowerCase() ===
                        prod.nombreProducto.trim().toLowerCase()
                    );
                  }
                  if (!producto)
                    return (
                      <div key={idx} className="mb-2 text-red-500">
                        Producto no encontrado: {prod.nombreProducto}
                      </div>
                    );
                  return (
                    <div key={idx} className="flex py-5 last:pb-0">
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-40">
                        <Image
                          fill
                          src={producto.coverImage}
                          alt={producto.shoeName}
                          className="h-full w-full object-contain object-center"
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
                              <div className="text-sm text-neutral-500 mb-1">
                                {producto.overview}
                              </div>
                            </div>
                            <span className="font-medium md:text-xl">
                              ${prod.precio}
                            </span>
                          </div>
                        </div>
                        <div className="flex w-full items-end justify-between text-sm mt-2">
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
              {/* Resumen del pedido a la derecha */}
              <div className="flex-1 px-10 py-5 ml-20">
                <div className="sticky top-28">
                  <h3 className="text-2xl font-semibold">
                    Detalles del Pedido
                  </h3>
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
              {/* <div className="flex-1 mt-10 lg:mt-0 lg:pl-10 flex flex-col justify-start items-end">
                <div className="text-right space-y-2">
                  <div>
                    <span className="font-semibold">Pedido:</span>
                    <span>{order.id}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Fecha:</span> {order.fecha}
                  </div>
                  <div>
                    <span className="font-semibold">Total:</span> ${order.total}
                  </div>
                </div>
              </div> */}
            </li>
          );
        })}
      </ul>
    )}
  </main>
);

export default OrdersList;
