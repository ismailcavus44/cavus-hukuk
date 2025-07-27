import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import FontOptimizer from '@/components/ui/FontOptimizer';
import AIChatbot from '@/components/ui/AIChatbot';
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Çavuş Hukuk Bürosu',
    template: '%s | Çavuş Hukuk Bürosu'
  },
  description: 'Ankara\'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz. Ticaret, aile, iş ve ceza hukuku alanlarında uzman avukatlarımızla hizmetinizdeyiz.',
  keywords: ['ankara avukat', 'ankara hukuk bürosu', 'avukat ankara', 'hukuki danışmanlık ankara', 'ticaret hukuku ankara', 'aile hukuku ankara', 'iş hukuku ankara', 'ceza hukuku ankara'],
  authors: [{ name: 'Çavuş Hukuk Bürosu' }],
  creator: 'Çavuş Hukuk Bürosu',
  publisher: 'Çavuş Hukuk Bürosu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ankaraavukat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr',
    siteName: 'Çavuş Hukuk Bürosu',
    title: 'Çavuş Hukuk Bürosu',
    description: 'Ankara\'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Çavuş Hukuk Bürosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çavuş Hukuk Bürosu',
    description: 'Ankara\'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz.',
    images: ['/og-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={manrope.variable}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co; frame-src 'self';" />
      </head>
      <body className={`${manrope.className} antialiased bg-white text-slate-900 font-manrope`}>
        <FontOptimizer>
          <Header />
          <main className="pt-20 md:pt-32">{children}</main>
          <Footer />
          <MobileCTA />
          <AIChatbot />
        </FontOptimizer>
        <SpeedInsights />
      </body>
    </html>
  );
}
