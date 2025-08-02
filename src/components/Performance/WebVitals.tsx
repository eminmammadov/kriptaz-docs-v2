'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metric)
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // You can send to Google Analytics, Vercel Analytics, etc.
      // Example: gtag('event', metric.name, { value: metric.value })
      
      // For now, we'll just log critical metrics
      if (metric.name === 'CLS' && metric.value > 0.1) {
        console.warn('High CLS detected:', metric.value)
      }
      if (metric.name === 'LCP' && metric.value > 2500) {
        console.warn('High LCP detected:', metric.value)
      }
      if (metric.name === 'FID' && metric.value > 100) {
        console.warn('High FID detected:', metric.value)
      }
    }
  })

  return null
}

export default WebVitals
