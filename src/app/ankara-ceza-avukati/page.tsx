import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SidebarCTA from '@/components/ui/SidebarCTA';
import TableOfContents from '@/components/ui/TableOfContents';
import { LegalServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo';
import OptimizedImage from '@/components/ui/OptimizedImage';

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
    { id: 'ceza-hukuku-nedir', title: 'Ceza Hukuku Nedir ve Neden Bir Ceza Avukatına İhtiyaç Duyulur?', level: 2 },
    { id: 'ceza-hukukunun-tanimi', title: 'Ceza Hukukunun Tanımı ve Amacı', level: 3 },
    { id: 'ceza-davalarinin-onemi', title: 'Ceza Davalarının Önemi ve Birey Üzerindeki Etkileri', level: 3 },
    { id: 'ceza-avukatinin-rolu', title: 'Ceza Avukatının Rolü ve Önemi', level: 3 },
    { id: 'ankara-ceza-avukatligi', title: 'Ankara Ceza Avukatı Hizmet Alanları', level: 2 },
    { id: 'ankaranin-hukuki-yapisi', title: 'Ankara\'nın Hukuki Yapısı ve Ceza Mahkemeleri', level: 3 },
    { id: 'ankara-ceza-avukatlarinin-uzmanlik-alanlari', title: 'Ankara\'daki Ceza Avukatlarının Uzmanlık Alanları', level: 3 },
    { id: 'ceza-davasi-surecleri', title: 'Ceza Davası Süreçleri: Soruşturmadan İnfaza Adım Adım', level: 2 },
    { id: 'sorusturma-evresi', title: 'Soruşturma Evresi', level: 3 },
    { id: 'kovusturma-evresi', title: 'Kovuşturma Evresi', level: 3 },
    { id: 'kanun-yollari', title: 'Kanun Yolları', level: 3 },
    { id: 'infaz-evresi', title: 'İnfaz Evresi', level: 3 },
    { id: 'ceza-avukati-secimi', title: 'Ceza Avukatı Seçerken Dikkat Edilmesi Gerekenler', level: 2 },
    { id: 'deneyim-ve-uzmanlik', title: 'Deneyim ve Uzmanlık', level: 3 },
    { id: 'iletisim-ve-guven-iliskisi', title: 'İletişim ve Güven İlişkisi', level: 3 },
    { id: 'seffaflik', title: 'Şeffaflık', level: 3 },
    { id: 'sss', title: 'Sıkça Sorulan Sorular (SSS)', level: 2 },
    { id: 'ceza-avukati-ne-is-yapar', title: 'Ceza Avukatı Ne İş Yapar?', level: 3 },
    { id: 'agir-ceza-avukati-farki', title: 'Ağır Ceza Avukatı ile Normal Ceza Avukatı Arasındaki Fark Nedir?', level: 3 },
    { id: 'ceza-davasi-ne-kadar-surer', title: 'Ceza Davası Ne Kadar Sürer?', level: 3 },
    { id: 'vekalet-nasil-verilir', title: 'Vekalet Nasıl Verilir?', level: 3 },
    { id: 'online-hukuki-destek', title: 'Online Hukuki Destek Alınabilir mi?', level: 3 },
    { id: 'iletisim', title: 'İletişim ve Danışmanlık', level: 2 },
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

  // FAQ Data
  const faqData = [
    {
      question: 'Ceza Avukatı Ne İş Yapar?',
      answer: 'Ceza avukatı, ceza hukuku alanında uzmanlaşmış, şüpheli, sanık, müşteki veya katılan sıfatıyla ceza yargılamasında yer alan kişilere hukuki danışmanlık ve temsil hizmeti sunan avukattır. Görevleri arasında soruşturma ve kovuşturma evrelerinde müvekkilinin haklarını korumak, ifade ve sorgu süreçlerinde hazır bulunmak, delillerin toplanmasına ve değerlendirilmesine katkıda bulunmak, savunma dilekçeleri hazırlamak, duruşmalarda müvekkilini temsil etmek, kanun yollarına başvurmak ve infaz süreçlerini takip etmek yer alır.'
    },
    {
      question: 'Ağır Ceza Avukatı ile Normal Ceza Avukatı Arasındaki Fark Nedir?',
      answer: 'Türk hukuk sisteminde "ağır ceza avukatı" veya "normal ceza avukatı" şeklinde resmi bir ayrım bulunmamaktadır. Avukatlık Kanunu\'na göre tüm avukatlar, hukuk fakültesinden mezun olup stajlarını tamamladıktan sonra baroya kayıt olarak avukatlık yapmaya hak kazanırlar. Ancak, halk arasında ve uygulamada, özellikle ağırlaştırılmış müebbet hapis, müebbet hapis ve on yıldan fazla hapis cezası gerektiren suçlara bakan Ağır Ceza Mahkemeleri\'nde görülen davalarda uzmanlaşmış ve bu alanda yoğunlaşmış avukatlara "ağır ceza avukatı" denilmektedir.'
    },
    {
      question: 'Ceza Davası Ne Kadar Sürer?',
      answer: 'Bir ceza davasının süresi, davanın niteliğine, suçun karmaşıklığına, delil durumuna, tanık sayısına, mahkemenin iş yüküne ve yargılama sürecinde ortaya çıkabilecek diğer faktörlere göre büyük ölçüde değişiklik gösterir. Basit bir suçun yargılaması birkaç ay içinde sonuçlanabilirken, ağır ceza mahkemelerinde görülen karmaşık ve çok sanıklı davalar yıllarca sürebilir. Kesin bir süre vermek mümkün olmamakla birlikte, deneyimli bir ceza avukatı, davanın tahmini süresi hakkında müvekkiline bilgi verebilir.'
    },
    {
      question: 'Vekalet Nasıl Verilir?',
      answer: 'Bir avukata vekalet vermek, hukuki işlemlerinizi sizin adınıza yürütmesi için ona yetki vermeniz anlamına gelir. Ceza davalarında avukata vekalet vermek için noter huzurunda özel bir vekaletname düzenlenmesi gerekmektedir. Bu vekaletnameye "dava vekaletnamesi" denir ve avukatın sizin adınıza hangi işlemleri yapabileceğini açıkça belirtir. Vekaletname düzenlenirken kimlik belgeniz ve avukatın tam adı ile baro bilgileri gereklidir.'
    },
    {
      question: 'Online Hukuki Destek Alınabilir mi?',
      answer: 'Günümüzde teknolojinin gelişmesiyle birlikte, hukuki danışmanlık hizmetlerine erişim de kolaylaşmıştır. Birçok hukuk bürosu ve avukat, online platformlar üzerinden hukuki destek ve danışmanlık hizmeti sunmaktadır. Bu hizmetler genellikle telefon, video konferans veya e-posta aracılığıyla sağlanır. Online hukuki destek, özellikle zaman kısıtlaması olan veya farklı şehirlerde/ülkelerde bulunan kişiler için büyük kolaylık sağlar.'
    }
  ];

  return (
    <>
      <LegalServiceSchema {...seoSchemaData} />
      <BreadcrumbSchema items={breadcrumbData} />
      <FAQSchema items={faqData} />
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
              
              {/* Ana Görsel */}
              <div className="mb-8">
                <OptimizedImage
                  src="/images/ankara-ceza-avukati-ana.jpg"
                  alt="Ankara Ceza Avukatı - Profesyonel Hukuki Danışmanlık"
                  width={848}
                  height={480}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* İçindekiler */}
              <TableOfContents tableOfContents={tableOfContents} />
              
              {/* İçerik Alanı */}
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Ceza hukuku, bireylerin özgürlüklerini, haklarını ve toplumsal düzeni doğrudan etkileyen, son derece hassas ve karmaşık bir hukuk dalıdır. Bu alanda karşılaşılan hukuki sorunlar, çoğu zaman kişilerin hayatında derin izler bırakabilecek sonuçlar doğurabilir. İşte tam da bu noktada, alanında uzman bir Ankara ceza <a href="/" className="text-red-600 hover:text-red-700 underline">avukat</a>, hukuki süreçlerin doğru yönetilmesi, müvekkil haklarının korunması ve adaletin tecellisi için hayati bir rol üstlenir.
                </p>
                
                <p className="mb-6 text-lg">
                  Ankara gibi büyük ve dinamik bir şehirde, hukuki ihtiyaçlar çeşitlilik gösterirken, ceza hukuku alanında profesyonel destek almak, bireylerin kendilerini güvende hissetmeleri ve adil bir yargılanma süreci geçirmeleri açısından büyük önem taşır.
                </p>

                <p className="mb-6 text-lg">
                  Bu makale, Ankara ceza avukatı kavramını derinlemesine inceleyerek, ceza hukukunun temel prensiplerini, ceza avukatının görev ve sorumluluklarını, Ankara özelindeki hukuki yapıyı ve ceza davalarının işleyişini kapsamlı bir şekilde ele alacaktır. Ayrıca, bir ceza avukatı seçerken dikkat edilmesi gereken önemli noktalar ve sıkça sorulan sorulara da yanıt verilecektir.
                </p>

                <h2 id="ceza-hukuku-nedir" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Hukuku Nedir ve Neden Bir Ceza Avukatına İhtiyaç Duyulur?
                </h2>

                <h3 id="ceza-hukukunun-tanimi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Ceza Hukukunun Tanımı ve Amacı</h3>
                <p className="mb-6">
                  Ceza hukuku, toplum düzenini ve bireylerin haklarını korumak amacıyla suç sayılan fiilleri ve bu fiillere uygulanacak yaptırımları düzenleyen kamu hukuku dalıdır. Türkiye'de ceza hukuku, büyük ölçüde 29 Eylül 2004 tarihinde kabul edilen ve 1 Haziran 2005 tarihinde yürürlüğe giren 5237 sayılı Türk Ceza Kanunu (TCK) ile şekillenmiştir.
                </p>
                <p className="mb-6">
                  TCK'nın temel amacı, kişi hak ve özgürlüklerini, kamu düzen ve güvenliğini, hukuk devletini, kamu sağlığını ve çevreyi, toplum barışını korumak ve suç işlenmesini önlemektir. Bu kanun, suçun tanımından cezanın belirlenmesine, yargılama süreçlerinden infaz aşamasına kadar geniş bir yelpazeyi kapsar.
                </p>

                <h3 id="ceza-davalarinin-onemi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Ceza Davalarının Önemi ve Birey Üzerindeki Etkileri</h3>
                <p className="mb-6">
                  Ceza davaları, sadece hukuki bir süreç olmanın ötesinde, bireylerin yaşamlarını derinden etkileyen önemli olaylardır. Bir ceza davasına karışmak, şüpheli, sanık, müşteki veya mağdur sıfatıyla olsun, kişinin özgürlüğünü, itibarını, sosyal ve ekonomik yaşamını doğrudan etkileyebilir.
                </p>
                <p className="mb-6">
                  Özellikle hürriyeti bağlayıcı cezalar söz konusu olduğunda, bireyin hayatı tamamen değişebilir. Toplum içinde damgalanma, iş kaybı, ailevi sorunlar gibi pek çok olumsuz sonuçla karşılaşma riski bulunur.
                </p>

                <h3 id="ceza-avukatinin-rolu" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Ceza Avukatının Rolü ve Önemi</h3>
                <p className="mb-6">
                  Ceza avukatı, ceza yargılamasının her aşamasında müvekkilinin haklarını koruyan, hukuki süreç boyunca ona rehberlik eden ve adil bir yargılanma için mücadele eden kilit bir figürdür. Şüpheli veya sanık konumunda olan bir kişi için ceza avukatı, savunma hakkının güvencesidir.
                </p>
                <p className="mb-6">
                  Avukat, müvekkilinin ifade verme sürecinde yanında bulunur, delillerin toplanması ve değerlendirilmesi aşamalarında aktif rol alır, hukuka aykırı delillerin dışlanmasını sağlar ve müvekkilinin lehine olan tüm unsurları mahkemeye sunar.
                </p>

                <h2 id="ankara-ceza-avukatligi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ankara Ceza Avukatı Hizmet Alanları
                </h2>

                <h3 id="ankaranin-hukuki-yapisi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Ankara'nın Hukuki Yapısı ve Ceza Mahkemeleri</h3>
                <p className="mb-6">
                  Türkiye'nin başkenti Ankara, aynı zamanda ülkenin en önemli adli merkezlerinden biridir. Ankara'da ceza hukuku alanında faaliyet gösteren avukatlar, şehrin geniş ve karmaşık hukuki yapısı içinde müvekkillerine hizmet vermektedir.
                </p>
                <p className="mb-6">
                  Ankara Adliyesi, bünyesinde birçok farklı mahkemeyi barındırır ve ceza davaları bu mahkemelerin uzmanlık alanlarına göre dağılır. Başlıca ceza mahkemeleri şunlardır:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Ağır Ceza Mahkemeleri:</strong> Türk Ceza Kanunu'nda ağırlaştırılmış müebbet hapis, müebbet hapis ve on yıldan fazla hapis cezası gerektiren suçlarla ilgilidir. Cinayet, uyuşturucu ticareti, terör suçları gibi ciddi suçlar bu mahkemelerin görev alanına girer.</li>
                  <li><strong>Asliye Ceza Mahkemeleri:</strong> Ağır Ceza Mahkemelerinin görev alanına girmeyen tüm ceza davalarına bakar. Hırsızlık, dolandırıcılık, kasten yaralama, hakaret gibi suçlar Asliye Ceza Mahkemelerinde görülür.</li>
                  <li><strong>Çocuk Ceza Mahkemeleri:</strong> 18 yaşından küçüklerin işlediği suçlara ilişkin davalara bakar. Çocukların üstün yararı ilkesi doğrultusunda özel yargılama usulleri uygulanır.</li>
                  <li><strong>Sulh Ceza Hakimlikleri:</strong> Soruşturma aşamasında koruma tedbirleri hakkında karar veren, itirazları inceleyen ve bazı basit suçlara bakan hakimliklerdir.</li>
                </ul>

                <h3 id="ankara-ceza-avukatlarinin-uzmanlik-alanlari" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Ankara'daki Ceza Avukatlarının Uzmanlık Alanları</h3>
                <p className="mb-6">
                  Ankara'da faaliyet gösteren ceza avukatları, geniş bir yelpazede hukuki hizmet sunarak müvekkillerinin çeşitli suç türleriyle ilgili davalarında yanlarında yer alırlar. Başlıca uzmanlık alanları şunlardır:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Cinayet ve Kasten Yaralama Suçları:</strong> Kasten öldürme, taksirle öldürme, kasten yaralama, taksirle yaralama gibi kişilere karşı işlenen suçlarda hukuki danışmanlık ve savunma hizmetleri</li>
                  <li><strong>Cinsel Dokunulmazlığa Karşı Suçlar:</strong> Cinsel saldırı, çocukların cinsel istismarı, reşit olmayanla cinsel ilişki, cinsel taciz gibi suçlarda mağdur veya sanık vekilliği</li>
                  <li><strong>Hürriyete Karşı Suçlar:</strong> Kişi hürriyetinden yoksun kılma, tehdit, şantaj, konut dokunulmazlığının ihlali gibi suçlarda hukuki destek</li>
                  <li><strong>Malvarlığına Karşı Suçlar:</strong> Hırsızlık, dolandırıcılık, güveni kötüye kullanma, yağma, mala zarar verme gibi ekonomik suçlarda müvekkil temsili</li>
                  <li><strong>Topluma Karşı Suçlar:</strong> Uyuşturucu ticareti, kumar, fuhuş, genel güvenliğin tehlikeye sokulması gibi toplumsal düzeni bozan suçlarda hukuki danışmanlık</li>
                  <li><strong>Devletin Egemenlik Alametlerine Karşı Suçlar:</strong> Cumhurbaşkanına hakaret, devlet kurumlarını aşağılama gibi suçlarda hukuki süreç yönetimi</li>
                  <li><strong>Adliyeye Karşı Suçlar:</strong> İftira, yalan tanıklık, suç uydurma, delil karartma gibi adliyenin işleyişini bozan suçlarda savunma</li>
                  <li><strong>Özel Hayata Karşı Suçlar:</strong> Özel hayatın gizliliğini ihlal, kişisel verilerin kaydedilmesi, haberleşmenin gizliliğini ihlal gibi bilişim suçlarında danışmanlık</li>
                </ul>

                {/* Görsel Alanı */}
                <div className="my-8">
                  <OptimizedImage
                    src="/images/ankara-ceza-avukati-hizmet-alanlari.jpg"
                    alt="Ankara Ceza Avukatı Hizmet Alanları"
                    width={424}
                    height={240}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <h2 id="ceza-davasi-surecleri" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Davası Süreçleri: Soruşturmadan İnfaza Adım Adım
                </h2>
                <p className="mb-6">
                  Ceza davaları, karmaşık ve çok aşamalı süreçlerdir. Bu süreçlerin her bir adımı, bireylerin hakları ve özgürlükleri açısından büyük önem taşır. Bir ceza avukatı, bu süreçlerin her aşamasında müvekkiline rehberlik ederek, hukuki haklarının korunmasını sağlar.
                </p>

                <h3 id="sorusturma-evresi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Soruşturma Evresi</h3>
                <p className="mb-6">
                  Ceza yargılamasının ilk aşaması olan soruşturma evresi, bir suç şüphesinin öğrenilmesiyle başlar ve Cumhuriyet Savcısı tarafından yürütülür. Bu evrenin temel amacı, suçun işlenip işlendiğini, kim tarafından işlendiğini ve delillerin neler olduğunu ortaya çıkarmaktır.
                </p>
                <p className="mb-6">
                  Soruşturma evresinde karşılaşılabilecek başlıca durumlar şunlardır:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Suç Duyurusu ve Şikayet:</strong> Bir suçun işlendiği ihbar edildiğinde veya suçtan zarar gören kişi tarafından şikayette bulunulduğunda soruşturma süreci başlar.</li>
                  <li><strong>Gözaltı ve İfade Alma:</strong> Şüpheli, suç işlediği şüphesiyle yakalanarak gözaltına alınabilir. Bu aşamada avukatın hazır bulunması, şüphelinin haklarının korunması açısından hayati öneme sahiptir.</li>
                  <li><strong>Delil Toplama:</strong> Cumhuriyet Savcısı, suçun aydınlatılması için gerekli tüm delilleri toplar. Avukat, delillerin hukuka uygun yollarla toplanıp toplanmadığını takip eder.</li>
                  <li><strong>Tutuklama ve Adli Kontrol:</strong> Soruşturma sonunda şüphelinin kaçma şüphesi, delilleri karartma ihtimali varsa, tutuklama kararı verilebilir. Avukat, tutuklama kararlarına itiraz ederek müvekkilinin özgürlüğünü korumaya çalışır.</li>
                </ul>

                <h3 id="kovusturma-evresi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Kovuşturma Evresi</h3>
                <p className="mb-6">
                  Soruşturma evresi sonunda Cumhuriyet Savcısı, toplanan deliller ışığında suçun işlendiği kanaatine varırsa bir iddianame düzenler. İddianamenin mahkeme tarafından kabul edilmesiyle birlikte kovuşturma evresi başlar.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>İddianamenin Kabulü ve Duruşma Hazırlığı:</strong> Düzenlenen iddianame, ilgili ceza mahkemesine sunulur. Mahkeme, iddianamenin yasal şartları taşıyıp taşımadığını inceledikten sonra kabul veya iade kararı verir.</li>
                  <li><strong>Duruşmalar:</strong> Kovuşturma evresinin en merkezi kısmı duruşmalardır. Duruşmalarda sanık, müşteki, tanıklar dinlenir, deliller sunulur ve tartışılır.</li>
                  <li><strong>Delillerin Değerlendirilmesi:</strong> Mahkeme, duruşmalar boyunca sunulan tüm delilleri toplu olarak değerlendirir. Avukat, hukuka aykırı delillere itiraz ederek bunların dosyadan çıkarılmasını talep edebilir.</li>
                  <li><strong>Karar Aşaması:</strong> Duruşmaların tamamlanması sonrasında mahkeme, davanın esası hakkında bir karar verir. Bu karar, beraat, mahkumiyet, ceza verilmesine yer olmadığı gibi farklı şekillerde olabilir.</li>
                </ul>

                <h3 id="kanun-yollari" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Kanun Yolları</h3>
                <p className="mb-6">
                  Mahkeme tarafından verilen kararların kesinleşmesi için belirli hukuki yollar bulunur. Bu yollara "kanun yolları" denir ve kararların hukuka uygunluğunun denetlenmesini sağlar.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>İstinaf (Bölge Adliye Mahkemesi):</strong> İlk derece mahkemelerinin verdiği kararlara karşı başvurulan bir kanun yoludur. İstinaf başvurusu, kararın hem maddi vakıa hem de hukuki yönden incelenmesini sağlar.</li>
                  <li><strong>Temyiz (Yargıtay):</strong> Bölge Adliye Mahkemelerinin istinaf başvurusu üzerine verdiği kararlara karşı başvurulan son kanun yoludur. Temyiz başvurusu, kararın sadece hukuka uygunluk yönünden incelenmesini sağlar.</li>
                </ul>

                <h3 id="infaz-evresi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">İnfaz Evresi</h3>
                <p className="mb-6">
                  Ceza yargılamasının son aşaması olan infaz evresi, mahkeme tarafından verilen kesinleşmiş hapis veya adli para cezalarının uygulanmasını ifade eder.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Hapis Cezalarının İnfazı:</strong> Hapis cezaları, ceza infaz kurumlarında yerine getirilir. İnfaz süreci, hükümlünün cezaevine girişiyle başlar ve cezasının tamamlanmasıyla sona erer.</li>
                  <li><strong>Denetimli Serbestlik:</strong> Hükümlülerin cezaevinden belirli bir süre önce tahliye edilerek toplum içinde denetim ve rehberlik altında tutulmasını sağlayan bir infaz kurumudur.</li>
                  <li><strong>Koşullu Salıverilme:</strong> Hapis cezasının bir kısmını cezaevinde geçiren hükümlünün, iyi hali ve belirli şartları taşıması halinde cezasının kalan kısmını dışarıda geçirmesine olanak tanıyan bir uygulamadır.</li>
                  <li><strong>Adli Para Cezalarının İnfazı:</strong> Adli para cezaları, ödenmediği takdirde hapis cezasına çevrilebilir. Bu nedenle, adli para cezalarının zamanında ödenmesi büyük önem taşır.</li>
                </ul>

                {/* Görsel Alanı */}
                <div className="my-8">
                  <OptimizedImage
                    src="/images/ceza-avukati-secimi.jpg"
                    alt="Ceza Avukatı Seçerken Dikkat Edilmesi Gerekenler"
                    width={424}
                    height={240}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <h2 id="ceza-avukati-secimi" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Ceza Avukatı Seçerken Dikkat Edilmesi Gerekenler
                </h2>
                <p className="mb-6">
                  Ceza davaları, bireylerin hayatını doğrudan etkileyen ciddi hukuki süreçler olduğundan, doğru ceza avukatını seçmek büyük önem taşır. Ankara gibi büyük bir şehirde çok sayıda avukat bulunsa da, ceza hukuku alanında uzmanlaşmış ve deneyimli bir avukatla çalışmak, davanın seyri ve sonucu üzerinde belirleyici olabilir.
                </p>

                <h3 id="deneyim-ve-uzmanlik" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Deneyim ve Uzmanlık</h3>
                <p className="mb-6">
                  Bir ceza avukatının deneyimi ve ceza hukuku alanındaki uzmanlığı, müvekkiline sunacağı hukuki hizmetin kalitesini doğrudan etkiler. Ceza hukuku, sürekli güncellenen mevzuatlar, değişen içtihatlar ve karmaşık yargılama usulleriyle dolu bir alandır.
                </p>
                <p className="mb-6">
                  Deneyimli bir avukat, bu dinamik yapıya hakimdir, farklı suç türlerindeki davalarda tecrübe sahibidir ve olası hukuki riskleri önceden öngörebilir. Özellikle ağır ceza davaları gibi karmaşık ve yüksek riskli durumlarda, avukatın daha önce benzer davalarda elde ettiği başarılar ve derinlemesine bilgi birikimi, müvekkil için büyük bir avantaj sağlar.
                </p>

                <h3 id="iletisim-ve-guven-iliskisi" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">İletişim ve Güven İlişkisi</h3>
                <p className="mb-6">
                  Avukat-müvekkil ilişkisi, karşılıklı güvene dayalı olmalıdır. Özellikle ceza davalarında, müvekkilin avukatına tüm detayları açıkça anlatabilmesi ve avukatın da müvekkilini hukuki süreç hakkında şeffaf bir şekilde bilgilendirmesi esastır.
                </p>
                <p className="mb-6">
                  İyi bir ceza avukatı, müvekkiliyle düzenli iletişim kurar, davanın her aşamasında bilgilendirme yapar ve müvekkilinin sorularına anlaşılır yanıtlar verir. Güven ilişkisi, müvekkilin kendini rahat hissetmesini ve avukatına tam olarak güvenmesini sağlar.
                </p>

                <h3 id="seffaflik" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-20">Şeffaflık</h3>
                <p className="mb-6">
                  Avukatlık ücretleri, Türkiye Barolar Birliği tarafından belirlenen asgari ücret tarifesine göre ve avukat ile müvekkil arasında serbestçe kararlaştırılır. Bir ceza avukatı seçerken, ücretlendirme konusunda şeffaflık büyük önem taşır.
                </p>
                <p className="mb-6">
                  Avukatın, dava sürecinin başında müvekkiline ücretlendirme politikası hakkında net bilgi vermesi, olası ek masrafları açıklaması ve ödeme planı konusunda anlaşmaya varması gerekir. Şeffaf bir ücretlendirme politikası, müvekkilin sürpriz maliyetlerle karşılaşmasını engeller ve güven ilişkisini pekiştirir.
                </p>

                <h2 id="sss" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  Sıkça Sorulan Sorular (SSS)
                </h2>
                <p className="mb-6">
                  Ceza hukuku süreçleri hakkında merak edilen birçok soru bulunmaktadır. İşte Ankara ceza avukatı arayışında olan veya ceza davalarıyla ilgili bilgi edinmek isteyen kişilerin sıkça sorduğu bazı sorular ve yanıtları:
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 id="ceza-avukati-ne-is-yapar" className="text-lg font-semibold text-gray-900 mb-3 scroll-mt-20">Ceza Avukatı Ne İş Yapar?</h3>
                    <p className="text-gray-700">
                      Ceza avukatı, ceza hukuku alanında uzmanlaşmış, şüpheli, sanık, müşteki veya katılan sıfatıyla ceza yargılamasında yer alan kişilere hukuki danışmanlık ve temsil hizmeti sunan avukattır. Görevleri arasında soruşturma ve kovuşturma evrelerinde müvekkilinin haklarını korumak, ifade ve sorgu süreçlerinde hazır bulunmak, delillerin toplanmasına ve değerlendirilmesine katkıda bulunmak, savunma dilekçeleri hazırlamak, duruşmalarda müvekkilini temsil etmek, kanun yollarına başvurmak ve infaz süreçlerini takip etmek yer alır.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 id="agir-ceza-avukati-farki" className="text-lg font-semibold text-gray-900 mb-3 scroll-mt-20">Ağır Ceza Avukatı ile Normal Ceza Avukatı Arasındaki Fark Nedir?</h3>
                    <p className="text-gray-700">
                      Türk hukuk sisteminde "ağır ceza avukatı" veya "normal ceza avukatı" şeklinde resmi bir ayrım bulunmamaktadır. Avukatlık Kanunu'na göre tüm avukatlar, hukuk fakültesinden mezun olup stajlarını tamamladıktan sonra baroya kayıt olarak avukatlık yapmaya hak kazanırlar. Ancak, halk arasında ve uygulamada, özellikle ağırlaştırılmış müebbet hapis, müebbet hapis ve on yıldan fazla hapis cezası gerektiren suçlara bakan Ağır Ceza Mahkemeleri'nde görülen davalarda uzmanlaşmış ve bu alanda yoğunlaşmış avukatlara "ağır ceza avukatı" denilmektedir.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 id="ceza-davasi-ne-kadar-surer" className="text-lg font-semibold text-gray-900 mb-3 scroll-mt-20">Ceza Davası Ne Kadar Sürer?</h3>
                    <p className="text-gray-700">
                      Bir ceza davasının süresi, davanın niteliğine, suçun karmaşıklığına, delil durumuna, tanık sayısına, mahkemenin iş yüküne ve yargılama sürecinde ortaya çıkabilecek diğer faktörlere göre büyük ölçüde değişiklik gösterir. Basit bir suçun yargılaması birkaç ay içinde sonuçlanabilirken, ağır ceza mahkemelerinde görülen karmaşık ve çok sanıklı davalar yıllarca sürebilir. Kesin bir süre vermek mümkün olmamakla birlikte, deneyimli bir ceza avukatı, davanın tahmini süresi hakkında müvekkiline bilgi verebilir.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 id="vekalet-nasil-verilir" className="text-lg font-semibold text-gray-900 mb-3 scroll-mt-20">Vekalet Nasıl Verilir?</h3>
                    <p className="text-gray-700">
                      Bir avukata vekalet vermek, hukuki işlemlerinizi sizin adınıza yürütmesi için ona yetki vermeniz anlamına gelir. Ceza davalarında avukata vekalet vermek için noter huzurunda özel bir vekaletname düzenlenmesi gerekmektedir. Bu vekaletnameye "dava vekaletnamesi" denir ve avukatın sizin adınıza hangi işlemleri yapabileceğini açıkça belirtir. Vekaletname düzenlenirken kimlik belgeniz ve avukatın tam adı ile baro bilgileri gereklidir.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 id="online-hukuki-destek" className="text-lg font-semibold text-gray-900 mb-3 scroll-mt-20">Online Hukuki Destek Alınabilir mi?</h3>
                    <p className="text-gray-700">
                      Günümüzde teknolojinin gelişmesiyle birlikte, hukuki danışmanlık hizmetlerine erişim de kolaylaşmıştır. Birçok hukuk bürosu ve avukat, online platformlar üzerinden hukuki destek ve danışmanlık hizmeti sunmaktadır. Bu hizmetler genellikle telefon, video konferans veya e-posta aracılığıyla sağlanır. Online hukuki destek, özellikle zaman kısıtlaması olan veya farklı şehirlerde/ülkelerde bulunan kişiler için büyük kolaylık sağlar.
                    </p>
                  </div>
                </div>

                <h2 id="iletisim" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  İletişim ve Danışmanlık
                </h2>
                <p className="mb-6">
                  Ceza hukuku alanında hukuki destek ve danışmanlık almak için bizimle <a href="/iletisim" className="text-red-600 hover:text-red-700 underline">iletişim</a>e geçebilirsiniz. Hukuk büromuz, Ankara merkezli olup, müvekkillerimize yüz yüze görüşme imkanının yanı sıra, online platformlar üzerinden de hukuki danışmanlık hizmeti sunmaktadır.
                </p>
                <p className="mb-6">
                  Hukuki sorunlarınızla ilgili ilk adımı atmak ve profesyonel bir ceza avukatından destek almak için aşağıdaki iletişim bilgilerimizi kullanabilirsiniz:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Adres:</strong> Korkutreis Mah. Cihan Sk. No:12/8 Çankaya/Ankara</li>
                    <li><strong>Telefon:</strong> +90 505 398 99 81</li>
                    <li><strong>E-posta:</strong> info@ismailcavus.av.tr</li>
                  </ul>
                </div>
                <p className="mb-6">
                  Web sitemiz üzerinden online randevu talebinde bulunabilir veya hukuki danışmanlık formumuzu doldurarak bize ulaşabilirsiniz. Hukuki süreçlerinizde yanınızda olmak ve haklarınızı savunmak için buradayız.
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
