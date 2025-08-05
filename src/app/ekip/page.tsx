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
  Linkedin,
  Instagram,
  ExternalLink,
  Facebook
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { PersonSchema } from '@/components/seo';

const EkipPage = React.memo(() => {

  const ekipUyeleri = React.useMemo(() => [
    {
      id: '1',
      ad: 'Av. İsmail Çavuş',
      unvan: 'Kurucu Avukat',
      uzmanlik: 'İş Hukuku, Trafik Kazaları, Boşanma Davaları',
      deneyim: '4+ yıl',
      linkedin: 'ismailcavus',
      instagram: 'ismailcavus',
      facebook: 'ismailcavus',
      medium: 'ismailcavus'
    }
  ], []);

  return (
    <>
      {/* Person ve Organization Schema */}
      <PersonSchema
        name="Av. İsmail Çavuş"
        jobTitle="Kurucu Avukat"
        worksFor={{
          name: "Çavuş Hukuk Bürosu",
          type: "LegalService"
        }}
        address={{
          addressLocality: "Ankara",
          addressCountry: "TR"
        }}
        knowsAbout={[
          "İş Hukuku",
          "Trafik Kazaları", 
          "Boşanma Davaları",
          "Ceza Hukuku",
          "Askeri Davalar"
        ]}
      />


      {/* Breadcrumb */}
      <div className="bg-white py-4 relative z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: 'Ekibimiz' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 bg-white">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-600">
              Ekibimiz
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
              Deneyimli ve uzman avukatlarımızla hukuki sorunlarınıza profesyonel çözümler üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Ekip Üyeleri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="w-[675px] h-[345px]">
              {ekipUyeleri.map((avukat) => (
                <div key={avukat.id} className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg w-full h-full">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg">
                      {avukat.ad === 'Av. İsmail Çavuş' ? (
                        <OptimizedImage
                          src="/images/ismail-cavus.jpg" 
                          alt="Av. İsmail Çavuş" 
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          priority={true}
                          sizes="128px"
                          quality={90}
                        />
                      ) : (
                        <Users size={64} className="text-gray-400" />
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{avukat.ad}</h2>
                    <p className="text-base text-red-600 font-semibold mb-4">{avukat.unvan}</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {avukat.linkedin && (
                      <a
                        href="https://www.linkedin.com/in/ismail-cavus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-50 border-2 border-red-200 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                        aria-label="LinkedIn profilini görüntüle"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {avukat.instagram && (
                      <a
                        href="https://www.instagram.com/av.ismailcavus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-50 border-2 border-red-200 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                        aria-label="Instagram profilini görüntüle"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                    {avukat.facebook && (
                      <a
                        href="https://www.facebook.com/avismailcavus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-50 border-2 border-red-200 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                        aria-label="Facebook profilini görüntüle"
                      >
                        <Facebook size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alt Kartlar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Sol Kart - Kuruluş Tarihçesi */}
            <div className="bg-[#feebeb] rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-black mb-6">Kuruluş Tarihçesi</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    2020 - Hukuk Eğitimi
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Gazi Üniversitesi Hukuk Fakültesi'nden mezun olan Av. İsmail Çavuş, hukuk eğitimini başarıyla tamamladı. Eğitim sürecinde teorik bilgilerini pratikle birleştirerek güçlü bir hukuki altyapı oluşturdu.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    2021 - Manisa'da Başlangıç
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mesleki kariyerine Manisa'da başladı. Burada serbest avukatlık yaparak iş hukuku ve trafik kazalarının hukuki süreçlerinde çalışmalar yürüttü. İlk yıllarında özellikle iş hukuku alanında yoğunlaşarak deneyim kazandı.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    2023 - Ankara'ya Taşınma
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ankara'ya taşınarak Ankara 2 No'lu Barosu'na bağlı serbest avukat olarak çalışmalarını sürdürmeye başladı. Başkentteki hukuki ortamın sunduğu fırsatları değerlendirerek daha geniş bir müvekkil portföyüne hizmet vermeye başladı.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Günümüz
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Halen Ankara 2 No'lu Barosu'na bağlı olarak serbest avukatlık yapmaktadır. Meslek hayatı boyunca iş hukuku, trafik kazaları, boşanma davaları, askeri davalar gibi alanlarda müvekkillerine hukuki destek sağlamış ve bu alanlarda derin bilgi birikimi edinmiştir.
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ Kart - Av. İsmail Çavuş Kimdir? */}
            <div className="bg-[#f6f7f8] rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Av. İsmail Çavuş Kimdir?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Eğitim
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Malatya'da doğdu. Hukuk eğitimine Gazi Üniversitesi Hukuk Fakültesi'nde başladı ve 2020 yılında başarıyla mezun oldu. Mezuniyetinin ardından mesleki kariyerine, iş hukuku, askeri davalar ve trafik kazaları başta olmak üzere hukukun geneline yönelik çalışmalar ile devam etti.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Mesleki Kariyer
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kariyerine Manisa'da başlayan Av. İsmail Çavuş, burada serbest avukatlık yaparak iş hukuku ve trafik kazalarının hukuki süreçlerinde önemli davalarda yer aldı. Daha sonra Ankara'ya taşınarak Ankara 2 No'lu Barosu'na bağlı serbest avukat olarak çalışmalarını sürdürmeye başladı.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Uzmanlık Alanları
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Meslek hayatı boyunca iş hukuku, trafik kazaları, boşanma davaları, askeri davalar gibi alanlarda müvekkillerine hukuki destek sağlamış ve bu alanlarda derin bilgi birikimi edinmiştir.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Güncel Durum
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Halen Ankara 2 No'lu Barosu'na bağlı olarak serbest avukatlık yapmaktadır. Mesleki deneyimi ve uzmanlık alanlarındaki bilgi birikimi ile müvekkillerine hukuki destek sağlamaya devam etmektedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default EkipPage; 