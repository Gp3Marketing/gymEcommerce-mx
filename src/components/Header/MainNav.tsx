'use client';

import { doc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { RiSearch2Line } from 'react-icons/ri';

import NotificationsSidebar from '@/components/NotificationsSidebar';
import MsgWhatsapp from '@/components/WhatsApp';
import { shoes } from '@/data/content';
import { db } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import avatar from '@/images/avatar.png';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';
import AccountMenu from './AccountMenu';
import MenuBar from './MenuBar';

const getFirstName = (displayName: string | null, email: string | null) => {
  if (displayName) return displayName.split(' ')[0];
  if (email) return email.split('@')[0];
  return 'Usuario';
};

const MainNav = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof shoes>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = useNotifications();
  const unread = notifications.some((n) => n.read === false);

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAccountMenu((prev) => !prev);
  };

  const handleLogout = () => {
    setShowAccountMenu(false);
    logout();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = shoes.filter(
      (shoe) =>
        shoe.shoeName.toLowerCase().includes(value.toLowerCase()) ||
        shoe.shoeCategory.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleOpenNotifications = async () => {
    setShowNotifications(true);
    if (user && notifications.length > 0) {
      notifications.forEach(async (n) => {
        if (!n.read) {
          await updateDoc(doc(db, 'users', user.uid, 'notifications', n.id), {
            read: true,
          });
        }
      });
    }
  };

  return (
    <div className="container relative flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-3/5">
        <Logo />
        <div className="relative hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
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
            <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-auto rounded border border-neutral-200 bg-white shadow-lg">
              {searchResults.length > 0 ? (
                searchResults.map((shoe) => (
                  <Link
                    key={shoe.slug}
                    href={`/products/${shoe.slug}`}
                    className="hover:bg-gray-100 flex items-center gap-3 px-4 py-2"
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
                <div className="px-4 py-2 text-center text-neutral-500">
                  Producto no encontrado
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="relative hidden lg:block">
          {unread && (
            <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          )}
          <button type="button" onClick={handleOpenNotifications}>
            <FaRegBell className="text-2xl" />
          </button>
        </div>
        <NotificationsSidebar
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />

        <div className="flex items-center divide-x divide-neutral-300">
          <CartSideBar />
          <div className="relative flex items-center gap-2 pl-5">
            <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
              <Image
                src={avatar}
                alt="avatar"
                className="size-full object-cover object-center"
              />
            </ButtonCircle3>
            <button
              type="button"
              className="hidden text-sm lg:block"
              onClick={handleAccountClick}
            >
              {user
                ? getFirstName(user.displayName, user.email)
                : 'Iniciar sesión'}
            </button>
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
