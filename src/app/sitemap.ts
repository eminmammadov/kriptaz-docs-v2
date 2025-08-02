import { MetadataRoute } from 'next'
import { menuData, MenuItem } from '@/data/menuData'

// Recursive function to extract all URLs from menu data
function extractUrls(items: MenuItem[], baseUrl: string = 'https://docs.kriptaz.com'): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []
  
  for (const item of items) {
    // Add current item if it has href
    if (item.href) {
      urls.push({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: item.href === '/' ? 1 : 0.8,
      })
    }
    
    // Recursively add children
    if (item.children && item.children.length > 0) {
      urls.push(...extractUrls(item.children, baseUrl))
    }
  }
  
  return urls
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://docs.kriptaz.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
  
  // Dynamic pages from menu data
  const dynamicPages = extractUrls(menuData, baseUrl)
  
  return [...staticPages, ...dynamicPages]
}
