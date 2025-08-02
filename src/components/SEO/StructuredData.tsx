import React from 'react'

interface StructuredDataProps {
  type?: 'website' | 'article' | 'documentation'
  title?: string
  description?: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'website',
  title = 'Kriptaz Blockchain Sənədləri',
  description = 'Bu sənəd Kriptaz Blockchain-in bütün layihə planlamasını və ətraflı sənədlərini əhatə edir.',
  url = 'https://docs.kriptaz.com',
  image = 'https://docs.kriptaz.com/images/og-image.png',
  datePublished,
  dateModified,
  author = 'Kriptaz Blockchain'
}) => {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'WebSite' : type === 'article' ? 'Article' : 'TechArticle',
      name: title,
      description,
      url,
      image,
      publisher: {
        '@type': 'Organization',
        name: 'Kriptaz Blockchain',
        url: 'https://www.kriptaz.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://docs.kriptaz.com/logos/docs-logo-white.svg'
        }
      }
    }

    if (type === 'website') {
      return {
        ...baseData,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://docs.kriptaz.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      }
    }

    if (type === 'article' || type === 'documentation') {
      return {
        ...baseData,
        author: {
          '@type': 'Organization',
          name: author
        },
        datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        }
      }
    }

    return baseData
  }

  const structuredData = generateStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

export default StructuredData
