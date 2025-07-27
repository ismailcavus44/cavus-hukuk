'use client';

import React from 'react';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { BlogYazisi } from '@/types';

interface BlogMainContentProps {
  blogYazisi: BlogYazisi;
  processedContent: string;
}

const BlogMainContent = React.memo(({ blogYazisi, processedContent }: BlogMainContentProps) => {
  const [accordionTitles, setAccordionTitles] = React.useState<Array<{ id: string; title: string; level: number }>>([]);

  const handleAccordionTitles = React.useCallback((titles: Array<{ id: string; title: string; level: number }>) => {
    setAccordionTitles(titles);
  }, []);

  return (
    <div>
      <article 
        className="prose max-w-none"
        itemScope 
        itemType="https://schema.org/Article"
      >
        {/* Öne Çıkan Görsel - LCP optimizasyonu için priority */}
        {blogYazisi.image && (
          <div className="mb-8">
            <OptimizedImage
              src={blogYazisi.image}
              alt={blogYazisi.image_alt || blogYazisi.title}
              width={1200}
              height={600}
              priority={true}
              className="w-full h-auto rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
            />
          </div>
        )}
        
        {/* Mobil İçindekiler */}
        <div className="lg:hidden mb-6">
          <TableOfContents content={processedContent} accordionTitles={accordionTitles} />
        </div>
        
        <h1 itemProp="headline" className="sr-only">{blogYazisi.title}</h1>
        <meta itemProp="author" content={blogYazisi.author} />
        <meta itemProp="datePublished" content={blogYazisi.date} />
        <meta itemProp="dateModified" content={blogYazisi.date} />
        <meta itemProp="publisher" content="Çavuş Hukuk Bürosu" />
        
        <BlogContent content={blogYazisi.content} onAccordionTitles={handleAccordionTitles} />
      </article>
    </div>
  );
});

BlogMainContent.displayName = 'BlogMainContent';

export default BlogMainContent; 