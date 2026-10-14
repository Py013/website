import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Py013 - Comunidade Python da Baixada Santista',
    short_name: 'Py013',
    description:
      'Comunidade sem fins lucrativos de Python da Baixada Santista. Aprenda, colabore e evolua com aulas, eventos e encontros de tecnologia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
