import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Hukuki konularda güncel bilgiler, makaleler ve rehberler için Av. İsmail Çavuş Hukuk Bürosu blogunu ziyaret edin. Hukuki süreçler hakkında merak ettiklerinizi öğrenin.',
  keywords: 'hukuk blog, avukat blog, iş hukuku, ceza hukuku, aile hukuku, idare hukuku, gayrimenkul hukuku, tazminat hukuku, çavuş hukuk bürosu',
  openGraph: {
    title: 'Blog',
    description: 'Hukuki konularda güncel bilgiler, makaleler ve rehberler için Av. İsmail Çavuş Hukuk Bürosu blogunu ziyaret edin. Hukuki süreçler hakkında merak ettiklerinizi öğrenin.',
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
  canonical: 'https://www.ismailcavus.av.tr/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 