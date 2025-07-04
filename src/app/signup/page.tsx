'use client';

import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

import AceptPubliciti from '@/components/PopUp/AceptPubliciti';
import { db } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import { addUserNotification } from '@/utils/notificationsUtils';

const PageSignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUserUid, setNewUserUid] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [mensaje, setMensaje] = useState<string | null>(null);

  const { registerWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);
    try {
      const userCredential = await registerWithEmail(email, password);
      const user = userCredential?.user;
      if (!user || !user.uid) {
        setMensaje('No se pudo crear el usuario.');
        return;
      }
      await setDoc(doc(db, 'users', user.uid), {
        contactInfo: {
          fullName: userName,
          email,
          phone,
          birthDate: '',
        },
        shippingAddress: {
          street: '',
          apartment: '',
          city: '',
          state: '',
          country: '',
          postalCode: '',
        },
        createdAt: new Date(),
      });

      // Notificación de bienvenida
      await addUserNotification(user.uid, {
        type: 'welcome',
        message: `Bienvenido a FITMEX STORE, ${userName}`,
        extraData: {
          registeredAt: new Date().toISOString(),
        },
      });

      setNewUserUid(user.uid);
      setNewUserName(userName);
      setShowModal(true);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setMensaje(
          'El correo electrónico ya está registrado. Intenta iniciar sesión o usa otro correo.',
        );
      } else {
        setMensaje(`Error al registrar: ${error.message}`);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    setMensaje(null);
    try {
      await loginWithGoogle();
      router.push('/');
    } catch {
      setMensaje('Error al registrarse con Google.');
    }
  };

  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Registrarse
        </h2>
        <div className="mx-auto max-w-md ">
          <div className="space-y-6">
            <div>
              <ButtonSecondary
                className="flex w-full items-center gap-3 border-2 border-primary text-primary"
                onClick={handleGoogleSignUp}
                type="button"
              >
                <FaGoogle className="text-2xl" /> Continue with Google
              </ButtonSecondary>
            </div>
            <div className="relative text-center">
              <span className="relative z-10 inline-block rounded-full bg-gray px-4 text-sm font-medium ">
                OR
              </span>
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-neutral-300" />
            </div>
            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-1 gap-6">
                {mensaje && (
                  <div className="rounded bg-red-100 px-4 py-2 text-red-700">
                    {mensaje}
                  </div>
                )}
                <FormItem label="Nombre Completo">
                  <Input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="Tu Nombre Completo"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    required
                  />
                </FormItem>
                <FormItem label="Email address">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="example@example.com"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    required
                  />
                </FormItem>
                <FormItem label="Número de teléfono">
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="+1 234 567 8901"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    required
                  />
                </FormItem>
                <FormItem label="Password">
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      rounded="rounded-full"
                      sizeClass="h-12 px-4 py-3"
                      placeholder="*********"
                      className="border-neutral-300 bg-transparent pr-10 placeholder:text-neutral-500 focus:border-primary"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </FormItem>
                <ButtonPrimary type="submit">Registrar</ButtonPrimary>
              </div>
            </form>
            <span className="block text-center text-sm text-neutral-500">
              Ya cuentas con cuenta propia?{' '}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
      <AceptPubliciti
        open={showModal}
        userName={newUserName}
        userUid={newUserUid}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default PageSignUp;
