'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import { HamburgerMenu, GridMenu, AsideMenu } from './Navigation';
import GridDropdown from './Navigation/GridMenu/GridDropdown';
import { SearchButton, SearchOverlay } from './Search';
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
    // Diğer menuları kapat
    setIsMobileMenuOpen(false);
    setIsGridMenuOpen(false);
    onMenuToggle?.(false);
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
    <header className={styles.header} role="banner">
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <HamburgerMenu
            onClick={handleHamburgerClick}
            isOpen={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Naviqasiya menyusunu bağla" : "Naviqasiya menyusunu aç"}
          />
          <Logo />
        </div>

        <div className={styles.centerSection} role="search" aria-label="Axtarış bölməsi">
          {/* Search komponenti artıq istifadə olunmur */}
        </div>

        <div className={styles.rightSection}>
          <SearchButton
            onClick={handleSearchClick}
            aria-label="Sənədlərdə axtarış et"
          />
          <nav className={styles.gridMenuWrapper} role="navigation" aria-label="Əlavə naviqasiya">
            <GridMenu
              onClick={handleGridClick}
              isOpen={isGridMenuOpen}
              aria-label={isGridMenuOpen ? "Grid menyusunu bağla" : "Grid menyusunu aç"}
            />
            {/* Grid Dropdown */}
            <GridDropdown
              isOpen={isGridMenuOpen}
              onClose={handleGridMenuClose}
            />
          </nav>
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
