'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import { HamburgerMenu, GridMenu } from './Navigation';
import { SearchButton, SearchOverlay } from './Search';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleHamburgerClick = () => {
    // Hamburger menyu tıklama işləyici
    console.log('Hamburger menyu tıklandı');
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

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <HamburgerMenu onClick={handleHamburgerClick} />
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

    {/* Search Overlay */}
    <SearchOverlay
      isOpen={isSearchOpen}
      onClose={handleSearchClose}
    />
    </>
  );
};

export default Header;
