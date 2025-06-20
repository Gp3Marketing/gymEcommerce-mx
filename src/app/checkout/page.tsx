"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import emailjs from "emailjs-com";

import LikeButton from "@/components/LikeButton";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import InputNumber from "@/shared/InputNumber/InputNumber";

import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import { useCart } from "@/hooks/useCart";

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [tabActive, setTabActive] = useState<
    "ContactInfo" | "ShippingAddress" | "PaymentMethod"
  >("ShippingAddress");

  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    communicationTime: "",
  });

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const renderProduct = (item: any) => {
    const {
      nombreProducto,
      coverImage,
      precio,
      id,
      rating,
      shoeCategory,
      cantidad,
    } = item;
    return (
      <div key={id} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-40">
          <Image
            fill
            src={coverImage}
            alt={nombreProducto}
            className="h-full w-full object-contain object-center"
          />
          <Link className="absolute inset-0" href={`/products/${id}`} />
        </div>
        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-medium md:text-2xl flex items-center gap-2">
              <Link href={`/products/${id}`}>{nombreProducto}</Link>
            </h3>
            <span className="text-sm block mt-1">
              Valor: ${precio}
            </span>
            <span className="text-sm block mt-1">
              Cantidad: {cantidad}
            </span>
            <span className="text-sm block mt-1">
              {shoeCategory}
            </span>
            
            <div className="flex items-center gap-1 mt-2">
              <MdStar className="text-yellow-400" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm mt-2">
            <div className="flex items-center gap-3">
              <LikeButton />
              <AiOutlineDelete
                className="text-2xl cursor-pointer"
                onClick={() => removeFromCart(id)}
              />
            </div>
            <div>
              <InputNumber
                value={cantidad}
                onChange={(newCantidad) => updateQuantity(id, newCantidad)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => (
    <div className="space-y-8">
      <div id="ContactInfo" className="scroll-mt-24">
        <ContactInfo
          isActive={tabActive === "ContactInfo"}
          onOpenActive={() => {
            setTabActive("ContactInfo");
            handleScrollToEl("ContactInfo");
          }}
          onCloseActive={() => {
            setTabActive("ShippingAddress");
            handleScrollToEl("ShippingAddress");
          }}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      </div>
      <div id="ShippingAddress" className="scroll-mt-24">
        <ShippingAddress
          isActive={tabActive === "ShippingAddress"}
          onOpenActive={() => {
            setTabActive("ShippingAddress");
            handleScrollToEl("ShippingAddress");
          }}
          onCloseActive={() => {
            setTabActive("PaymentMethod");
            handleScrollToEl("PaymentMethod");
          }}
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
        />
      </div>
    </div>
  );

  // ENVÍO DE EMAILJS AL CONFIRMAR
  const handleConfirm = async () => {
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
    <div className="nc-CheckoutPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
            Confirmación de datos
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="my-10 shrink-0 border-t border-neutral-300 lg:mx-10 lg:my-0 lg:border-l lg:border-t-0 xl:lg:mx-14 2xl:mx-16 " />

          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-neutral-300">
              {cart.map((item) => renderProduct(item))}
            </div>

            <div className="mt-10 border-t border-neutral-300 pt-6 text-sm">
              <div>
                <div className="text-sm">Discount code</div>
                <div className="mt-1.5 flex">
                  <Input
                    rounded="rounded-lg"
                    sizeClass="h-12 px-4 py-3"
                    className="flex-1 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  <button
                    type="button"
                    className="ml-3 flex w-24 items-center justify-center rounded-2xl border border-neutral-300 bg-gray px-4 text-sm font-medium transition-colors hover:bg-neutral-100"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between py-4">
                <span>Total de productos</span>
                <span className="font-semibold">
                  {cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)}
                </span>
              </div>
              <div className="flex justify-between pt-4 text-base font-semibold">
                <span>Total</span>
                <span>
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.precio * (item.cantidad || 1),
                    0
                  )}
                </span>
              </div>
            </div>
            <ButtonPrimary className="mt-8 w-full" onClick={handleConfirm}>
              Confirmar
            </ButtonPrimary>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
