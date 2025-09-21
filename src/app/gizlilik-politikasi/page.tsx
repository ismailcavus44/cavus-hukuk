import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'ismailcavus.av.tr Gizlilik Politikası - Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgi.',
  keywords: 'gizlilik politikası, kişisel veri koruma, KVKK, ismailcavus.av.tr',
  openGraph: {
    title: 'Gizlilik Politikası - Çavuş Hukuk Bürosu',
    description: 'ismailcavus.av.tr Gizlilik Politikası - Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgi.',
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
    canonical: 'https://www.ismailcavus.av.tr/gizlilik-politikasi',
  },
};

const GizlilikPolitikasiPage = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Gizlilik Politikası' }
            ]} 
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            ismailcavus.av.tr olarak, müvekkillerimizin ve web sitemizi ziyaret eden kişilerin kişisel verilerinin korunmasına büyük önem vermekteyiz. Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) başta olmak üzere ilgili mevzuata uygun olarak, kişisel verilerinizi nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklamaktadır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Kişisel Verilerin Toplanması</h2>
          <p className="mb-4">
            Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden faydalanmak amacıyla bizimle iletişime geçtiğinizde, aşağıdaki kişisel verileri toplayabiliriz:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası.</li>
            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres.</li>
            <li><strong>Hukuki İşlem Bilgileri:</strong> Vekaletname bilgileri, dava dosyası bilgileri, hukuki danışmanlık talepleri.</li>
            <li><strong>Web Sitesi Kullanım Bilgileri:</strong> IP adresi, tarayıcı türü, işletim sistemi, ziyaret tarih ve saatleri, ziyaret edilen sayfalar, çerezler aracılığıyla toplanan veriler.</li>
          </ul>
          <p className="mb-6">
            Kişisel verileriniz, doğrudan sizin tarafınızdan (örneğin iletişim formları aracılığıyla), otomatik yollarla (örneğin çerezler aracılığıyla) veya üçüncü kişilerden (örneğin kamu kurumları veya adli makamlar) elde edilebilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p className="mb-4">
            Topladığımız kişisel verileriniz, aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hukuki danışmanlık ve avukatlık hizmetleri sunmak.</li>
            <li>Müvekkil ilişkilerini yönetmek ve iletişimi sağlamak.</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek (örneğin, mahkeme kararları veya yasal düzenlemeler gereği).</li>
            <li>Web sitemizin işleyişini sağlamak, geliştirmek ve güvenliğini temin etmek.</li>
            <li>Kullanıcı deneyimini iyileştirmek ve kişiselleştirilmiş hizmetler sunmak.</li>
            <li>İstatistiksel analizler yapmak ve pazarlama faaliyetlerini yürütmek (onayınız dahilinde).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Kişisel Verilerin Aktarılması</h2>
          <p className="mb-4">
            Kişisel verileriniz, hukuki yükümlülüklerimizin yerine getirilmesi, hizmetlerimizin sunulması veya yasalara uygun diğer meşru amaçlar doğrultusunda, aşağıdaki durumlarda üçüncü kişilere aktarılabilir:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Yasal düzenlemelerin gerektirdiği durumlarda yetkili kamu kurum ve kuruluşlarına (mahkemeler, savcılıklar, emniyet birimleri vb.).</li>
            <li>Hukuki hizmetlerimizin ifası için işbirliği yaptığımız avukatlar, bilirkişiler, uzmanlar veya diğer üçüncü taraf hizmet sağlayıcılarına.</li>
            <li>Hukuki danışmanlık veya dava süreçlerinde karşı tarafa veya ilgili üçüncü kişilere (sadece gerekli olduğu ölçüde).</li>
          </ul>
          <p className="mb-6">
            Kişisel verilerinizin aktarılması durumunda, KVKK ve ilgili mevzuatta belirtilen güvenlik önlemleri alınmaktadır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Kişisel Verilerin Saklanması ve Korunması</h2>
          <p className="mb-6">
            Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca veya ilgili yasal düzenlemelerde belirtilen süreler boyunca saklanmaktadır. Verilerinizin güvenliğini sağlamak amacıyla, yetkisiz erişimi, kaybı, kötüye kullanımı veya değiştirilmesini önlemek için uygun teknik ve idari önlemler alınmaktadır. Bu önlemler arasında veri şifreleme, güvenlik duvarları, erişim kontrolleri ve düzenli güvenlik denetimleri bulunmaktadır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Kişisel Veri Sahibinin Hakları</h2>
          <p className="mb-4">
            KVKK'nın 11. maddesi uyarınca, kişisel verilerinize ilişkin aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme.</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme.</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme.</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
            <li>(e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
          </ul>
          <p className="mb-6">
            Haklarınızı kullanmak için ismailcavus.av.tr adresinden veya iletişim bilgilerimiz aracılığıyla bizimle iletişime geçebilirsiniz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Gizlilik Politikası Değişiklikleri</h2>
          <p className="mb-6">
            Bu Gizlilik Politikası, yasal gereklilikler ve şirket politikalarımız doğrultusunda zaman zaman güncellenebilir. Güncellemeler web sitemizde yayınlandığı tarihte yürürlüğe girer. Politikadaki önemli değişiklikler hakkında sizi bilgilendirmek için uygun adımlar atılacaktır.
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

export default GizlilikPolitikasiPage; 