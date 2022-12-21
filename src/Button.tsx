import React, { FC } from 'react';
export interface ButtonProps {
  text: string;
}
export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button style={{ backgroundColor: 'blueviolet', color: 'white',
    fontSize: '17px',
        padding: '10px 16px',
        borderRadius: '99999px', }}>
      {text}
    </button>
  );
};