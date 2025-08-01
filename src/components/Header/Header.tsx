'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import { HamburgerMenu, GridMenu } from './Navigation';
import GridDropdown from './Navigation/GridMenu/GridDropdown';
import { SearchButton, SearchOverlay } from './Search';
import AsideMenu from '@/components/AsideMenu';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMenuToggle?.(newState);

    // 1054px'de grid menu açıksa kapat
    if (newState && window.innerWidth <= 1054) {
      setIsGridMenuOpen(false);
    }
  };

  const handleGridClick = () => {
    const newState = !isGridMenuOpen;
    setIsGridMenuOpen(newState);

    // 1054px'de aside menu açıksa kapat
    if (newState && window.innerWidth <= 1054) {
      setIsMobileMenuOpen(false);
      onMenuToggle?.(false);
    }
  };

  const handleGridMenuClose = () => {
    setIsGridMenuOpen(false);
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
          <div className={styles.gridMenuWrapper}>
            <GridMenu onClick={handleGridClick} isOpen={isGridMenuOpen} />
            {/* Grid Dropdown */}
            <GridDropdown
              isOpen={isGridMenuOpen}
              onClose={handleGridMenuClose}
            />
          </div>
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
