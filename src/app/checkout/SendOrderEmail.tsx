'use client';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';

type ContactInfo = {
  fullName: string;
  phone: string;
  email: string;
};

type ShippingAddress = {
  street: string;
  apartment: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  communicationTime: string;
};

type Props = {
  contactInfo: ContactInfo;
  shippingAddress: ShippingAddress;
};

const SendOrderEmail = ({ contactInfo, shippingAddress }: Props) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSend = async () => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: contactInfo.fullName,
          phone: contactInfo.phone,
          email: contactInfo.email,
          street: shippingAddress.street,
          apartment: shippingAddress.apartment,
          city: shippingAddress.city,
          state: shippingAddress.state,
          country: shippingAddress.country,
          postalCode: shippingAddress.postalCode,
          communicationTime: shippingAddress.communicationTime,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setMessage('¡Datos enviados correctamente!');
    } catch (error) {
      setMessage('Error al enviar el correo.');
    }
  };

  return (
    <>
      {message && (
        <div
          className={`mb-4 rounded px-4 py-2 ${
            message.startsWith('¡Datos')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
      <button
        type="button"
        className="mt-8 w-full rounded bg-blue-600 py-3 text-white"
        onClick={handleSend}
      >
        Confirmar
      </button>
    </>
  );
};

export default SendOrderEmail;
