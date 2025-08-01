'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Image
            src="/logos/docs-logo-white.svg"
            alt="Kriptaz"
            width={120}
            height={48}
            className={styles.logo}
          />
        </div>

        {/* Links */}
        <div className={styles.linksSection}>
          <Link href="/contact" className={styles.link}>
            Əlaqə Kriptaz
          </Link>
          <Link href="/privacy" className={styles.link}>
            Məxfilik
          </Link>
          <Link href="/accessibility" className={styles.link}>
            Əlçatanlıq
          </Link>
          <Link href="/terms" className={styles.link}>
            İstifadə şərtləri
          </Link>
          <Link href="/cookies" className={styles.link}>
            Kukilər Seçimləri
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
