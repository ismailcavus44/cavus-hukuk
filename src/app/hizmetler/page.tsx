import type { Metadata } from 'next';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, Briefcase, Shield, Building2, Scale, Users, Award, Clock, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

import AIChatbot from '@/components/ui/AIChatbot';
import { hizmetler } from '@/data';
import { BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Hizmet Alanlarımız',
  description: 'Avukat İsmail Çavuş tarafından sunulan ceza, boşanma, iş ve ticaret hukuku alanlarındaki profesyonel avukatlık hizmetlerini hemen inceleyin.',
  keywords: 'Çavuş Hukuk Bürosu, Av. İsmail Çavuş, Ankara Avukat, İş Hukuku, Ceza Hukuku, Aile Hukuku, İdare Hukuku, Gayrimenkul Hukuku, Tazminat Hukuku, Boşanma, Ticaret Hukuku',
  openGraph: {
    title: 'Hizmet Alanlarımız',
    description: 'Avukat İsmail Çavuş tarafından sunulan ceza, boşanma, iş ve ticaret hukuku alanlarındaki profesyonel avukatlık hizmetlerini hemen inceleyin.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.ismailcavus.av.tr/hizmetler',
    siteName: 'Çavuş Hukuk Bürosu',
    images: [
      {
        url: 'https://www.ismailcavus.av.tr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Çavuş Hukuk Bürosu Hizmet Alanları',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hizmet Alanlarımız - Çavuş Hukuk Bürosu',
    description: 'Avukat İsmail Çavuş tarafından sunulan ceza, boşanma, iş ve ticaret hukuku alanlarındaki profesyonel avukatlık hizmetlerini hemen inceleyin.',
    images: ['https://www.ismailcavus.av.tr/og-image.jpg'],
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
    canonical: 'https://www.ismailcavus.av.tr/hizmetler',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

const HizmetlerPage = () => {
  // Hizmetler verilerini useMemo ile optimize et - LCP için kritik
  const hizmetler = useMemo(() => [
    {
      id: 'aile-hukuku',
      baslik: 'Aile Hukuku',
      aciklama: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hukuki danışmanlık.',
      icon: Heart,
      link: '/hizmetler/aile-hukuku',
      detaylar: [
        'Boşanma davaları (anlaşmalı ve çekişmeli)',
        'Nafaka ve velayet işlemleri',
        'Mal paylaşımı ve nafaka hesaplamaları',
        'Evlat edinme işlemleri',
        'Aile içi şiddet vakaları',
        'Nişan ve evlilik sözleşmeleri'
      ],
      ozellikler: [
        'Aile hukuku alanında hizmet',
        'Hukuki danışmanlık hizmeti',
        'Profesyonel yaklaşım',
        'Müvekkil odaklı hizmet'
      ]
    },
    {
      id: 'is-hukuku',
      baslik: 'İş Hukuku',
      aciklama: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında hukuki danışmanlık.',
      icon: Briefcase,
      link: '/hizmetler/is-hukuku',
      detaylar: [
        'İş sözleşmesi hazırlama ve müzakereler',
        'İşçi alacakları ve tazminat hesaplamaları',
        'İşe iade davaları',
        'İş kazası ve meslek hastalığı davaları',
        'Toplu iş hukuku ve sendika işlemleri',
        'Sosyal güvenlik hukuku danışmanlığı'
      ],
      ozellikler: [
        'İş hukuku alanında hizmet',
        'İş hukuku danışmanlığı',
        'Dava süreci yönetimi',
        'Müvekkil haklarının korunması'
      ]
    },
    {
      id: 'ceza-hukuku',
      baslik: 'Ceza Hukuku',
      aciklama: 'Ceza davalarında savunma, soruşturma ve kovuşturma süreçlerinde hukuki danışmanlık ve temsil.',
      icon: Shield,
      link: '/hizmetler/ceza-hukuku',
      detaylar: [
        'Ceza davalarında savunma',
        'Soruşturma ve kovuşturma süreçleri',
        'Beyaz yaka suçları savunması',
        'Mali suçlar ve uyuşturucu suçları',
        'Şiddet suçları savunması',
        'Ceza hukuku danışmanlığı'
      ],
      ozellikler: [
        'Ceza hukuku alanında uzmanlık',
        'Savunma stratejisi geliştirme',
        'Delil toplama ve değerlendirme',
        'Müvekkil haklarının korunması'
      ]
    },
    {
      id: 'idare-hukuku',
      baslik: 'İdare Hukuku',
      aciklama: 'Kamu kurumları ile vatandaşlar arasındaki uyuşmazlıklarda hukuki danışmanlık ve temsil.',
      icon: Building2,
      link: '/hizmetler/idare-hukuku',
      detaylar: [
        'İdari işlemlerin iptali davaları',
        'Tam yargı davaları',
        'Kamu personeli hukuku danışmanlığı',
        'Vergi uyuşmazlıkları',
        'İdari yargı süreçleri',
        'Kamu hukuku danışmanlığı'
      ],
      ozellikler: [
        'İdare hukuku alanında uzmanlık',
        'Kamu hukuku danışmanlığı',
        'İdari süreç yönetimi',
        'Vatandaş haklarının korunması'
      ]
    },
          {
        id: 'gayrimenkul-hukuku',
        baslik: 'Gayrimenkul Hukuku',
        aciklama: 'Emlak hukuku, kat mülkiyeti, imar hukuku ve gayrimenkul uyuşmazlıklarında hukuki danışmanlık.',
        icon: Scale,
        link: '/hizmetler/gayrimenkul-hukuku',
        detaylar: [
          'Kat mülkiyeti ve imar davaları',
          'Kentsel dönüşüm süreçleri',
          'Kamulaştırma davaları',
          'Tapu iptal ve tescil davaları',
          'Emlak hukuku danışmanlığı',
          'Gayrimenkul sözleşmeleri'
        ],
        ozellikler: [
          'Gayrimenkul hukuku alanında uzmanlık',
          'Emlak hukuku danışmanlığı',
          'Taşınmaz işlemleri danışmanlığı',
          'Sözleşme ve dava süreci yönetimi'
        ]
      },
      {
        id: 'miras-hukuku',
        baslik: 'Miras Hukuku',
        aciklama: 'Miras davaları, vasiyetname, miras paylaşımı ve miras hukuku konularında danışmanlık.',
        icon: Scale,
        link: '/hizmetler/miras-hukuku',
        detaylar: [
          'Vasiyetname hazırlama ve düzenleme',
          'Mirasçılık belgesi işlemleri',
          'Miras paylaşımı ve tenkis davaları',
          'Mirasın reddi ve mirasçılıktan çıkarma',
          'Miras davaları ve uyuşmazlık çözümü',
          'Dijital varlıkların miras hukuku'
        ],
        ozellikler: [
          'Miras hukuku alanında hizmet',
          'Miras hukuku danışmanlığı',
          'Vasiyetname hizmeti',
          'Müvekkil odaklı yaklaşım'
        ]
      }
  ], []);

  return (
    <>


      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white py-4 relative z-10 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: 'Hizmet Alanlarımız' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-8 bg-white">
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-red-600">
                Hizmet Alanlarımız
              </h1>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
                Deneyimli avukatlarımız, çeşitli hukuk alanlarında size kapsamlı danışmanlık hizmeti sunmaktadır.
                Her alanda uzmanlaşmış ekibimizle hukuki sorunlarınıza profesyonel çözümler üretiyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Hizmetler Grid - CLS için optimize edilmiş */}
        <section aria-labelledby="hizmetler-baslik" className="max-w-6xl mx-auto px-6">
          <h2 id="hizmetler-baslik" className="sr-only">Hizmet Alanlarımız</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {hizmetler.map((hizmet) => {
              const IconComponent = hizmet.icon;
              
              return (
                <article key={hizmet.id} className="group h-full">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-red-200 h-full flex flex-col">
                  {/* Header */}
                  <header className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-sm" aria-hidden="true">
                        <IconComponent size={36} className="text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{hizmet.baslik}</h3>
                        <p className="text-gray-600 leading-relaxed">{hizmet.aciklama}</p>
                      </div>
                    </div>
                  </header>

                  {/* Detaylar */}
                  <section className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Hizmet Kapsamı</h4>
                    <ul className="space-y-2" role="list">
                      {hizmet.detaylar.map((detay, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-red-600 mt-1 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-600">{detay}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Özellikler */}
                  <section className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Sürece Yaklaşımımız</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
                      {hizmet.ozellikler.map((ozellik, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award size={14} className="text-red-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-gray-600">{ozellik}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* CTA Button */}
                  <footer className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                    <Link
                      href={hizmet.link}
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      aria-label={`${hizmet.baslik} hakkında detaylı bilgi`}
                    >
                      Detaylı Bilgi
                      <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                    </Link>
                    <div className="text-sm text-gray-500">
                      <Clock size={14} className="inline mr-1" aria-hidden="true" />
                      Etkili Çözüm
                    </div>
                  </footer>
                </div>
              </article>
            );
          })}
          </div>
        </section>

        {/* Neden Biz Section */}
        <section aria-labelledby="neden-biz-baslik" className="bg-gradient-to-r from-red-50 via-white to-red-50 rounded-none p-0 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <header className="text-center mb-8">
                              <h2 id="neden-biz-baslik" className="text-3xl font-bold text-red-600 mb-4">Neden Çavuş Hukuk Bürosu?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deneyimli ve uzman avukatlarımızla hukuki sorunlarınıza profesyonel çözümler üretiyoruz.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Users size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deneyimli Ekip</h3>
                <p className="text-gray-600">Hukuki sorunlarınıza spesifik çözümler üretiyoruz.</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Award size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Uzman Avukatlar</h3>
                <p className="text-gray-600">Her alanda uzmanlaşmış avukatlarımızla hizmet veriyoruz.</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Clock size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Etkili Çözüm</h3>
                <p className="text-gray-600">Etkili ve güvenilir çözümlerle müvekkillerimizin yanındayız.</p>
              </article>
            </div>
          </div>
        </section>


      </main>

      <AIChatbot />

      {/* SEO Schemas */}
      
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://www.ismailcavus.av.tr' },
        { name: 'Hizmetler', url: 'https://www.ismailcavus.av.tr/hizmetler' }
      ]} />
    </>
  );
};

export default HizmetlerPage; 