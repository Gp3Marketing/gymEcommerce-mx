"use client";
import React from "react";
import { topNavLinks as baseTopNavLinks } from "@/data/content";
import NavigationItem from "../NavItem";
import { useAuth } from "@/hooks/useAuth";

const TopNav = () => {
  const { user } = useAuth();

  const topNavLinks = [
    ...baseTopNavLinks.filter(
      (item) => item.name !== "Checkout" && item.name !== "Cart"
    ),
    ...(user
      ? [
        { id: "f678ty", name: "Carrito de compras", href: "/cart" },
        { id: "h6i78g", name: "Checkout", href: "/checkout" },
      ]
      : []),
  ];

  return (
    <div className="hidden bg-black py-3 lg:block">
      <div className="container flex items-center justify-between text-sm text-white">
        <div className="flex items-center divide-x divide-neutral-100">
          {topNavLinks.map((item) => (
            <NavigationItem menuItem={item} key={item.id} />
          ))}
        </div>
        <a
          href="https://wa.me/573206635657?text=Necesito%20ayuda%20y%20me%20comunico%20desde%20la%20p%C3%A1gina%20Fitmex%20Store"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          ¿Necesitas Ayuda?
        </a>
      </div>
    </div>
  );
};

export default TopNav;