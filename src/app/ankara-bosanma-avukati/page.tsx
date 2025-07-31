import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo';
import AuthorBox from '@/components/ui/AuthorBox';

export const metadata: Metadata = {
  title: 'Ankara Boşanma Avukatı',
  description: 'Ankara\'da boşanma davalarında uzman avukatlar. Anlaşmalı boşanma, çekişmeli boşanma ve mal paylaşımı konularında destek.',
  keywords: 'ankara boşanma avukatı, boşanma davası, velayet, nafaka, aile hukuku, avukat ankara, anlaşmalı boşanma, çekişmeli boşanma, mal paylaşımı, boşanma avukatı ankara',
  openGraph: {
    title: 'Ankara Boşanma Avukatı',
    description: 'Ankara\'da boşanma davalarında uzman avukatlar. Anlaşmalı boşanma, çekişmeli boşanma ve mal paylaşımı konularında destek.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-bosanma-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Boşanma Avukatı',
    description: 'Ankara\'da boşanma davalarında uzman avukatlar. Anlaşmalı boşanma, çekişmeli boşanma ve mal paylaşımı konularında destek.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-bosanma-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'boşanma avukatı, aile hukuku, boşanma davası, ankara',
  },
};

const AnkaraBosanmaAvukatiPage = () => {
  const tableOfContents = [
    { id: 'bosanma-avukati-nedir', title: 'Boşanma Avukatı Nedir?', level: 2 },
    { id: 'bosanma-turleri', title: 'Boşanma Türleri', level: 2 },
    { id: 'velayet-konulari', title: 'Velayet Konuları', level: 2 },
    { id: 'nafaka-davasi', title: 'Nafaka Davası', level: 2 },
    { id: 'mal-paylasimi', title: 'Mal Paylaşımı', level: 2 },
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
    name: 'Ankara Boşanma Avukatı',
    description: 'Ankara\'da boşanma davalarında uzman avukatlar. Anlaşmalı boşanma, çekişmeli boşanma ve mal paylaşımı konularında destek.',
    url: 'https://ismailcavus.av.tr/ankara-bosanma-avukati',
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
    serviceType: 'Aile Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara Boşanma Avukatı', url: 'https://ismailcavus.av.tr/ankara-bosanma-avukati' }
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
                    { label: 'Ankara Boşanma Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara Boşanma Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da boşanma hukuku alanında uzman avukatlarımız, anlaşmalı boşanma, çekişmeli boşanma ve mal paylaşımı konularında profesyonel hukuki destek sağlamaktadır. Aile hukuku alanında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="bosanma-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Boşanma Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  Boşanma avukatı, aile hukuku alanında uzmanlaşmış, boşanma süreçlerinde eşleri temsil eden hukuk profesyonelidir. Ankara'da boşanma avukatı olarak hizmet veren uzmanlarımız, Türk Medeni Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  Boşanma avukatının temel görevleri arasında, boşanma protokolü hazırlama, velayet ve nafaka konularında danışmanlık, mal paylaşımı süreçlerinde temsil ve boşanma davalarında savunma bulunmaktadır. Ankara boşanma avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="bosanma-turleri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Boşanma Türleri
                </h2>
                <p className="mb-6">
                  Türk hukukunda iki temel boşanma türü bulunmaktadır. Ankara'da boşanma avukatı olarak, her iki boşanma türünde de uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Anlaşmalı Boşanma</h3>
                <p className="mb-4">
                  Anlaşmalı boşanma, eşlerin boşanma konusunda anlaşmaya varması durumunda gerçekleşen boşanma türüdür. Ankara boşanma avukatı olarak, anlaşmalı boşanma süreçlerinde protokol hazırlama ve müzakere konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Çekişmeli Boşanma</h3>
                <p className="mb-4">
                  Çekişmeli boşanma, eşlerin boşanma konusunda anlaşamaması durumunda mahkeme yoluyla gerçekleşen boşanma türüdür. Ankara'da boşanma avukatı olarak, çekişmeli boşanma davalarında etkili savunma stratejileri geliştirmekteyiz.
                </p>
                
                <h2 id="velayet-konulari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Velayet Konuları
                </h2>
                <p className="mb-6">
                  Velayet, boşanma süreçlerinin en önemli konularından biridir. Ankara'da boşanma avukatı olarak, velayet konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Velayet Belirleme</h3>
                <p className="mb-4">
                  Velayet belirleme, çocuğun menfaati göz önünde bulundurularak yapılır. Ankara boşanma avukatı olarak, velayet belirleme süreçlerinde müvekkillerimizin haklarını korumaktayız.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Velayet Değişikliği</h3>
                <p className="mb-4">
                  Velayet değişikliği, mevcut velayet düzeninin çocuğun menfaati açısından uygun olmaması durumunda talep edilebilir. Ankara'da boşanma avukatı olarak, velayet değişikliği davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kişisel İlişki</h3>
                <p className="mb-4">
                  Kişisel ilişki, velayet kendisinde olmayan ebeveynin çocukla görüşme hakkıdır. Ankara boşanma avukatı olarak, kişisel ilişki düzenlenmesi konusunda müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="nafaka-davasi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Nafaka Davası
                </h2>
                <p className="mb-6">
                  Nafaka, boşanma sonrası ekonomik açıdan güçsüz olan eşin geçimini sağlamak amacıyla ödenen maddi destektir. Ankara'da boşanma avukatı olarak, nafaka davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Yoksulluk Nafakası</h3>
                <p className="mb-4">
                  Yoksulluk nafakası, boşanma sonrası ekonomik açıdan güçsüz olan eşin geçimini sağlamak amacıyla ödenen nafaka türüdür. Ankara boşanma avukatı olarak, yoksulluk nafakası davalarında müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İştirak Nafakası</h3>
                <p className="mb-4">
                  İştirak nafakası, çocuğun geçimini sağlamak amacıyla ödenen nafaka türüdür. Ankara'da boşanma avukatı olarak, iştirak nafakası hesaplama ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="mal-paylasimi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Mal Paylaşımı
                </h2>
                <p className="mb-6">
                  Mal paylaşımı, boşanma süreçlerinin en karmaşık konularından biridir. Ankara'da boşanma avukatı olarak, mal paylaşımı konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Edinilmiş Mallar</h3>
                <p className="mb-4">
                  Edinilmiş mallar, evlilik süresince eşlerin birlikte edindiği mallardır. Ankara boşanma avukatı olarak, edinilmiş malların tespiti ve paylaşımı konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kişisel Mallar</h3>
                <p className="mb-4">
                  Kişisel mallar, evlilik öncesi veya sonrası eşlerden birine ait olan mallardır. Ankara'da boşanma avukatı olarak, kişisel malların korunması konusunda müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Mal Rejimi Sözleşmesi</h3>
                <p className="mb-4">
                  Mal rejimi sözleşmesi, eşlerin evlilik sırasında mallarının paylaşımını düzenleyen sözleşmedir. Ankara boşanma avukatı olarak, mal rejimi sözleşmesi hazırlama ve uygulama konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da boşanma avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. Boşanma süreçlerinde profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  Aile hukuku alanında uzman avukatlarımız, boşanma süreçlerinde müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da boşanma avukatı olarak, her aşamada yanınızdayız.
                </p>
                
                {/* Yazar Kutusu */}
                <AuthorBox className="mt-8" />
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="Boşanma konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraBosanmaAvukatiPage; 