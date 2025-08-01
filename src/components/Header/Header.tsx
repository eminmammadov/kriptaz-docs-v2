'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import { HamburgerMenu, GridMenu } from './Navigation';
import { SearchButton, SearchOverlay } from './Search';
import AsideMenu from '@/components/AsideMenu';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  const handleGridClick = () => {
    // Grid görünüş tıklama işləyici
    console.log('Grid görünüş tıklandı');
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    onMenuToggle?.(false);
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <HamburgerMenu onClick={handleHamburgerClick} isOpen={isMobileMenuOpen} />
          <Logo />
        </div>

        <div className={styles.centerSection}>
          {/* Search komponenti artıq istifadə olunmur */}
        </div>

        <div className={styles.rightSection}>
          <SearchButton onClick={handleSearchClick} />
          <GridMenu onClick={handleGridClick} />
        </div>
      </div>
    </header>

    {/* Desktop Aside Menu */}
    <AsideMenu isMobile={false} />

    {/* Mobile Aside Menu */}
    <AsideMenu
      isMobile={true}
      isOpen={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    />

    {/* Search Overlay */}
    <SearchOverlay
      isOpen={isSearchOpen}
      onClose={handleSearchClose}
    />
    </>
  );
};

export default Header;
