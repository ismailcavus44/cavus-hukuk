import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock,
  ChevronRight,
  FileText,
  BookOpen
} from 'lucide-react';
import { supabase, cachedQuery } from '@/lib/supabase';
import { BlogYazisi } from '@/types';
import { BreadcrumbSchema, ArticleSchema } from '@/components/seo';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogMainContent from '@/components/blog/BlogMainContent';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OptimizedImage from '@/components/ui/OptimizedImage';
import AIChatbot from '@/components/ui/AIChatbot';
import AvukatBilgiKarti from '@/components/ui/AvukatBilgiKarti';

// Deploy: küçük yorum - Vercel yeniden yayın tetikleyici


// Critical preload için Head component1
// Critical preload için Head component1
const CriticalPreload = ({ blogYazisi }: { blogYazisi: BlogYazisi }) => (
  <>
    {/* Blog öne çıkan görsel preload - LCP için kritik */}
    {blogYazisi.image && (
      <link 
        rel="preload" 
        as="image" 
        href={blogYazisi.image} 
        type="image/webp"
      />
    )}
  </>
);

// ISR ayarları - 1 saatte bir güncelleme
export const revalidate = 3600;

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Meta bilgilerini oluştur
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const blogYazisi = await cachedQuery(`blog-${params.slug}`, async () => {
      const { data, error } = await supabase
        .from('blog_yazilari')
        .select('*')
        .eq('slug', params.slug)
        .single();
      
      if (error) throw error;
      return data;
    });

    if (!blogYazisi) {
      return {
        title: 'Yazı Bulunamadı | Çavuş Hukuk Bürosu',
        description: 'Aradığınız blog yazısı mevcut değil.',
      };
    }

    return {
      title: blogYazisi.meta_title || blogYazisi.title,
      description: blogYazisi.meta_description || blogYazisi.excerpt || blogYazisi.content.substring(0, 160),
      keywords: blogYazisi.categories,
      authors: [{ name: blogYazisi.author }],
      openGraph: {
        title: blogYazisi.meta_title || blogYazisi.title,
        description: blogYazisi.meta_description || blogYazisi.excerpt || blogYazisi.content.substring(0, 160),
        type: 'article',
        publishedTime: blogYazisi.date,
        authors: [blogYazisi.author],
        images: blogYazisi.image ? [blogYazisi.image] : [],
        siteName: 'Çavuş Hukuk Bürosu',
      },
      twitter: {
        card: 'summary_large_image',
        title: blogYazisi.meta_title || blogYazisi.title,
        description: blogYazisi.meta_description || blogYazisi.excerpt || blogYazisi.content.substring(0, 160),
        images: blogYazisi.image ? [blogYazisi.image] : [],
      },
      alternates: {
        canonical: `https://ismailcavus.av.tr/${params.slug}`,
      },
    };
  } catch (error) {
    console.error('Metadata oluşturulurken hata:', error);
    return {
      title: 'Yazı Bulunamadı | Çavuş Hukuk Bürosu',
      description: 'Aradığınız blog yazısı mevcut değil.',
    };
  }
}

// İçerik işleme fonksiyonu - useMemo için
const processContent = (content: string) => {
  let processed = content;
  
  // React Quill sınıflarını temizle
  processed = processed.replace(/class="[^"]*"/g, '');
  processed = processed.replace(/style="[^"]*"/g, '');
  
  // H2 ve H3 başlıklarına ID ekle (TableOfContents için)
  processed = processed.replace(
    /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g,
    (match: string, level: string, title: string) => {
      const id = title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      return `<h${level} id="${id}">${title}</h${level}>`;
    }
  );
  
  return processed;
};

// Accordion başlıklarını işleme fonksiyonu
const processAccordionTitles = (content: string) => {
  const accordionMatches = content.match(/\[accordion title="([^"]*)"\]([\s\S]*?)\[\/accordion\]/g);
  if (!accordionMatches) return [];
  
  return accordionMatches.map((match, index) => {
    const titleMatch = match.match(/\[accordion title="([^"]*)"\]/);
    if (titleMatch) {
      const title = titleMatch[1];
      const id = `accordion-${index}`;
      return {
        id,
        title,
        level: 3
      };
    }
    return null;
  }).filter((item): item is { id: string; title: string; level: number } => item !== null);
};

// Header component - React.memo ile optimize edilmiş
const BlogHeader = React.memo(({ blogYazisi }: { blogYazisi: BlogYazisi }) => (
  <header className="bg-white py-6 md:py-8">
    <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 lg:ml-0">
        <div className="text-gray-600">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: blogYazisi.title }
            ]} 
            className="text-gray-600 [&_a]:text-gray-600 [&_a:hover]:text-red-600 [&_span]:text-gray-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-red-600">
          {blogYazisi.title}
        </h1>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600">
        <div className="flex items-center space-x-2">
          <User size={15} />
          <span className="text-sm">{blogYazisi.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar size={15} />
          <span className="text-sm">{new Date(blogYazisi.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FileText size={15} />
          <Link 
            href={`/hizmetler/${blogYazisi.categories?.split(',')[0]?.trim()?.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            {blogYazisi.categories?.split(',')[0]?.trim()}
          </Link>
          {blogYazisi.categories?.split(',').length > 1 && (
            <span className="text-sm text-gray-600"> | </span>
          )}
          {blogYazisi.categories?.split(',').length > 1 && (
            <Link 
              href={`/hizmetler/${blogYazisi.categories?.split(',')[1]?.trim()?.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              {blogYazisi.categories?.split(',')[1]?.trim()}
            </Link>
          )}
        </div>
      </div>
    </div>
  </header>
));

BlogHeader.displayName = 'BlogHeader';

// Sidebar component - React.memo ile optimize edilmiş
const BlogSidebar = React.memo(({ 
  processedContent, 
  accordionTitles 
}: { 
  processedContent: string; 
  accordionTitles: Array<{ id: string; title: string; level: number }> 
}) => (
  <aside className="hidden lg:block lg:col-span-1">
    {/* Avukat Bilgi Kartı - Sticky değil */}
    <AvukatBilgiKarti />
    
    {/* Table of Contents - Sticky */}
    <div className="lg:sticky lg:top-32">
      <TableOfContents content={processedContent} accordionTitles={accordionTitles} />
    </div>
  </aside>
));

BlogSidebar.displayName = 'BlogSidebar';

// Related Posts component - React.memo ile optimize edilmiş
const RelatedPosts = React.memo(async ({ currentSlug }: { currentSlug: string }) => {
  try {
    const { data: relatedPosts } = await supabase
      .from('blog_yazilari')
      .select('*')
      .neq('slug', currentSlug)
      .order('date', { ascending: false })
      .limit(3);

    if (!relatedPosts || relatedPosts.length === 0) {
      return null;
    }

    return (
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-8 text-left flex items-center">
            <div className="w-1 h-6 bg-red-600 mr-3"></div>
            İlgili Yazılar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/${post.slug || post.id}`}
                className="border border-gray-200 p-6 hover:bg-red-50 transition-all duration-300 block"
                aria-label={`${post.title} blog yazısını oku`}
              >
                {/* Blog Görseli */}
                <div className="mb-4">
                  {post.image ? (
                    <OptimizedImage
                      src={post.image}
                      alt={post.image_alt || post.title}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-400">
                        <FileText size={32} />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Blog İçeriği */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  {/* Blog Özeti */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt ? 
                      post.excerpt.replace(/&nbsp;/g, ' ').substring(0, 120) + (post.excerpt.length > 120 ? '...' : '') :
                      post.content.substring(0, 120) + '...'
                    }
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('İlgili yazılar yüklenirken beklenmeyen hata:', error);
    return null;
  }
});

RelatedPosts.displayName = 'RelatedPosts';

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  try {
    const blogYazisi = await cachedQuery(`blog-${params.slug}`, async () => {
      const { data, error } = await supabase
        .from('blog_yazilari')
        .select('*')
        .eq('slug', params.slug)
        .single();
      
      if (error) throw error;
      return data;
    });

    if (!blogYazisi) {
      notFound();
    }

    // İçeriği işle - useMemo benzeri optimizasyon
    const processedContent = processContent(blogYazisi.content);
    
    // Accordion başlıklarını işle
    const accordionTitles = processAccordionTitles(blogYazisi.content);
    
    // Breadcrumb items
    const breadcrumbItems = [
      { name: 'Ana Sayfa', url: 'https://ismailcavus.av.tr' },
      { name: 'Blog', url: 'https://ismailcavus.av.tr/blog' },
      { name: blogYazisi.title, url: `https://ismailcavus.av.tr/${blogYazisi.slug}` }
    ];

    return (
      <>
        {/* Critical Preload - LCP optimizasyonu */}
        <CriticalPreload blogYazisi={blogYazisi} />
        

        
        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Article Schema */}
        <ArticleSchema
          title={blogYazisi.title}
          description={blogYazisi.meta_description || blogYazisi.excerpt || blogYazisi.content.substring(0, 160)}
          author={{ 
            name: blogYazisi.author,
            url: 'https://ismailcavus.av.tr/ekip'
          }}
          datePublished={new Date(blogYazisi.date).toISOString()}
          dateModified={new Date(blogYazisi.date).toISOString()}
          image={blogYazisi.image}
          url={`https://ismailcavus.av.tr/${blogYazisi.slug}`}
          keywords={blogYazisi.categories ? blogYazisi.categories.split(',').map((k: string) => k.trim()) : []}
          publisher={{
            name: 'Çavuş Hukuk Bürosu',
            logo: 'https://ismailcavus.av.tr/images/cavus-hukuk-logo.png'
          }}
        />
        
        <div className="min-h-screen bg-white">
          <BlogHeader blogYazisi={blogYazisi} />

          {/* Content */}
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:gap-[80px] lg:justify-start">
              <div className="w-full lg:w-[660px]">
                <BlogMainContent blogYazisi={blogYazisi} processedContent={processedContent} />
              </div>
              <BlogSidebar processedContent={processedContent} accordionTitles={accordionTitles} />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug={params.slug} />
        </div>
        
        {/* AI Chatbot */}
        <AIChatbot />
      </>
    );
  } catch (error) {
    console.error('Blog post sayfası yüklenirken beklenmeyen hata:', error);
    notFound();
  }
};

export default BlogPostPage; 