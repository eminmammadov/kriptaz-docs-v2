'use client'

import React, { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true)
        return
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window.navigator as any).standalone === true) {
        setIsInstalled(true)
        return
      }
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallButton(true)
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallButton(false)
      setDeferredPrompt(null)
      console.log('PWA: App installed successfully')
    }

    checkIfInstalled()
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt')
      } else {
        console.log('PWA: User dismissed the install prompt')
      }
      
      setDeferredPrompt(null)
      setShowInstallButton(false)
    } catch (error) {
      console.error('PWA: Install prompt failed', error)
    }
  }

  // Don't show anything if app is already installed
  if (isInstalled) {
    return null
  }

  // Don't show install button if prompt is not available
  if (!showInstallButton || !deferredPrompt) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#012ACC',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      fontFamily: 'var(--font-kriptaz)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      maxWidth: '300px'
    }}
    onClick={handleInstallClick}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      <div style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px'
      }}>
        📱
      </div>
      <div>
        <div style={{ fontWeight: 500 }}>Tətbiqi quraşdır</div>
        <div style={{ fontSize: '12px', opacity: 0.9 }}>
          Sürət üçün ekrana əlavə et
        </div>
      </div>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => {
          e.stopPropagation()
          setShowInstallButton(false)
        }}
        aria-label="Bildirişi bağla"
      >
        ✕
      </button>
    </div>
  )
}

export default PWAInstaller
