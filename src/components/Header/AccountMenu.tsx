"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AccountMenuProps {
  onLogout: () => Promise<void> | void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ onLogout }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onLogout();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onLogout]);

  const handleLogout = async () => {
    await onLogout();
    router.push("/login");
  };

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
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenu;