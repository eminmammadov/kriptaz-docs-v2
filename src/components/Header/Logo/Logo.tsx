import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/logos/docs-logo-white.svg"
          alt="Sənədlər Loqosu"
          width={120}
          height={20}
          className={styles.logoImage}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
