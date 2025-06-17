"use client";

import type { FC } from "react";
import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Checkbox from "@/shared/Checkbox/Checkbox";
import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";

interface Props {
  isActive: boolean;
  onOpenActive: () => void;
  onCloseActive: () => void;
}

const ContactInfo: FC<Props> = ({ isActive, onCloseActive, onOpenActive }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (phone && email) {
      setSaved(true);
      onCloseActive();
    } else {
      alert("Por favor completa el teléfono y el correo electrónico.");
    }
  };

  return (
    <div className="z-0 overflow-hidden rounded-xl border border-neutral-300">
      <div className="flex flex-col items-start p-6 sm:flex-row">
        <span className="hidden sm:block">
          <FaRegCircleUser className="text-3xl text-primary" />
        </span>
        <div className="flex w-full items-center justify-between">
          <div className="sm:ml-8">
            <div className="uppercase tracking-tight">Información de contacto</div>
            <div className="mt-1 text-sm font-semibold">
              {saved ? (
                <>
                  <span>{email}</span>
                  <span className="ml-3 tracking-tighter">{phone}</span>
                </>
              ) : (
                <span className="text-neutral-500">Agrega tu información de contacto</span>
              )}
            </div>
          </div>
          <ButtonSecondary
            sizeClass="py-2 px-4"
            className="border-2 border-primary text-primary"
            onClick={onOpenActive}
          >
            Editar
          </ButtonSecondary>
        </div>
      </div>

      <div
        className={`space-y-4 border-t border-neutral-300 px-6 py-7 sm:space-y-6 ${
          isActive ? "block" : "hidden"
        }`}
      >
        <h3 className="text-lg font-semibold">Completa tu información</h3>

        <div className="max-w-lg">
          <FormItem label="Nombre Completo">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              rounded="rounded-lg"
              sizeClass="h-12 px-4 py-3"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              placeholder="Ej. Juan"
            />
          </FormItem>
        </div>

        <div className="max-w-lg">
          <FormItem label="Número de teléfono">
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              rounded="rounded-lg"
              sizeClass="h-12 px-4 py-3"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              placeholder="+57 300 123 4567"
              type="tel"
            />
          </FormItem>
        </div>

        <div className="max-w-lg">
          <FormItem label="Correo electrónico">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rounded="rounded-lg"
              sizeClass="h-12 px-4 py-3"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              placeholder="correo@ejemplo.com"
              type="email"
            />
          </FormItem>
        </div>

        <div>
          <Checkbox
            className="!text-sm"
            name="subscribe"
            label="Quiero recibir novedades y ofertas por correo"
            defaultChecked
          />
        </div>

        <div className="flex flex-col pt-6 sm:flex-row">
          <ButtonPrimary className="shadow-none sm:!px-7" onClick={handleSave}>
            Guardar y continuar
          </ButtonPrimary>
          <ButtonSecondary className="mt-3 sm:ml-3 sm:mt-0" onClick={onCloseActive}>
            Cancelar
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
