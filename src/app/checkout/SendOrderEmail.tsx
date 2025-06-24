"use client";
import emailjs from "emailjs-com";

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
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            alert("¡Datos enviados correctamente!");
        } catch (error) {
            alert("Error al enviar el correo.");
        }
    };

    return (
        <button
            type="button"
            className="mt-8 w-full bg-blue-600 text-white py-3 rounded"
            onClick={handleSend}
        >
            Confirmar
        </button>
    );
};

export default SendOrderEmail;