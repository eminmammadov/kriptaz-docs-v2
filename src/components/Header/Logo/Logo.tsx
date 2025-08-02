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
          alt="Kriptaz Blockchain Sənədləri"
          width={120}
          height={20}
          className={styles.logoImage}
          priority
          sizes="(max-width: 1054px) 100px, 120px"
          quality={95}
        />
      </Link>
    </div>
  );
};

export default Logo;
