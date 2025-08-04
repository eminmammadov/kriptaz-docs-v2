'use client';

import React, { useState, useRef } from 'react';
import { HiPlay, HiPause, HiArrowRight } from 'react-icons/hi2';
import styles from './Hero.module.css';

// Hero Content Constants
const HERO_CONTENT = {
  video: {
    src: '/videos/hero.mp4',
    poster: '/images/hero-poster.png'
  },
  grids: {
    gallery: {
      title: 'Gallery',
      subtitle: 'Qalereya',
      href: '/gallery'
    },
    resources: {
      title: 'Resources',
      subtitle: 'Resurslar',
      href: '/resources'
    }
  }
} as const;

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Video otomatik başlasın
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video yüklendiğinde otomatik oynat
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay başarısız olursa state'i güncelle
        setIsPlaying(false);
      });
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={styles.hero} role="banner" aria-label="Ana hero bölməsi">
      {/* Background Video */}
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        src={HERO_CONTENT.video.src}
        poster={HERO_CONTENT.video.poster}
        muted
        loop
        playsInline
        autoPlay
        onLoadedData={handleVideoLoad}
        aria-hidden="true"
      />
      
      {/* Video Overlay */}
      <div className={styles.videoOverlay} />

      {/* Hero Grid */}
      <div className={styles.heroGrid}>
        {/* Grid 1 - Video Controls Only */}
        <div className={styles.gridItem} data-grid="philosophy">
          <div className={styles.gridContent}>
            <div className={styles.gridHeader}>
              <button
                className={styles.videoControl}
                onClick={toggleVideo}
                aria-label={isPlaying ? 'Videonu dayandır' : 'Videonu oynat'}
              >
                {isPlaying ? <HiPause /> : <HiPlay />}
              </button>
            </div>
          </div>
        </div>

        {/* Grid 2 - Gallery Link */}
        <div className={styles.gridItem} data-grid="gallery">
          <a href={HERO_CONTENT.grids.gallery.href} className={styles.gridLink}>
            <div className={styles.gridContent}>
              <div className={styles.gridHeader}>
                <h2 className={styles.gridTitle}>{HERO_CONTENT.grids.gallery.title}</h2>
                <HiArrowRight className={styles.gridIcon} />
              </div>
            </div>
          </a>
        </div>

        {/* Grid 3 - Resources Link */}
        <div className={styles.gridItem} data-grid="resources">
          <a href={HERO_CONTENT.grids.resources.href} className={styles.gridLink}>
            <div className={styles.gridContent}>
              <div className={styles.gridHeader}>
                <h2 className={styles.gridTitle}>{HERO_CONTENT.grids.resources.title}</h2>
                <HiArrowRight className={styles.gridIcon} />
              </div>
            </div>
          </a>
        </div>

        {/* Grid 4 - Empty (Hidden on tablet/mobile) */}
        <div className={styles.gridItem} data-grid="empty">
          <div className={styles.gridContent}>
            {/* Boş grid - sadece desktop'da görünür */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
