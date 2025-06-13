import { auth } from './config';
import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification 
} from 'firebase/auth';

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