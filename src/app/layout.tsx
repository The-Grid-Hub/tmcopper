import type { Metadata, Viewport } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#091B3D',
}

export const metadata: Metadata = {
  title: 'TM Copper Limited | Pipeline ROW Erosion Control & Infrastructure Protection',
  description:
    'TM Copper Limited is a specialised indigenous oil and gas engineering company dedicated to the protection, stabilisation, and preservation of pipeline right-of-way corridors through advanced erosion control engineering and environmental infrastructure solutions.',
  keywords: [
    'pipeline erosion control',
    'right-of-way protection',
    'terrain stabilisation',
    'flood mitigation',
    'civil geotechnical engineering',
    'Niger Delta',
    'TM Copper Limited',
    'pipeline infrastructure protection',
    'swamp riverine engineering',
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
  openGraph: {
    title: 'TM Copper Limited | Pipeline ROW Erosion Control & Infrastructure Protection',
    description:
      'TM Copper Limited delivers specialised engineering solutions that improve infrastructure durability, operational continuity, environmental resilience, and regulatory compliance across pipeline right-of-way corridors.',
    url: 'https://www.tmcopperltd.com',
    siteName: 'TM Copper Limited',
    images: [
      {
        url: '/images/logo.png',
        width: 300,
        height: 180,
        alt: 'TM Copper Limited',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'TM Copper Limited',
    description:
      'Pipeline right-of-way erosion control & infrastructure protection specialists — protecting pipeline corridors, preserving critical infrastructure.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
