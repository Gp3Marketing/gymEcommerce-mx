"use client";

import type { FC } from "react";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";
import Radio from "@/shared/Radio/Radio";
import Select from "@/shared/Select/Select";

interface Props {
  isActive: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
}

const ShippingAddress: FC<Props> = ({ isActive, onCloseActive, onOpenActive }) => {
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isAddressSaved, setIsAddressSaved] = useState(false);

  const handleSave = () => {
    // Puedes validar que todos los campos estén llenos aquí si lo deseas
    setIsAddressSaved(true);
    onCloseActive();
  };

  return (
    <div className="rounded-xl border border-neutral-300">
      <div className="flex flex-col items-start p-6 sm:flex-row">
        <span className="hidden sm:block">
          <TbTruckDelivery className="text-3xl text-primary" />
        </span>

        <div className="flex w-full items-center justify-between">
          <div className="sm:ml-8">
            <span className="uppercase">Dirección de Envío</span>
            <div className="mt-1 text-sm font-semibold">
              {isAddressSaved ? (
                <span>
                  {street}, Apt {apartment}, {city}, {state}, {country}, {postalCode}
                </span>
              ) : (
                <span className="text-neutral-500 italic">
                  Dirección de envío pendiente por completar
                </span>
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

      {/* Formulario editable */}
      <div className={`space-y-4 border-t border-neutral-300 px-6 py-7 sm:space-y-6 ${isActive ? "block" : "hidden"}`}>
        <div className="space-y-4 sm:flex sm:space-x-3 sm:space-y-0">
          <div className="flex-1">
            <FormItem label="Dirección de envío">
              <Input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                placeholder="Ej. AV. Calle 44"
                type="text"
              />
            </FormItem>
          </div>
          <div className="sm:w-1/3">
            <FormItem label="Apartamento, casa">
              <Input
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                placeholder="101"
              />
            </FormItem>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="Ciudad">
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                placeholder="Ciudad"
              />
            </FormItem>
          </div>
          <div>
            <FormItem label="País">
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                sizeClass="h-12 px-4 py-3"
                className="rounded-lg border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              >
                <option value="">Seleccionar país</option>
                <option value="Mexico">Mexico</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
              </Select>
            </FormItem>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="Estado/Provincia">
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                placeholder="Departamento/Provincia"
              />
            </FormItem>
          </div>
        </div>

        <div>
          <FormItem label="Código Postal">
            <Input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              rounded="rounded-lg"
              sizeClass="h-12 px-4 py-3"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              placeholder="12345"
            />
          </FormItem>
        </div>
      </div>

      {/* Horario de comunicación */}
      <div className="px-6">
        <FormItem label="Hora de comunicación">
          <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
            <Radio label="Mañana (8 AM - 12 PM)" id="communication-time-morning" name="communication-time" defaultChecked />
            <Radio label="Noche (6 PM - 9 PM)" id="communication-time-evening" name="communication-time" />
            <Radio label="Tarde (12 PM - 6 PM)" id="communication-time-afternoon" name="communication-time" />
            <Radio label="Comunicación a cualquier hora" id="communication-time-any" name="communication-time" />
          </div>
        </FormItem>
      </div>

      {/* Botones */}
      <div className="flex flex-col p-6 sm:flex-row">
        <ButtonPrimary className="shadow-none sm:!px-7" onClick={handleSave}>
          Guardar
        </ButtonPrimary>
        <ButtonSecondary className="mt-3 sm:ml-3 sm:mt-0" onClick={onCloseActive}>
          Cancelar
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default ShippingAddress;
