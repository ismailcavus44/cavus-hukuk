import type { Metadata } from 'next';
import Link from 'next/link';
import React, { useMemo } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BlogGrid from '@/components/ui/BlogGrid';
import OptimizedImage from '@/components/ui/OptimizedImage';
import AIChatbot from '@/components/ui/AIChatbot';
import { 
  Building2, 
  Heart, 
  Briefcase, 
  Shield, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Scale,
  Gavel,
  FileText,
  ChevronRight,
  Play,
  Home,
  UserCheck,
  Building,
  CarFront
} from 'lucide-react';
import { hizmetler } from '@/data';
import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  ServiceCatalogSchema, 
  WebPageSchema 
} from '@/components/seo';

export const metadata: Metadata = {
  title: 'Av. İsmail Çavuş - Ankara Avukat',
  description: 'Ankara Avukat Av. İsmail Çavuş: Boşanma, ceza, ticaret, gayrimenkul hukuku alanlarında uzman hukuki danışmanlık ve avukatlık hizmetleri. Hukuki sorunlarınıza profesyonel çözümler için bize ulaşın.',
  keywords: ['ankara avukat', 'ankara hukuk bürosu', 'avukat ankara', 'hukuki danışmanlık ankara', 'iş hukuku ankara', 'aile hukuku ankara', 'ceza hukuku ankara', 'idare hukuku ankara', 'gayrimenkul hukuku ankara', 'tazminat hukuku ankara'],
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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ankara Avukat - Çavuş Hukuk Bürosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Avukat - Güvenilir Hukuki Danışmanlık',
    description: 'Ankara Avukat Av. İsmail Çavuş: Boşanma, ceza, ticaret, gayrimenkul hukuku alanlarında uzman hukuki danışmanlık ve avukatlık hizmetleri. Hukuki sorunlarınıza profesyonel çözümler için bize ulaşın.',
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

const HomePage = React.memo(() => {
  // Hizmetler verilerini useMemo ile optimize et
  const yeniHizmetler = useMemo(() => [
    {
      id: 'aile-hukuku',
      baslik: 'Aile Hukuku',
      aciklama: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hukuki danışmanlık.',
      icon: 'Heart',
      link: '/hizmetler/aile-hukuku'
    },
    {
      id: 'is-hukuku',
      baslik: 'İş Hukuku',
      aciklama: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında hukuki danışmanlık.',
      icon: 'Briefcase',
      link: '/hizmetler/is-hukuku'
    },
    {
      id: 'ceza-hukuku',
      baslik: 'Ceza Hukuku',
      aciklama: 'Ceza davaları, savunma ve hukuki danışmanlık konularında profesyonel destek.',
      icon: 'Shield',
      link: '/hizmetler/ceza-hukuku'
    },
    {
      id: 'idare-hukuku',
      baslik: 'İdare Hukuku',
      aciklama: 'İdari işlemler, idari sözleşmeler ve kamu personeli hukuku konularında danışmanlık.',
      icon: 'Building2',
      link: '/hizmetler/idare-hukuku'
    },
    {
      id: 'miras-hukuku',
      baslik: 'Miras Hukuku',
      aciklama: 'Miras davaları, vasiyetname, miras paylaşımı ve miras hukuku konularında danışmanlık.',
      icon: 'Scale',
      link: '/hizmetler/miras-hukuku'
    },
    {
      id: 'gayrimenkul-hukuku',
      baslik: 'Gayrimenkul Hukuku',
      aciklama: 'Tapu işlemleri, kat mülkiyeti, kentsel dönüşüm ve gayrimenkul uyuşmazlıkları konularında hukuki danışmanlık.',
      icon: 'Building',
      link: '/hizmetler/gayrimenkul-hukuku'
    }
  ], []);

  // Neden Çavuş Hukuk listesi - useMemo ile optimize edilmiş
  const nedenCavusHukuk = useMemo(() => [
    {
      icon: Users,
      title: 'Deneyimli Ekip'
    },
    {
      icon: Award,
      title: 'Uzman Avukatlar'
    },
    {
      icon: Clock,
      title: 'Hızlı Çözüm'
    },
    {
      icon: CheckCircle,
      title: 'Profesyonel Yaklaşım'
    },
    {
      icon: Scale,
      title: 'Şeffaf Süreç'
    },
    {
      icon: FileText,
      title: 'Kapsamlı Danışmanlık'
    }
  ], []);

  // Hizmet kataloğu - useMemo ile optimize edilmiş
  const hizmetKatalogu = useMemo(() => [
    {
      '@type': 'LegalService',
      name: 'Aile Hukuku',
      description: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hukuki danışmanlık.',
      url: 'https://ismailcavus.av.tr/hizmetler/aile-hukuku',
      serviceType: 'Aile Hukuku'
    },
    {
      '@type': 'LegalService',
      name: 'İş Hukuku',
      description: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında hukuki danışmanlık.',
      url: 'https://ismailcavus.av.tr/hizmetler/is-hukuku',
      serviceType: 'İş Hukuku'
    },
    {
      '@type': 'LegalService',
      name: 'Ceza Hukuku',
      description: 'Ceza davaları, savunma ve hukuki danışmanlık konularında profesyonel destek.',
      url: 'https://ismailcavus.av.tr/hizmetler/ceza-hukuku',
      serviceType: 'Ceza Hukuku'
    },
    {
      '@type': 'LegalService',
      name: 'İdare Hukuku',
      description: 'İdari işlemler, idari sözleşmeler ve kamu personeli hukuku konularında danışmanlık.',
      url: 'https://ismailcavus.av.tr/hizmetler/idare-hukuku',
      serviceType: 'İdare Hukuku'
    }
  ], []);

  // Icon map - useMemo ile optimize edilmiş
  const iconMap = useMemo(() => ({
    Heart: Heart,
    Briefcase: Briefcase,
    Shield: Shield,
    Building2: Building2,
    Scale: Scale,
    Building: Building,
    Users: Users,
    Award: Award,
    Clock: Clock,
    CheckCircle: CheckCircle
  }), []);

  return (
    <>
      {/* Organization Schema */}
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
          postalCode: "06420",
          addressCountry: "TR"
        }}
        geo={{
          latitude: "39.9334",
          longitude: "32.8597"
        }}
        sameAs={[
          "https://www.facebook.com/cavushukuk",
          "https://www.linkedin.com/company/cavus-hukuk",
          "https://twitter.com/cavushukuk"
        ]}
        openingHours="Mo-Fr 09:00-18:00"
        priceRange="$$"
      />

      {/* LocalBusiness Schema */}
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
          postalCode: "06420",
          addressCountry: "TR"
        }}
        geo={{
          latitude: "39.9334",
          longitude: "32.8597"
        }}
        openingHours="Mo-Fr 09:00-18:00"
        priceRange="$$"
        areaServed={{
          '@type': 'City',
          name: 'Ankara'
        }}
        serviceType="Hukuki Danışmanlık"
      />

      {/* ServiceCatalog Schema */}
      <ServiceCatalogSchema
        name="Çavuş Hukuk Bürosu Hizmet Kataloğu"
        description="Ankara'da sunulan hukuki hizmetlerin kapsamlı kataloğu"
        url="https://ankaraavukat.com/hizmetler"
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

      {/* WebPage Schema */}
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

      <HeroSection />
      
      {/* Hizmetler Bölümü */}
      <section className="py-12 md:py-20 bg-white" aria-labelledby="hizmetler-baslik">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-8 md:mb-16">
            <h2 id="hizmetler-baslik" className="text-4xl font-bold text-gray-900 mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli avukatlarımız, çeşitli hukuk alanlarında size kapsamlı danışmanlık hizmeti sunmaktadır.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {yeniHizmetler.map((hizmet, index) => {
              const IconComponent = iconMap[hizmet.icon as keyof typeof iconMap];
              
              return (
                <article key={hizmet.id} className="group">
                  <div className="bg-white rounded-xl p-6 md:p-8 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 transition-all duration-300 border border-gray-100 hover:border-red-200 shadow-md hover:shadow-lg h-full flex flex-col">
                    {/* İkon Container */}
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <IconComponent size={24} className="text-red-600" />
                    </div>
                    
                    {/* Başlık */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                      {hizmet.baslik}
                    </h3>
                    
                    {/* Açıklama */}
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-grow">
                      {hizmet.aciklama}
                    </p>
                    
                    {/* Link */}
                    <div className="mt-auto">
                      <Link
                        href={hizmet.link}
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-all duration-300 group/link"
                        aria-label={`${hizmet.baslik} hakkında detaylı bilgi`}
                      >
                        <span className="relative">
                          Detaylı Bilgi
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover/link:w-full transition-all duration-300"></span>
                        </span>
                        <ChevronRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/hizmetler"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              aria-label="Tüm hizmet alanlarımızı görüntüle"
            >
              Tüm Hizmetlerimiz
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <section className="py-12 md:py-20 bg-gray-50" aria-labelledby="hakkimizda-baslik">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 id="hakkimizda-baslik" className="text-4xl font-bold text-gray-900 mb-8">
                Hakkımızda
                </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                <p>
                  Büromuz, adaletin evrensel ilkelerine sıkı sıkıya bağlı kalarak, eşitlikçi, şeffaf ve erişilebilir hukuki hizmetler sunmayı temel misyon edinmiştir. Bu doğrultuda, yalnızca mevcut hukuki sorunların çözümüne odaklanmakla kalmayıp, aynı zamanda genç ve idealist hukukçuların mesleki gelişimine katkıda bulunmayı, onları sürekli eğitim ve mentorluk programlarıyla desteklemeyi de amaçlamaktadır. Böylece, hukuk alanında geleceğin liderlerinin yetişmesine öncülük etmektedir.
                </p>
                <p>
                  Özellikle hukuki ihtilafların çözümü konusunda uzmanlaşmış olan Ankara avukatlık büromuz, müvekkillerinin haklarını en etkin biçimde korumak için detaylı bir risk analizi yaparak, potansiyel uyuşmazlıkların önceden tespit edilip giderilmesine yönelik stratejik ve proaktif çözümler geliştirmektedir.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/hakkimizda" 
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Hakkımızda sayfasına git - Büromuz hakkında detaylı bilgi"
                >
                  Daha Fazla Bilgi
                  <ChevronRight size={20} className="ml-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <aside className="bg-white rounded-lg p-4 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Neden Çavuş Hukuk?</h3>
              <ul className="space-y-4">
                  {nedenCavusHukuk.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={16} className="text-red-600" />
                      </div>
                    <span className="text-gray-700 font-medium">{item.title}</span>
                    </li>
                  ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Çavuş Hukuk - Ankara Avukat Bölümü */}
      <section className="py-12 md:py-20 bg-white" aria-labelledby="cavus-hukuk-baslik">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Sol - Fotoğraf Alanı */}
            <div className="bg-gray-100 rounded-lg p-4 md:p-8 shadow-lg border border-gray-200 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Building size={64} className="mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">Fotoğraf Alanı</p>
                <p className="text-sm text-gray-400 mt-2">Buraya fotoğraf eklenecek</p>
              </div>
            </div>
            
            {/* Sağ - Metin */}
            <div>
              <h2 id="cavus-hukuk-baslik" className="text-4xl font-bold text-gray-900 mb-8">
                Çavuş Hukuk - Ankara Avukat
              </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                <p>
                  Avukat; bireylerin veya kurumların karşılaştığı hukuki uyuşmazlıkları çözmek, yasal haklarını korumak ve yargı sürecini doğru şekilde yürütmek için hizmet veren hukuk uzmanıdır. Türkiye'de mahkemelerde avukatla temsil zorunlu değildir; ancak hukuki bilgi ve deneyim eksikliği, kişilerin ciddi hak kayıpları yaşamasına neden olabilir.
                </p>
                <p>
                  Bir avukat, sadece dava süreçlerinde değil; sözleşme hazırlığı, boşanma, miras, ceza hukuku, iş hukuku, ticari ilişkiler gibi birçok alanda danışmanlık sunar. Sürecin usulüne uygun ilerlemesi, hakların korunması ve ileride doğabilecek sorunların önlenmesi açısından avukat desteği büyük önem taşır.
                </p>
                <p>
                  Hukuki bir meseleyle karşılaştığınızda veya ileride sorun yaşamamak için önlem almak istediğinizde, konusunda uzman bir avukata danışmak, hem güvenli hem de etkili bir çözümdür. Avukatsız yürütülen işlemler çoğu zaman zaman ve hak kaybına yol açabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Yazıları Bölümü */}
      <section className="py-12 md:py-20 bg-gray-50" aria-labelledby="blog-baslik">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-8 md:mb-16">
            <h3 id="blog-baslik" className="text-4xl font-bold text-gray-900 mb-4">
              Blog Yazılarımız
            </h3>
          </header>
          
          <BlogGrid />
        </div>
      </section>

      <AIChatbot />
    </>
  );
});

export default HomePage;
