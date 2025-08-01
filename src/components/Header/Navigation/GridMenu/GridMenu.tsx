import React from 'react';
import styles from './GridMenu.module.css';
import { CgMenuGridO } from 'react-icons/cg';

interface GridMenuProps {
  onClick?: () => void;
}

const GridMenu: React.FC<GridMenuProps> = ({ onClick }) => {
  return (
    <button
      className={`${styles.gridButton} gridButton`}
      onClick={onClick}
      aria-label="Grid görünüş"
    >
      <CgMenuGridO className={styles.gridIcon} size={22} />
    </button>
  );
};

export default GridMenu;
