import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Mendy Klein | Transformational Life Coach & Somatic Practitioner',
  description: 'Transform your life with Mendy Klein - Life Coach, Somatic Practitioner, Breathwork Facilitator, and Transformational Touch Therapist. Integrating Kabbalah, Chassidus, and Musar for mind, body, and soul alignment. Serving Brooklyn, Rockland County, and clients worldwide via Zoom.',
  keywords: ['life coach', 'somatic therapy', 'breathwork', 'transformational touch', 'Brooklyn', 'Rockland County', 'online coaching', 'personal development', 'healing', 'wellness', 'Kabbalah', 'Chassidus', 'Musar', 'spiritual coaching'],
  authors: [{ name: 'Mendy Klein' }],
  openGraph: {
    title: 'Mendy Klein | Transformational Life Coach',
    description: 'Transform your life through somatic practices, breathwork, and personalized coaching for body, mind, and spirit.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mendy Klein | Transformational Life Coach',
    description: 'Transform your life through somatic practices, breathwork, and personalized coaching.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#f5f3f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
