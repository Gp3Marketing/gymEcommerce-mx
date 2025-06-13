"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";
import { useAuth } from "@/hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PageSignUp = () => {
  const { loginWithGoogle } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignUp = async () => {
    try {
      await loginWithGoogle();
      router.push("/"); 
    } catch (error) {
      console.error("Error al registrarse con Google:", error);
    }
  };

  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Registarse
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
            <div className="grid grid-cols-1 gap-6">
              <FormItem label="Nombre de usuario">
                <Input
                  type="text"
                  rounded="rounded-full"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="Tu nombre de usuario"
                  className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                />
              </FormItem>
              <FormItem label="Email address">
                <Input
                  type="email"
                  rounded="rounded-full"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="example@example.com"
                  className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                />
              </FormItem>
              <FormItem label="Password">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="*********"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary pr-10"
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
              <ButtonPrimary>Continue</ButtonPrimary>
            </div>
            <span className="block text-center text-sm text-neutral-500">
              Ya cuentas con cuenta propia?{" "}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
