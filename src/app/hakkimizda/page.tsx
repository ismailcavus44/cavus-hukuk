"use client";

import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  Target,
  Heart,
  Scale,
  BookOpen,
  Phone,
  Mail,
  Building,
  Eye,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { AboutPageSchema, OrganizationSchema } from '@/components/seo';

const HakkimizdaPage = React.memo(() => {

  const calismaPrensipleri = React.useMemo(() => [
    {
      icon: Scale,
      baslik: 'Hukuki Analiz ve Değerlendirme',
      aciklama: 'Hukuki süreçlerin yapısını analiz eder, müvekkillerimizi mevcut durum hakkında bilgilendiririz. Hukuki süreçleri planlayarak, mümkün olan en iyi sonuçları elde etmeye çalışırız.'
    },
    {
      icon: Heart,
      baslik: 'Kişiye Özel Hukuki Yaklaşım',
      aciklama: 'Her müvekkilimizin farklı hukuki ihtiyaçları olduğunu biliriz. Bu doğrultuda, her duruma özgü hukuki destek sunmaya çalışırız.'
    },
    {
      icon: MessageSquare,
      baslik: 'Düzenli Bilgilendirme',
      aciklama: 'Hukuki süreçlerde belirsizlik yaşanabileceğinin farkındayız. Bu nedenle, sürecin aşamalarında müvekkillerimizi bilgilendirir, seçenekleri sunar ve hukuki kararlarını destekleriz.'
    }
  ], []);

  const faaliyetAlanlari = React.useMemo(() => [
    { icon: Users, label: 'İş Hukuku', value: 'İşçi-işveren uyuşmazlıkları, toplu iş hukuku, iş güvenliği, sosyal güvenlik hukuku, iş kazası ve meslek hastalığı davaları' },
    { icon: Shield, label: 'Ceza Hukuku', value: 'Savunma, soruşturma ve kovuşturma süreçleri, beyaz yaka suçları, mali suçlar, uyuşturucu suçları, şiddet suçları' },
    { icon: Heart, label: 'Aile Hukuku', value: 'Boşanma, nafaka, velayet ve miras davaları, evlat edinme, soy bağı, aile içi şiddet koruma kararları' },
    { icon: Scale, label: 'İdare Hukuku', value: 'İdari işlemler, idari sözleşmeler, kamu personeli hukuku, vergi uyuşmazlıkları, idari yargı süreçleri' },
    { icon: Briefcase, label: 'Gayrimenkul Hukuku', value: 'Emlak hukuku, kat mülkiyeti ve imar davaları, kentsel dönüşüm, kamulaştırma, tapu iptal ve tescil davaları' },
    { icon: Award, label: 'Tazminat Hukuku', value: 'Maddi ve manevi tazminat davaları, trafik kazası tazminatı, iş kazası tazminatı, malpraktis davaları' },
  ], []);

  return (
    <>
      {/* AboutPage ve Organization Schema */}
      <AboutPageSchema
        url="https://ismailcavus.av.tr/hakkimizda"
        name="Hakkımızda - Çavuş Hukuk Bürosu"
        description="Çavuş Hukuk Bürosu hakkında detaylı bilgi. Ankara'da avukatlık ve hukuki danışmanlık hizmetleri. Deneyimli avukatlarımız ve çalışma prensiplerimiz."
      />
      <OrganizationSchema
        name="Çavuş Hukuk Bürosu"
        description="Ankara'da avukatlık ve hukuki danışmanlık hizmetleri. Ceza, boşanma, iş ve ticaret hukuku alanlarında profesyonel destek."
        url="https://ismailcavus.av.tr"
        logo="https://ismailcavus.av.tr/logo-header.png"
        telephone="+90 505 398 9981"
        email="av.ismailcavuss@gmail.com"
        address={{
          streetAddress: "Korkutreis Mahallesi, Cihan Sokak No:12/8",
          addressLocality: "Çankaya",
          addressRegion: "Ankara",
          postalCode: "06690",
          addressCountry: "TR"
        }}
        geo={{
          latitude: "39.9334",
          longitude: "32.8597"
        }}
        openingHours="Mo-Sa 09:00-18:00"
        priceRange="$$"
      />
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: 'Hakkımızda' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 leading-tight">
            Çavuş Hukuk Bürosu Hakkında
          </h1>
          <p className="text-base text-gray-800 mb-12 max-w-3xl mx-auto">
            Deneyimli avukatlarımızla birlikte, hukuki süreçlerin karmaşıklığını müvekkillerimiz için yönetilebilir ve anlaşılır kılmayı hedefliyoruz.
          </p>
        </div>
      </section>

      {/* Kurumsal Kimlik */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Kurumsal Kimlik ve Değerler
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Faaliyetlerimizin merkezinde şeffaflık, hesap verebilirlik ve müvekkil odaklılık yatmaktadır. Her biri alanında uzmanlaşmış dinamik ekibimizle, hukuki süreçlerin karmaşıklığını müvekkillerimiz için yönetilebilir ve anlaşılır kılmayı hedefleriz.
                </p>
                <p>
                  Kurulduğumuz günden bu yana, hukuki süreçlerin her aşamasında müvekkillerimizin yanında olarak, onların haklarını en etkili şekilde korumak ve savunmak için çalışıyoruz. Deneyimli avukatlarımız, güncel mevzuat değişikliklerini yakından takip ederek, müvekkillerimize en güncel ve doğru hukuki danışmanlık hizmeti sunmaktadır.
                </p>
                <p>
                  Hukuki süreçlerin karmaşıklığının farkındayız. Bu nedenle, her müvekkilimizin özel durumunu analiz ederek, karmaşık hukuki konuları basit ve anlaşılır bir dille açıklıyor, süreç boyunca her adımda müvekkillerimizi bilgilendiriyoruz. Teknolojik gelişmeleri takip ederek, modern hukuk bürosu standartlarında hizmet veriyoruz.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-3xl p-10 text-white shadow-2xl border border-red-500/20">
                <h3 className="text-3xl font-bold mb-8">Misyonumuz</h3>
                <p className="text-red-100 mb-8 text-base leading-relaxed">
                  Misyonumuz, müvekkillerimizin karşılaştığı hukuki uyuşmazlıklarda, güncel mevzuat ve içtihatlar ışığında, en etkili ve stratejik çözümleri üretmektir. Hukuki süreçlerin hassasiyetinin ve gerektirdiği özenin bilinciyle, her bir müvekkilimizin özel durumunu titizlikle analiz eder, kişiye özel hukuki stratejiler geliştirir ve bu süreçte tam bir gizlilik prensibiyle hareket ederiz.
                </p>
                <h3 className="text-3xl font-bold mb-8">Vizyonumuz</h3>
                <p className="text-red-100 text-base leading-relaxed">
                  Vizyonumuz, hukuki danışmanlık ve avukatlık hizmetlerinde kalite, güvenilirlik ve çözüm odaklı yaklaşımımızla sektörde öncü bir konuma ulaşmaktır. Sürekli mesleki gelişim ve teknolojik yenilikleri takip ederek hizmet kalitemizi en üst seviyede tutmayı, Türkiye'de ve uluslararası alanda referans gösterilen bir hukuk bürosu olmayı hedeflemekteyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Prensiplerimiz */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Çalışma Prensiplerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hukuki süreçlerin karmaşıklığını müvekkillerimiz için yönetilebilir ve anlaşılır kılmayı hedefleriz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calismaPrensipleri.map((prensip, index) => (
              <div key={index} className="text-center group p-8 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <prensip.icon size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{prensip.baslik}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{prensip.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faaliyet Alanları */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Faaliyet Alanları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İsmail Çavuş Hukuk Bürosu, hukukun birçok farklı disiplininde engin tecrübeye sahip bir kadro ile hizmet vermektedir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faaliyetAlanlari.map((alan, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                    <alan.icon size={32} className="text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{alan.label}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{alan.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-3xl p-10 text-white shadow-2xl border border-red-500/20">
                <h3 className="text-3xl font-bold mb-8">Hukuki Danışmanlık</h3>
                <p className="text-red-100 mb-8 text-base leading-relaxed">
                  Hukuki sorunlarınızı değerlendirmek ve size en uygun çözümü sunmak için profesyonel danışmanlık hizmeti veriyoruz.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <CheckCircle size={24} className="text-red-200" />
                    <span className="text-lg">Profesyonel hukuki değerlendirme</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle size={24} className="text-red-200" />
                    <span className="text-lg">Uzman avukat görüşü</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle size={24} className="text-red-200" />
                    <span className="text-lg">Detaylı çözüm önerileri</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle size={24} className="text-red-200" />
                    <span className="text-lg">Hukuki süreç planlaması</span>
                  </div>
                </div>
                <a 
                  href="/iletisim"
                  className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  İletişime Geç
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                Hukuki Hizmetlerimiz
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hukuki Uzmanlık</h3>
                    <p className="text-gray-600 text-lg">İş, Ceza, Aile, İdare, Gayrimenkul ve Tazminat Hukuku alanlarında derin uzmanlık</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Stratejik Hukuki Yaklaşım</h3>
                    <p className="text-gray-600 text-lg">Her dava için özel hukuki strateji geliştirme ve risk analizi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hukuki Süreç Yönetimi</h3>
                    <p className="text-gray-600 text-lg">Dava takibi, delil toplama ve hukuki süreçlerin profesyonel yönetimi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hukuki Danışmanlık</h3>
                    <p className="text-gray-600 text-lg">Kapsamlı hukuki değerlendirme ve çözüm önerileri</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hukuki Güvenilirlik</h3>
                    <p className="text-gray-600 text-lg">Yılların deneyimi ile hukuki güvenilirlik ve başarılı sonuçlar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hukuki İnovasyon</h3>
                    <p className="text-gray-600 text-lg">Güncel hukuki gelişmeleri takip eden modern hukuki çözümler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HakkimizdaPage; 