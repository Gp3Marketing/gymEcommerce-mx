"use client";

import React from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useRouter } from "next/navigation";

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
      doc(db, "users", userUid),
      { acceptPromos: true },
      { merge: true }
    );
    onClose();
    router.push("/");
  };

  const handleDecline = () => {
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative z-10 bg-black rounded-xl p-8 max-w-md mx-auto flex flex-col items-center shadow-lg">
        <img
          src="/apple-icon.png"
          alt="Logo"
          className="w-h-28 h-28"
        />
        <h2 className="text-2xl font-bold mb-2 text-white uppercase">Hola {userName}!</h2>
        <p className="mb-8 text-center text-white">
          Bienvenido a <span className="font-semibold text-primary">FITMEX STORE</span>.<br />
          ¿Deseas recibir mensajes de productos en descuento y nuestras promociones?
        </p>
        <div className="flex gap-3 w-full text-white font-thin">
          <ButtonPrimary
            onClick={handleAccept}
            className="w-full"
          >
            ¡Acepto!
          </ButtonPrimary>
          <ButtonSecondary
            onClick={handleDecline}
            className="w-full"
          >
            No aceptar
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;