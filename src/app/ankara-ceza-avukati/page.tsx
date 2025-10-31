import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ServiceSchema } from '@/components/seo';
import { BASE_URL, IDS } from '@/components/seo/constants';
import OptimizedImage from '@/components/ui/OptimizedImage';
import AvukatBilgiKarti from '@/components/ui/AvukatBilgiKarti';
import ServicesSidebar from '@/components/ui/ServicesSidebar';

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
    canonical: 'https://www.ismailcavus.av.tr/ankara-ceza-avukati',
  },
  other: {
    'article:section': 'Hukuki Hizmetler',
    'article:tag': 'ceza avukatı, ceza davası, savunma, ankara',
  },
};

const AnkaraCezaAvukatiPage = () => {
  const tableOfContents = [
    { id: 'ankara-ceza-hukuku-surecleri', title: 'Ankara\'da Ceza Hukuku Süreçleri Nasıldır?', level: 2 },
    { id: 'sorusturma-asamasi', title: 'Soruşturma Aşaması Nedir ve Nasıl İlerler?', level: 3 },
    { id: 'kovusturma-asamasi', title: 'Kovuşturma Aşaması Nasıl Başlar ve Nasıl İlerler?', level: 3 },
    { id: 'kanun-yollari-istinaf-temyiz', title: 'Kanun Yolları: İstinaf ve Temyiz Süreci Nedir?', level: 3 },
    { id: 'infaz-asamasi', title: 'İnfaz Aşaması Nedir ve Nasıl İşler?', level: 3 },
    { id: 'ankara-ceza-mahkemeleri', title: 'Ankara\'daki Ceza Mahkemeleri - Hangi Mahkeme Hangi Suçlara Bakar?', level: 2 },
    { id: 'agir-ceza-mahkemeleri', title: 'Ağır Ceza Mahkemelerinde Görülen Davalar', level: 3 },
    { id: 'asliye-ceza-mahkemeleri', title: 'Asliye Ceza Mahkemesinde Görülen Davalar', level: 3 },
    { id: 'ceza-davasi-ilk-24-saat', title: 'Ceza Davası Açıldığında İlk 24 Saatte Ne Yapılmalıdır?', level: 2 },
    { id: 'hukuki-durum-tespiti', title: 'Hukuki Durumun Tespiti ve Profesyonel Destek', level: 3 },
    { id: 'haklarin-bilinmesi', title: 'Hakların Bilinmesi ve Kullanılması', level: 3 },
    { id: 'savunma-stratejisi', title: 'Savunma Stratejisinin Oluşturulması', level: 3 },
    { id: 'yargilama-takibi', title: 'Yargılama Sürecinin Takibi', level: 3 },
    { id: 'ankara-ceza-avukati-ucretleri', title: 'Ankara Ceza Avukatı Ücretleri', level: 2 },
    { id: 'aaut', title: 'Türkiye Barolar Birliği Asgari Ücret Tarifesi', level: 3 },
    { id: 'ucreti-etkileyen-faktorler', title: 'Ücreti Etkileyen Temel Faktörler', level: 3 },
    { id: 'ucret-sozlesmesi-odeme', title: 'Ücret Sözleşmesi ve Ödeme Şekilleri', level: 3 },
    { id: 'neden-ankara-ceza-avukati', title: 'Neden Ankara Ceza Avukatı ile İlerlemelisiniz?', level: 2 },
    { id: 'usul-hukukuna-hakimiyet', title: 'Usul Hukukuna Hakimiyet ve Hak Kaybı Riskinin Önlenmesi', level: 3 },
    { id: 'etkin-savunma-stratejisi', title: 'Etkin Savunma Stratejisi Oluşturma', level: 3 },
    { id: 'duygusalliktan-uzak-temsil', title: 'Duygusallıktan Uzak, Rasyonel Temsil', level: 3 },
    { id: 'sik-sorulan-sorular', title: 'Sık Sorulan Sorular', level: 2 },
    { id: 'sss-ankara-agir-ceza-mahkeme', title: 'Ankara\'da ağır ceza davasına hangi mahkeme bakar?', level: 3 },
    { id: 'sss-ne-zaman-avukata', title: 'Ankara ceza avukatı ile ne zaman iletişime geçmeliyim?', level: 3 },
    { id: 'sss-agir-ceza-avukat-sart-mi', title: 'Ağır ceza dosyasında avukat şart mı?', level: 3 },
    { id: 'sss-istinaf-temyiz', title: 'İstinaf veya temyiz süresini kaçırırsam ne olur?', level: 3 },
    { id: 'sss-ucretler', title: 'Ücretler nasıl belirlenir?', level: 3 },
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
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Ankara Ceza Avukatı', url: `${BASE_URL}/ankara-ceza-avukati` }
  ];

  const canonicalUrl = `${BASE_URL}/ankara-ceza-avukati`;

  // FAQ Data
  const faqData = [
    {
      question: 'Ankara\'da ağır ceza davasına hangi mahkeme bakar?',
      answer: 'Ankara\'da işlenen ve Türk Ceza Kanunu kapsamında üst sınırı yüksek hapis cezaları öngörülen suçlara ilişkin yargılamalar, Ankara Adliyesi Ağır Ceza Mahkemeleri tarafından yürütülür. Cinayet, yağma (gasp), örgütlü suçlar veya nitelikli dolandırıcılık gibi toplumda infial uyandıran suçlar bu kapsamdadır. Bu mahkemeler, tek hâkim yerine bir başkan ve iki üyeden oluşan bir heyet şeklinde karar verir. Yargılama süreci; delillerin ayrıntılı incelenmesi, usul tartışmaları ve esaslı savunmaların değerlendirilmesi gibi karmaşık aşamalardan oluşur. Bu süreçte tecrübeli bir Ankara ağır ceza avukatı ile çalışmak, hem savunmanın etkinliğini artırır hem de hak kaybı riskini ortadan kaldırır.'
    },
    {
      question: 'Ankara ceza avukatı ile ne zaman iletişime geçmeliyim?',
      answer: 'Bir ceza soruşturması veya kovuşturmasıyla karşı karşıya kalabileceğinizi öğrendiğiniz anda, Ankara ceza avukatı ile iletişime geçmek en doğru adımdır. Henüz ifadeye çağrılmadan, arama veya el koyma kararı uygulanmadan önce profesyonel hukuki destek almak, savunmanın temelini oluşturur. Erken aşamada yapılacak hukuki planlama, özellikle ilk ifade sırasında verilecek beyanların ilerideki savunma stratejisiyle çelişmemesini sağlar. Bu nedenle Ankara\'daki ceza davalarında erken avukat desteği almak, sürecin kontrolünü elinizde tutmanın ve hak kaybı yaşamamanın en etkili yoludur.'
    },
    {
      question: 'Ağır ceza dosyasında avukat şart mı?',
      answer: 'Evet. Ağır ceza dosyaları, sanığın özgürlüğünü doğrudan etkileyen en ciddi yargılama türlerindendir. Ceza Muhakemesi Kanunu (CMK), alt sınırı beş yıldan fazla hapis cezası gerektiren suçlarda, sanığın istemi olmasa bile zorunlu müdafilik (avukat ataması) hükümlerini düzenlemiştir. Ancak zorunlu müdafilik dışında kalan davalarda dahi, yüksek ceza tehdidi barındıran suçlarda deneyimli bir Ankara ağır ceza avukatı ile savunma yapılması, dosyanın seyrini değiştirebilir. Bu tür davalar derin hukuki bilgi ve stratejik savunma tecrübesi gerektirdiğinden, profesyonel temsil çoğu zaman sonucu belirleyen en kritik unsurdur.'
    },
    {
      question: 'İstinaf veya temyiz süresini kaçırırsam ne olur?',
      answer: 'Ceza yargılamasında istinaf (Bölge Adliye Mahkemesi) ve temyiz (Yargıtay) başvuruları için belirlenen süreler hak düşürücü niteliktedir. Bu sürelerin kaçırılması halinde, mahkeme kararı kesinleşir ve itiraz hakkı ortadan kalkar. Özellikle hapis cezası kararlarında, infaz süreci hemen başlayabilir ve telafisi imkânsız sonuçlar doğabilir. Bu nedenle kararın size tebliğ edildiği andan itibaren, başvuruların zamanında ve usulüne uygun şekilde yapılması gerekir. Bu sürecin, alanında uzman bir Ankara ceza avukatı tarafından dikkatle takip edilmesi, hukuki denetimin etkin biçimde sağlanması açısından büyük önem taşır.'
    },
    {
      question: 'Ücretler nasıl belirlenir?',
      answer: 'Ankara\'daki ceza davalarında avukatlık ücretleri, her yıl Türkiye Barolar Birliği\'nin yayımladığı Avukatlık Asgari Ücret Tarifesi (AAÜT) esas alınarak belirlenir. Bu tarife yalnızca alt sınırı gösterir; ancak gerçek ücret, dosyanın kapsamı, suçun niteliği, delil yoğunluğu, duruşma sayısı, yargılamanın süresi ve avukatın uzmanlığı gibi etkenlere göre değişir. Ankara ağır ceza avukatı ücretleri, dosyaların karmaşık yapısı ve yüksek sorumluluk düzeyi nedeniyle genellikle AAÜT\'nin üzerinde belirlenir. Ücretlendirme, avukat ile müvekkil arasında serbestçe kararlaştırılır ve her dosya özelinde farklılık gösterebilir.'
    }
  ];

  return (
    <>
      <WebPageSchema
        title="Ankara Ceza Avukatı | Çavuş Hukuk Bürosu"
        description="Ankara'da ceza hukuku davalarında uzman avukatlar. Ağır ceza, asliye ceza ve soruşturma süreçlerinde profesyonel hukuki destek."
        url={canonicalUrl}
        isPartOf={IDS.website}
        about={IDS.organization}
        breadcrumbId={`${canonicalUrl}#breadcrumb`}
        mentions={IDS.person}
      />
      <BreadcrumbSchema items={breadcrumbData} url={canonicalUrl} />
      <ServiceSchema
        name="Ankara Ceza Avukatı"
        description="Ankara'da ceza hukuku davalarında uzman avukatlar. Ceza hukuku alanında profesyonel savunma ve danışmanlık hizmeti."
        url={canonicalUrl}
        serviceType="Ceza Hukuku"
        alternateName="Ceza Avukatı (Ankara)"
        providerId={IDS.local}
        areaServed="Ankara, Türkiye"
        audience="Şüpheli, Sanık, Mağdur"
      />
      <FAQSchema items={faqData} />
      <main className="bg-white min-h-screen">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Breadcrumb 
                  items={[
                    { label: 'Ankara Ceza Avukatı' }
                  ]} 
                />
              </div>
              
          <div className="flex flex-col lg:flex-row lg:gap-[80px] lg:justify-start">
            {/* Ana İçerik */}
            <div className="w-full lg:w-[730px]">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Ankara Ceza Avukatı</h1>
              
              {/* Ana Görsel */}
              <div className="mb-8">
                <OptimizedImage
                  src="/images/ankara-ceza-avukati.webp"
                  alt="Ankara Ceza Avukatı - Profesyonel Hukuki Danışmanlık"
                  width={848}
                  height={480}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} defaultOpen={false} className="lg:w-[400px]" />
              
              {/* İçerik Alanı */}
              <article className="max-w-none ankara-ceza-avukati">
                <p className="mb-6">
                  Ankara'da bir ceza davası ile karşılaşıldığında sürecin CMK'ya uygun ve zamanında yönetilmesi hayati önem taşır. Özellikle Ankara Ağır Ceza Mahkemeleri kapsamında görülen dosyalarda, deneyimli bir <strong>Ankara ağır ceza avukatı</strong> tarafından temsil edilmek hak kaybını önler. Bu rehber, Ankara ceza avukatı bakış açısıyla soruşturma, kovuşturma, kanun yolları ve infaz aşamalarını; Ankara'daki mahkeme yapısıyla birlikte somut adımlarla, pratik bir yol haritası şeklinde açıklar.
                </p>

                <p className="mb-6">
                  Ceza davaları, 5271 sayılı Ceza Muhakemesi Kanunu (CMK) çerçevesinde yürütülse de, Ankara'daki mahkemelerin iş yükü ve farklı uygulama biçimleri, ceza yargılaması sürecini dikkatle takip etmeyi gerektirir. Bu yazı, Ankara ceza avukatı gözünden; mahkeme yapısını ve süreci açıklayarak, hak kaybı risklerini en aza indirmek isteyenler için bilgilendirici bir rehber sunmayı amaçlamaktadır.
                </p>

                <h2 id="ankara-ceza-hukuku-surecleri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ankara'da Ceza Hukuku Süreçleri Nasıldır?
                </h2>

                <p className="mb-6">
                  Ceza yargılaması; soruşturma, kovuşturma, kanun yolları (istinaf-temyiz) ve infaz aşamalarından oluşur. Ankara özelinde, dosyanın niteliğine göre duruşma trafiği ve yerel işleyiş farklılık gösterebilir. Bu rehber, Ankara ceza avukatı desteği ile her aşamada yapılması gerekenleri; ağır suçlarda ise Ankara ağır ceza avukatı perspektifini öne çıkararak adım adım özetlemektedir. Başkentte ceza davalarının görüldüğü başlıca mahkemeler şunlardır:
                </p>

                <p className="mb-4 font-semibold text-gray-900">
                  Ankara Adliyesi (Sıhhiye)
                </p>
                <p className="mb-6">
                  Ankara Adliyesi, özellikle Ağır Ceza Mahkemelerinin bulunduğu merkezdir. Cinayet, yağma, uyuşturucu ticareti gibi ağır suç dosyalarının büyük bölümü burada görülür. Yoğun duruşma trafiği ve farklı mahkeme dairelerinin uygulama biçimleri, yargılamanın dikkatle takip edilmesini gerektirir.
                </p>

                <p className="mb-4 font-semibold text-gray-900">
                  Ankara Batı Adliyesi (Sincan)
                </p>
                <p className="mb-6">
                  Sincan ve Etimesgut ilçelerine hizmet veren bu adliye, çoğunlukla Asliye Ceza Mahkemeleri ve Sulh Ceza Hâkimliklerini barındırır. Tutuklama, arama, adli kontrol gibi soruşturma aşamasındaki kararlar genellikle burada alınır.
                </p>

                <p className="mb-4 font-semibold text-gray-900">
                  Ankara Bölge Adliye Mahkemesi (İstinaf)
                </p>
                <p className="mb-6">
                  Yerel mahkeme kararlarının hukuka uygunluğunu inceleyen ikinci derece mahkemedir. Ankara Bölge Adliye Mahkemesi, başkent ve çevresindeki illerden gelen dosyaları değerlendirir ve hem maddi vakıa hem de hukuki denetim yapar.
                </p>

                <p className="mb-4 font-semibold text-gray-900">
                  Yerel Pratiklerin Önemi
                </p>
                <p className="mb-6">
                  Ceza hukuku alanında çalışan bir Ankara ceza avukatının, yalnızca kanun hükümlerine değil, aynı zamanda adliyelerin yerel işleyiş biçimine de hâkim olması önemlidir. Örneğin, Ankara Adliyesi'ndeki Ağır Ceza Mahkemesi'nin delil değerlendirme yöntemi veya duruşma aralıkları, Batı Adliyesi'ndeki bir Asliye Ceza Mahkemesi'nden farklılık gösterebilir. Bu farkların bilinmesi, Ankara'daki ceza yargılamalarının etkin ve usule uygun yürütülmesi açısından belirleyici rol oynar.
                </p>

                <p className="mb-6">
                  Ankara'da ceza yargılaması süreci, bir suç şüphesinin öğrenilmesinden hükmün infazına kadar uzanan dört temel aşamadan oluşur. Bu süreçte, özellikle ceza hukuku alanında çalışan bir Ankara ceza avukatı, sürecin doğru anlaşılması ve hak kaybı yaşanmaması açısından hukuki bilgi sağlar. Bu aşamalar, 5271 sayılı Ceza Muhakemesi Kanunu (CMK) çerçevesinde yürütülür ve her biri, bireylerin haklarını doğrudan etkileyen önemli süreçlerdir.
                </p>

                <h3 id="sorusturma-asamasi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Soruşturma Aşaması Nedir ve Nasıl İlerler?
                </h3>
                <p className="mb-6">
                  Soruşturma, suç şüphesinin öğrenilmesiyle başlar ve kamu davası açılıp açılmayacağı bu aşamada belirlenir. Ankara'da soruşturma tedbirleri çoğunlukla Sulh Ceza Hâkimlikleri önünde görülür. Bu dönemde susma hakkı, müdafi talebi, dosya inceleme ve lehe delil sunma kritik önemdedir. Ankara ceza avukatı, ifade öncesi dosya kapsamını analiz eder; ağır suç şüphesi varsa Ankara ağır ceza avukatı yaklaşımıyla tedbir ve delil yönetimini sıkılaştırır.
                </p>
                <p className="mb-6">
                  Tutuklama, arama, el koyma gibi tedbirler bu aşamada uygulanabilir. Ankara'da yürütülen ceza soruşturmalarında, tutuklama veya el koyma gibi tedbir kararları genellikle Sulh Ceza Hâkimlikleri tarafından alınır. Bu kararlara, CMK m. 101/5 ve 268 uyarınca tebliğden itibaren yedi gün içinde itiraz edilebilir. İtiraz dilekçelerinde, kararın dayandığı gerekçelerin yasal koşulları taşımadığı açıklanarak, kararın denetimi talep edilir.
                </p>

                <h3 id="kovusturma-asamasi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Kovuşturma Aşaması Nasıl Başlar ve Nasıl İlerler?
                </h3>
                <p className="mb-6">
                  İddianamenin kabulüyle kovuşturma başlar; deliller yüz yüzelik ve sözlülük ilkeleri ile duruşmada tartışılır. Ankara'daki dosyalarda, tanık-bilirkişi yönetimi ve delil tartışması, mahkeme dairesinin iş yüküne göre farklı tempo kazanabilir. Ağır suçlarda <strong>Ankara ağır ceza avukatı</strong>, çapraz sorgu, bilirkişi raporuna itiraz ve hukuka aykırı delilin dışlanması konularında stratejiyi belirler.
                </p>
                <p className="mb-6">
                  Ceza mahkemelerinde kovuşturma süreci, genellikle iddianamenin kabulünden sonraki ilk duruşmayla başlar. Bu aşamada Ankara ceza avukatı, ceza mahkemesi huzurunda dinlenen tanıkların ve bilirkişilerin beyanlarını hukuka uygunluk açısından değerlendirir. Delillerin toplanması sürecini takip eder ve usule aykırı işlemlere karşı itiraz eder. Ceza davasının bu aşamasında esas hakkındaki savunma, toplanan delillerin analizi ve yasal indirim nedenlerinin değerlendirilmesiyle tamamlanır.
                </p>

                <h3 id="kanun-yollari-istinaf-temyiz" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Kanun Yolları: İstinaf ve Temyiz Süreci Nedir?
                </h3>
                <p className="mb-6">
                  İlk derece kararlarına karşı istinaf (Ankara BAM) ve uygun şartlarda temyiz başvuruları yapılır. Sürelerin kaçırılması telafisi güç hak kaybı doğurur. Ankara ceza avukatı, kararın hem usul hem esası yönünden somut hatalarını ortaya koyar; ağır suçlarda Ankara ağır ceza avukatı, ceza miktarı ve nitelendirme üzerinden cezayı düşürebilecek argümanları önceler.
                </p>
                <p className="mb-6">
                  Avukatın rolü burada kritik önem taşımaktadır. Karar sonrasında, hangi usul veya madde ihlallerinin yapıldığı belirlenir. İstinaf veya temyiz dilekçesi, CMK ve TCK hükümlerine göre somut gerekçelerle hazırlanır. Bu süreç, hükmün kesinleşmeden önce hatalı uygulamaların düzeltilmesini sağlayan denetim aşamasıdır.
                </p>

                <h3 id="infaz-asamasi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  İnfaz Aşaması Nedir ve Nasıl İşler?
                </h3>
                <p className="mb-6">
                  Hükmün kesinleşmesiyle 5275 sayılı CGTİK çerçevesinde infaz başlar. Denetimli serbestlik, koşullu salıverilme ve iyileştirme programları doğru süre hesabına bağlıdır. Ankara'daki infaz hâkimlikleri nezdinde yapılacak itiraz ve düzeltme başvuruları, süre hesabındaki hataların düzeltilmesini sağlayabilir. Ankara ceza avukatı, lehe uygulamaların dosyaya yansıtılmasını takip eder.
                </p>

                <h2 id="ankara-ceza-mahkemeleri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ankara'daki Ceza Mahkemeleri - Hangi Mahkeme Hangi Suçlara Bakar?
                </h2>

                <div className="mb-6">
                  <OptimizedImage
                    src="/images/hangi-mahkeme-hangi-suca-bakar.webp"
                    alt="Ankara'da hangi ceza mahkemesinin hangi suça baktığını açıklayan görsel"
                    width={848}
                    height={480}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <p className="mb-6">
                  Ankara'daki ceza yargılaması, suçun niteliğine göre farklı mahkemelerde yürütülür. Hangi mahkemenin hangi davalara baktığını bilmek, özellikle Ankara'daki ceza davalarında sürecin doğru planlanması ve hak kayıplarının önlenmesi açısından önemlidir. Bu görev dağılımı, ceza yargılamasının uzmanlık gerektiren alanlara odaklanmasını sağlar ve her mahkemenin görev alanı kanunlarla kesin olarak belirlenmiştir.
                </p>

                <h3 id="agir-ceza-mahkemeleri" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Ağır Ceza Mahkemelerinde Görülen Davalar
                </h3>

                <p className="mb-6">
                  Ağır Ceza Mahkemeleri, Türk ceza yargılaması sisteminde en yüksek ceza haddine sahip suçların yargılandığı, üç hakimden oluşan bir heyet mahkemesidir. Bu mahkemelerin görev alanı, 5235 sayılı Adli Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun ve özel kanunlarla belirlenmiştir.
                </p>

                <p className="mb-6">
                  Bir davanın Ağır Ceza Mahkemesi'nde görülüp görülmeyeceği, öncelikle suç için kanunda öngörülen cezanın alt ve üst sınırlarına göre belirlenir.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Kanunlarda aksi belirtilmedikçe, ağır hapis cezasını gerektiren veya hapis cezasının alt sınırı beş yıldan fazla olan suçlar Ağır Ceza Mahkemesi'nin görev alanına girer.</li>
                  <li>Bazı suçlar, ceza haddine bakılmaksızın, suçun niteliği gereği özel olarak Ağır Ceza Mahkemesi'nin görevine verilmiştir (örneğin, Terörle Mücadele Kanunu kapsamındaki bazı suçlar).</li>
                </ul>

                <p className="mb-6">
                  Ağır Ceza Mahkemeleri'nin yargılamasını yaptığı davalar, genellikle toplum nezdinde büyük infial yaratan ve ciddi yaptırımlar gerektiren suçlardır. Ankara ağır ceza avukatının baktığı suçlar genellikle şunlardır:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Kasten Öldürme Suçu:</strong> Hayata karşı işlenen ve en ağır yaptırımları gerektiren temel suçtur (TCK m. 81).</li>
                  <li><strong>Yağma (Gasp) Suçu:</strong> Cebir veya tehdit kullanarak bir malın alınması suçudur. Nitelikli halleri Ağır Ceza Mahkemesi'nin görev alanına girer (TCK m. 148).</li>
                  <li><strong>Uyuşturucu veya Uyarıcı Madde İmal ve Ticareti Suçu:</strong> Uyuşturucu maddelerin üretimi, satışı veya nakliyesi gibi eylemleri kapsar (TCK m. 188).</li>
                  <li><strong>Zimmet Suçu:</strong> Kamu görevlisinin görevi nedeniyle zilyetliği kendisine devredilmiş olan malı kendisinin veya başkasının zimmetine geçirmesi (TCK m. 250).</li>
                  <li><strong>Rüşvet Suçu:</strong> Kamu görevlilerinin görevlerini yapmaları veya yapmamaları karşılığında menfaat sağlamaları (TCK m. 252).</li>
                  <li><strong>Anayasal Düzene Karşı Suçlar:</strong> Devletin birliğini ve ülke bütünlüğünü bozmak, silahlı örgüt kurmak gibi TCK'nın 309 ve devamı maddelerinde düzenlenen suçlardır.</li>
                </ul>

                <p className="mb-6">
                  Ağır Ceza Mahkemelerinde yargılama süreci, delil toplama, bilirkişi raporları ve tanık dinleme gibi aşamalar açısından oldukça teknik ve detaylı ilerler. Bu mahkemelerde savunmanın etkinliği, davanın sonucunu belirleyen en kritik faktördür. Bu tür davalarda sanığın müdafi (avukat) bulundurma zorunluluğu (zorunlu müdafilik) sıklıkla gündeme gelir.
                </p>

                <h3 id="asliye-ceza-mahkemeleri" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Asliye Ceza Mahkemesinde Görülen Davalar
                </h3>

                <p className="mb-6">
                  Asliye Ceza Mahkemeleri, ceza yargılamasında genel görevli mahkemelerdir. Ağır Ceza Mahkemeleri'nin veya özel kanunlarla kurulmuş diğer mahkemelerin görev alanına girmeyen tüm suçlara Asliye Ceza Mahkemeleri bakar. Bu mahkemeler, tek bir hâkim tarafından yönetilir. Asliye Ceza Mahkemeleri'nin görev alanı, "genel görevli" olma ilkesiyle belirlenir.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Kanunda başka bir mahkemenin görevli olduğu açıkça belirtilmeyen tüm davalar Asliye Ceza Mahkemesi'nde görülür.</li>
                  <li>Bu mahkemeler, genellikle hapis cezasının alt sınırı beş yıldan az olan ve üst sınırı on yılı geçmeyen suçları yargılar. Bu, Ağır Ceza Mahkemeleri'nin görev alanına giren suçların dışındaki suçları kapsar.</li>
                </ul>

                <p className="mb-6">
                  Asliye Ceza Mahkemeleri, toplumda en sık karşılaşılan ve kamu düzenini ilgilendiren suçların büyük bir kısmını karara bağlar.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Hakaret Suçu:</strong> Bir kimsenin onur, şeref ve saygınlığını rencide edebilecek nitelikte somut bir fiil veya olgu isnat edilmesi ya da sövmek suretiyle gerçekleşen suç (TCK m. 125).</li>
                  <li><strong>Basit Kasten Yaralama Suçu:</strong> Vücut dokunulmazlığına karşı işlenen ve nitelikli halleri Ağır Ceza'nın görevine girmeyen yaralama eylemleri (TCK m. 86/1).</li>
                  <li><strong>Taksirle Yaralama Suçu:</strong> Dikkat ve özen yükümlülüğüne aykırı davranışla bir başkasının yaralanmasına neden olma (TCK m. 89).</li>
                  <li><strong>Basit Hırsızlık Suçu:</strong> Mal varlığına karşı işlenen ve nitelikli halleri (örneğin, gece vakti, kilitlenerek) bulunmayan hırsızlık eylemleri (TCK m. 141).</li>
                  <li><strong>Dolandırıcılık Suçu:</strong> Hileli davranışlarla bir kimseyi aldatıp, onun veya başkasının zararına olacak şekilde kendisine veya başkasına yarar sağlama (nitelikli halleri hariç) (TCK m. 157).</li>
                  <li><strong>Resmi Belgede Sahtecilik Suçu:</strong> Resmi bir belgeyi sahte olarak düzenleme, başkalarını aldatacak şekilde değiştirme veya sahte belgeyi kullanma (TCK m. 204/2).</li>
                </ul>

                <p className="mb-6">
                  Asliye Ceza Mahkemelerinde yargılama süreci, Ağır Ceza Mahkemelerine göre genellikle daha hızlı ilerler. Ancak, dosya yoğunluğunun fazla olması nedeniyle, duruşmalar arasındaki süreler uzayabilir. Bu mahkemelerde de savunmanın etkin yürütülmesi, özellikle delillerin sunumu ve usul itirazları açısından kritik öneme sahiptir. Adil yargılanma hakkının tesisi için, bu mahkemelerde de Ankara ceza avukatından destek almak, sürecin doğru yönetilmesi açısından önemlidir.
                </p>

                <h2 id="ceza-davasi-ilk-24-saat" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Davası Açıldığında İlk 24 Saatte Ne Yapılmalıdır?
                </h2>

                <div className="mb-6">
                  <OptimizedImage
                    src="/images/ceza-davasi-acildiginda-ilk-24-saatte-ne-yapilmalidir.webp"
                    alt="Ceza davası açıldığında ilk 24 saatte yapılması gereken adımlar"
                    width={848}
                    height={480}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <p className="mb-6">
                  Bir kişi hakkında ceza davası açılması (veya soruşturma aşamasında şüpheli sıfatıyla işlem yapılması), hukuki süreçlerin en kritik ve stresli aşamalarından birisidir. İlk 24 saatte müdafi tayini, dosya içeriğinin öğrenilmesi, susma hakkının doğru kullanımı ve lehe delil tespiti yapılmalıdır. Bu sürecin Ankara ceza avukatı nezaretinde yürütülmesi; ağır suç şüphesinde ise Ankara ağır ceza avukatı perspektifiyle tedbir ve ifade stratejisinin kurulması hak kaybını önler.
                </p>

                <h3 id="hukuki-durum-tespiti" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Hukuki Durumun Tespiti ve Profesyonel Destek
                </h3>
                <p className="mb-6">
                  İlk ve en önemli adım, derhal bir ceza avukatı (müdafi) ile iletişime geçmektir. Ceza yargılaması, usul kurallarına ve Ceza Muhakemesi Kanunu (CMK) hükümlerine sıkı sıkıya bağlıdır. Bu nedenle, bireyin kendi başına hukuki savunma yapmaya çalışması, hak kayıplarına yol açabilir.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Müdafi Tayini:</strong> Soruşturma veya kovuşturma aşamasında bir Ankara ceza avukatının sürece dahil olması, delillerin toplanması, ifade verme süreçleri ve koruma tedbirlerine (tutuklama, adli kontrol) itirazlar konusunda hayati bir güvence sağlar. Ağır ceza riski varsa strateji, Ankara ağır ceza avukatı deneyimiyle erkenden kurulmalıdır.</li>
                  <li><strong>Dosya İçeriğinin Öğrenilmesi:</strong> Avukatınız aracılığıyla, hakkınızdaki iddiaların dayanağı olan soruşturma dosyası içeriğine erişim sağlanır. Bu, savunma stratejisinin oluşturulması için temel gerekliliktir.</li>
                </ul>

                <h3 id="haklarin-bilinmesi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Hakların Bilinmesi ve Kullanılması
                </h3>
                <p className="mb-6">
                  Ceza yargılaması, bireyin temel hak ve özgürlüklerini kısıtlama potansiyeli taşıdığı için, kanunlar şüpheli ve sanıklara geniş haklar tanımıştır. Bu hakların farkında olmak, sürecin adil ilerlemesi için elzemdir.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Susma Hakkı:</strong> İfade ve sorgu sırasında kendinizi suçlayıcı beyanda bulunmama hakkınızdır. Bu hakkın kullanılması, aleyhinize delil olarak değerlendirilemez.</li>
                  <li><strong>Müdafi Yardımından Yararlanma Hakkı:</strong> Soruşturmanın her aşamasında bir avukatın (müdafinin) hukuki yardımından yararlanabilirsiniz. Maddi imkânı olmayan kişiler için baro tarafından ücretsiz avukat görevlendirilir.</li>
                  <li><strong>Delil Toplama Talebi Hakkı:</strong> Sadece aleyhinize değil, lehinize olan delillerin de toplanmasını talep edebilirsiniz. Bu hak, adil savunmanın temel unsurlarındandır.</li>
                  <li><strong>Tercüman İsteme Hakkı:</strong> Türkçeyi yeterince bilmeyen veya konuşamayan kişiler, tercüman yardımından ücretsiz yararlanabilir.</li>
                </ul>

                <h3 id="savunma-stratejisi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Savunma Stratejisinin Oluşturulması
                </h3>
                <p className="mb-6">
                  Dosya içeriği incelendikten sonra, avukatınızla birlikte detaylı bir savunma stratejisi oluşturulmalıdır. Bu strateji, sadece suçlamaları reddetmeyi değil, aynı zamanda olayın hukuki niteliğini doğru tespit etmeyi, lehe delilleri sunmayı ve usul hatalarına itiraz etmeyi de kapsar.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Delil Yönetimi:</strong> Savunmayı destekleyen tüm yazılı, görsel ve tanık delillerinin/ispat vakıalarının toplanması ve mahkemeye usulüne uygun sunulması gerekir.</li>
                  <li><strong>İfade Hazırlığı:</strong> İfade verme süreci, davanın sonraki aşamaları için temel teşkil eder. Hazırlıksız ifade vermek, sonradan düzeltilmesi zor hatalara yol açabilir. Bu nedenle, avukat nezaretinde ve dikkatli bir şekilde ifade verilmelidir.</li>
                </ul>

                <h3 id="yargilama-takibi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Yargılama Sürecinin Takibi
                </h3>
                <p className="mb-6">
                  Ceza davası açıldıktan sonra, duruşma günleri, tebligatlar ve mahkeme kararları titizlikle takip edilmelidir. Duruşmalara katılmak, savunma hakkının etkin kullanımı açısından önemlidir.
                </p>

                <p className="mb-6">
                  Özetle ceza davası ile karşılaşıldığında, duygusal tepkilerden kaçınarak süreci rasyonel bir zemine oturtmak ve kanuni haklarınızı en üst düzeyde kullanmak için derhal uzman bir ceza hukuku avukatından destek almak, atılacak en doğru adımdır. Bu, yargılamanın adil ve usule uygun ilerlemesini sağlamanın anahtarıdır.
                </p>

                <h2 id="ankara-ceza-avukati-ucretleri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ankara Ceza Avukatı Ücretleri
                </h2>

                <div className="mb-6">
                  <OptimizedImage
                    src="/images/ankara-ceza-avukati-ucretleri.webp"
                    alt="Ankara ceza avukatı ücretleri hakkında bilgilendirici grafik"
                    width={848}
                    height={480}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <p className="mb-6">
                  Ücretler AAÜT alt sınırına tabidir; dosyanın kapsamı, aşaması ve gereken mesaiye göre değişir. Ağır nitelikli dosyalarda risk ve kapsam arttığı için Ankara ağır ceza avukatı ücretleri genellikle daha yüksektir. Asliye ceza kapsamındaki davalarda ise Ankara ceza avukatı ücretleri, işin niteliğine ve beklenen duruşma sayısına göre belirlenir.
                </p>

                <h3 id="aaut" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Türkiye Barolar Birliği Asgari Ücret Tarifesi
                </h3>
                <p className="mb-6">
                  Avukatlık ücretlerinin belirlenmesindeki temel yasal dayanak, her yıl Türkiye Barolar Birliği (TBB) tarafından yayımlanan Avukatlık Asgari Ücret Tarifesi (AAÜT)'dir.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>AAÜT, avukatların bir hizmet karşılığında talep edebileceği en düşük ücreti (asgari haddi) belirler. Avukatlar bu tarifenin altında ücret talep edemezler.</li>
                  <li>Tarife, üst sınırı belirlemez. Bu nedenle avukatlar, davanın karmaşıklığına ve harcayacakları mesaiye göre AAÜT'nin üzerinde bir ücret talep etme hakkına sahiptir. Ağır ceza heyetli yargılama, bilirkişi ve delil tartışması nedeniyle daha kapsamlı çalışmayı gerektirir. Bu fark, Ankara ağır ceza avukatı dosyalarında ücret politikasına doğrudan yansır.</li>
                </ul>

                <h3 id="ucreti-etkileyen-faktorler" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Ücreti Etkileyen Temel Faktörler
                </h3>
                <p className="mb-6">
                  Avukatlık ücretinin AAÜT'nin üzerinde belirlenmesinde rol oynayan ve hukuki hizmetin maliyetini doğrudan etkileyen bir dizi faktör bulunmaktadır:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Davanın Türü ve Kapsamı:</strong> Ağır Ceza Mahkemelerinde görülen cinayet, uyuşturucu ticareti, anayasal düzene karşı suçlar gibi davalar, Asliye Ceza Mahkemesi'nde görülen davalara göre daha yüksek ücretlendirilir. Diğer bir anlatımla Ankara ağır ceza avukatı ücretleri, daha hafif suçlar için alınan avukatlık ücretinden daha pahalıdır.</li>
                  <li><strong>Davanın Aşaması:</strong> Soruşturma, kovuşturma veya temyiz/istinaf aşamaları farklı ücretlere tabidir. Yargılama süresi uzadıkça ve dava ilerledikçe ücret artar.</li>
                  <li><strong>Avukatın Deneyimi ve Uzmanlığı:</strong> Ceza Hukuku alanında uzun yıllar tecrübe kazanmış, yüksek başarı oranına sahip ve uzmanlaşmış avukatların ücretleri daha yüksektir.</li>
                  <li><strong>Harcama ve Masraflar:</strong> Dava ile ilgili yol, konaklama, bilirkişi ücreti, posta gideri gibi masraflar genellikle avukatlık ücretine dahil değildir; bu giderler müvekkil tarafından ayrıca karşılanır.</li>
                  <li><strong>Coğrafi Konum:</strong> Büyük şehirlerde avukatlık hizmetlerinin maliyeti, küçük şehirlere kıyasla genellikle daha yüksektir.</li>
                </ul>

                <h3 id="ucret-sozlesmesi-odeme" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Ücret Sözleşmesi ve Ödeme Şekilleri
                </h3>
                <p className="mb-6">
                  Avukat ve müvekkil arasındaki ücret anlaşması, Avukatlık Kanunu gereği yazılı olarak yapılmalıdır. Bu sözleşme (veya vekâlet ücreti sözleşmesi), hukuki ilişkinin şeffaflığını ve güvenilirliğini sağlar.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Yazılı Sözleşme Zorunluluğu:</strong> Ücretin miktarı, ödeme şekli, masrafların kim tarafından karşılanacağı gibi tüm detaylar bu sözleşmede açıkça belirtilmelidir. Bu, ileride doğabilecek anlaşmazlıkları önler.</li>
                  <li><strong>Başarı Ücreti (Yasak):</strong> Türk hukukunda, avukatlık ücretinin sadece davanın kazanılması şartına bağlanması (başarı ücreti) yasaktır. Ancak, kararlaştırılan ücretin yanı sıra, davanın kazanılması halinde ek bir başarı primi kararlaştırılabilir.</li>
                </ul>

                <p className="mb-6">
                  Genel hatlarıyla Ankara ceza avukatı ücretleri, TBB'nin belirlediği asgari sınırın dikkate alınarak; avukatın uzmanlığı, davanın teknik karmaşıklığı ve harcanacak mesaiye göre serbestçe belirlenir. Müvekkillerin, hukuki süreç başlamadan önce yazılı bir avukatlık ücret sözleşmesi talep etmesi ve tüm detayları şeffafça konuşması, sürecin sağlıklı ilerlemesi için en önemli adımdır.
                </p>

                <h2 id="neden-ankara-ceza-avukati" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Neden Ankara Ceza Avukatı ile İlerlemelisiniz?
                </h2>

                <p className="mb-6">
                  Ceza hukuku, bireyin en temel hak ve özgürlüklerini (özellikle hürriyetini) doğrudan etkileyen bir hukuk dalıdır. Bu alandaki davalar, basit bir hukuki anlaşmazlıktan ziyade, devletin cezalandırma gücünü kullanma potansiyelini içerir. Bu nedenle, <strong>Ankara ceza avukatı</strong>nın profesyonel desteğini almak, sadece bir tercih değil, sürecin adil ve lehe sonuçlanması için bir gerekliliktir.
                </p>

                <h3 id="usul-hukukuna-hakimiyet" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Usul Hukukuna Hakimiyet ve Hak Kaybı Riskinin Önlenmesi
                </h3>
                <p className="mb-6">
                  Ceza yargılaması, Ceza Muhakemesi Kanunu (CMK) tarafından belirlenen katı usul kurallarına tabidir. Bu kurallar, delil toplama, itiraz süreleri, ifade alma yöntemleri ve duruşma yönetimi gibi her aşamayı düzenler.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Sürelerin Takibi:</strong> Birçok hukuki işlemde (itiraz, temyiz, istinaf) kanuni süreler çok kısadır. Bu sürelerin kaçırılması, telafisi mümkün olmayan hak kayıplarına yol açar. Ceza avukatı, bu süreleri titizlikle takip ederek müvekkilinin haklarını korur.</li>
                  <li><strong>Doğru Hukuki Nitelendirme:</strong> Ceza avukatı, olayın hukuki nitelendirmesini doğru yaparak, suç vasfının değişmesini sağlayabilir (örneğin, kasten yaralamanın taksirle yaralamaya dönüşmesi gibi). Bu, verilecek ceza miktarını kökten değiştirebilir.</li>
                  </ul>

                <h3 id="etkin-savunma-stratejisi" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Etkin Savunma Stratejisi Oluşturma
                </h3>
                <p className="mb-6">
                  Başarılı bir savunma, sadece masumiyeti iddia etmekten ibaret değildir; mevcut delilleri analiz etmeyi, lehe olanları ortaya çıkarmayı ve aleyhe olanları çürütmeyi gerektirir. Avukat, soruşturma aşamasından itibaren delillerin hukuka uygun toplanıp toplanmadığını denetler. Hukuka aykırı delillerin mahkeme önünde kullanılamaz hale getirilmesi, davanın seyrini tamamen değiştirebilir.
                </p>
                <p className="mb-6">
                  Duruşmalarda tanıkların ve bilirkişilerin çapraz sorgusu, özel bir teknik ve deneyim gerektirir. Deneyimli bir avukat, bu aşamada kritik bilgileri ortaya çıkararak mahkeme heyetini etkileyebilir.
                </p>

                <h3 id="duygusalliktan-uzak-temsil" className="text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-20">
                  Duygusallıktan Uzak, Rasyonel Temsil
                </h3>
                <p className="mb-6">
                  Ceza davası sürecinde şüpheli veya sanık, doğal olarak büyük bir stres ve duygusal baskı altındadır. Bu durum, rasyonel kararlar almayı ve doğru ifade vermeyi zorlaştırır. Ceza avukatı, sürece dışarıdan, duygusallıktan uzak ve tamamen hukuki bir bakış açısıyla yaklaşır. Bu objektif temsil, müvekkilin haklarını en üst düzeyde koruyacak stratejilerin geliştirilmesini sağlar. Buna ek olarak müvekkil ile savcılık, emniyet ve mahkeme arasındaki resmi iletişimi yönetir. Bu, sürecin daha profesyonel ve düzenli ilerlemesini sağlar.
                </p>

                <h2 id="sik-sorulan-sorular" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Sık Sorulan Sorular
                </h2>

                <div className="border border-gray-200/70 rounded-lg p-5 mb-6 bg-white/40">
                  <h3 id="sss-ankara-agir-ceza-mahkeme" className="text-xl font-bold text-gray-800 mt-0 mb-3 scroll-mt-20">
                    Ankara'da ağır ceza davasına hangi mahkeme bakar?
                  </h3>
                  <p className="mb-4">
                    Ankara'da işlenen ve Türk Ceza Kanunu kapsamında üst sınırı yüksek hapis cezaları öngörülen suçlara ilişkin yargılamalar, Ankara Adliyesi Ağır Ceza Mahkemeleri tarafından yürütülür. Cinayet, yağma (gasp), örgütlü suçlar veya nitelikli dolandırıcılık gibi toplumda infial uyandıran suçlar bu kapsamdadır. Bu mahkemeler, tek hâkim yerine bir başkan ve iki üyeden oluşan bir heyet şeklinde karar verir.
                  </p>
                  <p className="mb-0">
                    Yargılama süreci; delillerin ayrıntılı incelenmesi, usul tartışmaları ve esaslı savunmaların değerlendirilmesi gibi karmaşık aşamalardan oluşur. Bu süreçte tecrübeli bir <strong>Ankara ağır ceza avukatı</strong> ile çalışmak, hem savunmanın etkinliğini artırır hem de hak kaybı riskini ortadan kaldırır.
                  </p>
                </div>

                <div className="border border-gray-200/70 rounded-lg p-5 mb-6 bg-white/40">
                  <h3 id="sss-ne-zaman-avukata" className="text-xl font-bold text-gray-800 mt-0 mb-3 scroll-mt-20">
                    Ankara ceza avukatı ile ne zaman iletişime geçmeliyim?
                  </h3>
                  <p className="mb-4">
                    Bir ceza soruşturması veya kovuşturmasıyla karşı karşıya kalabileceğinizi öğrendiğiniz anda, Ankara ceza avukatı ile iletişime geçmek en doğru adımdır. Henüz ifadeye çağrılmadan, arama veya el koyma kararı uygulanmadan önce profesyonel hukuki destek almak, savunmanın temelini oluşturur.
                  </p>
                  <p className="mb-0">
                    Erken aşamada yapılacak hukuki planlama, özellikle ilk ifade sırasında verilecek beyanların ilerideki savunma stratejisiyle çelişmemesini sağlar. Bu nedenle Ankara'daki ceza davalarında erken avukat desteği almak, sürecin kontrolünü elinizde tutmanın ve hak kaybı yaşamamanın en etkili yoludur.
                  </p>
                </div>

                <div className="border border-gray-200/70 rounded-lg p-5 mb-6 bg-white/40">
                  <h3 id="sss-agir-ceza-avukat-sart-mi" className="text-xl font-bold text-gray-800 mt-0 mb-3 scroll-mt-20">
                    Ağır ceza dosyasında avukat şart mı?
                  </h3>
                  <p className="mb-4">
                    Evet. Ağır ceza dosyaları, sanığın özgürlüğünü doğrudan etkileyen en ciddi yargılama türlerindendir. Ceza Muhakemesi Kanunu (CMK), alt sınırı beş yıldan fazla hapis cezası gerektiren suçlarda, sanığın istemi olmasa bile zorunlu müdafilik (avukat ataması) hükümlerini düzenlemiştir.
                  </p>
                  <p className="mb-0">
                    Ancak zorunlu müdafilik dışında kalan davalarda dahi, yüksek ceza tehdidi barındıran suçlarda deneyimli bir Ankara ağır ceza avukatı ile savunma yapılması, dosyanın seyrini değiştirebilir. Bu tür davalar derin hukuki bilgi ve stratejik savunma tecrübesi gerektirdiğinden, profesyonel temsil çoğu zaman sonucu belirleyen en kritik unsurdur.
                  </p>
                </div>

                <div className="border border-gray-200/70 rounded-lg p-5 mb-6 bg-white/40">
                  <h3 id="sss-istinaf-temyiz" className="text-xl font-bold text-gray-800 mt-0 mb-3 scroll-mt-20">
                    İstinaf veya temyiz süresini kaçırırsam ne olur?
                  </h3>
                  <p className="mb-4">
                    Ceza yargılamasında istinaf (Bölge Adliye Mahkemesi) ve temyiz (Yargıtay) başvuruları için belirlenen süreler hak düşürücü niteliktedir. Bu sürelerin kaçırılması halinde, mahkeme kararı kesinleşir ve itiraz hakkı ortadan kalkar. Özellikle hapis cezası kararlarında, infaz süreci hemen başlayabilir ve telafisi imkânsız sonuçlar doğabilir.
                  </p>
                  <p className="mb-0">
                    Bu nedenle kararın size tebliğ edildiği andan itibaren, başvuruların zamanında ve usulüne uygun şekilde yapılması gerekir. Bu sürecin, alanında uzman bir Ankara ceza avukatı tarafından dikkatle takip edilmesi, hukuki denetimin etkin biçimde sağlanması açısından büyük önem taşır.
                  </p>
                </div>

                <div className="border border-gray-200/70 rounded-lg p-5 mb-6 bg-white/40">
                  <h3 id="sss-ucretler" className="text-xl font-bold text-gray-800 mt-0 mb-3 scroll-mt-20">
                    Ücretler nasıl belirlenir?
                  </h3>
                  <p className="mb-4">
                    Ankara'daki ceza davalarında avukatlık ücretleri, her yıl Türkiye Barolar Birliği'nin yayımladığı Avukatlık Asgari Ücret Tarifesi (AAÜT) esas alınarak belirlenir. Bu tarife yalnızca alt sınırı gösterir; ancak gerçek ücret, dosyanın kapsamı, suçun niteliği, delil yoğunluğu, duruşma sayısı, yargılamanın süresi ve avukatın uzmanlığı gibi etkenlere göre değişir.
                  </p>
                  <p className="mb-0">
                    Ankara ağır ceza avukatı ücretleri, dosyaların karmaşık yapısı ve yüksek sorumluluk düzeyi nedeniyle genellikle AAÜT'nin üzerinde belirlenir. Ücretlendirme, avukat ile müvekkil arasında serbestçe kararlaştırılır ve her dosya özelinde farklılık gösterebilir.
                  </p>
                </div>
 
              </article>
            </div>
            
            {/* Sağ Sidebar - Masaüstü */}
            <aside className="hidden lg:block lg:w-[445px]">
              <div className="w-[375px]">
                <AvukatBilgiKarti />
                <ServicesSidebar />
            <SidebarCTA 
              ctaTitle="İletişime Geçin"
              ctaDescription="Ceza davası konusunda profesyonel destek için bizimle iletişime geçin."
            />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default AnkaraCezaAvukatiPage; 



