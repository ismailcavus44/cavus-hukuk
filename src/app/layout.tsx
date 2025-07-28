import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import { OrganizationSchema, LocalBusinessSchema, ServiceCatalogSchema, WebPageSchema } from '@/components/seo';
import CacheDebugger from '@/components/ui/CacheDebugger';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
});

// Critical CSS - inline
const criticalCSS = `
  /* Critical styles for above-the-fold content */
  body { margin: 0; font-family: var(--font-inter), system-ui, sans-serif; }
  .hero-section { min-height: 100vh; background: white; }
  .loading-spinner { animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
`;

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
    '@type': 'Service',
    name: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hukuki danışmanlık.',
    url: 'https://ismailcavus.av.tr/hizmetler/aile-hukuku',
    serviceType: 'Aile Hukuku'
  },
  {
    '@type': 'Service',
    name: 'İş Hukuku',
    description: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında hukuki danışmanlık.',
    url: 'https://ismailcavus.av.tr/hizmetler/is-hukuku',
    serviceType: 'İş Hukuku'
  },
  {
    '@type': 'Service',
    name: 'Ceza Hukuku',
    description: 'Ceza davaları, savunma ve hukuki danışmanlık konularında profesyonel destek.',
    url: 'https://ismailcavus.av.tr/hizmetler/ceza-hukuku',
    serviceType: 'Ceza Hukuku'
  },
  {
    '@type': 'Service',
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
      <head>
        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-header.png" as="image" type="image/png" />
        <link rel="preload" href="/hero1.jpg" as="image" type="image/jpeg" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//vptmbniqrrxqggqwldww.supabase.co" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vptmbniqrrxqggqwldww.supabase.co" />
      </head>
      <body className={inter.className}>
        {/* SEO Schema Markup */}
        <OrganizationSchema
          name="Çavuş Hukuk Bürosu"
          description="Ankara'da 20 yılı aşkın deneyimimizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz."
          url="https://ismailcavus.av.tr"
          logo="https://ismailcavus.av.tr/logo-header.png"
          telephone="+90 312 123 45 67"
          email="info@ismailcavus.av.tr"
          address={{
            streetAddress: "Kızılay Mahallesi",
            addressLocality: "Ankara",
            addressRegion: "Ankara",
            postalCode: "06000",
            addressCountry: "TR"
          }}
          geo={{
            latitude: "39.9334",
            longitude: "32.8597"
          }}
          openingHours="Mo-Fr 09:00-18:00"
          priceRange="$$"
          sameAs={[
            "https://www.facebook.com/cavushukuk",
            "https://www.linkedin.com/company/cavushukuk"
          ]}
        />

        <LocalBusinessSchema
          name="Çavuş Hukuk Bürosu"
          description="Ankara'da hukuki danışmanlık ve avukatlık hizmetleri"
          url="https://ismailcavus.av.tr"
          telephone="+90 312 123 45 67"
          email="info@ismailcavus.av.tr"
          address={{
            streetAddress: "Kızılay Mahallesi",
            addressLocality: "Ankara",
            addressRegion: "Ankara",
            postalCode: "06000",
            addressCountry: "TR"
          }}
          geo={{
            latitude: "39.9334",
            longitude: "32.8597"
          }}
          openingHours="Mo-Fr 09:00-18:00"
          priceRange="$$"
          sameAs={[
            "https://www.facebook.com/cavushukuk",
            "https://www.linkedin.com/company/cavushukuk"
          ]}
        />

        <ServiceCatalogSchema
          name="Çavuş Hukuk Bürosu Hizmet Kataloğu"
          description="Ankara'da sunulan hukuki hizmetlerin kapsamlı kataloğu"
          url="https://ismailcavus.av.tr/hizmetler"
          provider={{
            name: "Çavuş Hukuk Bürosu",
            url: "https://ismailcavus.av.tr",
            logo: "https://ismailcavus.av.tr/logo-header.png"
          }}
          services={hizmetKatalogu}
          areaServed={{
            '@type': 'City',
            name: 'Ankara'
          }}
        />

        <WebPageSchema
          title="Ankara Avukat - Çavuş Hukuk Bürosu"
          description="Ankara Avukat Av. İsmail Çavuş: Boşanma, ceza, ticaret, gayrimenkul hukuku alanlarında uzman hukuki danışmanlık ve avukatlık hizmetleri."
          url="https://ismailcavus.av.tr"
          image="https://ismailcavus.av.tr/og-image.jpg"
          author={{
            name: "Av. İsmail Çavuş"
          }}
          publisher={{
            name: "Çavuş Hukuk Bürosu",
            logo: "https://ismailcavus.av.tr/logo-header.png"
          }}
          datePublished="2024-01-01"
          dateModified="2024-12-19"
          breadcrumb={[
            { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' }
          ]}
          isPartOf={{
            name: 'Çavuş Hukuk Bürosu',
            url: 'https://ismailcavus.av.tr'
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        
        {/* Cache Debugger - Sadece development'ta */}
        <CacheDebugger />
      </body>
    </html>
  );
}
