import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, FileText, ChevronLeft, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { BlogYazisi } from '@/types/admin';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { BlogSchema } from '@/components/seo';

// ISR ayarları - 1 saatte bir güncelleme
export const revalidate = 3600;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = parseInt(searchParams.page || '1');
  const postsPerPage = 6;
  const offset = (currentPage - 1) * postsPerPage;

  // Blog yazılarını getir
  const { count } = await supabase
    .from('blog_yazilari')
    .select('*', { count: 'exact', head: true });

  const { data: blogYazilari } = await supabase
    .from('blog_yazilari')
    .select('*')
    .order('date', { ascending: false })
    .range(offset, offset + postsPerPage - 1);

  const yazilar = blogYazilari || [];
  const totalPosts = count || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Sayfa numaralarını oluştur
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      {/* Blog ve ItemList Schema */}
      <BlogSchema
        url="https://ismailcavus.av.tr/blog"
        name="Çavuş Hukuk Bürosu Blog"
        description="Hukuki konularda güncel yazılar ve uzman görüşler. Ceza hukuku, aile hukuku, iş hukuku ve diğer hukuk alanlarında bilgilendirici içerikler."
        publisher={{
          name: "Çavuş Hukuk Bürosu",
          url: "https://ismailcavus.av.tr"
        }}
      />
      {/* ItemList Schema - Blog yazıları listesi için */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': 'https://ismailcavus.av.tr/blog#itemList',
            name: 'Blog Yazıları Listesi',
            description: 'Çavuş Hukuk Bürosu blog yazıları listesi',
            numberOfItems: totalPosts,
            itemListElement: yazilar.map((yazi, index) => ({
              '@type': 'ListItem',
              position: offset + index + 1,
              item: {
                '@type': 'BlogPosting',
                '@id': `https://ismailcavus.av.tr/blog/${yazi.slug}`,
                headline: yazi.title,
                description: yazi.excerpt || yazi.content.substring(0, 160),
                author: {
                  '@type': 'Person',
                  name: yazi.author
                },
                datePublished: yazi.date,
                dateModified: yazi.date,
                publisher: {
                  '@type': 'LegalService',
                  name: 'Çavuş Hukuk Bürosu',
                  url: 'https://ismailcavus.av.tr'
                },
                ...(yazi.image && {
                  image: {
                    '@type': 'ImageObject',
                    url: yazi.image,
                    alt: yazi.image_alt || yazi.title
                  }
                }),
                url: `https://ismailcavus.av.tr/blog/${yazi.slug}`
              }
            }))
          })
        }}
      />
      <main className="bg-white min-h-screen py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Blog' }
              ]} 
            />
          </div>
          
          <section aria-label="Blog Yazıları">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center leading-tight">Blog</h1>
          <p className="text-base text-gray-800 mb-12 text-center max-w-3xl mx-auto">
            Hukuki konularda güncel yazılarımızı ve uzman görüşlerimizi keşfedin. 
            Deneyimli avukatlarımızın kaleminden önemli bilgiler ve rehberler.
          </p>
          
          {yazilar.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {yazilar.map((yazi) => (
                  <article key={yazi.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 group">
                    {/* Blog Görseli */}
                    <div className="relative h-48 overflow-hidden">
                      {yazi.image ? (
                        <OptimizedImage
                          src={yazi.image}
                          alt={yazi.image_alt || yazi.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
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
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-1 transition-transform"
                        aria-label={`${yazi.title} blog yazısının devamını oku`}
                      >
                        Devamını Oku
                        <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Sayfalama */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  {/* Önceki Sayfa */}
                  {currentPage > 1 && (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
                      aria-label={`Önceki sayfa - Sayfa ${currentPage - 1}`}
                    >
                      <ChevronLeft size={16} className="mr-1" aria-hidden="true" />
                      Önceki
                    </Link>
                  )}

                  {/* Sayfa Numaraları */}
                  {getPageNumbers().map((page, index) => (
                    <div key={index}>
                      {page === '...' ? (
                        <span className="px-3 py-2 text-sm text-gray-500">...</span>
                      ) : (
                        <Link
                          href={page === 1 ? '/blog' : `/blog?page=${page}`}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            page === currentPage
                              ? 'bg-red-600 text-white'
                              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                          }`}
                          aria-label={`Sayfa ${page}${page === currentPage ? ' - Mevcut sayfa' : ''}`}
                          aria-current={page === currentPage ? 'page' : undefined}
                        >
                          {page}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Sonraki Sayfa */}
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
                      aria-label={`Sonraki sayfa - Sayfa ${currentPage + 1}`}
                    >
                      Sonraki
                      <ChevronRight size={16} className="ml-1" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )}

              {/* Sayfa Bilgisi */}
              <div className="text-center mt-6 text-sm text-gray-500">
                Sayfa {currentPage} / {totalPages} • Toplam {totalPosts} yazı
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz Yazı Yok</h3>
              <p className="text-gray-600">
                Blog yazıları yakında eklenecek. Güncel hukuki bilgiler ve uzman görüşleri için takipte kalın.
              </p>
            </div>
          )}
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogPage; 