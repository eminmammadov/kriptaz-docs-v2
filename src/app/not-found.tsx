import React from 'react'
import { Metadata } from 'next'
import { HiHome, HiCube, HiBriefcase, HiPhone } from 'react-icons/hi2'
import styles from './not-found.module.css'

// Constants
const CONTENT = {
  title: 'Üzr istəyirik!',
  description: 'Axtardığınız səhifə köçürülmüş və ya silinmiş ola bilər. Kriptaz.com saytında yeni axtarış başladın və ya aşağıda göstərilən populyar saytlardan birini ziyarət edin.',
  backgroundText: '404',
  continueTitle: 'Kəşfə davam edin',
  links: [
    { title: 'Ana Səhifə', icon: HiHome, href: '/' },
    { title: 'Məhsullarımız', icon: HiCube, href: '#' },
    { title: 'Karyera', icon: HiBriefcase, href: '#' },
    { title: 'Əlaqə', icon: HiPhone, href: '#' }
  ]
} as const

export const metadata: Metadata = {
  title: '404 - Səhifə Tapılmadı | Kriptaz Blockchain Sənədləri',
  description: 'Axtardığınız səhifə tapılmadı. Kriptaz Blockchain sənədlərinə qayıdın.',
  robots: 'noindex, nofollow'
}

export default function NotFound() {
  return (
    <>
      {/* Main 404 Section */}
      <main className={styles.container}>
        {/* Background 404 Text */}
        <div className={styles.backgroundText}>{CONTENT.backgroundText}</div>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>{CONTENT.title}</h1>
          <p className={styles.description}>
            {CONTENT.description}
          </p>
        </div>
      </main>

      {/* Continue Exploring Section */}
      <section className={styles.continueSection}>
        <h2 className={styles.continueTitle}>{CONTENT.continueTitle}</h2>
        <div className={styles.linksGrid}>
          {CONTENT.links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className={styles.linkCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkIcon}>
                  <IconComponent />
                </span>
                <span className={styles.linkTitle}>{link.title}</span>
              </a>
            );
          })}
        </div>
      </section>
    </>
  )
}
