import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { BreadcrumbSchema } from '@/components/seo';
import AuthorBox from '@/components/ui/AuthorBox';

export const metadata: Metadata = {
  title: 'Ankara İcra Avukatı',
  description: 'Ankara\'da icra hukuku davalarında uzman avukatlar. Alacak tahsili, haciz ve iflas süreçlerinde etkili hukuki çözümler.',
  keywords: 'ankara icra avukatı, icra hukuku, alacak tahsili, haciz, iflas, avukat ankara, icra davası, icra avukatı ankara',
  openGraph: {
    title: 'Ankara İcra Avukatı',
    description: 'Ankara\'da icra hukuku davalarında uzman avukatlar. Alacak tahsili, haciz ve iflas süreçlerinde etkili hukuki çözümler.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ismailcavus.av.tr/ankara-icra-avukati',
    siteName: 'Çavuş Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara İcra Avukatı',
    description: 'Ankara\'da icra hukuku davalarında uzman avukatlar. Alacak tahsili, haciz ve iflas süreçlerinde etkili hukuki çözümler.',
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
    canonical: 'https://ismailcavus.av.tr/ankara-icra-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'icra avukatı, icra hukuku, alacak tahsili, ankara',
  },
};

const AnkaraIcraAvukatiPage = () => {
  const tableOfContents = [
    { id: 'icra-avukati-nedir', title: 'İcra Avukatı Nedir?', level: 2 },
    { id: 'icra-hukuku-alanlari', title: 'İcra Hukuku Alanları', level: 2 },
    { id: 'alacak-tahsili', title: 'Alacak Tahsili', level: 2 },
    { id: 'haciz-sureci', title: 'Haciz Süreci', level: 2 },
    { id: 'iflas-davasi', title: 'İflas Davası', level: 2 },
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
    name: 'Ankara İcra Avukatı',
    description: 'Ankara\'da icra hukuku davalarında uzman avukatlar. İcra takipleri, haciz işlemleri ve borç tahsilatı konularında hukuki destek.',
    url: 'https://ismailcavus.av.tr/ankara-icra-avukati',
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
    serviceType: 'İcra Hukuku'
  };

  // Breadcrumb Schema Data
  const breadcrumbData = [
    { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
    { name: 'Ankara İcra Avukatı', url: 'https://ismailcavus.av.tr/ankara-icra-avukati' }
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
                    { label: 'Ankara İcra Avukatı' }
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara İcra Avukatı</h1>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ankara'da icra hukuku alanında uzman avukatlarımız, alacak tahsili, haciz ve iflas süreçlerinde profesyonel hukuki destek sağlamaktadır. İcra hukuku alanında deneyimli ekibimiz, müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır.
                </p>
                
                <h2 id="icra-avukati-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İcra Avukatı Nedir?
                </h2>
                <p className="mb-6">
                  İcra avukatı, icra hukuku alanında uzmanlaşmış, alacak tahsili ve haciz süreçlerinde müvekkillerini temsil eden hukuk profesyonelidir. Ankara'da icra avukatı olarak hizmet veren uzmanlarımız, İcra ve İflas Kanunu kapsamında müvekkillerimizin haklarını korumaktadır.
                </p>
                <p className="mb-6">
                  İcra avukatının temel görevleri arasında, icra takibi başlatma, haciz işlemleri, iflas davaları ve alacak tahsili süreçlerinde temsil bulunmaktadır. Ankara icra avukatı olarak, her aşamada müvekkillerimizin yanında yer almaktayız.
                </p>
                
                <h2 id="icra-hukuku-alanlari" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İcra Hukuku Alanları
                </h2>
                <p className="mb-6">
                  İcra hukuku, geniş bir alanı kapsamaktadır ve farklı icra süreçlerini içermektedir. Ankara'da icra avukatı olarak, icra hukukunun tüm alanlarında hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İcra Takibi</h3>
                <p className="mb-4">
                  İcra takibi, alacaklıların borçlularından alacaklarını tahsil etmek için başlattıkları hukuki süreçtir. Ankara icra avukatı olarak, icra takibi başlatma ve yürütme konularında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Haciz İşlemleri</h3>
                <p className="mb-4">
                  Haciz işlemleri, borçlunun mallarına el konularak alacaklıların haklarının korunması sürecidir. Ankara'da icra avukatı olarak, haciz işlemlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                
                <h2 id="alacak-tahsili" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Alacak Tahsili
                </h2>
                <p className="mb-6">
                  Alacak tahsili, icra hukukunun en önemli konularından biridir. Ankara'da icra avukatı olarak, alacak tahsili süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İcra Takibi Başlatma</h3>
                <p className="mb-4">
                  İcra takibi başlatma, alacaklıların borçlularından alacaklarını tahsil etmek için icra müdürlüğüne başvurması sürecidir. Ankara icra avukatı olarak, icra takibi başlatma konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ödeme Emri</h3>
                <p className="mb-4">
                  Ödeme emri, icra müdürlüğü tarafından borçluya gönderilen ve borcunu ödemesi gerektiğini bildiren resmi belgedir. Ankara'da icra avukatı olarak, ödeme emri süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İtiraz Süreçleri</h3>
                <p className="mb-4">
                  İtiraz süreçleri, borçluların icra takibine karşı itiraz etmesi durumunda ortaya çıkan hukuki süreçlerdir. Ankara icra avukatı olarak, itiraz süreçlerinde uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="haciz-sureci" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Haciz Süreci
                </h2>
                <p className="mb-6">
                  Haciz süreci, borçlunun mallarına el konularak alacaklıların haklarının korunması sürecidir. Ankara'da icra avukatı olarak, haciz süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Haciz Kararı</h3>
                <p className="mb-4">
                  Haciz kararı, icra müdürlüğü tarafından borçlunun mallarına el konulması kararıdır. Ankara icra avukatı olarak, haciz kararı alma süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Haciz İtirazı</h3>
                <p className="mb-4">
                  Haciz itirazı, borçluların haciz işlemine karşı itiraz etmesi durumunda ortaya çıkan hukuki süreçtir. Ankara'da icra avukatı olarak, haciz itirazı süreçlerinde uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Satış İşlemleri</h3>
                <p className="mb-4">
                  Satış işlemleri, haczedilen malların satılarak alacaklıların haklarının karşılanması sürecidir. Ankara icra avukatı olarak, satış işlemleri konusunda uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iflas-davasi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İflas Davası
                </h2>
                <p className="mb-6">
                  İflas davası, borçlunun borçlarını ödeyememesi durumunda açılan ve tüm alacaklıların haklarının eşit şekilde karşılanmasını amaçlayan hukuki süreçtir. Ankara'da icra avukatı olarak, iflas davalarında uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İflas Başvurusu</h3>
                <p className="mb-4">
                  İflas başvurusu, borçlunun iflasının istenmesi için mahkemeye yapılan başvurudur. Ankara icra avukatı olarak, iflas başvurusu hazırlama konusunda uzman hizmet vermekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İflas Masası</h3>
                <p className="mb-4">
                  İflas masası, iflas kararı sonrası borçlunun mallarının yönetildiği ve alacaklıların haklarının karşılandığı süreçtir. Ankara'da icra avukatı olarak, iflas masası süreçlerinde müvekkillerimizi temsil etmekteyiz.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">İflas Sonrası Süreçler</h3>
                <p className="mb-4">
                  İflas sonrası süreçler, iflas kararı sonrası borçlunun ve alacaklıların haklarının düzenlendiği süreçlerdir. Ankara icra avukatı olarak, iflas sonrası süreçlerde uzman hizmet vermekteyiz.
                </p>
                
                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim
                </h2>
                <p className="mb-6">
                  Ankara'da icra avukatı hizmeti almak için bizimle iletişime geçebilirsiniz. İcra hukuku alanında profesyonel destek için uzman ekibimiz size yardımcı olmaktadır.
                </p>
                <p className="mb-6">
                  İcra hukuku alanında uzman avukatlarımız, alacak tahsili ve haciz süreçlerinde müvekkillerimizin haklarını en iyi şekilde korumak için çalışmaktadır. Ankara'da icra avukatı olarak, her aşamada yanınızdayız.
                </p>
                
                {/* Yazar Kutusu */}
                <AuthorBox className="mt-8" />
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="İcra hukuku konusunda profesyonel destek için bizimle iletişime geçin."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraIcraAvukatiPage; 