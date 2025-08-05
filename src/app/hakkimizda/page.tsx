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
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { AboutPageSchema } from '@/components/seo';

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


      {/* Breadcrumb */}
      <div className="bg-white py-4 relative z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: 'Hakkımızda' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 bg-white">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
              Çavuş Hukuk Bürosu Hakkında
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
              Deneyimli avukatlarımızla birlikte, hukuki süreçlerin karmaşıklığını müvekkillerimiz için yönetilebilir ve anlaşılır kılmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Kurumsal Kimlik */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8">
                Kurumsal Kimlik ve Değerler
              </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Çalışma Prensiplerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hukuki süreçlerde müvekkillerimizin haklarını en etkili şekilde korumak için çalışma prensiplerimizi belirliyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {calismaPrensipleri.map((prensip, index) => {
              const IconComponent = prensip.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {prensip.baslik}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {prensip.aciklama}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faaliyet Alanları */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Faaliyet Alanları
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çeşitli hukuk alanlarında uzmanlaşmış ekibimizle hizmet veriyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faaliyetAlanlari.map((alan, index) => {
              const IconComponent = alan.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {alan.label}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {alan.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hukuki Hizmetlerimiz */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Hukuki Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hukuki sorunlarınız için kapsamlı çözümler sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol taraf - Hukuki Danışmanlık Kartı */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 lg:p-8 text-white shadow-2xl w-full lg:w-[480px] h-auto lg:h-[500px] flex flex-col justify-between mt-8 lg:mt-12">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Hukuki Danışmanlık</h3>
                <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed">
                  Hukuki sorunlarınızı değerlendirmek ve size en uygun çözümü sunmak için profesyonel danışmanlık hizmeti veriyoruz.
                </p>
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={18} className="lg:text-red-200 text-red-100" />
                    <span className="text-sm lg:text-base">Profesyonel hukuki değerlendirme</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={18} className="lg:text-red-200 text-red-100" />
                    <span className="text-sm lg:text-base">Uzman avukat görüşü</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={18} className="lg:text-red-200 text-red-100" />
                    <span className="text-sm lg:text-base">Detaylı çözüm önerileri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={18} className="lg:text-red-200 text-red-100" />
                    <span className="text-sm lg:text-base">Hukuki süreç planlaması</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="/iletisim"
                  className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  İletişime Geç
                  <ArrowRight size={18} className="lg:ml-2 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Sağ taraf - Hukuki Hizmetler Listesi */}
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hukuki Hizmetlerimiz</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Hukuki Uzmanlık</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      İş, Ceza, Aile, İdare, Gayrimenkul ve Tazminat Hukuku alanlarında derin uzmanlık
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Stratejik Hukuki Yaklaşım</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Her dava için özel hukuki strateji geliştirme ve risk analizi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Hukuki Süreç Yönetimi</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Dava takibi, delil toplama ve hukuki süreçlerin profesyonel yönetimi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Hukuki Güvenilirlik</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Yılların deneyimi ile hukuki güvenilirlik ve başarılı sonuçlar
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Hukuki İnovasyon</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Güncel hukuki gelişmeleri takip eden modern hukuki çözümler
                    </p>
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