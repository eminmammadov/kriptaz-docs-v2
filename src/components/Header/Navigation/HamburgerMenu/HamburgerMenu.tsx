import React from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  onClick?: () => void;
  isOpen?: boolean;
  'aria-label'?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  onClick,
  isOpen = false,
  'aria-label': ariaLabel
}) => {
  return (
    <button
      className={`${styles.hamburgerButton} ${isOpen ? styles.active : ''} hamburgerButton`}
      onClick={onClick}
      aria-label={ariaLabel || (isOpen ? "Menyunu bağla" : "Menyunu aç")}
      aria-expanded={isOpen}
      aria-controls="aside-menu"
      type="button"
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
