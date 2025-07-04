import React from 'react';

import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const Page404 = () => {
  return (
    <div className="container">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
        <h1
          className="text-[100px] font-extrabold text-primary"
          style={{ lineHeight: '1em' }}
        >
          404
        </h1>
        <h4 className="text-4xl font-semibold">Page Not Found</h4>
        <p className="text-neutral-500">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-5">
          <ButtonSecondary
            href="/"
            className="border-2 border-primary text-primary"
          >
            Volver a pagina principal
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default Page404;
