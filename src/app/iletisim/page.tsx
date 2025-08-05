"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, X, Navigation } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AIChatbot from '@/components/ui/AIChatbot';
import { ContactPageSchema } from '@/components/seo';

const IletisimPage = React.memo(() => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [kvkkAccepted, setKvkkAccepted] = React.useState(false);
  const [showKvkkModal, setShowKvkkModal] = React.useState(false);

  // Toast notification otomatik kapanma
  React.useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000); // 5 saniye sonra kapanır

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const iletisimBilgileri = {
    telefon: '+90 505 398 99 81',
    email: 'av.ismailcavuss@gmail.com',
    adres: 'Korkutreis Mahallesi, Cihan Sokak No:12/8, Çankaya/Ankara',
    calismaSaatleri: 'Pazartesi - Cumartesi: 09:00 - 18:00'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setFormData({
          name: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Bir hata oluştu.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Bağlantı hatası. Lütfen tekrar deneyiniz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ContactPage ve LocalBusiness Schema */}
      <ContactPageSchema
        url="https://ismailcavus.av.tr/iletisim"
        name="İletişim - Çavuş Hukuk Bürosu"
        description="Çavuş Hukuk Bürosu ile iletişime geçin. Ankara'da avukatlık ve hukuki danışmanlık hizmetleri. Telefon, e-posta ve adres bilgileri."
      />


      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white py-4 relative z-10 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: 'İletişim' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-8 bg-white">
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
                İletişim
              </h1>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
                Hukuki sorunlarınız için bizimle iletişime geçebilirsiniz. Uzman avukatlarımız size yardımcı olmaktan mutluluk duyacaktır.
              </p>
            </div>
          </div>
        </section>

        {/* İletişim Content */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a href={`tel:${iletisimBilgileri.telefon}`} className="text-gray-600 hover:text-red-600 transition-colors">
                      {iletisimBilgileri.telefon}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                    <a href={`mailto:${iletisimBilgileri.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                      {iletisimBilgileri.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      {iletisimBilgileri.adres}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      {iletisimBilgileri.calismaSaatleri}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* İletişim Formu */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Mesaj Gönderin</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="Aile Hukuku">Aile Hukuku</option>
                    <option value="İş Hukuku">İş Hukuku</option>
                    <option value="Ceza Hukuku">Ceza Hukuku</option>
                    <option value="İdare Hukuku">İdare Hukuku</option>
                    <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
                    <option value="Miras Hukuku">Miras Hukuku</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    placeholder="Hukuki sorununuzu detaylı bir şekilde açıklayınız..."
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="kvkk"
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <div className="flex-1">
                    <label htmlFor="kvkk" className="text-sm text-gray-700">
                      <span className="text-red-600">*</span> Kişisel verilerimin işlenmesine ilişkin{' '}
                      <button
                        type="button"
                        onClick={() => setShowKvkkModal(true)}
                        className="text-red-600 hover:text-red-700 underline"
                      >
                        KVKK Aydınlatma Metni
                      </button>
                      'ni okudum ve kabul ediyorum.
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading || !kvkkAccepted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    loading || !kvkkAccepted
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700 transform hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Harita Bölümü */}
        <section className="py-16 bg-white">
          <div className="w-full h-px bg-gray-300 mb-16"></div>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Ofisimizi Ziyaret Edin</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Merkezi konumumuzda sizleri bekliyoruz. Kolay ulaşım ve ücretsiz otopark imkanı.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Harita */}
              <div className="lg:col-span-2">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative w-full h-80 lg:h-[400px] bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer">
                    <img 
                      src="/images/street-map.png"
                      alt="Çavuş Hukuk Bürosu - Korkutreis Mahallesi, Çankaya/Ankara"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling;
                        if (nextSibling) {
                          (nextSibling as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    
                    {/* Fallback if image not found */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <MapPin size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Çavuş Hukuk Bürosu</h3>
                        <p className="text-gray-600 mb-4">Korkutreis Mahallesi, Çankaya</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <p>📍 Merkezi konum</p>
                          <p>🚇 Metro ve otobüs ulaşımı</p>
                          <p>🅿️ Ücretsiz otopark</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Pin Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        {/* Ana iğne */}
                        <div className="w-8 h-8 bg-red-500 rounded-full border-3 border-white shadow-xl animate-pulse flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        {/* Dış halka animasyonu */}
                        <div className="absolute inset-0 w-8 h-8 border-2 border-red-400 rounded-full animate-ping opacity-75"></div>
                        {/* İkinci dış halka */}
                        <div className="absolute inset-0 w-12 h-12 border border-red-300 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
                      </div>
                    </div>
                    
                    {/* Info Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Çavuş Hukuk Bürosu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Click to open map */}
                    <a 
                      href="https://maps.app.goo.gl/Wf66FPCrdRhPqjXQ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center space-x-2">
                          <Navigation size={20} className="text-red-600" />
                          <span className="text-sm font-medium text-gray-700">Haritada Aç</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Konum Bilgileri */}
              <div className="flex flex-col gap-4 lg:h-[400px] lg:justify-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Navigation size={20} className="text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Ulaşım</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Metro: Sıhhiye Metro İstasyonu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Otobüs: Sıhhiye Otobüs Durağı</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Özel Araç: Ücretsiz Otopark</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Clock size={20} className="text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Çalışma Saatleri</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Pazartesi - Cuma:</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cumartesi:</span>
                      <span className="font-medium">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar:</span>
                      <span className="font-medium text-red-500">Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KVKK Modal */}
        {showKvkkModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">KVKK Aydınlatma Metni</h3>
                <button
                  onClick={() => setShowKvkkModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="px-6 py-4 text-sm text-gray-700 leading-relaxed">
                <h4 className="font-semibold text-base mb-4">KİŞİSEL VERİLERİN KORUNMASI KANUNU ("KVKK") KAPSAMINDA AYDINLATMA METNİ</h4>
                <p className="mb-4">
                  İşbu Aydınlatma Metni, ismailcavus.av.tr internet sitesinde yer alan "İletişim Formu" üzerinden paylaştığınız kişisel verilerin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat çerçevesinde, veri sorumlusu sıfatıyla Av. İsmail Çavuş tarafından hangi kapsamda işleneceği, saklanacağı ve korunacağı konusunda sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
                
                <h5 className="font-semibold mb-2">1. İşlenen Kişisel Veriler</h5>
                <p className="mb-4">
                  İletişim formu aracılığıyla aşağıdaki kişisel verileriniz toplanmakta ve işlenmektedir:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Ad Soyad</li>
                  <li>Telefon Numarası</li>
                  <li>Konu</li>
                  <li>Mesaj İçeriği</li>
                  <li>(Otomatik olarak) IP Adresiniz ve form gönderim tarihi/saat bilgisi</li>
                </ul>

                <h5 className="font-semibold mb-2">2. Kişisel Verilerin İşlenme Amaçları</h5>
                <p className="mb-2">Toplanan kişisel verileriniz, aşağıdaki amaçlarla sınırlı olarak işlenmektedir:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>İletişim talebinizin değerlendirilmesi ve tarafınıza geri dönüş sağlanması,</li>
                  <li>Hukuki hizmetler hakkında bilgi verilmesi,</li>
                  <li>Taleplerinizin kayıt altına alınması ve gerektiğinde kanıt olarak saklanması,</li>
                  <li>Veri güvenliği süreçlerinin yönetimi,</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
                </ul>

                <h5 className="font-semibold mb-2">3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h5>
                <p className="mb-4">
                  Kişisel verileriniz, doğrudan tarafınızca iletişim formu aracılığıyla elektronik ortamda iletilmekte olup; KVKK'nın 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Açık rızanızın alınması (KVKK m.5/1),</li>
                  <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması (KVKK m.5/2-e),</li>
                  <li>İlgili kişinin kendisi tarafından alenileştirilmiş verilerin işlenmesi (KVKK m.5/2-d),</li>
                  <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması (KVKK m.5/2-f).</li>
                </ul>

                <h5 className="font-semibold mb-2">4. Kişisel Verilerin Aktarılması</h5>
                <p className="mb-4">
                  Kişisel verileriniz hiçbir şekilde üçüncü kişilere pazarlama amaçlı olarak aktarılmamakta, yetkili kamu kurum ve kuruluşlarından gelen talepler haricinde hiçbir kişi ya da kurumla paylaşılmamaktadır. Veriler yalnızca yasal yükümlülüklerin yerine getirilmesi, yetkili makamlar tarafından talep edilmesi, bilgi sistemleri hizmeti sunan teknik destek firmalarının hizmet sağlaması gibi durumlarda, veri işleyen sıfatıyla sınırlı teknik hizmet sağlayıcılarla paylaşılabilir.
                </p>

                <h5 className="font-semibold mb-2">5. Kişisel Verilerinizin Saklama Süresi</h5>
                <p className="mb-4">
                  Kişisel verileriniz iletişim formu üzerinden yapılan başvurulara ilişkin yasal zamanaşımı süresi (10 yıl) boyunca, daha uzun süreli bir saklama zorunluluğu bulunmadıkça, talebinizin sonuçlandırılması sonrasında en geç 1 yıl içinde silinir, yok edilir veya anonim hale getirilir.
                </p>

                <h5 className="font-semibold mb-2">6. Veri Sahibi Olarak Haklarınız</h5>
                <p className="mb-2">KVKK'nın 11. maddesi uyarınca, aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>İşleme amacını ve bu amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme,</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                  <li>KVKK'ya uygun olarak silinmesini veya yok edilmesini isteme,</li>
                  <li>Bu işlemlerin üçüncü kişilere bildirilmesini talep etme,</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhe bir sonucun ortaya çıkmasına itiraz etme,</li>
                  <li>Kanuna aykırı olarak işlenmiş olması sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                </ul>
                <p className="mb-4">
                  Bu haklarınızı kullanmak için info@ismailcavus.av.tr adresine e-posta gönderebilirsiniz.
                </p>

                <h5 className="font-semibold mb-2">7. Gizlilik ve Veri Güvenliği</h5>
                <p className="mb-4">
                  ismailcavus.av.tr olarak, kişisel verilerinizi gizli tutmayı, üçüncü kişilerle paylaşmamayı ve gerekli teknik ve idari tedbirleri almayı taahhüt ederiz. Web sitemiz üzerinden gönderdiğiniz bilgiler, güvenli sunucular aracılığıyla iletilmekte ve dışarıya karşı korunmaktadır.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <AIChatbot />
    </>
  );
});

export default IletisimPage; 