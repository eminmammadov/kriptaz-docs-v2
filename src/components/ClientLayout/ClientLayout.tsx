'use client';

import React from 'react';
import Header from '@/components/Header';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
    </>
  );
};

export default ClientLayout;
