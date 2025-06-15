'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppHelp = () => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSend = () => {
        const mensaje = encodeURIComponent(
            `Necesito ayuda y me comunico desde la página Fitmex Store. Nombre: ${nombre}, Teléfono: ${telefono}`
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
                className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700"
                onClick={() => setShowModal(true)}
                aria-label="¿Necesitas Ayuda?"
            >
                <FaWhatsapp size={28} />
            </button>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-xs flex flex-col items-center">
                        <FaWhatsapp size={40} className="text-green-600 mb-4" />
                        <p className='pb-3 text-md text-center'>
                            Hola, bienvenido a Fitmex Store. <br /> ¿En qué puedo ayudarte?
                        </p>

                        <input
                            type="text"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            className="border p-2 mb-3 w-full rounded"
                        />
                        <input
                            type="text"
                            placeholder="Tu teléfono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            className="border p-2 mb-4 w-full rounded"
                        />
                        <div className="flex justify-end gap-2 w-full">
                            <button
                                className="px-3 py-1 bg-gray-300 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-3 py-1 bg-green-600 text-white rounded"
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