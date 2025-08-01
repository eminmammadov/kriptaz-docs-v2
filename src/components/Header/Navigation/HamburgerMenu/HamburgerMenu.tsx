import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  onClick?: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <button
      className={`${styles.hamburgerButton} hamburgerButton`}
      onClick={onClick}
      aria-label="Menyunu aç"
    >
      <HiOutlineMenu className={styles.hamburgerIcon} size={22} />
    </button>
  );
};

export default HamburgerMenu;
