/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdContactMail } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

import { db } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Input from '@/shared/Input/Input';
import Radio from '@/shared/Radio/Radio';

const AccountPage = () => {
  const { user } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [isEditing, setIsEditing] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    birthDate: '',
  });

  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    apartment: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    communicationTime: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.shippingAddress)
          setShippingAddress((prev) => ({
            ...prev,
            ...data.shippingAddress,
          }));
      }
    };
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const isContactValid =
    contactInfo.fullName &&
    contactInfo.phone &&
    contactInfo.email &&
    contactInfo.birthDate;

  const isShippingValid =
    shippingAddress.street &&
    shippingAddress.city &&
    shippingAddress.state &&
    shippingAddress.country &&
    shippingAddress.postalCode &&
    shippingAddress.communicationTime;

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancelEdit = () => {
    setIsEditing(false);
    setStep(1);
    setMensaje(null);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setMensaje(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);
    if (!isContactValid || !isShippingValid) {
      setMensaje('Por favor completa todos los campos requeridos.');
      return;
    }
    if (!user) {
      setMensaje('Debes iniciar sesión para guardar tus datos.');
      return;
    }
    await setDoc(doc(db, 'users', user.uid), {
      contactInfo,
      shippingAddress,
    });
    setMensaje('Datos guardados correctamente');
    setIsEditing(false);
    setStep(1);
  };

  const inputClass = (editing: boolean) =>
    `bg-white ${editing ? 'text-neutral-900' : 'text-neutral-400'} placeholder:text-neutral-400`;

  return (
    <div className="bg-gray-50 flex min-h-screen items-center justify-center">
      <main className="container lg:pb-28 lg:pt-12">
        <div className="mb-14">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Mi Cuenta
          </h2>
        </div>

        <hr className="my-10 border-neutral-300 xl:my-12" />

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <form
            className="mt-6 w-full max-w-xl flex-1 space-y-10"
            onSubmit={step === 1 ? handleNext : handleSave}
          >
            <div className="space-y-6 rounded-2xl bg-white p-8 shadow">
              <div className="mb-4 flex items-center justify-between">
                {step === 1 && (
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:block">
                      <MdContactMail className="text-3xl text-primary" />
                    </span>
                    <h3 className="text-lg font-semibold">
                      Información de contacto
                    </h3>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:block">
                      <TbTruckDelivery className="text-3xl text-primary" />
                    </span>
                    <h3 className="text-lg font-semibold">
                      Dirección de envío
                    </h3>
                  </div>
                )}
                {isEditing && (
                  <ButtonSecondary
                    sizeClass="py-2 px-4"
                    className="border-2 border-neutral-400 text-neutral-400"
                    onClick={handleCancelEdit}
                    type="button"
                  >
                    Cancelar
                  </ButtonSecondary>
                )}
                {!isEditing && step === 1 && (
                  <ButtonSecondary
                    sizeClass="py-2 px-4"
                    className="border-2 border-primary text-primary"
                    onClick={handleEdit}
                    type="button"
                  >
                    Editar
                  </ButtonSecondary>
                )}
              </div>
              {mensaje && (
                <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
                  {mensaje}
                </div>
              )}
              {step === 1 && (
                <>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1 block font-medium"
                    >
                      Nombre completo
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={contactInfo.fullName}
                      onChange={handleContactChange}
                      required
                      placeholder="Ej: Juan Pérez"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block font-medium">
                      Número telefónico
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                      required
                      placeholder="Ej: +52 123 456 7890"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block font-medium">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={contactInfo.email}
                      onChange={handleContactChange}
                      type="email"
                      required
                      placeholder="Ej: correo@ejemplo.com"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="birthDate"
                      className="mb-1 block font-medium"
                    >
                      Fecha de nacimiento
                    </label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      value={contactInfo.birthDate}
                      onChange={handleContactChange}
                      type="date"
                      required
                      placeholder="mm / dd / yyyy"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div>
                    <label htmlFor="street" className="mb-1 block font-medium">
                      Calle y número
                    </label>
                    <Input
                      id="street"
                      name="street"
                      value={shippingAddress.street}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ej: Calle 123 #45-67"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apartment"
                      className="mb-1 block font-medium"
                    >
                      Departamento, casa, etc.
                    </label>
                    <Input
                      id="apartment"
                      name="apartment"
                      value={shippingAddress.apartment}
                      onChange={handleShippingChange}
                      placeholder="Ej: Apto 202, Casa 5"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1 block font-medium">
                      Ciudad
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ej: Ciudad de México"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1 block font-medium">
                      Estado o provincia
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={shippingAddress.state}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ej: CDMX, Jalisco"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block font-medium">
                      País
                    </label>
                    <Input
                      id="country"
                      name="country"
                      value={shippingAddress.country}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ej: México"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="mb-1 block font-medium"
                    >
                      Código postal
                    </label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={shippingAddress.postalCode}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ej: 12345"
                      disabled={!isEditing}
                      className={inputClass(isEditing)}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-medium">
                      Hora de comunicación
                    </label>
                    <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                      <Radio
                        label="Mañana (8 AM - 12 PM)"
                        id="communication-time-morning"
                        name="communicationTime"
                        defaultChecked={
                          shippingAddress.communicationTime ===
                          'Mañana (8 AM - 12 PM)'
                        }
                        onChange={() =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            communicationTime: 'Mañana (8 AM - 12 PM)',
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <Radio
                        label="Noche (6 PM - 9 PM)"
                        id="communication-time-evening"
                        name="communicationTime"
                        defaultChecked={
                          shippingAddress.communicationTime ===
                          'Noche (6 PM - 9 PM)'
                        }
                        onChange={() =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            communicationTime: 'Noche (6 PM - 9 PM)',
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <Radio
                        label="Tarde (12 PM - 6 PM)"
                        id="communication-time-afternoon"
                        name="communicationTime"
                        defaultChecked={
                          shippingAddress.communicationTime ===
                          'Tarde (12 PM - 6 PM)'
                        }
                        onChange={() =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            communicationTime: 'Tarde (12 PM - 6 PM)',
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <Radio
                        label="Comunicación a cualquier hora"
                        id="communication-time-any"
                        name="communicationTime"
                        defaultChecked={
                          shippingAddress.communicationTime ===
                          'Comunicación a cualquier hora'
                        }
                        onChange={() =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            communicationTime: 'Comunicación a cualquier hora',
                          }))
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </>
              )}
              {isEditing && (
                <div className="mt-6 flex gap-3">
                  {step === 2 && (
                    <ButtonSecondary
                      type="button"
                      onClick={handleBack}
                      sizeClass="py-2 px-4"
                      className="border-2 border-primary text-primary"
                    >
                      Retroceder
                    </ButtonSecondary>
                  )}
                  {step === 1 && (
                    <ButtonPrimary
                      className="w-full"
                      type="submit"
                      disabled={!isContactValid}
                    >
                      Siguiente
                    </ButtonPrimary>
                  )}
                  {step === 2 && (
                    <ButtonPrimary
                      className="w-full"
                      type="submit"
                      disabled={!isShippingValid}
                    >
                      Guardar
                    </ButtonPrimary>
                  )}
                </div>
              )}
            </div>
          </form>
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <Image
              src="/OFF.webp"
              alt="Imagen de perfil"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
