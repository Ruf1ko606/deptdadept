"use client";

import React, { ReactNode } from 'react';
import { CartProvider } from './CartContext';
import { CartModal } from './CartModal';

export const CartProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CartProvider>
      {children}
      <CartModal />
    </CartProvider>
  );
};

