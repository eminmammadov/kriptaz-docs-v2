import React from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  onClick?: () => void;
  isOpen?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, isOpen = false }) => {
  return (
    <button
      className={`${styles.hamburgerButton} ${isOpen ? styles.active : ''} hamburgerButton`}
      onClick={onClick}
      aria-label={isOpen ? "Menyunu bağla" : "Menyunu aç"}
    >
      {isOpen ? (
        <HiOutlineX className={styles.hamburgerIcon} size={22} />
      ) : (
        <HiOutlineMenu className={styles.hamburgerIcon} size={22} />
      )}
    </button>
  );
};

export default HamburgerMenu;
