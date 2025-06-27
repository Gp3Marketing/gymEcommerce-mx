'use client';

import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { db } from '@/firebase/config';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

interface WelcomeModalProps {
  open: boolean;
  userName: string;
  userUid: string;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
  open,
  userName,
  userUid,
  onClose,
}) => {
  const router = useRouter();

  if (!open) return null;

  const handleAccept = async () => {
    await setDoc(
      doc(db, 'users', userUid),
      { acceptPromos: true },
      { merge: true },
    );
    onClose();
    router.push('/');
  };

  const handleDecline = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center rounded-xl bg-black p-8 shadow-lg">
        <Image
          src="/apple-icon.png"
          alt="Logo"
          width={112}
          height={112}
          className="size-28"
          priority
        />
        <h2 className="mb-2 text-2xl font-bold uppercase text-white">
          Hola {userName}!
        </h2>
        <p className="mb-8 text-center text-white">
          Bienvenido a{' '}
          <span className="font-semibold text-primary">FITMEX STORE</span>.
          <br />
          ¿Deseas recibir mensajes de productos en descuento y nuestras
          promociones?
        </p>
        <div className="flex w-full gap-3 font-thin text-white">
          <ButtonPrimary onClick={handleAccept} className="w-full">
            ¡Acepto!
          </ButtonPrimary>
          <ButtonSecondary onClick={handleDecline} className="w-full">
            No aceptar
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
