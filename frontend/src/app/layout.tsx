import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const SITE_URL = 'https://py013.com.br';
const SITE_NAME = 'Py013 - Comunidade Python da Baixada Santista';
const SITE_DESCRIPTION =
  'Comunidade sem fins lucrativos de Python da Baixada Santista. Aprenda, colabore e evolua com aulas, eventos e encontros de tecnologia desde 2018.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | Py013',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Py013',
    'comunidade Python',
    'Baixada Santista',
    'Python',
    'programação',
    'tecnologia',
    'eventos de tecnologia',
    'Santos SP',
    'comunidade tech',
  ],
  authors: [{ name: 'Py013', url: SITE_URL }],
  creator: 'Py013',
  publisher: 'Py013',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/banner.png',
        width: 800,
        height: 450,
        alt: 'Py013 - Comunidade Python da Baixada Santista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/images/banner.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Py013',
  alternateName: 'Py013 - Comunidade Python da Baixada Santista',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: '2018',
  nonprofitStatus: 'Nonprofit',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santos',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/py013_baixadasantista/',
    'https://www.linkedin.com/company/py013',
    'https://github.com/Py013',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
