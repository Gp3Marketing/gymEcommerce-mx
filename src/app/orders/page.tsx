"use client";
import React, { useEffect, useState } from "react";
import OrdersList from "@/components/OrdersList";
import { useAuth } from "@/hooks/useAuth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

const fetchOrders = async (userId: string) => {
  const q = query(collection(db, "orders"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

const OrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders(user.uid).then((data) => {
        setOrders(data);
        setLoading(false);
      });
    }
  }, [user]);

  if (!user) return <div>Debes iniciar sesión para ver tus pedidos.</div>;
  if (loading) return <div>Cargando pedidos...</div>;

  return <OrdersList orders={orders} />;
};

export default OrdersPage;

/*
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

 const CartPage = () => {
  const { user } = useAuth();
  const { cart } = useCart();

  const handleCheckout = async () => {
    if (!user || cart.length === 0) return;
    const pedido = {
      userId: user.uid,
      fecha: new Date().toISOString().slice(0, 10),
      total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      productos: cart.map(item => ({
        slug: item.slug, 
        cantidad: item.cantidad,
        precio: item.precio,
      })),
    };
    await addDoc(collection(db, "orders"), pedido);
    alert("¡Pedido realizado!");
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}; 
*/

/* 
¡Gracias por la explicación y los scripts!
Tu carrito funciona perfecto porque lee los productos directamente de la colección carts en Firestore, pero tu página de pedidos (OrdersPage) lee de la colección orders.
Por eso, aunque tengas productos en el carrito, si nunca hiciste un "checkout" (es decir, nunca guardaste un pedido en la colección orders), tu página de pedidos siempre mostrará "No tienes pedidos aún".
*/