'use client';

import { useEffect, useState } from 'react';
import {
  auth,
  googleProvider,
} from '@/firebase/config';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
  type UserCredential,
} from 'firebase/auth';

interface UseAuthResult {
  user: User | null;
  loading: boolean;
  loginWithEmail: (
    email: string,
    password: string,
  ) => Promise<void>;
  loginWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  registerWithEmail: (
    email: string,
    password: string,
  ) => Promise<UserCredential>;
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loginWithEmail = async (
    email: string,
    password: string,
  ) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    await setPersistence(auth, browserLocalPersistence);
    return signInWithPopup(auth, googleProvider);
  };

  const registerWithEmail = async (
    email: string,
    password: string,
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    if (userCredential.user) {
      await sendEmailVerification(userCredential.user);
    }
    return userCredential;
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
