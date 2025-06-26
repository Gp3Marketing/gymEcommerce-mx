'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

import { useAuth } from '@/hooks/useAuth';

interface AccountMenuProps {
  onClose: () => void;
  onLogout: () => Promise<void> | void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ onClose, onLogout }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleProtectedRoute = (route: string) => {
    if (!user) {
      router.push(`/login?redirect=${encodeURIComponent(route)}`);
    } else {
      router.push(route);
    }
    onClose();
  };

  const handleLogout = async () => {
    await onLogout();
    router.push('/login');
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-12 z-50 w-56 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg"
    >
      <div className="mb-2 font-semibold text-neutral-700">Tu Cuenta</div>
      <ul className="space-y-2">
        <li>
          <button
            className="block w-full text-left hover:text-primary"
            onClick={() => handleProtectedRoute('/account')}
          >
            Cuenta
          </button>
        </li>
        <li>
          <button
            className="block w-full text-left hover:text-primary"
            onClick={() => handleProtectedRoute('/orders')}
          >
            Mis Pedidos
          </button>
        </li>
        <li>
          <button
            className="block w-full text-left hover:text-primary"
            onClick={() => handleProtectedRoute('/wishlist')}
          >
            Lista de Deseos
          </button>
        </li>
        {user && (
          <li>
            <button
              className="block w-full text-left hover:text-primary"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountMenu;
