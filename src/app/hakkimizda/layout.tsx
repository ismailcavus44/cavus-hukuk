import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Av. İsmail Çavuş Hukuk Bürosu: Ankara\'da hukukun üstünlüğü ilkesine bağlı, dürüst, şeffaf ve profesyonel hizmet. Misyonumuz ve değerlerimizle tanışın.',
  keywords: 'Çavuş Hukuk Bürosu, Av. İsmail Çavuş, İş Hukuku, Ceza Hukuku, Aile Hukuku, İdare Hukuku, Gayrimenkul Hukuku, Tazminat Hukuku, Ankara Avukat',
  openGraph: {
    title: 'Hakkımızda - Çavuş Hukuk Bürosu',
    description: 'Av. İsmail Çavuş Hukuk Bürosu: Ankara\'da hukukun üstünlüğü ilkesine bağlı, dürüst, şeffaf ve profesyonel hizmet. Misyonumuz ve değerlerimizle tanışın.',
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
    canonical: 'https://ismailcavus.av.tr/hakkimizda',
  },

};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 