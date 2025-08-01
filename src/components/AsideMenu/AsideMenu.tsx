'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { MenuItem, menuData } from '@/data/menuData';
import styles from './AsideMenu.module.css';

interface AsideMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const AsideMenu: React.FC<AsideMenuProps> = ({ 
  isOpen = true, 
  onClose, 
  isMobile = false 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isExpandable = item.isExpandable || hasChildren;

    return (
      <div key={item.id} className={styles.menuItem}>
        {item.hasSeparator && <div className={styles.separator} />}

        <div
          className={`${styles.menuItemContent} ${level > 0 ? styles.subItem : ''}`}
          onClick={() => isExpandable && toggleExpanded(item.id)}
        >
          <div className={styles.menuItemInner}>
            <div className={styles.blueIndicator} />
            {item.href ? (
              <Link
                href={item.href}
                className={styles.menuLink}
                onClick={isMobile ? onClose : undefined}
              >
                {item.title}
              </Link>
            ) : (
              <span className={styles.menuTitle}>
                {item.title}
              </span>
            )}
          </div>

          {isExpandable && (
            <button
              className={styles.expandButton}
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded(item.id);
              }}
            >
              {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          )}
        </div>

        {isExpandable && isExpanded && hasChildren && (
          <div className={styles.subMenu}>
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className={styles.backdrop} 
          onClick={onClose}
        />
      )}
      
      <aside 
        className={`${styles.asideMenu} ${isMobile ? styles.mobile : styles.desktop} ${isOpen ? styles.open : ''}`}
      >
        <nav className={styles.navigation}>
          {menuData.map(item => renderMenuItem(item))}
        </nav>
      </aside>
    </>
  );
};

export default AsideMenu;
