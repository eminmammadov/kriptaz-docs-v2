'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  // Aktif link'in parent'larını bul ve otomatik expand et
  const findActiveParents = useCallback((items: MenuItem[], currentPath: string, parents: string[] = []): string[] => {
    for (const item of items) {
      if (item.href === currentPath) {
        return parents;
      }
      if (item.children) {
        const found = findActiveParents(item.children, currentPath, [...parents, item.id]);
        if (found.length > 0) {
          return found;
        }
      }
    }
    return [];
  }, []);

  const activeParents = findActiveParents(menuData, pathname);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(activeParents));

  // Pathname değiştiğinde aktif parent'ları expand et
  useEffect(() => {
    const newActiveParents = findActiveParents(menuData, pathname);
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      newActiveParents.forEach(parentId => newSet.add(parentId));
      return newSet;
    });
  }, [pathname, findActiveParents]);

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderMenuItem = (item: MenuItem, level: number = 0): React.ReactNode => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isExpandable = hasChildren;
    const isActive = item.href === pathname;

    return (
      <div key={item.id} className={styles.menuItem}>
        {item.hasSeparator && <div className={styles.separator} />}

        <div
          className={`${styles.menuItemContent} ${level > 0 ? styles.subItem : ''} ${isActive ? styles.active : ''}`}
          onClick={() => isExpandable && toggleExpanded(item.id)}
          role={isExpandable ? "button" : "menuitem"}
          aria-expanded={isExpandable ? isExpanded : undefined}
          tabIndex={isExpandable ? 0 : -1}
        >
          <div className={styles.menuItemInner}>
            <div className={styles.blueIndicator} />
            {item.href ? (
              <Link
                href={item.href}
                className={styles.menuLink}
                onClick={isMobile ? onClose : undefined}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
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
        id="aside-menu"
        role="navigation"
        aria-label="Əsas naviqasiya menyusu"
        aria-hidden={isMobile && !isOpen}
      >
        <nav className={styles.navigation} role="menu">
          {menuData.map(item => renderMenuItem(item))}
        </nav>
      </aside>
    </>
  );
};

export default AsideMenu;
