
import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Kriptaz Blockchain Sənədləri',
  description: 'Kriptaz Blockchain sənədlərinə xoş gəlmisiniz. Texniki sənədlər, API referansları və inkişaf təlimatları burada.',
  openGraph: {
    title: 'Kriptaz Blockchain Sənədləri',
    description: 'Kriptaz Blockchain sənədlərinə xoş gəlmisiniz. Texniki sənədlər, API referansları və inkişaf təlimatları burada.',
    url: 'https://docs.kriptaz.com',
    images: ['/images/og-image.png'],
  },
  twitter: {
    title: 'Kriptaz Blockchain Sənədləri',
    description: 'Kriptaz Blockchain sənədlərinə xoş gəlmisiniz. Texniki sənədlər, API referansları və inkişaf təlimatları burada.',
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <main id="main-content" role="main" aria-label="Əsas məzmun">
        <h1>Kriptaz Blockchain Sənədləri</h1>
      </main>
    </div>
  );
}
