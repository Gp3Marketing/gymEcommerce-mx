'use client';

import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import OrdersList from '@/components/OrdersList';
import { db } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import type { Order } from '@/types/order';

const fetchOrders = async (userId: string): Promise<Order[]> => {
  const q = query(collection(db, 'orders'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      productos: data.productos,
      fecha: data.fecha,
      total: data.total,
    };
  });
};

const OrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
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
