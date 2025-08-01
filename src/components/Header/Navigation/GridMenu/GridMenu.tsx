import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlineX } from 'react-icons/hi';
import styles from './GridMenu.module.css';

interface GridMenuProps {
  onClick?: () => void;
  isOpen?: boolean;
}

const GridMenu: React.FC<GridMenuProps> = ({ onClick, isOpen = false }) => {
  return (
    <button
      className={`${styles.gridButton} ${isOpen ? styles.active : ''} gridButton`}
      onClick={onClick}
      aria-label={isOpen ? "Grid menyunu bağla" : "Grid menyunu aç"}
    >
      {isOpen ? (
        <HiOutlineX className={styles.gridIcon} size={22} />
      ) : (
        <CgMenuGridO className={styles.gridIcon} size={22} />
      )}
    </button>
  );
};

export default GridMenu;
