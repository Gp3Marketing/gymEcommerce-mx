'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MdClose } from 'react-icons/md';

import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';

const NotificationsSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const notifications = useNotifications();
  const { user } = useAuth();

  const renderNotificationContent = (n: any) => {
    if (n.type === 'welcome') {
      return (
        <>
          <span className="text-xl">🎉</span>
          <span className="font-semibold">{n.message}</span>
          <span className="text-xs text-neutral-500">
            {n.extraData?.registeredAt
              ? new Date(n.extraData.registeredAt).toLocaleDateString()
              : ''}
          </span>
        </>
      );
    }

    if (n.type === 'order') {
      return (
        <>
          <span className="text-xl">🛒</span>
          <span className="font-semibold">Detalles del Pedido</span>
          <span className="text-xs text-neutral-500">
            Pedido: {n.extraData?.orderId}
          </span>
          <span className="text-xs text-neutral-500">
            Fecha de solicitud: {n.date?.toDate().toLocaleDateString()}
          </span>
          <span className="text-xs text-neutral-500">
            Total Facturación: ${n.extraData?.total}
          </span>
        </>
      );
    }

    if (n.type === 'password') {
      return (
        <>
          <span className="text-xl">🔒</span>
          <span>
            Se cambió la contraseña el {n.date?.toDate().toLocaleDateString()}
          </span>
        </>
      );
    }

    if (n.type === 'profile') {
      return (
        <>
          <span className="text-xl">👤</span>
          <span>Has actualizado tu dirección de envío</span>
        </>
      );
    }

    return <span>{n.message}</span>;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 transform"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition duration-150 transform"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <div className="relative z-20">
              <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                <div
                  className="relative bg-white"
                  style={{ minHeight: 200, maxHeight: 500 }}
                >
                  <div className="h-full overflow-y-auto p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Notificaciones</h3>
                      <ButtonCircle3 onClick={onClose}>
                        <MdClose className="text-2xl" />
                      </ButtonCircle3>
                    </div>
                    <hr className="my-10 border-neutral-300 xl:my-4" />

                    {!user ? (
                      <div className="py-8 text-center text-neutral-500">
                        Para ver tus notificaciones no olvides iniciar sesión
                      </div>
                    ) : (
                      <div className="divide-y divide-neutral-300">
                        {notifications.length === 0 && (
                          <div className="py-8 text-center text-neutral-500">
                            No tienes notificaciones
                          </div>
                        )}
                        {notifications.map((n, idx) => (
                          <div
                            key={n.id || idx}
                            className="flex flex-col gap-1 py-4"
                          >
                            {renderNotificationContent(n)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter=" duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave=" duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotificationsSidebar;
