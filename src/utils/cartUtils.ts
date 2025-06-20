import { db } from "@/firebase/config";
import { collection, doc, setDoc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";

export const addToCart = async (userId: string, item: any) => {
  if (!item || !item.id) {
    throw new Error("El producto no tiene id");
  }
  await setDoc(
    doc(db, "carts", userId, "items", item.id),
    { ...item }
  );
};

export const removeFromCart = async (userId: string, itemId: string) => {
  await deleteDoc(doc(db, "carts", userId, "items", itemId));
};

export const updateCartItemQuantity = async (userId: string, itemId: string, cantidad: number) => {
  await updateDoc(doc(db, "carts", userId, "items", itemId), { cantidad });
};

export const subscribeToCart = (
  userId: string,
  callback: (items: any[]) => void
) => {
  return onSnapshot(
    collection(db, "carts", userId, "items"),
    (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      callback(items);
    }
  );
};