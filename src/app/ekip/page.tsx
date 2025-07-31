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
  ExternalLink
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { PersonSchema, OrganizationSchema } from '@/components/seo';

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

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Ekibimiz' }
              ]} 
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center leading-tight">Ekibimiz</h1>
          <p className="text-base text-gray-800 mb-12 text-center max-w-3xl mx-auto">
            Her biri kendi alanında uzmanlaşmış avukatlarımızla tanışın. Deneyimli ve güvenilir ekibimiz hukuki sorunlarınıza çözüm üretiyor.
          </p>
            
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-2xl">
              {ekipUyeleri.map((avukat) => (
                <div key={avukat.id} className="bg-white rounded-2xl p-8 hover:bg-red-50 transition-all duration-300 border border-gray-100 hover:border-red-200 shadow-lg hover:shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors overflow-hidden shadow-lg">
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
                      ) : null}
                      <span 
                        className="text-red-600 text-3xl font-bold" 
                        style={{ display: 'none' }}
                      >
                        {avukat.ad.charAt(0)}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {avukat.ad}
                    </h2>
                    <p className="text-red-600 font-semibold mb-2">
                      {avukat.unvan}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href={`https://linkedin.com/in/${avukat.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-all duration-300 group hover:scale-110"
                    >
                      <Linkedin size={20} className="text-red-600 group-hover:text-red-700" />
                    </a>
                    
                    <a 
                      href={`https://instagram.com/${avukat.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-all duration-300 group hover:scale-110"
                    >
                      <Instagram size={20} className="text-red-600 group-hover:text-red-700" />
                    </a>
                    
                    <a 
                      href={`https://medium.com/@${avukat.medium}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-all duration-300 group hover:scale-110"
                    >
                      <ExternalLink size={20} className="text-red-600 group-hover:text-red-700" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kuruluş Tarihçesi ve Bilgiler */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Kuruluş Tarihçesi */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kuruluş Tarihçesi</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2020 - Hukuk Eğitimi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gazi Üniversitesi Hukuk Fakültesi'nden mezun olan Av. İsmail Çavuş, hukuk eğitimini başarıyla tamamladı. Eğitim sürecinde teorik bilgilerini pratikle birleştirerek güçlü bir hukuki altyapı oluşturdu.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2021 - Manisa'da Başlangıç</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mesleki kariyerine Manisa'da başladı. Burada serbest avukatlık yaparak iş hukuku ve trafik kazalarının hukuki süreçlerinde çalışmalar yürüttü. İlk yıllarında özellikle iş hukuku alanında yoğunlaşarak deneyim kazandı.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2023 - Ankara'ya Taşınma</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ankara'ya taşınarak Ankara 2 No'lu Barosu'na bağlı serbest avukat olarak çalışmalarını sürdürmeye başladı. Başkentteki hukuki ortamın sunduğu fırsatları değerlendirerek daha geniş bir müvekkil portföyüne hizmet vermeye başladı.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Günümüz</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Halen Ankara 2 No'lu Barosu'na bağlı olarak serbest avukatlık yapmaktadır. Meslek hayatı boyunca iş hukuku, trafik kazaları, boşanma davaları, askeri davalar gibi alanlarda müvekkillerine hukuki destek sağlamış ve bu alanlarda derin bilgi birikimi edinmiştir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Av. İsmail Çavuş Kimdir */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Av. İsmail Çavuş Kimdir?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Eğitim</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Malatya'da doğdu. Hukuk eğitimine Gazi Üniversitesi Hukuk Fakültesi'nde başladı ve 2020 yılında başarıyla mezun oldu. Mezuniyetinin ardından mesleki kariyerine, iş hukuku, askeri davalar ve trafik kazaları başta olmak üzere hukukun geneline yönelik çalışmalar ile devam etti.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesleki Kariyer</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kariyerine Manisa'da başlayan Av. İsmail Çavuş, burada serbest avukatlık yaparak iş hukuku ve trafik kazalarının hukuki süreçlerinde önemli davalarda yer aldı. Daha sonra Ankara'ya taşınarak Ankara 2 No'lu Barosu'na bağlı serbest avukat olarak çalışmalarını sürdürmeye başladı.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzmanlık Alanları</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Meslek hayatı boyunca iş hukuku, trafik kazaları, boşanma davaları, askeri davalar gibi alanlarda müvekkillerine hukuki destek sağlamış ve bu alanlarda derin bilgi birikimi edinmiştir.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Güncel Durum</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Halen Ankara 2 No'lu Barosu'na bağlı olarak serbest avukatlık yapmaktadır. Mesleki deneyimi ve uzmanlık alanlarındaki bilgi birikimi ile müvekkillerine hukuki destek sağlamaya devam etmektedir.
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

export default EkipPage; 