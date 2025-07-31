import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Ankara İdare Avukatı',
  description: 'Ankara\'da idare hukuku davalarında uzman avukatlar. İdari işlemlerin iptali ve tam yargı davalarında hukuki danışmanlık.',
  keywords: 'ankara idare avukatı, idare hukuku, idari işlem, tam yargı davası, avukat ankara, idari dava, idare avukatı ankara',
  openGraph: {
    title: 'Ankara İdare Avukatı',
    description: 'Ankara\'da idare hukuku davalarında uzman avukatlar. İdari işlemlerin iptali ve tam yargı davalarında hukuki danışmanlık.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-idare-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara İdare Avukatı',
    description: 'Ankara\'da idare hukuku davalarında uzman avukatlar. İdari işlemlerin iptali ve tam yargı davalarında hukuki danışmanlık.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-idare-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'idare avukatı, idare hukuku, idari dava, ankara',
  },
};

const AnkaraIdareAvukatiPage = () => {
  const tableOfContents = [
    { id: 'idare-avukati-nedir', title: 'İdare Avukatı Nedir?', level: 2 },
    { id: 'idare-hukuku-alanlari', title: 'İdare Hukuku Alanları', level: 2 },
    { id: 'idari-islem-iptali', title: 'İdari İşlem İptali', level: 2 },
    { id: 'tam-yargi-davasi', title: 'Tam Yargı Davası', level: 2 },
    { id: 'idari-dava-sureci', title: 'İdari Dava Süreci', level: 2 },
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
    name: 'Ankara İdare Avukatı',
    description: 'Ankara\'da idare hukuku davalarında uzman avukatlar. İdari işlemler, idari sözleşmeler ve kamu personeli hukuku konularında danışmanlık.',
    url: 'https://ismailcavus.av.tr/ankara-idare-avukati',
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
    serviceType: 'İdare Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara İdare Avukatı', url: 'https://ismailcavus.av.tr/ankara-idare-avukati' }
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
                    { label: 'Ankara İdare Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara İdare Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da idare hukuku alanında uzman avukatlarımız, idari işlemlerin iptali ve tam yargı davalarında profesyonel hukuki destek sağlamaktadır. İdare hukuku alanında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="idare-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İdare Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  İdare avukatı, idare hukuku alanında uzmanlaşmış, idari işlemler ve idari davalar konusunda müvekkillerini temsil eden hukuk profesyonelidir. Ankara'da idare avukatı olarak hizmet veren uzmanlarımız, İdari Yargılama Usulü Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  İdare avukatının temel görevleri arasında, idari işlemlerin iptali, tam yargı davaları, idari sözleşme davaları ve idari yargı süreçlerinde temsil bulunmaktadır. Ankara idare avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="idare-hukuku-alanlari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İdare Hukuku Alanları
                </h2>
                <p className="mb-6">
                  İdare hukuku, geniş bir alanı kapsamaktadır ve farklı idari süreçleri içermektedir. Ankara'da idare avukatı olarak, idare hukukunun tüm alanlarında hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İdari İşlemler</h3>
                <p className="mb-4">
                  İdari işlemler, idarenin tek taraflı olarak yaptığı ve hukuki sonuç doğuran işlemlerdir. Ankara idare avukatı olarak, idari işlemler konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İdari Yargı</h3>
                <p className="mb-4">
                  İdari yargı, idari işlemler ve idari eylemler hakkında açılan davaların görüldüğü yargı koludur. Ankara'da idare avukatı olarak, idari yargı süreçlerinde uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="idari-islem-iptali" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İdari İşlem İptali
                </h2>
                <p className="mb-6">
                  İdari işlem iptali, idarenin yaptığı işlemlerin hukuka aykırı olması durumunda iptal edilmesini amaçlayan hukuki süreçtir. Ankara'da idare avukatı olarak, idari işlem iptali konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İptal Davası</h3>
                <p className="mb-4">
                  İptal davası, idari işlemlerin hukuka aykırı olması durumunda iptal edilmesini amaçlayan davadır. Ankara idare avukatı olarak, iptal davalarında müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İptal Sebepleri</h3>
                <p className="mb-4">
                  İptal sebepleri, idari işlemlerin iptal edilmesini gerektiren hukuka aykırılık durumlarıdır. Ankara'da idare avukatı olarak, iptal sebepleri konusunda uzman danışmanlık vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İptal Süresi</h3>
                <p className="mb-4">
                  İptal süresi, idari işlemlerin iptali için belirlenen hukuki süredir. Ankara idare avukatı olarak, iptal süresi konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="tam-yargi-davasi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Tam Yargı Davası
                </h2>
                <p className="mb-6">
                  Tam yargı davası, idarenin eylem ve işlemlerinden doğan zararların tazmin edilmesini amaçlayan davadır. Ankara'da idare avukatı olarak, tam yargı davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Zarar Tespiti</h3>
                <p className="mb-4">
                  Zarar tespiti, idarenin eylem ve işlemlerinden doğan zararların belirlenmesi sürecidir. Ankara idare avukatı olarak, zarar tespiti konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tazminat Hesaplama</h3>
                <p className="mb-4">
                  Tazminat hesaplama, idarenin eylem ve işlemlerinden doğan zararların maddi karşılığının belirlenmesi sürecidir. Ankara'da idare avukatı olarak, tazminat hesaplama konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tam Yargı Süreci</h3>
                <p className="mb-4">
                  Tam yargı süreci, tam yargı davalarının açılmasından kararın kesinleşmesine kadar olan aşamaları kapsar. Ankara idare avukatı olarak, tam yargı süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="idari-dava-sureci" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İdari Dava Süreci
                </h2>
                <p className="mb-6">
                  İdari dava süreci, idari işlemler ve idari eylemler hakkında açılan davaların görülmesi sürecidir. Ankara'da idare avukatı olarak, idari dava süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Dava Açma</h3>
                <p className="mb-4">
                  Dava açma, idari işlemler ve idari eylemler hakkında idari yargı mercilerine başvurma sürecidir. Ankara idare avukatı olarak, dava açma süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Duruşma Süreçleri</h3>
                <p className="mb-4">
                  Duruşma süreçleri, idari davaların görüldüğü duruşmalarda gerçekleşen hukuki süreçlerdir. Ankara'da idare avukatı olarak, duruşma süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Karar Sonrası Süreçler</h3>
                <p className="mb-4">
                  Karar sonrası süreçler, idari dava kararlarının uygulanması ve itiraz süreçlerini kapsar. Ankara idare avukatı olarak, karar sonrası süreçlerde uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da idare avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. İdare hukuku alanında profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  İdare hukuku alanında uzman avukatlarımız, idari işlemlerin iptali ve tam yargı davalarında müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da idare avukatı olarak, her aşamada yanınızdayız.
                </p>
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="İdare hukuku konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraIdareAvukatiPage; 