import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sunnymeadows.example.com'),
  title: {
    default: 'Sunny Meadows Daycare | Nurturing Early Learning',
    template: '%s | Sunny Meadows Daycare',
  },
  description:
    'Sunny Meadows is a licensed daycare offering a safe, warm and playful environment where children aged 6 weeks to 5 years learn, grow and thrive.',
  keywords: [
    'daycare',
    'childcare',
    'preschool',
    'early learning',
    'nursery',
    'infant care',
    'toddler program',
  ],
  openGraph: {
    title: 'Sunny Meadows Daycare | Nurturing Early Learning',
    description:
      'A safe, warm and playful environment where children learn, grow and thrive.',
    type: 'website',
    images: ['/images/hero-classroom.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6a9a78',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${poppins.variable}`}>
      <body className="bg-background antialiased">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
