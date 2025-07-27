import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Av. İsmail Çavuş Hukuk Bürosu ile iletişime geçin. Ankara\'daki ofisimizden veya online kanallarımızdan hukuki danışmanlık ve destek almak için bize ulaşın.',
  keywords: 'Çavuş Hukuk Bürosu, Av. İsmail Çavuş, Ankara Avukat, İletişim, Hukuki Danışmanlık, Avukat İletişim',
  openGraph: {
    title: 'İletişim - Çavuş Hukuk Bürosu',
    description: 'Av. İsmail Çavuş Hukuk Bürosu ile iletişime geçin. Ankara\'daki ofisimizden veya online kanallarımızdan hukuki danışmanlık ve destek almak için bize ulaşın.',
    type: 'website',
    locale: 'tr_TR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ismailcavus.av.tr/iletisim',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 