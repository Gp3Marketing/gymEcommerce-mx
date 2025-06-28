'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppHelp = () => {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSend = () => {
    const mensaje = encodeURIComponent(
      `Necesito ayuda y me comunico desde la página Fitmex Store. Nombre: ${nombre}, Teléfono: ${telefono}`,
    );
    const whatsappLink = `https://wa.me/573206635657?text=${mensaje}`;
    window.open(whatsappLink, '_blank');
    setShowModal(false);
    setNombre('');
    setTelefono('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex justify-end">
      <button
        type="button"
        className="flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700"
        onClick={() => setShowModal(true)}
        aria-label="¿Necesitas Ayuda?"
      >
        <FaWhatsapp size={28} />
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex w-full max-w-xs flex-col items-center rounded bg-white p-6 shadow-lg">
            <FaWhatsapp size={40} className="mb-4 text-green-600" />
            <p className="text-md pb-3 text-center">
              Hola, bienvenido a Fitmex Store. <br /> ¿En qué puedo ayudarte?
            </p>

            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mb-3 w-full rounded border p-2"
            />
            <input
              type="text"
              placeholder="Tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="mb-4 w-full rounded border p-2"
            />
            <div className="flex w-full justify-end gap-2">
              <button
                type="button"
                className="bg-gray-300 rounded px-3 py-1"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="rounded bg-green-600 px-3 py-1 text-white"
                onClick={handleSend}
                disabled={!nombre || !telefono}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppHelp;
