'use client'

import React, { useState, useEffect } from 'react'
import { IoRefreshOutline, IoCloseOutline } from 'react-icons/io5'

const PWAUpdateNotification: React.FC = () => {
  const [showUpdateNotification, setShowUpdateNotification] = useState(false)
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Service Worker registration'ını kontrol et
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          // Yeni service worker bekliyor mu kontrol et
          if (registration.waiting) {
            setWaitingWorker(registration.waiting)
            setShowUpdateNotification(true)
          }

          // Service worker update olaylarını dinle
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Yeni versiya hazır
                  setWaitingWorker(newWorker)
                  setShowUpdateNotification(true)
                }
              })
            }
          })

          // Controlling service worker değiştiğinde
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            // Sayfayı yenile
            window.location.reload()
          })
        }
      })
    }
  }, [])

  const handleUpdateClick = () => {
    if (waitingWorker) {
      // Waiting service worker'a skip waiting mesajı gönder
      waitingWorker.postMessage({ type: 'SKIP_WAITING' })
      setShowUpdateNotification(false)
    }
  }

  const handleCloseClick = () => {
    setShowUpdateNotification(false)
  }

  if (!showUpdateNotification) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      top: '47px', // Header'ın hemen altında
      left: '0',
      right: '0',
      backgroundColor: '#1C180D',
      color: 'white',
      padding: '12px 20px',
      zIndex: 1002, // Header'dan yüksek
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontFamily: 'var(--font-kriptaz)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <IoRefreshOutline size={18} style={{ color: '#4CAF50' }} />
        <div>
          <span style={{ fontWeight: 500 }}>Yeni versiya mövcuddur.</span>
          <span style={{ marginLeft: '8px', opacity: 0.9 }}>
            Yeniləmək üçün tıklayın.
          </span>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <button
          onClick={handleUpdateClick}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#45a049'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4CAF50'
          }}
        >
          Yenilə
        </button>
        
        <button
          onClick={handleCloseClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
          }}
          aria-label="Bildirişi bağla"
        >
          <IoCloseOutline size={16} />
        </button>
      </div>
    </div>
  )
}

export default PWAUpdateNotification
