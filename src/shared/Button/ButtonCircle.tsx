import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  href?: string;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({
  className = '',
  size = 'w-9 h-9',
  ...args
}) => {
  return (
    <button
      type="button"
      className={`ttnc-ButtonCircle disabled:bg-opacity-70/70 flex items-center justify-center rounded-full !leading-none focus:ring-transparent ${className} ${size}`}
      {...args}
    />
  );
};

export default ButtonCircle;
