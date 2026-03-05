import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Py013 - Comunidade Python da Baixada Santista',
  description:
    'Aprenda, Colabore e Evolua com a Comunidade Python da Baixada Santista.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
