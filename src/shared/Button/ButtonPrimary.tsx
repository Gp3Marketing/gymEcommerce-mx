import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button
      className={`disabled:bg-opacity-70/70 rounded-full bg-primary text-white hover:bg-primary/80 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
