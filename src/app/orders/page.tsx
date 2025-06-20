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