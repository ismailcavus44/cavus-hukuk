'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  author: string;
  date: string;
  categories: string;
}

const BlogGrid = React.memo(() => {
  const [yazilar, setYazilar] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomepageBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_yazilari')
          .select('*')
          .eq('show_on_homepage', true)
          .order('date', { ascending: false })
          .limit(9);

        if (error) {
          console.error('Blog yazıları yüklenirken hata:', error);
          return;
        }

        setYazilar(data || []);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageBlogs();
  }, []);

  // Loading skeleton'ı useMemo ile optimize et
  const loadingSkeleton = useMemo(() => (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  ), []);

  // Empty state'i useMemo ile optimize et
  const emptyState = useMemo(() => (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">
        Henüz anasayfada gösterilecek blog yazısı bulunmuyor.
      </p>
      <p className="text-gray-400 text-sm mt-2">
        Admin panelinden blog yazılarını "Anasayfada Göster" olarak işaretleyebilirsiniz.
      </p>
    </div>
  ), []);

  if (loading) {
    return loadingSkeleton;
  }

  if (yazilar.length === 0) {
    return emptyState;
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {yazilar.map((yazi) => (
        <Link 
          key={yazi.id} 
          href={`/${yazi.slug || yazi.id}`}
          className="block border border-gray-200 hover:bg-red-50 transition-all duration-300 group cursor-pointer"
          aria-label={`${yazi.title} blog yazısını oku`}
        >
          {/* Blog Görseli */}
          <div className="relative h-48 overflow-hidden p-4">
            {yazi.image ? (
              <OptimizedImage
                src={yazi.image} 
                alt={yazi.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400">
                  <Calendar size={32} />
                </div>
              </div>
            )}


          </div>
          
          {/* Blog İçeriği */}
          <article className="pt-2 px-4 pb-4">
            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {yazi.title}
            </h4>
            
            {/* Blog Özeti */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {yazi.excerpt ? 
                yazi.excerpt.replace(/&nbsp;/g, ' ').substring(0, 120) + (yazi.excerpt.length > 120 ? '...' : '') :
                'Blog yazısının özeti burada görünecek...'
              }
            </p>
            
            {/* Alt Çizgi */}
            <div className="w-12 h-0.5 bg-red-500"></div>
          </article>
        </Link>
      ))}
    </div>
  );
});

BlogGrid.displayName = 'BlogGrid';

export default BlogGrid; 