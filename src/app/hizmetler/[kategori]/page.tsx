import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, ChevronRight, FileText, Calculator } from 'lucide-react';
import { supabase, cachedQuery } from '@/lib/supabase';
import { Kategori, BlogYazisi } from '@/types/admin';
import Breadcrumb from '@/components/ui/Breadcrumb';

// ISR ayarları - 24 saatte bir güncelleme (kategoriler daha az değişir)
export const revalidate = 86400;

interface KategoriPageProps {
  params: {
    kategori: string;
  };
}

const KategoriPage = async ({ params }: KategoriPageProps) => {
  // Kategori bilgilerini getir (cache ile)
  const kategoriData = await cachedQuery(`kategori-${params.kategori}`, async () => {
    const { data, error } = await supabase
      .from('kategoriler')
      .select('*')
      .eq('slug', params.kategori)
      .single();
    
    if (error) throw error;
    return data;
  });

  if (!kategoriData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kategori Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız kategori mevcut değil.</p>
        </div>
      </div>
    );
  }

  // Bu kategoriye ait blog yazılarını getir (cache ile)
  const blogYazilari = await cachedQuery(`blog-kategori-${params.kategori}`, async () => {
    const { data, error } = await supabase
      .from('blog_yazilari')
      .select('*')
      .ilike('categories', `%${kategoriData.title}%`)
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data;
  });

  const kategori = kategoriData;
  const yazilar = blogYazilari || [];

  // Hesaplama araçları kategorisi için özel tasarım
  const isHesaplamaAraclari = kategori.title === 'Hesaplama Araçları';
  
  // Hesaplama araçları için sayfalama - 3x4 = 12 kart
  const itemsPerPage = isHesaplamaAraclari ? 12 : yazilar.length;
  const currentYazilar = isHesaplamaAraclari ? yazilar.slice(0, itemsPerPage) : yazilar;

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 relative z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: 'Hizmet Alanlarımız', href: '/hizmetler' },
              { label: kategori.title }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className={`relative py-16 ${
        isHesaplamaAraclari 
          ? 'bg-white' 
          : 'bg-gradient-to-br from-red-600 to-red-700 text-white'
      }`}>
        {!isHesaplamaAraclari && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        )}
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHesaplamaAraclari 
                ? 'text-red-600' 
                : 'text-white'
            }`}>
              {kategori.title}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isHesaplamaAraclari 
                ? 'text-gray-800' 
                : 'text-white/90'
            }`}>
              {kategori.description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Yazıları Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {!isHesaplamaAraclari && (
          <div className="text-center mb-12">
          </div>
          )}
          
          {currentYazilar.length > 0 ? (
            <div className={`grid gap-6 ${
              isHesaplamaAraclari 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {currentYazilar.map((yazi) => (
                isHesaplamaAraclari ? (
                  // Modern hesaplama araçları kart tasarımı
                  <Link key={yazi.id} href={`/${yazi.slug || yazi.id}`} className="group">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 p-6 h-full flex flex-col items-center justify-center text-center min-h-[280px]">
                      {/* İkon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300 mb-6 shadow-sm">
                        <Calculator size={28} className="text-red-600" />
                      </div>
                      
                      {/* Başlık */}
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-4 line-clamp-2 leading-tight">
                        {yazi.title}
                      </h3>
                      
                      {/* Açıklama */}
                      {yazi.excerpt && (
                        <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                          {yazi.excerpt.replace(/<[^>]*>/g, '').substring(0, 80)}...
                        </p>
                      )}
                      
                      {/* Buton */}
                      <div className="mt-auto w-full">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-105">
                          Hesapla
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  // Normal blog yazıları için mevcut tasarım
                <article key={yazi.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Blog Görseli */}
                  <div className="relative h-48 overflow-hidden">
                    {yazi.image ? (
                      <img 
                        src={yazi.image} 
                        alt={yazi.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-gray-400">
                          <FileText size={32} />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                      {yazi.categories && yazi.categories.split(',').map((category: string, index: number) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                          {category.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Blog İçeriği */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {yazi.title}
                    </h3>
                    
                    {/* Blog Özeti */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {yazi.excerpt ? 
                        yazi.excerpt.replace(/&nbsp;/g, ' ').substring(0, 100) + (yazi.excerpt.length > 100 ? '...' : '') :
                        yazi.content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').substring(0, 100) + '...'
                      }
                    </p>
                    
                    {/* Meta Bilgileri */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <User size={14} className="mr-1" />
                          {yazi.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(yazi.date).toLocaleDateString('tr-TR')}
                        </span>
                    </div>
                    
                    {/* Okuma Butonu */}
                    <Link 
                      href={`/${yazi.slug || yazi.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-1 transition-transform mt-4"
                      aria-label={`${yazi.title} blog yazısının devamını oku`}
                    >
                      Devamını Oku
                      <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Bu Kategoride Henüz Yazı Yok</h3>
              <p className="text-gray-600">
                Bu kategoride henüz yazı bulunmuyor. Yakında güncel içerikler eklenecek.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default KategoriPage; 