import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { BreadcrumbSchema } from '@/components/seo';
import AuthorBox from '@/components/ui/AuthorBox';

export const metadata: Metadata = {
  title: 'Ankara Trafik Kazası Avukatı',
  description: 'Ankara\'da trafik kazası davalarında uzman avukatlar. Maddi ve manevi tazminat taleplerinde hukuki temsil ve danışmanlık.',
  keywords: 'ankara trafik kazası avukatı, trafik kazası tazminatı, maddi tazminat, manevi tazminat, avukat ankara, trafik kazası davası, tazminat avukatı ankara',
  openGraph: {
    title: 'Ankara Trafik Kazası Avukatı',
    description: 'Ankara\'da trafik kazası davalarında uzman avukatlar. Maddi ve manevi tazminat taleplerinde hukuki temsil ve danışmanlık.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-trafik-kazasi-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Trafik Kazası Avukatı',
    description: 'Ankara\'da trafik kazası davalarında uzman avukatlar. Maddi ve manevi tazminat taleplerinde hukuki temsil ve danışmanlık.',
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
    canonical: 'https://www.ismailcavus.av.tr/ankara-trafik-kazasi-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'trafik kazası avukatı, tazminat davası, trafik kazası, ankara',
  },
};

const AnkaraTrafikKazasiAvukatiPage = () => {
  const tableOfContents = [
    { id: 'trafik-kazasi-avukati-nedir', title: 'Trafik Kazası Avukatı Nedir?', level: 2 },
    { id: 'trafik-kazasi-tazminati', title: 'Trafik Kazası Tazminatı', level: 2 },
    { id: 'maddi-tazminat', title: 'Maddi Tazminat', level: 2 },
    { id: 'manevi-tazminat', title: 'Manevi Tazminat', level: 2 },
    { id: 'tazminat-davasi-sureci', title: 'Tazminat Davası Süreci', level: 2 },
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
    name: 'Ankara Trafik Kazası Avukatı',
    description: 'Ankara\'da trafik kazası davalarında uzman avukatlar. Trafik kazası tazminat davaları ve sigorta şirketleri ile mücadele.',
    url: 'https://ismailcavus.av.tr/ankara-trafik-kazasi-avukati',
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
    serviceType: 'Trafik Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara Trafik Kazası Avukatı', url: 'https://ismailcavus.av.tr/ankara-trafik-kazasi-avukati' }
  ];

  return (
    <>

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
                    { label: 'Ankara Trafik Kazası Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara Trafik Kazası Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da trafik kazası hukuku alanında uzman avukatlarımız, maddi ve manevi tazminat taleplerinde profesyonel hukuki destek sağlamaktadır. Trafik kazası davalarında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="trafik-kazasi-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Trafik Kazası Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  Trafik kazası avukatı, trafik kazaları sonucu zarar gören kişilerin haklarını korumak için uzmanlaşmış hukuk profesyonelidir. Ankara'da trafik kazası avukatı olarak hizmet veren uzmanlarımız, Türk Borçlar Kanunu ve Karayolları Trafik Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  Trafik kazası avukatının temel görevleri arasında, kaza raporlarının incelenmesi, zarar tespiti, tazminat hesaplama ve dava süreçlerinde temsil bulunmaktadır. Ankara trafik kazası avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="trafik-kazasi-tazminati" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Trafik Kazası Tazminatı
                </h2>
                <p className="mb-6">
                  Trafik kazası tazminatı, kaza sonucu zarar gören kişilerin talep edebileceği maddi ve manevi tazminatları kapsamaktadır. Ankara'da trafik kazası avukatı olarak, tazminat hesaplama ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tazminat Türleri</h3>
                <p className="mb-4">
                  Trafik kazası tazminatları, maddi tazminat ve manevi tazminat olmak üzere iki ana kategoride değerlendirilir. Ankara trafik kazası avukatı olarak, her iki tazminat türünde de uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tazminat Hesaplama</h3>
                <p className="mb-4">
                  Tazminat hesaplama, kaza sonucu oluşan zararların detaylı analizi ile yapılır. Ankara'da trafik kazası avukatı olarak, doğru tazminat hesaplama konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="maddi-tazminat" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Maddi Tazminat
                </h2>
                <p className="mb-6">
                  Maddi tazminat, trafik kazası sonucu oluşan ekonomik zararların karşılanması amacıyla talep edilen tazminat türüdür. Ankara'da trafik kazası avukatı olarak, maddi tazminat davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tedavi Giderleri</h3>
                <p className="mb-4">
                  Tedavi giderleri, kaza sonucu yaralanan kişinin tedavi sürecinde oluşan tüm maliyetleri kapsar. Ankara trafik kazası avukatı olarak, tedavi giderlerinin tespiti ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İş Gücü Kaybı</h3>
                <p className="mb-4">
                  İş gücü kaybı, kaza sonucu çalışamayan kişinin kaybettiği gelirini karşılamak amacıyla talep edilen tazminattır. Ankara trafik kazası avukatı olarak, iş gücü kaybı hesaplama konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Araç Hasarı</h3>
                <p className="mb-4">
                  Araç hasarı, kaza sonucu araçta oluşan maddi zararların karşılanması amacıyla talep edilen tazminattır. Ankara trafik kazası avukatı olarak, araç hasarı tespiti ve tahsili konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="manevi-tazminat" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Manevi Tazminat
                </h2>
                <p className="mb-6">
                  Manevi tazminat, trafik kazası sonucu kişinin yaşadığı acı, ıstırap ve manevi zararların karşılanması amacıyla talep edilen tazminat türüdür. Ankara'da trafik kazası avukatı olarak, manevi tazminat davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Acı ve Istırap</h3>
                <p className="mb-4">
                  Acı ve ıstırap tazminatı, kaza sonucu yaralanan kişinin yaşadığı fiziksel ve manevi acıların karşılanması amacıyla talep edilir. Ankara trafik kazası avukatı olarak, acı ve ıstırap tazminatı hesaplama konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Yakınların Manevi Zararı</h3>
                <p className="mb-4">
                  Yakınların manevi zararı, kaza sonucu ölen kişinin yakınlarının yaşadığı manevi acıların karşılanması amacıyla talep edilir. Ankara'da trafik kazası avukatı olarak, yakınların manevi zararı konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="tazminat-davasi-sureci" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Tazminat Davası Süreci
                </h2>
                <p className="mb-6">
                  Tazminat davası süreci, kaza sonucu zarar gören kişinin haklarını korumak için izlenen hukuki yoldur. Ankara'da trafik kazası avukatı olarak, tazminat davası süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Zarar Tespiti</h3>
                <p className="mb-4">
                  Zarar tespiti, kaza sonucu oluşan tüm zararların detaylı analizi ile yapılır. Ankara trafik kazası avukatı olarak, zarar tespiti konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Dava Açma</h3>
                <p className="mb-4">
                  Dava açma, zarar tespiti sonrası tazminat talebinin mahkemeye sunulması sürecidir. Ankara'da trafik kazası avukatı olarak, dava açma süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Uzlaşma ve Tahsil</h3>
                <p className="mb-4">
                  Uzlaşma ve tahsil, dava sürecinde tarafların anlaşması veya mahkeme kararı sonrası tazminatın tahsil edilmesi sürecidir. Ankara trafik kazası avukatı olarak, uzlaşma ve tahsil konularında uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da trafik kazası avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. Trafik kazası tazminat davalarında profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  Trafik kazası hukuku alanında uzman avukatlarımız, maddi ve manevi tazminat davalarında müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da trafik kazası avukatı olarak, her aşamada yanınızdayız.
                </p>
                
                {/* Yazar Kutusu */}
                <AuthorBox className="mt-8" />
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="Trafik kazası tazminatı konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraTrafikKazasiAvukatiPage; 