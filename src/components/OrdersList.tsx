import React from "react";
import Image from "next/image";
import { shoes } from "@/data/content";

interface Order {
  id: string;
  productos: Array<{
    slug: string;
    cantidad: number;
    precio: number;
  }>;
  fecha: string;
  total: number;
}

interface OrdersListProps {
  orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Mis Pedidos</h2>
    {orders.length === 0 ? (
      <p>No tienes pedidos aún.</p>
    ) : (
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="mb-6 border-b pb-4">
            <div>Pedido: <b>{order.id}</b></div>
            <div>Fecha: {order.fecha}</div>
            <div>Total: ${order.total}</div>
            <ul className="ml-4 mt-2">
              {order.productos.map((prod, idx) => {
                const producto = shoes.find((s) => s.slug === prod.slug);
                if (!producto) return null;
                return (
                  <li key={idx} className="flex items-center gap-4 mb-2">
                    <Image
                      src={producto.coverImage}
                      alt={producto.shoeName}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <div className="font-medium">{producto.shoeName}</div>
                      <div className="text-sm text-neutral-500 mb-1">
                        {producto.overview}
                      </div>
                      <div className="text-sm text-neutral-500">
                        Cantidad: {prod.cantidad}
                      </div>
                      <div className="text-sm text-neutral-500">
                        Precio: ${prod.precio}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default OrdersList;