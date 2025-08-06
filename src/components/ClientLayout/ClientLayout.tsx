'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import { PWAUpdateNotification } from '@/components/PWA';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <PWAUpdateNotification />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
