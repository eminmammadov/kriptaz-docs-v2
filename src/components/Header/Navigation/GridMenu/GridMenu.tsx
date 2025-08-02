import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlineX } from 'react-icons/hi';
import styles from './GridMenu.module.css';

interface GridMenuProps {
  onClick?: () => void;
  isOpen?: boolean;
  'aria-label'?: string;
}

const GridMenu: React.FC<GridMenuProps> = ({
  onClick,
  isOpen = false,
  'aria-label': ariaLabel
}) => {
  return (
    <button
      className={`${styles.gridButton} ${isOpen ? styles.active : ''} gridButton`}
      onClick={onClick}
      aria-label={ariaLabel || (isOpen ? "Grid menyunu bağla" : "Grid menyunu aç")}
      aria-expanded={isOpen}
      aria-controls="grid-dropdown"
      aria-haspopup="menu"
      type="button"
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
