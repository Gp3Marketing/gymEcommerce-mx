"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

interface AccountMenuProps {
  onLogout: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ onLogout }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onLogout();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onLogout]);

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-12 z-50 w-56 rounded-lg bg-white shadow-lg border border-neutral-200 p-4"
    >
      <div className="mb-2 font-semibold text-neutral-700">Tu Cuenta</div>
      <ul className="space-y-2">
        <li>
          <Link href="/account" className="block hover:text-primary">
            Cuenta
          </Link>
        </li>
        <li>
          <Link href="/orders" className="block hover:text-primary">
            Pedidos
          </Link>
        </li>
        <li>
          <button
            className="block w-full text-left hover:text-primary"
            onClick={onLogout}
          >
            Cerrar Sesión
          </button>
        </li>
        <li>
          <Link href="/login" className="block hover:text-primary">
            Cambiar de Cuenta
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenu;