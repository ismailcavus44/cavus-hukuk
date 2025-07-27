import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'ismailcavus.av.tr Çerez Politikası - Web sitemizde kullanılan çerezler ve çerez tercihlerinizi yönetme hakkında bilgi.',
  keywords: 'çerez politikası, cookies, web sitesi çerezleri, ismailcavus.av.tr',
  openGraph: {
    title: 'Çerez Politikası - Çavuş Hukuk Bürosu',
    description: 'ismailcavus.av.tr Çerez Politikası - Web sitemizde kullanılan çerezler ve çerez tercihlerinizi yönetme hakkında bilgi.',
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
    canonical: 'https://ismailcavus.av.tr/cerez-politikasi',
  },
};

const CerezPolitikasiPage = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Çerez Politikası' }
            ]} 
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Çerez Politikası</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            ismailcavus.av.tr web sitesi olarak, ziyaretçilerimizin deneyimini geliştirmek, web sitemizin performansını analiz etmek ve kişiselleştirilmiş hizmetler sunmak amacıyla çerezler (cookies) kullanmaktayız. Bu Çerez Politikası, web sitemizde kullanılan çerez türlerini, çerezlerin kullanım amaçlarını ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Çerez Nedir?</h2>
          <p className="mb-6">
            Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınızda, cep telefonunuzda veya diğer cihazlarınızda depolanan küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi hatırlamasını, tercihlerinizi kaydetmesini ve size daha kişiselleştirilmiş bir deneyim sunmasını sağlar.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
          <p className="mb-4">
            Web sitemizde farklı amaçlarla çeşitli çerez türleri kullanılmaktadır:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevleri için gerekli olan çerezlerdir. Bu çerezler olmadan web sitesi düzgün çalışmayabilir. Örneğin, oturum açma bilgilerinizi hatırlamak veya güvenlik önlemlerini sağlamak için kullanılırlar.</li>
            <li><strong>Performans/Analitik Çerezler:</strong> Web sitesinin nasıl kullanıldığını anlamak, ziyaretçi sayılarını ve trafik kaynaklarını analiz etmek amacıyla kullanılan çerezlerdir. Bu çerezler, web sitemizin performansını ölçmemize ve iyileştirmemize yardımcı olur. Örneğin, Google Analytics gibi üçüncü taraf analiz araçları tarafından kullanılırlar.</li>
            <li><strong>İşlevsel Çerezler:</strong> Web sitesinin kullanıcı tercihlerini (dil seçimi, bölge vb.) hatırlamasını sağlayan çerezlerdir. Bu çerezler, daha kişiselleştirilmiş bir deneyim sunmak için kullanılır.</li>
            <li><strong>Hedefleme/Reklam Çerezleri:</strong> Ziyaretçilerin ilgi alanlarına göre kişiselleştirilmiş reklamlar sunmak amacıyla kullanılan çerezlerdir. Bu çerezler, reklam kampanyalarının etkinliğini ölçmek ve reklamları daha alakalı hale getirmek için kullanılır.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Çerezlerin Kullanım Amaçları</h2>
          <p className="mb-4">
            Çerezleri aşağıdaki amaçlarla kullanmaktayız:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Web sitesinin temel işlevlerini sağlamak.</li>
            <li>Web sitesinin performansını analiz etmek ve iyileştirmek.</li>
            <li>Kullanıcı deneyimini kişiselleştirmek ve tercihleri hatırlamak.</li>
            <li>Web sitesinin güvenliğini sağlamak.</li>
            <li>Pazarlama ve reklam faaliyetlerini yürütmek (onayınız dahilinde).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Çerez Tercihlerinizi Yönetme</h2>
          <p className="mb-4">
            Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak isterseniz tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı alabilirsiniz. Çerezleri devre dışı bırakmak, web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
          </p>
          <p className="mb-4">
            Çerez tercihlerinizi yönetmek için tarayıcınızın ayarlar bölümünü ziyaret edebilirsiniz. Yaygın tarayıcılar için çerez yönetimi bilgileri aşağıdaki gibidir:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Google Chrome:</strong> Ayarlar {'>'}> Gizlilik ve Güvenlik {'>'}> Site Ayarları {'>'}> Çerezler ve Site Verileri</li>
            <li><strong>Mozilla Firefox:</strong> Seçenekler {'>'}> Gizlilik ve Güvenlik {'>'}> Çerezler ve Site Verileri</li>
            <li><strong>Microsoft Edge:</strong> Ayarlar {'>'}> Gizlilik, Arama ve Hizmetler {'>'}> Çerezler ve Site İzinleri</li>
            <li><strong>Safari:</strong> Tercihler {'>'}> Gizlilik {'>'}> Çerezler ve Web Sitesi Verileri</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Üçüncü Taraf Çerezleri</h2>
          <p className="mb-6">
            Web sitemizde, hizmet sağlayıcılarımız veya iş ortaklarımız tarafından yerleştirilen üçüncü taraf çerezleri de kullanılabilir. Bu çerezler, analiz, reklam veya diğer hizmetler için kullanılabilir. Üçüncü taraf çerezlerinin kullanımı, ilgili üçüncü tarafın kendi gizlilik politikalarına tabidir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Çerez Politikası Değişiklikleri</h2>
          <p className="mb-6">
            Bu Çerez Politikası, yasal gereklilikler ve şirket politikalarımız doğrultusunda zaman zaman güncellenebilir. Güncellemeler web sitemizde yayınlandığı tarihte yürürlüğe girer. Politikadaki önemli değişiklikler hakkında sizi bilgilendirmek için uygun adımlar atılacaktır.
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

export default CerezPolitikasiPage; 