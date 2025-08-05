import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/ui/MobileCTA';
import CacheDebugger from '@/components/debug/CacheDebugger';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
});

export const metadata: Metadata = {
  title: {
    default: 'Çavuş Hukuk Bürosu - Ankara Avukat',
    template: '%s | Çavuş Hukuk Bürosu'
  },
  description: 'Ankara\'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz. Boşanma, ceza, ticaret, gayrimenkul hukuku alanlarında uzman avukatlar.',
  keywords: 'ankara avukat, çavuş hukuk bürosu, boşanma avukatı, ceza avukatı, ticaret avukatı, gayrimenkul avukatı, hukuki danışmanlık',
  authors: [{ name: 'Av. İsmail Çavuş' }],
  creator: 'Çavuş Hukuk Bürosu',
  publisher: 'Çavuş Hukuk Bürosu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ismailcavus.av.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr',
    siteName: 'Çavuş Hukuk Bürosu',
    title: 'Ankara Avukat - Güvenilir Hukuki Danışmanlık',
    description: 'Ankara Avukat Av. İsmail Çavuş: Boşanma, ceza, ticaret, gayrimenkul hukuku alanlarında uzman hukuki danışmanlık ve avukatlık hizmetleri. Hukuki sorunlarınıza profesyonel çözümler için bize ulaşın.',
    images: [
      {
        url: 'https://ismailcavus.av.tr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Çavuş Hukuk Bürosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Avukat - Çavuş Hukuk Bürosu',
    description: 'Ankara\'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz.',
    images: ['https://ismailcavus.av.tr/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

// Hizmet kataloğu verisi
const hizmetKatalogu = [
  {
    '@type': 'Service' as const,
    name: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hukuki danışmanlık.',
    url: 'https://ismailcavus.av.tr/hizmetler/aile-hukuku',
    serviceType: 'Aile Hukuku'
  },
  {
    '@type': 'Service' as const,
    name: 'İş Hukuku',
    description: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında hukuki danışmanlık.',
    url: 'https://ismailcavus.av.tr/hizmetler/is-hukuku',
    serviceType: 'İş Hukuku'
  },
  {
    '@type': 'Service' as const,
    name: 'Ceza Hukuku',
    description: 'Ceza davaları, savunma ve hukuki danışmanlık konularında profesyonel destek.',
    url: 'https://ismailcavus.av.tr/hizmetler/ceza-hukuku',
    serviceType: 'Ceza Hukuku'
  },
  {
    '@type': 'Service' as const,
    name: 'İdare Hukuku',
    description: 'İdari işlemler, idari sözleşmeler ve kamu personeli hukuku konularında danışmanlık.',
    url: 'https://ismailcavus.av.tr/hizmetler/idare-hukuku',
    serviceType: 'İdare Hukuku'
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={manrope.className}>
        <Header />
        <main className="pt-32 lg:pt-40">{children}</main>
        <Footer />
        <MobileCTA />
        
        {/* Cache Debugger - Sadece development'ta */}
        <CacheDebugger />
      </body>
    </html>
  );
}
