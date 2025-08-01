'use client';

import React from 'react';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { gridMenuData, GridMenuItem } from '@/data/gridMenuData';
import styles from './GridDropdown.module.css';

interface GridDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const GridDropdown: React.FC<GridDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const renderMenuItem = (item: GridMenuItem) => {
    const isCategoryTitle = item.id.includes('-title');

    return (
      <div key={item.id} className={styles.menuItem}>
        {item.hasSeparator && <div className={styles.separator} />}

        <div className={`${styles.menuItemContent} ${isCategoryTitle ? styles.categoryTitle : ''}`}>
          <div className={styles.menuItemInner}>
            {!isCategoryTitle && <div className={styles.blueIndicator} />}
            <Link
              href={item.href || '#'}
              className={styles.menuLink}
              onClick={isCategoryTitle ? undefined : onClose}
            >
              {item.title}
            </Link>
            {item.hasExternalIcon && (
              <HiOutlineExternalLink className={styles.externalIcon} size={16} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.dropdown}>
        <nav className={styles.navigation}>
          {gridMenuData.map(renderMenuItem)}
        </nav>
      </div>
    </>
  );
};

export default GridDropdown;
