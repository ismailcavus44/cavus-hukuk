import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock,
  ChevronRight,
  FileText
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogMainContent from '@/components/blog/BlogMainContent';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { BlogYazisi } from '@/types';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo';
import AIChatbot from '@/components/ui/AIChatbot';

// Critical preload için Head component
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
    const { data: blogYazisi, error } = await supabase
      .from('blog_yazilari')
      .select('*')
      .eq('slug', params.slug)
      .single();

    if (error) {
      console.error('Blog yazısı metadata yüklenirken hata:', error);
      return {
        title: 'Yazı Bulunamadı | Çavuş Hukuk Bürosu',
        description: 'Aradığınız blog yazısı mevcut değil.',
      };
    }

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

// Error component - React.memo ile optimize edilmiş
const ErrorComponent = React.memo(() => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Yazısı Bulunamadı</h1>
      <p className="text-gray-600 mb-6">Aradığınız blog yazısı mevcut değil.</p>
      <Link 
        href="/blog"
        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
        aria-label="Blog ana sayfasına dön"
      >
        <ArrowLeft size={16} className="mr-2" aria-hidden="true" />
        Blog'a Dön
      </Link>
    </div>
  </div>
));

ErrorComponent.displayName = 'ErrorComponent';

// Header component - React.memo ile optimize edilmiş
const BlogHeader = React.memo(({ blogYazisi }: { blogYazisi: BlogYazisi }) => (
  <header className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6 md:py-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="text-white/80">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: blogYazisi.title }
            ]} 
            className="text-white/80 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white/90"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          {blogYazisi.title}
        </h1>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
        <div className="flex items-center space-x-2">
          <User size={16} />
          <span>{blogYazisi.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar size={16} />
          <span>{new Date(blogYazisi.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
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
    <div className="lg:sticky lg:top-32">
      {/* Table of Contents */}
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            İlgili Yazılar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/${post.slug || post.id}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 group"
                aria-label={`${post.title} blog yazısını oku`}
              >
                {/* Blog Görseli */}
                <div className="relative h-48 overflow-hidden">
                  {post.image ? (
                    <OptimizedImage
                      src={post.image}
                      alt={post.image_alt || post.title}
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
                    {post.categories.split(',').map((category: string, index: number) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                        {category.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Blog İçeriği */}
                <article className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  {/* Blog Özeti */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt ? 
                      post.excerpt.replace(/&nbsp;/g, ' ').substring(0, 120) + (post.excerpt.length > 120 ? '...' : '') :
                      post.content.substring(0, 120) + '...'
                    }
                  </p>
                  
                  {/* Alt Çizgi */}
                  <div className="w-12 h-0.5 bg-red-500 mx-auto"></div>
                </article>
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
    const { data: blogYazisi, error } = await supabase
      .from('blog_yazilari')
      .select('*')
      .eq('slug', params.slug)
      .single();

    if (error) {
      console.error('Blog yazısı yüklenirken hata:', error);
      return <ErrorComponent />;
    }

    if (!blogYazisi) {
      return <ErrorComponent />;
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
        
        {/* Article Schema */}
        <ArticleSchema
          title={blogYazisi.title}
          description={blogYazisi.excerpt || blogYazisi.content.substring(0, 160)}
          url={`https://ismailcavus.av.tr/${blogYazisi.slug}`}
          image={blogYazisi.image}
          author={{ name: blogYazisi.author }}
          publisher={{ name: 'Çavuş Hukuk Bürosu' }}
          datePublished={blogYazisi.date}
          dateModified={blogYazisi.date}
          articleSection={blogYazisi.categories}
          keywords={blogYazisi.categories ? blogYazisi.categories.split(',').map((cat: string) => cat.trim()) : []}
          wordCount={blogYazisi.content.split(' ').length}
          readingTime={5}
        />
        
        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        <div className="min-h-screen bg-white">
          <BlogHeader blogYazisi={blogYazisi} />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
              <div className="lg:col-span-4">
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
    return <ErrorComponent />;
  }
};

export default BlogPostPage; 