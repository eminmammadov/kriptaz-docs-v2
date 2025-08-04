'use client'

import { useEffect } from 'react'

const CacheCleaner: React.FC = () => {
  useEffect(() => {
    // Sadece development modunda çalış
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    const clearAllCaches = async () => {
      try {
        // Service Worker cache'lerini temizle
        if ('caches' in window) {
          const cacheNames = await caches.keys()
          await Promise.all(
            cacheNames.map(cacheName => {
              console.log('🧹 Clearing cache:', cacheName)
              return caches.delete(cacheName)
            })
          )
        }

        // Service Worker'ları unregister et
        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations()
          await Promise.all(
            registrations.map(registration => {
              console.log('🧹 Unregistering SW:', registration.scope)
              return registration.unregister()
            })
          )
        }

        // Local Storage temizle (opsiyonel)
        if (typeof Storage !== 'undefined') {
          const keysToRemove = []
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key && key.startsWith('kriptaz-')) {
              keysToRemove.push(key)
            }
          }
          keysToRemove.forEach(key => {
            console.log('🧹 Clearing localStorage:', key)
            localStorage.removeItem(key)
          })
        }

        console.log('✅ Development cache cleanup completed')
      } catch (error) {
        console.error('❌ Cache cleanup failed:', error)
      }
    }

    // Sayfa yüklendiğinde cache'leri temizle
    clearAllCaches()

    // Hot reload için window focus olayında da temizle
    const handleFocus = () => {
      clearAllCaches()
    }

    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  // Development modunda görsel bir indicator göster
  if (process.env.NODE_ENV === 'development') {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          background: '#10b981',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '10px',
          fontFamily: 'monospace',
          zIndex: 9999,
          opacity: 0.7,
        }}
      >
        DEV MODE - Cache Disabled
      </div>
    )
  }

  return null
}

export default CacheCleaner
