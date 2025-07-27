import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'ismailcavus.av.tr Kullanım Koşulları - Web sitemizi kullanımınızı düzenleyen yasal sözleşme.',
  keywords: 'kullanım koşulları, web sitesi kullanımı, yasal sözleşme, ismailcavus.av.tr',
  openGraph: {
    title: 'Kullanım Koşulları - Çavuş Hukuk Bürosu',
    description: 'ismailcavus.av.tr Kullanım Koşulları - Web sitemizi kullanımınızı düzenleyen yasal sözleşme.',
    type: 'website',
    locale: 'tr_TR',
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
    canonical: 'https://ismailcavus.av.tr/kullanim-kosullari',
  },
};

const KullanimKosullariPage = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Kullanım Koşulları' }
            ]} 
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Kullanım Koşulları</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            ismailcavus.av.tr web sitesini ziyaret ettiğiniz ve kullandığınız için teşekkür ederiz. Bu Kullanım Koşulları, web sitemizi kullanımınızı düzenleyen yasal bir sözleşmedir. Web sitemizi kullanarak, bu koşulları kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Tanımlar</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Web Sitesi:</strong> ismailcavus.av.tr alan adı altında faaliyet gösteren internet sitesi.</li>
            <li><strong>Kullanıcı:</strong> Web Sitesini herhangi bir amaçla ziyaret eden veya kullanan gerçek veya tüzel kişi.</li>
            <li><strong>Hizmetler:</strong> Web Sitesi aracılığıyla sunulan hukuki danışmanlık, avukatlık hizmetleri ve bilgilendirme içerikleri.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Web Sitesinin Kullanımı</h2>
          <p className="mb-4">
            Web Sitesi, Av. İsmail Çavuş Hukuk Bürosu tarafından hukuki bilgilendirme ve hizmet tanıtımı amacıyla hazırlanmıştır. Web Sitesinde yer alan bilgiler genel nitelikte olup, hukuki tavsiye niteliği taşımaz. Her somut olayın kendine özgü koşulları bulunduğundan, hukuki bir sorunla karşılaşmanız durumunda mutlaka uzman bir avukattan profesyonel hukuki destek almanız gerekmektedir.
          </p>
          <p className="mb-6">
            Kullanıcı, Web Sitesini hukuka ve dürüstlük kurallarına uygun olarak kullanmayı, üçüncü kişilerin haklarını ihlal etmemeyi ve yasa dışı faaliyetlerde bulunmamayı kabul ve taahhüt eder.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Fikri Mülkiyet Hakları</h2>
          <p className="mb-4">
            Web Sitesinde yer alan tüm içerik (metin, görsel, logo, tasarım, yazılım, ses, video vb.) Av. İsmail Çavuş Hukuk Bürosu'na veya lisans verenlerine ait olup, 5846 sayılı Fikir ve Sanat Eserleri Kanunu ve ilgili diğer mevzuat hükümleri uyarınca korunmaktadır. Bu içerikler, Av. İsmail Çavuş Hukuk Bürosu'nun yazılı izni olmaksızın kopyalanamaz, çoğaltılamaz, dağıtılamaz, değiştirilemez veya ticari amaçlarla kullanılamaz.
          </p>
          <p className="mb-6">
            Web Sitesinde yer alan markalar, logolar ve diğer ticari unvanlar, Av. İsmail Çavuş Hukuk Bürosu'nun tescilli markalarıdır. Bu markaların izinsiz kullanımı yasaktır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sorumluluğun Sınırlandırılması</h2>
          <p className="mb-4">
            Av. İsmail Çavuş Hukuk Bürosu, Web Sitesinde yer alan bilgilerin güncelliği, doğruluğu ve eksiksizliği konusunda azami gayreti göstermekle birlikte, bu bilgilerin mutlak doğruluğu veya eksiksizliği konusunda herhangi bir garanti vermez. Web Sitesinde yer alan bilgilere dayanarak verilen kararlardan doğabilecek zararlardan Av. İsmail Çavuş Hukuk Bürosu sorumlu tutulamaz.
          </p>
          <p className="mb-6">
            Web Sitesinin kesintisiz veya hatasız çalışacağı garanti edilmez. Web Sitesine erişiminizde veya kullanımınızda meydana gelebilecek teknik sorunlar, virüsler veya diğer zararlı yazılımlar nedeniyle oluşabilecek zararlardan Av. İsmail Çavuş Hukuk Bürosu sorumlu değildir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Üçüncü Taraf Bağlantıları</h2>
          <p className="mb-6">
            Web Sitesi, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca bilgi verme amacıyla sağlanmıştır. Av. İsmail Çavuş Hukuk Bürosu, bu üçüncü taraf web sitelerinin içeriğinden, gizlilik politikalarından veya kullanım koşullarından sorumlu değildir. Bu siteleri ziyaret etmeden önce ilgili sitelerin gizlilik politikalarını ve kullanım koşullarını incelemeniz tavsiye edilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Değişiklikler</h2>
          <p className="mb-6">
            Av. İsmail Çavuş Hukuk Bürosu, bu Kullanım Koşullarını dilediği zaman önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Değişiklikler, Web Sitesinde yayınlandığı tarihte yürürlüğe girer. Web Sitesini kullanmaya devam etmeniz, güncellenmiş Kullanım Koşullarını kabul ettiğiniz anlamına gelir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
          <p className="mb-6">
            Bu Kullanım Koşullarının yorumlanmasında ve uygulanmasında Türkiye Cumhuriyeti kanunları geçerli olacaktır. Bu Kullanım Koşullarından doğabilecek her türlü uyuşmazlığın çözümünde Ankara Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Son Güncelleme Tarihi:</strong> 25 Temmuz 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KullanimKosullariPage; 