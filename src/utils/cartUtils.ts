import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { db } from '@/firebase/config';

export const addToCart = async (userId: string, item: any) => {
  if (!item || !item.id) {
    throw new Error('El producto no tiene id');
  }
  await setDoc(doc(db, 'carts', userId, 'items', item.id), { ...item });
};

export const removeFromCart = async (userId: string, itemId: string) => {
  await deleteDoc(doc(db, 'carts', userId, 'items', itemId));
};

export const updateCartItemQuantity = async (
  userId: string,
  itemId: string,
  cantidad: number,
) => {
  await updateDoc(doc(db, 'carts', userId, 'items', itemId), { cantidad });
};

export const subscribeToCart = (
  userId: string,
  callback: (items: any[]) => void,
) => {
  return onSnapshot(collection(db, 'carts', userId, 'items'), (snapshot) => {
    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
};

export const clearUserCart = async (userId: string) => {
  const itemsRef = collection(db, 'carts', userId, 'items');
  const itemsSnap = await getDocs(itemsRef);
  const deletePromises = itemsSnap.docs.map((docu) => deleteDoc(docu.ref));
  await Promise.all(deletePromises);
};
