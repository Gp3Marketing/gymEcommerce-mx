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

const getFirstName = (displayName: string | null, email: string | null) => {
  if (displayName) return displayName.split(" ")[0];
  if (email) return email.split("@")[0];
  return "Usuario";
};

const MainNav = () => {
  const { user, logout } = useAuth();
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const handleAccountClick = (e: React.MouseEvent) => {
    if (user) {
      e.preventDefault();
      setShowAccountMenu((prev) => !prev);
    }
  };

  const handleLogout = () => {
    setShowAccountMenu(false);
    logout();
  };

  return (
    <div className="container flex items-center justify-between py-4 relative">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
          <Input
            type="text"
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            placeholder="try 'Nike Air Jordan'"
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="relative hidden lg:block">
          <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          <FaRegBell className="text-2xl" />
        </div>

        <div className="flex items-center divide-x divide-neutral-300">
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
              {user ? getFirstName(user.displayName, user.email) : "Iniciar sesión"}
            </Link>
            {user && showAccountMenu && (
              <AccountMenu onLogout={handleLogout} />
            )}
          </div>
        </div>
      </div>

      <MsgWhatsapp />
    </div>
  );
};

export default MainNav;