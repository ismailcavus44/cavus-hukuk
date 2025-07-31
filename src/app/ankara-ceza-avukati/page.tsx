import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Ankara Ceza Avukatı',
  description: 'Ankara\'da ceza hukuku davalarında uzman avukatlar. Ağır ceza, asliye ceza ve soruşturma süreçlerinde profesyonel hukuki destek.',
  keywords: 'ankara ceza avukatı, ceza davası, savunma, avukat ankara, ceza hukuku, ağır ceza, asliye ceza, soruşturma, kovuşturma, ceza avukatı ankara',
  openGraph: {
    title: 'Ankara Ceza Avukatı',
    description: 'Ankara\'da ceza hukuku davalarında uzman avukatlar. Ağır ceza, asliye ceza ve soruşturma süreçlerinde profesyonel hukuki destek.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-ceza-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Ceza Avukatı',
    description: 'Ankara\'da ceza hukuku davalarında uzman avukatlar. Ağır ceza, asliye ceza ve soruşturma süreçlerinde profesyonel hukuki destek.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-ceza-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'ceza avukatı, ceza davası, savunma, ankara',
  },
};

const AnkaraCezaAvukatiPage = () => {
  const tableOfContents = [
    { id: 'ceza-avukati-nedir', title: 'Ceza Avukatı Nedir?', level: 2 },
    { id: 'ceza-davasi-sureci', title: 'Ceza Davası Süreci', level: 2 },
    { id: 'savunma-stratejileri', title: 'Savunma Stratejileri', level: 2 },
    { id: 'ceza-hukuku-alanlari', title: 'Ceza Hukuku Alanları', level: 2 },
    { id: 'avukat-secimi', title: 'Ceza Avukatı Seçimi', level: 2 },
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
    name: 'Ankara Ceza Avukatı',
    description: 'Ankara\'da ceza davalarında uzman avukatlar. Ceza hukuku alanında profesyonel savunma ve danışmanlık hizmeti.',
    url: 'https://ismailcavus.av.tr/ankara-ceza-avukati',
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
    serviceType: 'Ceza Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara Ceza Avukatı', url: 'https://ismailcavus.av.tr/ankara-ceza-avukati' }
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
                    { label: 'Ankara Ceza Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara Ceza Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da ceza hukuku alanında uzman avukatlarımız, ağır ceza, asliye ceza ve soruşturma süreçlerinde profesyonel hukuki destek sağlamaktadır. Ceza davalarında hak savunuculuğu konusunda deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="ceza-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  Ceza avukatı, ceza hukuku alanında uzmanlaşmış, soruşturma ve kovuşturma süreçlerinde sanık veya mağdur tarafını temsil eden hukuk profesyonelidir. Ankara'da ceza avukatı olarak hizmet veren uzmanlarımız, Türk Ceza Kanunu ve Ceza Muhakemesi Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  Ceza avukatının temel görevleri arasında, müvekkilinin ifadesinin alınması sırasında bulunmak, delilleri incelemek, savunma hazırlamak ve duruşmalarda temsil etmek bulunmaktadır. Ankara ceza avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="ceza-davasi-sureci" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Davası Süreci
                </h2>
                <p className="mb-6">
                  Ceza davası süreci, soruşturma ve kovuşturma olmak üzere iki ana aşamadan oluşmaktadır. Ankara'da ceza avukatı olarak, bu süreçlerin her aşamasında müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Soruşturma Aşaması</h3>
                <p className="mb-4">
                  Soruşturma aşamasında, şüpheli hakkında delil toplama işlemleri yapılır. Bu aşamada ceza avukatının bulunması, müvekkilin haklarının korunması açısından kritik öneme sahiptir. Ankara ceza avukatı olarak, ifade alma süreçlerinde müvekkillerimizin yanında bulunmaktayız.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kovuşturma Aşaması</h3>
                <p className="mb-4">
                  Kovuşturma aşamasında, iddianame hazırlanır ve dava açılır. Bu aşamada ceza avukatı, duruşmalarda müvekkilini temsil eder ve savunma hazırlar. Ankara'da ceza avukatı olarak, kovuşturma süreçlerinde etkili savunma stratejileri geliştirmekteyiz.
                </p>
                
                <h2 id="savunma-stratejileri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Savunma Stratejileri
                </h2>
                <p className="mb-6">
                  Ceza davalarında başarılı savunma stratejileri geliştirmek, deneyim ve uzmanlık gerektirir. Ankara'da ceza avukatı olarak, her davanın kendine özgü koşullarına göre savunma stratejileri belirlemekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delil İnceleme</h3>
                <p className="mb-4">
                  Savunma stratejisinin temelini, delillerin detaylı incelenmesi oluşturur. Ankara ceza avukatı olarak, tüm delilleri titizlikle inceleyerek, müvekkilimiz lehine kullanılabilecek noktaları tespit etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tanık Dinleme</h3>
                <p className="mb-4">
                  Tanık ifadelerinin doğru değerlendirilmesi, ceza davalarında kritik öneme sahiptir. Ankara'da ceza avukatı olarak, tanık dinleme süreçlerinde müvekkillerimizin haklarını korumaktayız.
                </p>
                
                <h2 id="ceza-hukuku-alanlari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Hukuku Alanları
                </h2>
                <p className="mb-6">
                  Ceza hukuku, geniş bir alanı kapsamaktadır. Ankara'da ceza avukatı olarak, farklı ceza hukuku alanlarında uzmanlaşmış ekibimizle hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ağır Ceza Davaları</h3>
                <p className="mb-4">
                  Ağır ceza davaları, yüksek ceza yaptırımları öngören suçlarla ilgilidir. Ankara ceza avukatı olarak, ağır ceza davalarında etkili savunma stratejileri geliştirmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Asliye Ceza Davaları</h3>
                <p className="mb-4">
                  Asliye ceza davaları, orta düzey ceza yaptırımları öngören suçlarla ilgilidir. Ankara'da ceza avukatı olarak, asliye ceza davalarında müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sulh Ceza Davaları</h3>
                <p className="mb-4">
                  Sulh ceza davaları, hafif ceza yaptırımları öngören suçlarla ilgilidir. Ankara ceza avukatı olarak, sulh ceza davalarında da hizmet vermekteyiz.
                </p>
                
                <h2 id="avukat-secimi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Avukatı Seçimi
                </h2>
                <p className="mb-6">
                  Ceza davası süreçlerinde doğru avukat seçimi, sonucun belirlenmesinde kritik rol oynar. Ankara'da ceza avukatı seçerken dikkat edilmesi gereken noktalar bulunmaktadır.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Deneyim ve Uzmanlık</h3>
                <p className="mb-4">
                  Ceza hukuku alanında deneyimli avukat seçimi, davanın başarısı açısından önemlidir. Ankara ceza avukatı olarak, uzun yıllara dayanan deneyimimizle hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İletişim ve Şeffaflık</h3>
                <p className="mb-4">
                  Avukat-müvekkil ilişkisinde iletişim ve şeffaflık önemlidir. Ankara'da ceza avukatı olarak, müvekkillerimizle sürekli iletişim halinde bulunmaktayız.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da ceza avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. Ceza davası süreçlerinde profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  Ceza hukuku alanında uzman avukatlarımız, soruşturma ve kovuşturma süreçlerinde müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da ceza avukatı olarak, her aşamada yanınızdayız.
                </p>
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="Ceza davası konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraCezaAvukatiPage; 