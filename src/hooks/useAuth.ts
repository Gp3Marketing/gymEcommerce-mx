"use client";

import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  User,
  UserCredential,
} from "firebase/auth";

import { auth, googleProvider, db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface AuthUser extends User {
  role?: string;
}

interface UseAuthResult {
  user: AuthUser | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<UserCredential>;
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    await setPersistence(auth, browserLocalPersistence);
    return await signInWithPopup(auth, googleProvider);
  };

  const registerWithEmail = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email,
      role: "user",
    });

    if (userCredential.user) {
      await sendEmailVerification(userCredential.user);
    }

    return userCredential;
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const docRef = doc(db, "users", firebaseUser.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.exists()) {
          setUser({
            ...firebaseUser,
            role: userDoc.data().role,
          });
        } else {
          setUser(firebaseUser); 
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    loginWithEmail,
    loginWithGoogle,
    logout,
    registerWithEmail,
  };
}
