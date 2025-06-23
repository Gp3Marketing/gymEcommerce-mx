"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";

import avatar from "@/images/avatar.png";
import ButtonCircle3 from "@/shared/Button/ButtonCircle3";
import Input from "@/shared/Input/Input";
import Logo from "@/shared/Logo/Logo";
import { useAuth } from "@/hooks/useAuth";

import AccountMenu from "./AccountMenu";
import CartSideBar from "../CartSideBar";
import MenuBar from "./MenuBar";
import MsgWhatsapp from "@/components/WhatsApp";

import { shoes } from "@/data/content";
import NotificationsSidebar from "@/components/NotificationsSidebar";
import { useNotifications } from "@/hooks/useNotifications";
import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const getFirstName = (displayName: string | null, email: string | null) => {
  if (displayName) return displayName.split(" ")[0];
  if (email) return email.split("@")[0];
  return "Usuario";
};

const MainNav = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof shoes>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = useNotifications();
  const unread = notifications.some(n => n.read === false);

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAccountMenu((prev) => !prev);
  };

  const handleLogout = () => {
    setShowAccountMenu(false);
    logout();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = shoes.filter(
      (shoe) =>
        shoe.shoeName.toLowerCase().includes(value.toLowerCase()) ||
        shoe.shoeCategory.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleOpenNotifications = async () => {
    setShowNotifications(true);
    // Marcar todas como leídas
    if (user && notifications.length > 0) {
      notifications.forEach(async (n) => {
        if (!n.read) {
          await updateDoc(doc(db, "users", user.uid, "notifications", n.id), { read: true });
        }
      });
    }
  };

  return (
    <div className="container flex items-center justify-between py-4 relative">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex relative">
          <Input
            type="text"
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            placeholder="...Buscar productos"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowResults(searchResults.length > 0)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
          {showResults && (
            <div className="absolute top-full left-0 w-full bg-white border border-neutral-200 rounded shadow-lg z-50 mt-2 max-h-64 overflow-auto">
              {searchResults.length > 0 ? (
                searchResults.map((shoe) => (
                  <Link
                    key={shoe.slug}
                    href={`/products/${shoe.slug}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowResults(false)}
                  >
                    <Image
                      src={shoe.coverImage}
                      alt={shoe.shoeName}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <div className="font-medium">{shoe.shoeName}</div>
                      <div className="text-xs text-neutral-500">
                        {shoe.shoeCategory}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-neutral-500 text-center">
                  Producto no encontrado
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        {/* Icono campana */}
        <div className="relative hidden lg:block">
          {unread && (
            <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          )}
          <button type="button" onClick={handleOpenNotifications}>
            <FaRegBell className="text-2xl" />
          </button>
        </div>
        <NotificationsSidebar isOpen={showNotifications} onClose={() => setShowNotifications(false)} />

        <div className="flex items-center divide-x divide-neutral-300">
          {/* Icono Compra */}
          <CartSideBar />
          <div className="flex items-center gap-2 pl-5 relative">
            <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
              <Image
                src={avatar}
                alt="avatar"
                className="h-full w-full object-cover object-center"
              />
            </ButtonCircle3>
            <Link
              href={user ? "#" : "/login"}
              className="hidden text-sm lg:block"
              onClick={handleAccountClick}
            >
              {user
                ? getFirstName(user.displayName, user.email)
                : "Iniciar sesión"}
            </Link>
            {showAccountMenu && (
              <AccountMenu
                onLogout={handleLogout}
                onClose={() => setShowAccountMenu(false)}
              />
            )}
          </div>
        </div>
      </div>

      <MsgWhatsapp />
    </div>
  );
};

export default MainNav;