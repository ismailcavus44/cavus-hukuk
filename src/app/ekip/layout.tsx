import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description: 'Av. İsmail Çavuş Hukuk Bürosu\'nun deneyimli ve uzman ekibiyle tanışın. Hukukun farklı alanlarında uzmanlaşmış avukatlarımızla hukuki sorunlarınıza çözüm bulun.',
  keywords: 'Çavuş Hukuk Bürosu, Av. İsmail Çavuş, Ankara Avukat, İş Hukuku, Ceza Hukuku, Aile Hukuku, İdare Hukuku, Gayrimenkul Hukuku, Tazminat Hukuku',
  openGraph: {
    title: 'Ekibimiz - Çavuş Hukuk Bürosu',
    description: 'Av. İsmail Çavuş Hukuk Bürosu\'nun deneyimli ve uzman ekibiyle tanışın. Hukukun farklı alanlarında uzmanlaşmış avukatlarımızla hukuki sorunlarınıza çözüm bulun.',
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
    canonical: 'https://ismailcavus.av.tr/ekip',
  },
};

export default function EkipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 