'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

// Footer Content Constants
const FOOTER_CONTENT = {
  links: {
    legal: [
      { href: 'https://www.kriptaz.com/privacy', label: 'Məxfilik siyasəti' },
      { href: 'https://www.kriptaz.com/terms', label: 'İstifadə şərtləri' },
      { href: 'https://www.kriptaz.com', label: 'Kriptaz.com' }
    ],
    social: [
      { href: 'https://twitter.com/kriptazChain', label: 'X', target: '_blank' },
      { href: 'https://github.com/kriptazChain', label: 'Github', target: '_blank' }
    ]
  },
  contact: {
    question: 'Sualınız var?',
    text: 'Bizə',
    brandLink: {
      href: 'mailto:info@kriptaz.com',
      label: '#kriptaz başlığı ilə'
    },
    brandNote: '(daxili Kriptaz istifadəçiləri üçün) yazın və ya',
    inquiryLink: {
      href: 'mailto:info@kriptaz.com',
      label: 'sorğu formu'
    },
    inquiryNote: 'göndərin.'
  },
  update: {
    lastUpdated: 'Son yenilənmə 30 İyul 2025',
    copyright: 'Müəllif hüququ ©',
    company: 'Kriptaz Blockchain'
  },
  logo: {
    href: '/',
    src: '/logos/docs-logo-white.svg',
    alt: 'Kriptaz',
    width: 180,
    height: 72
  }
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Səhifə altlığı">
      {/* Main Footer Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          {/* Links Grid */}
          <nav className={styles.linksGrid} role="navigation" aria-label="Footer naviqasiyası">
            {/* Column 1 - Legal Links */}
            <div className={styles.linkColumn} role="group" aria-label="Hüquqi linklər">
              {FOOTER_CONTENT.links.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={styles.footerLink}
                  aria-label={`${link.label} səhifəsinə keç`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 2 - Social Links */}
            <div className={styles.linkColumn} role="group" aria-label="Sosial media linklər">
              {FOOTER_CONTENT.links.social.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                  aria-label={`${link.label} səhifəsini yeni pəncərədə aç`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 3 - Contact & Info */}
            <div className={styles.contactColumn}>
              <div className={styles.contactSection}>
                <p className={styles.questionText}>{FOOTER_CONTENT.contact.question}</p>
                <p className={styles.contactText}>
                  {FOOTER_CONTENT.contact.text}{' '}
                  <Link href={FOOTER_CONTENT.contact.brandLink.href} className={styles.brandLink}>
                    {FOOTER_CONTENT.contact.brandLink.label}
                  </Link>
                  {' '}{FOOTER_CONTENT.contact.brandNote}{' '}
                  <Link href={FOOTER_CONTENT.contact.inquiryLink.href} className={styles.inquiryLink}>
                    {FOOTER_CONTENT.contact.inquiryLink.label}
                  </Link>
                  {' '}{FOOTER_CONTENT.contact.inquiryNote}
                </p>
              </div>

              <div className={styles.updateSection}>
                <p className={styles.updateText}>
                  {FOOTER_CONTENT.update.lastUpdated}<br />
                  {FOOTER_CONTENT.update.copyright} {new Date().getFullYear()} {FOOTER_CONTENT.update.company}
                </p>
              </div>
            </div>
          </nav>

          {/* Logo */}
          <div className={styles.logoSection}>
            <Link href={FOOTER_CONTENT.logo.href}>
              <Image
                src={FOOTER_CONTENT.logo.src}
                alt={FOOTER_CONTENT.logo.alt}
                width={FOOTER_CONTENT.logo.width}
                height={FOOTER_CONTENT.logo.height}
                className={styles.logo}
                sizes="(max-width: 768px) 120px, 180px"
                quality={95}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
