import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo';
import AuthorBox from '@/components/ui/AuthorBox';

export const metadata: Metadata = {
  title: 'Ankara Miras Avukatı',
  description: 'Ankara\'da miras hukuku davalarında uzman avukatlar. Vasiyetname düzenleme, mirasın reddi ve miras paylaşımı konularında destek.',
  keywords: 'ankara miras avukatı, miras hukuku, vasiyetname, mirasın reddi, miras paylaşımı, avukat ankara, miras davası, miras avukatı ankara',
  openGraph: {
    title: 'Ankara Miras Avukatı',
    description: 'Ankara\'da miras hukuku davalarında uzman avukatlar. Vasiyetname düzenleme, mirasın reddi ve miras paylaşımı konularında destek.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-miras-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Miras Avukatı',
    description: 'Ankara\'da miras hukuku davalarında uzman avukatlar. Vasiyetname düzenleme, mirasın reddi ve miras paylaşımı konularında destek.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-miras-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'miras avukatı, miras hukuku, vasiyetname, ankara',
  },
};

const AnkaraMirasAvukatiPage = () => {
  const tableOfContents = [
    { id: 'miras-avukati-nedir', title: 'Miras Avukatı Nedir?', level: 2 },
    { id: 'miras-hukuku-alanlari', title: 'Miras Hukuku Alanları', level: 2 },
    { id: 'vasiyetname-duzenleme', title: 'Vasiyetname Düzenleme', level: 2 },
    { id: 'mirasin-reddi', title: 'Mirasın Reddi', level: 2 },
    { id: 'miras-paylasimi', title: 'Miras Paylaşımı', level: 2 },
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
    name: 'Ankara Miras Avukatı',
    description: 'Ankara\'da miras hukuku davalarında uzman avukatlar. Miras paylaşımı, vasiyetname ve mirasçılık belgesi konularında hukuki destek.',
    url: 'https://ismailcavus.av.tr/ankara-miras-avukati',
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
    serviceType: 'Miras Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara Miras Avukatı', url: 'https://ismailcavus.av.tr/ankara-miras-avukati' }
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
                    { label: 'Ankara Miras Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara Miras Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da miras hukuku alanında uzman avukatlarımız, vasiyetname düzenleme, mirasın reddi ve miras paylaşımı konularında profesyonel hukuki destek sağlamaktadır. Miras hukuku alanında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="miras-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Miras Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  Miras avukatı, miras hukuku alanında uzmanlaşmış, miras süreçlerinde müvekkillerini temsil eden hukuk profesyonelidir. Ankara'da miras avukatı olarak hizmet veren uzmanlarımız, Türk Medeni Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  Miras avukatının temel görevleri arasında, vasiyetname düzenleme, mirasın reddi, miras paylaşımı ve miras davalarında temsil bulunmaktadır. Ankara miras avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="miras-hukuku-alanlari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Miras Hukuku Alanları
                </h2>
                <p className="mb-6">
                  Miras hukuku, geniş bir alanı kapsamaktadır ve farklı miras süreçlerini içermektedir. Ankara'da miras avukatı olarak, miras hukukunun tüm alanlarında hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Mirasçılık Belgesi</h3>
                <p className="mb-4">
                  Mirasçılık belgesi, mirasçıların kim olduğunu gösteren resmi belgedir. Ankara miras avukatı olarak, mirasçılık belgesi alma süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Miras Taksimi</h3>
                <p className="mb-4">
                  Miras taksimi, miras bırakanın mallarının mirasçılar arasında paylaştırılması sürecidir. Ankara'da miras avukatı olarak, miras taksimi konularında uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="vasiyetname-duzenleme" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Vasiyetname Düzenleme
                </h2>
                <p className="mb-6">
                  Vasiyetname düzenleme, kişinin ölümünden sonra mallarının nasıl paylaştırılacağını belirleyen hukuki belgedir. Ankara'da miras avukatı olarak, vasiyetname düzenleme konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Resmi Vasiyetname</h3>
                <p className="mb-4">
                  Resmi vasiyetname, noter huzurunda düzenlenen vasiyetname türüdür. Ankara miras avukatı olarak, resmi vasiyetname düzenleme konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">El Yazısı Vasiyetname</h3>
                <p className="mb-4">
                  El yazısı vasiyetname, kişinin kendi el yazısıyla düzenlediği vasiyetname türüdür. Ankara'da miras avukatı olarak, el yazısı vasiyetname düzenleme konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sözlü Vasiyetname</h3>
                <p className="mb-4">
                  Sözlü vasiyetname, özel durumlarda sözlü olarak yapılan vasiyetname türüdür. Ankara miras avukatı olarak, sözlü vasiyetname konularında uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="mirasin-reddi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Mirasın Reddi
                </h2>
                <p className="mb-6">
                  Mirasın reddi, mirasçıların miras bırakanın borçlarını ödemek istememesi durumunda başvurabilecekleri hukuki yoldur. Ankara'da miras avukatı olarak, mirasın reddi konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Red Süresi</h3>
                <p className="mb-4">
                  Mirasın reddi için belirli bir süre bulunmaktadır. Ankara miras avukatı olarak, red süresi konusunda uzman danışmanlık vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Red Davası</h3>
                <p className="mb-4">
                  Red davası, mirasın reddedilmesi için açılan davadır. Ankara'da miras avukatı olarak, red davalarında müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Red Sonrası Süreçler</h3>
                <p className="mb-4">
                  Red sonrası süreçler, mirasın reddedilmesi sonrası ortaya çıkan hukuki süreçlerdir. Ankara miras avukatı olarak, red sonrası süreçlerde uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="miras-paylasimi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Miras Paylaşımı
                </h2>
                <p className="mb-6">
                  Miras paylaşımı, miras bırakanın mallarının mirasçılar arasında paylaştırılması sürecidir. Ankara'da miras avukatı olarak, miras paylaşımı konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Mirasçılık Sıfatı</h3>
                <p className="mb-4">
                  Mirasçılık sıfatı, miras bırakana göre belirlenen mirasçılık türüdür. Ankara miras avukatı olarak, mirasçılık sıfatı konusunda uzman danışmanlık vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Miras Payı</h3>
                <p className="mb-4">
                  Miras payı, her mirasçının miras bırakandan alacağı pay miktarıdır. Ankara'da miras avukatı olarak, miras payı hesaplama konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Miras Davası</h3>
                <p className="mb-4">
                  Miras davası, miras paylaşımı konusunda anlaşmazlık durumunda açılan davadır. Ankara miras avukatı olarak, miras davalarında müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da miras avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. Miras hukuku alanında profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  Miras hukuku alanında uzman avukatlarımız, vasiyetname düzenleme ve miras paylaşımı süreçlerinde müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da miras avukatı olarak, her aşamada yanınızdayız.
                </p>
                
                {/* Yazar Kutusu */}
                <AuthorBox className="mt-8" />
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="Miras hukuku konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraMirasAvukatiPage; 