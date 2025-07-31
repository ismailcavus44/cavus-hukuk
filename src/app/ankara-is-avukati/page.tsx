import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Ankara İş Avukatı',
  description: 'Ankara\'da iş hukuku davalarında uzman avukatlar. İşçi alacakları, işe iade ve iş kazası davalarında hukuki danışmanlık.',
  keywords: 'ankara iş avukatı, iş hukuku, işçi hakları, iş davası, avukat ankara, işçi alacakları, işe iade, iş kazası, iş avukatı ankara',
  openGraph: {
    title: 'Ankara İş Avukatı',
    description: 'Ankara\'da iş hukuku davalarında uzman avukatlar. İşçi alacakları, işe iade ve iş kazası davalarında hukuki danışmanlık.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-is-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara İş Avukatı',
    description: 'Ankara\'da iş hukuku davalarında uzman avukatlar. İşçi alacakları, işe iade ve iş kazası davalarında hukuki danışmanlık.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-is-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'iş avukatı, iş hukuku, işçi hakları, ankara',
  },
};

const AnkaraIsAvukatiPage = () => {
  const tableOfContents = [
    { id: 'is-avukati-nedir', title: 'İş Avukatı Nedir?', level: 2 },
    { id: 'is-hukuku-alanlari', title: 'İş Hukuku Alanları', level: 2 },
    { id: 'isci-alacaklari', title: 'İşçi Alacakları', level: 2 },
    { id: 'ise-iade-davasi', title: 'İşe İade Davası', level: 2 },
    { id: 'is-kazasi-davasi', title: 'İş Kazası Davası', level: 2 },
    { id: 'iletisim', title: 'İletişim', level: 2 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SEO Schema Data
  const seoSchemaData = {
    name: 'Ankara İş Avukatı',
    description: 'Ankara\'da iş hukuku davalarında uzman avukatlar. İşçi-işveren uyuşmazlıkları ve iş hukuku konularında profesyonel hukuki destek.',
    url: 'https://ismailcavus.av.tr/ankara-is-avukati',
    logo: 'https://ismailcavus.av.tr/logo-header.png',
    telephone: '+90 505 398 99 81',
    email: 'info@ismailcavus.av.tr',
    address: {
      streetAddress: 'Korkutreis Mahallesi Cihan Sokak No:12/8',
      addressLocality: 'Çankaya',
      addressRegion: 'Ankara',
      postalCode: '06000',
      addressCountry: 'TR'
    },
    geo: {
      latitude: '39.9334',
      longitude: '32.8597'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/cavushukuk',
      'https://www.linkedin.com/company/cavushukuk'
    ],
    areaServed: {
      '@type': 'City',
      name: 'Ankara'
    },
    serviceType: 'İş Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara İş Avukatı', url: 'https://ismailcavus.av.tr/ankara-is-avukati' }
  ];

  return (
    <>
      <LegalServiceSchema {...seoSchemaData} />
      <BreadcrumbSchema items={breadcrumbData} />
      <main className="bg-white min-h-screen py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Ana İçerik */}
            <div className="lg:col-span-3">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Breadcrumb 
                  items={[
                    { label: 'Ankara İş Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara İş Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da iş hukuku alanında uzman avukatlarımız, işçi-işveren uyuşmazlıklarında profesyonel hukuki destek sağlamaktadır. İşçi alacakları, işe iade ve iş kazası davalarında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="is-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İş Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  İş avukatı, iş hukuku alanında uzmanlaşmış, işçi-işveren uyuşmazlıklarında her iki tarafı da temsil edebilen hukuk profesyonelidir. Ankara'da iş avukatı olarak hizmet veren uzmanlarımız, İş Kanunu ve ilgili mevzuat kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  İş avukatının temel görevleri arasında, iş sözleşmelerinin hazırlanması, işçi alacaklarının takibi, işe iade davalarında temsil ve iş kazası süreçlerinde hukuki destek bulunmaktadır. Ankara iş avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="is-hukuku-alanlari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İş Hukuku Alanları
                </h2>
                <p className="mb-6">
                  İş hukuku, geniş bir alanı kapsamaktadır ve farklı uyuşmazlık türlerini içermektedir. Ankara'da iş avukatı olarak, iş hukukunun tüm alanlarında hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İş Sözleşmesi Uyuşmazlıkları</h3>
                <p className="mb-4">
                  İş sözleşmesi uyuşmazlıkları, iş hukukunun en yaygın konularından biridir. Ankara iş avukatı olarak, iş sözleşmesi hazırlama, değişiklik ve fesih süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İş Güvencesi</h3>
                <p className="mb-4">
                  İş güvencesi, belirli koşulları sağlayan işçilerin keyfi işten çıkarılmasını engelleyen bir koruma mekanizmasıdır. Ankara'da iş avukatı olarak, iş güvencesi kapsamındaki işçilerin haklarını korumaktayız.
                </p>
                
                <h2 id="isci-alacaklari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İşçi Alacakları
                </h2>
                <p className="mb-6">
                  İşçi alacakları, iş hukukunun en önemli konularından biridir. Ankara'da iş avukatı olarak, işçi alacaklarının takibi ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ücret Alacakları</h3>
                <p className="mb-4">
                  Ücret alacakları, işçinin çalışması karşılığında hak ettiği ücretin ödenmemesi durumunda ortaya çıkar. Ankara iş avukatı olarak, ücret alacaklarının takibi ve tahsili konusunda etkili çözümler sunmaktayız.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kıdem Tazminatı</h3>
                <p className="mb-4">
                  Kıdem tazminatı, işçinin işten ayrılması durumunda hak ettiği önemli bir alacaktır. Ankara'da iş avukatı olarak, kıdem tazminatı hesaplama ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İhbar Tazminatı</h3>
                <p className="mb-4">
                  İhbar tazminatı, işverenin işçiyi önceden haber vermeden işten çıkarması durumunda ödenmesi gereken tazminattır. Ankara iş avukatı olarak, ihbar tazminatı konusunda müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="ise-iade-davasi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İşe İade Davası
                </h2>
                <p className="mb-6">
                  İşe iade davası, iş güvencesi kapsamındaki işçilerin geçersiz nedenle işten çıkarılması durumunda açabilecekleri bir davadır. Ankara'da iş avukatı olarak, işe iade davalarında etkili savunma stratejileri geliştirmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İşe İade Koşulları</h3>
                <p className="mb-4">
                  İşe iade davası açabilmek için belirli koşulların sağlanması gerekmektedir. Ankara iş avukatı olarak, işe iade koşullarının değerlendirilmesi ve dava stratejisinin belirlenmesi konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İşe İade Süreci</h3>
                <p className="mb-4">
                  İşe iade süreci, dava açılmasından kararın kesinleşmesine kadar olan aşamaları kapsar. Ankara'da iş avukatı olarak, işe iade sürecinin her aşamasında müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="is-kazasi-davasi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İş Kazası Davası
                </h2>
                <p className="mb-6">
                  İş kazası davaları, iş kazası sonucu zarar gören işçilerin haklarını korumak için açılan davalardır. Ankara'da iş avukatı olarak, iş kazası davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İş Kazası Tanımı</h3>
                <p className="mb-4">
                  İş kazası, işçinin işyerinde veya işin yürütümü nedeniyle işyeri dışında meydana gelen kazalardır. Ankara iş avukatı olarak, iş kazası tanımının doğru yapılması ve hakların korunması konusunda hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İş Kazası Tazminatı</h3>
                <p className="mb-4">
                  İş kazası sonucu zarar gören işçiler, çeşitli tazminat haklarına sahiptir. Ankara'da iş avukatı olarak, iş kazası tazminatlarının hesaplanması ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da iş avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. İş hukuku alanında profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  İş hukuku alanında uzman avukatlarımız, işçi-işveren uyuşmazlıklarında müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da iş avukatı olarak, her aşamada yanınızdayız.
                </p>
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="İş hukuku konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraIsAvukatiPage; 