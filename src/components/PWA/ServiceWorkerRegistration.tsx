'use client'

import { useEffect } from 'react'

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    // Development modunda Service Worker'ı devre dışı bırak ve mevcut SW'yi unregister et
    if (process.env.NODE_ENV === 'development') {
      console.log('Service Worker: Disabled in development mode')

      // Mevcut Service Worker'ı unregister et
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            console.log('Service Worker: Unregistering', registration)
            registration.unregister()
          })
        })

        // Cache'leri temizle
        if ('caches' in window) {
          caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
              console.log('Service Worker: Deleting cache', cacheName)
              caches.delete(cacheName)
            })
          })
        }
      }

      return
    }

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          })

          console.log('Service Worker: Registered successfully', registration)

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              console.log('Service Worker: New version available')
              
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version is available, show update notification
                  showUpdateNotification()
                }
              })
            }
          })

          // Listen for messages from service worker
          navigator.serviceWorker.addEventListener('message', (event) => {
            console.log('Service Worker: Message received', event.data)
            
            if (event.data.type === 'CACHE_UPDATED') {
              showUpdateNotification()
            }
          })

        } catch (error) {
          console.error('Service Worker: Registration failed', error)
        }
      }

      // Register service worker
      registerServiceWorker()

      // Handle page visibility changes for background sync
      const handleVisibilityChange = () => {
        if (!document.hidden && navigator.serviceWorker.controller) {
          // Page became visible, check for updates
          navigator.serviceWorker.controller.postMessage({
            type: 'CHECK_FOR_UPDATES'
          })
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange)

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
  }, [])

  const showUpdateNotification = () => {
    // Create a simple update notification
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-family: var(--font-kriptaz);
      font-size: 14px;
      max-width: 300px;
      cursor: pointer;
      transition: transform 0.2s ease;
    `
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="font-weight: 500;">Yeni versiya mövcuddur</div>
        <button style="
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        ">Yenilə</button>
      </div>
    `

    // Add click handler to reload page
    notification.addEventListener('click', () => {
      window.location.reload()
    })

    // Add to page
    document.body.appendChild(notification)

    // Auto remove after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 10000)

    // Add hover effect
    notification.addEventListener('mouseenter', () => {
      notification.style.transform = 'translateY(-2px)'
    })
    
    notification.addEventListener('mouseleave', () => {
      notification.style.transform = 'translateY(0)'
    })
  }

  return null
}

export default ServiceWorkerRegistration
