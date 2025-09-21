'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsProps {
  content: string;
  accordionTitles?: Array<{ id: string; title: string; level: number }>;
}

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const TableOfContents = React.memo(({ content, accordionTitles = [] }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const tocItems = useMemo(() => {
    // İşlenmiş içerikten başlıkları çıkar
    const headings: TocItem[] = [];
    
    // H2 ve H3 başlıklarına bul (hem ID'li hem ID'siz)
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g;
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      let title = match[2].replace(/<[^>]*>/g, ''); // HTML taglarını temizle
      // HTML entity'leri temizle
      title = title.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
      
      // ID varsa onu kullan, yoksa başlıktan oluştur
      const idMatch = match[0].match(/id="([^"]*)"/);
      const id = idMatch ? idMatch[1] : title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      headings.push({
        id,
        title,
        level
      });
    }
    
    // Accordion başlıklarını ekle
    const allHeadings = [...headings, ...accordionTitles];
    
    return allHeadings;
  }, [content, accordionTitles]);

  // Toggle fonksiyonu - useCallback ile optimize edilmiş
  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Smooth scroll fonksiyonu - useCallback ile optimize edilmiş
  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // scrollIntoView center ile kullan
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    } else {
      // Element bulunamadıysa, accordion trigger'ını bul
      if (id.startsWith('accordion-')) {
        const trigger = document.querySelector(`[data-accordion-id="${id}"]`) as HTMLElement;
        if (trigger) {
          trigger.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    }
  }, []);

  if (tocItems.length === 0) {
    return (
      <div className="border border-gray-200 min-w-[280px] lg:min-w-[280px] w-[375px]">
        <button
          onClick={handleToggle}
          className="w-full p-4 lg:p-6 flex items-center justify-between text-base font-medium text-gray-900"
          aria-expanded={isOpen}
          aria-controls="toc-content"
        >
          <span className="text-base font-medium text-gray-900">Makale İçeriği</span>
          {isOpen ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
        </button>
        {isOpen && (
          <div id="toc-content" className="px-4 lg:px-6 pb-4 lg:pb-6">
            <div className="text-gray-500 text-sm">
              Bu yazıda başlık bulunamadı
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="border border-gray-200 w-full lg:min-w-[280px] lg:w-[375px]">
    <div className="border border-gray-200 w-full lg:min-w-[280px] lg:w-[375px]">
              <button
          onClick={handleToggle}
          className="w-full p-4 lg:p-6 flex items-center justify-between text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors"
          aria-expanded={isOpen}
          aria-controls="toc-content"
        >
          <span className="text-base font-medium text-gray-900">Makale İçeriği</span>
          {isOpen ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
        </button>
      
      {isOpen && (
        <nav id="toc-content" className="px-4 lg:px-6 pb-4 lg:pb-6" aria-label="İçindekiler">
          <div className="space-y-1 lg:space-y-1.5">
            {tocItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left text-gray-600 hover:text-red-600 transition-colors text-sm py-1 lg:py-1.5 px-2 lg:px-3 rounded hover:bg-gray-100 ${
                  item.level === 3 ? 'pl-4 lg:pl-6' : ''
                }`}
              >
                {index + 1}. {item.title}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
});

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents; 