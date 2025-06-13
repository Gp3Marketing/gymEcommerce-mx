"use client";

import Link from "next/link";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";

import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

const PageForgotPass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setShowVerification(true);
      setMessage(
        "¡Se te envió un código de verificación! Verifica tu correo electrónico."
      );
      setTimer(20);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setShowVerification(false);
        setMessage(
          "Verifica que el correo sea el correcto."
        );
      } else {
        setShowVerification(false);
        setMessage("No se pudo enviar el correo. Verifica el email.");
      }
    }
  };

  const handleVerified = () => {
    setEmail("");
    setShowVerification(false);
    setMessage(null);
  };

  return (
    <div className="container mb-24 lg:mb-32">
      <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
        <h2 className="mt-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Olvidaste tu contraseña?
        </h2>
      </header>

      <div className="mx-auto max-w-md space-y-6">
        <form onSubmit={handleSubmit}>
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
              disabled={showVerification && timer > 0}
            />
          </FormItem>

          {/* Botón cambia de texto según el flujo */}
          {timer === 0 && (
            <div className="flex justify-center">
              <ButtonPrimary className="mt-4 -mb-3" type="submit">
                {showVerification
                  ? "Volver a reenviar verificación"
                  : "Recuperar contraseña"}
              </ButtonPrimary>
            </div>
          )}
        </form>

        {/* Temporizador solo visible mientras está activo */}
        {showVerification && timer > 0 && (
          <div className="text-center text-sm text-primary">
            {message}
            <div className="mt-2 text-neutral-700">
              Tienes {timer} segundos para revisar tu correo.
            </div>
            <div className="mt-4">
              <ButtonPrimary
                type="button"
                onClick={handleVerified}
                disabled={timer > 0}
              >
                Ya verifiqué mi correo
              </ButtonPrimary>
            </div>
          </div>
        )}

        <span className="block text-center text-neutral-500">
          Regresar a{" "}
          <Link href="/login" className="text-primary">
            Iniciar sesión
          </Link>
          {" / "}
          <Link href="/signup" className="text-primary">
            Registrarse
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PageForgotPass;