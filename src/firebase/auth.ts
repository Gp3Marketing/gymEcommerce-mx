import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

import { auth } from './config';

export const registerWithEmail = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  if (userCredential.user) {
    await sendEmailVerification(userCredential.user);
  }

  return userCredential.user;
};
