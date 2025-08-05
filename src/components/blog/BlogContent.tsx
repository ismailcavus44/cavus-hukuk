'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import dynamic from 'next/dynamic';

// Hesaplama bileşenlerini dinamik olarak import et
const KidemTazminati = dynamic(() => import('../calculators/KidemTazminati'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const IhbarTazminati = dynamic(() => import('../calculators/IhbarTazminati'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const IssizlikMaasi = dynamic(() => import('../calculators/IssizlikMaasi'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const TapuHarci = dynamic(() => import('../calculators/TapuHarci'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const DogumIznini = dynamic(() => import('../calculators/DogumIznini'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const InfazHesaplama = dynamic(() => import('../calculators/InfazHesaplama'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

interface BlogContentProps {
  content: string;
  onAccordionTitles?: (titles: Array<{ id: string; title: string; level: number }>) => void;
}

// Window interface'ini genişlet
declare global {
  interface Window {
    toggleAccordion: (id: string) => void;
  }
}

const BlogContent = React.memo(({ content, onAccordionTitles }: BlogContentProps) => {
  const [processedContent, setProcessedContent] = useState(content);
  const accordionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Accordion toggle fonksiyonu - useCallback ile optimize edilmiş
  const toggleAccordion = useCallback((id: string) => {
    const content = accordionRefs.current.get(`${id}-content`);
    const trigger = document.querySelector(`[data-accordion-id="${id}"]`) as HTMLElement;
    const icon = trigger?.querySelector('.accordion-icon') as HTMLElement;
    
    if (content && trigger && icon) {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      // Toggle visibility
      if (content.style.display === 'none') {
        content.style.display = 'block';
        trigger.setAttribute('aria-expanded', 'true');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.display = 'none';
        trigger.setAttribute('aria-expanded', 'false');
        icon.style.transform = 'rotate(0deg)';
      }
    }
  }, []);

  // Global window objesine toggleAccordion fonksiyonunu ekle
  useEffect(() => {
    window.toggleAccordion = toggleAccordion;
  }, [toggleAccordion]);

  // Hesaplama araçlarını DOM'da doğru yere yerleştir
  useEffect(() => {
    // Kıdem Tazminatı Hesaplama Aracı
    const kidemCalculatorPlaceholder = document.getElementById('calculator-kidem-tazminati');
    if (kidemCalculatorPlaceholder && (processedContent.includes('[calculator type="kidem-tazminati"') || content.includes('[calculator type="kidem-tazminati"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <KidemTazminati 
          title="Kıdem Tazminatı Hesaplama Aracı"
          description="Çalışma sürenize ve maaşınıza göre kıdem tazminatınızı hesaplayın."
        />
      );
      
      kidemCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, kidemCalculatorPlaceholder);
    }

    // İhbar Tazminatı Hesaplama Aracı
    const ihbarCalculatorPlaceholder = document.getElementById('calculator-ihbar-tazminati');
    if (ihbarCalculatorPlaceholder && (processedContent.includes('[calculator type="ihbar-tazminati"') || content.includes('[calculator type="ihbar-tazminati"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <IhbarTazminati 
          title="İhbar Tazminatı Hesaplama Aracı"
          description="İş sözleşmesi feshedildiğinde ödenmesi gereken ihbar tazminatını hesaplayın."
        />
      );
      
      ihbarCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, ihbarCalculatorPlaceholder);
    }

    // İşsizlik Maaşı Hesaplama Aracı
    const issizlikCalculatorPlaceholder = document.getElementById('calculator-issizlik-maasi');
    if (issizlikCalculatorPlaceholder && (processedContent.includes('[calculator type="issizlik-maasi"') || content.includes('[calculator type="issizlik-maasi"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <IssizlikMaasi 
          title="İşsizlik Maaşı Hesaplama Aracı"
          description="İşsizlik maaşı tutarını ve süresini hesaplayın."
        />
      );
      
      issizlikCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, issizlikCalculatorPlaceholder);
    }

    // Tapu Harcı Hesaplama Aracı
    const tapuCalculatorPlaceholder = document.getElementById('calculator-tapu-harci');
    if (tapuCalculatorPlaceholder && (processedContent.includes('[calculator type="tapu-harci"') || content.includes('[calculator type="tapu-harci"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <TapuHarci 
          title="Tapu Harcı Hesaplama Aracı"
          description="Tapu işlemlerinde ödenmesi gereken harç ve vergileri hesaplayın."
        />
      );
      
      tapuCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, tapuCalculatorPlaceholder);
    }

    // Doğum İzni Hesaplama Aracı
    const dogumIzniniCalculatorPlaceholder = document.getElementById('calculator-dogum-iznini');
    if (dogumIzniniCalculatorPlaceholder && (processedContent.includes('[calculator type="dogum-iznini"') || content.includes('[calculator type="dogum-iznini"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <DogumIznini 
          title="Doğum İzni Hesaplama Aracı"
          description="Doğum izni süresini ve tutarını hesaplayın."
        />
      );
      
      dogumIzniniCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, dogumIzniniCalculatorPlaceholder);
    }

    // İnfaz Hesaplama Aracı
    const infazCalculatorPlaceholder = document.getElementById('calculator-infaz-hesaplama');
    if (infazCalculatorPlaceholder && (processedContent.includes('[calculator type="infaz-hesaplama"') || content.includes('[calculator type="infaz-hesaplama"'))) {
      const calculatorContainer = document.createElement('div');
      calculatorContainer.className = 'calculator-container my-6';
      
      const root = createRoot(calculatorContainer);
      root.render(
        <InfazHesaplama 
          title="İnfaz Hesaplama Aracı"
          description="Ceza infaz süresini ve tahliye tarihini hesaplayın."
        />
      );
      
      infazCalculatorPlaceholder.parentNode?.replaceChild(calculatorContainer, infazCalculatorPlaceholder);
    }
  }, [processedContent, content]);

  // İçerik işleme - useMemo ile optimize edilmiş
  const processedContentMemo = useMemo(() => {
    let processed = content;
    
    // Tek info shortcode'u işle
    processed = processed.replace(
      /\[info title="([^"]*)"\](.*?)\[\/info\]/g,
      (match: string, title: string, content: string) => {
        return `<div class="info-box" data-title="${title}">${content}</div>`;
      }
    );
    
    // Hesaplama araçları shortcode'ları - benzersiz ID ile değiştir
    processed = processed.replace(
      /\[calculator type="kidem-tazminati" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-kidem-tazminati" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );

    // İhbar Tazminatı Hesaplama Aracı
    processed = processed.replace(
      /\[calculator type="ihbar-tazminati" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-ihbar-tazminati" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );

    // İşsizlik Maaşı Hesaplama Aracı
    processed = processed.replace(
      /\[calculator type="issizlik-maasi" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-issizlik-maasi" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );

    // Tapu Harcı Hesaplama Aracı
    processed = processed.replace(
      /\[calculator type="tapu-harci" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-tapu-harci" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );

    // Doğum İzni Hesaplama Aracı
    processed = processed.replace(
      /\[calculator type="dogum-iznini" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-dogum-iznini" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );

    // İnfaz Hesaplama Aracı
    processed = processed.replace(
      /\[calculator type="infaz-hesaplama" title="([^"]*)" description="([^"]*)"\]/g,
      (match: string, title: string, description: string) => {
        return `<div id="calculator-infaz-hesaplama" class="calculator-placeholder" data-title="${title}" data-description="${description}"></div>`;
      }
    );
    
    // Accordion shortcode'larını kaldır (React component olarak render edilecek)
    processed = processed.replace(
      /\[accordion title="([^"]*)"\]([\s\S]*?)\[\/accordion\]/g,
      ''
    );
    
    // React Quill sınıflarını temizle (info-box hariç)
    processed = processed.replace(/class="(?!info-box)[^"]*"/g, '');
    processed = processed.replace(/style="[^"]*"/g, '');
    
    // H2 başlıklarına ID ekle ve stillendir
    processed = processed.replace(
      /<h2[^>]*>(.*?)<\/h2>/g,
      (match: string, title: string) => {
        // HTML entity'leri temizle
        const cleanTitle = title.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
        const id = cleanTitle.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
        return `<h2 id="${id}" class="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-40 text-left">${cleanTitle}</h2>`;
      }
    );
    
    // H3 başlıklarına ID ekle ve stillendir
    processed = processed.replace(
      /<h3[^>]*>(.*?)<\/h3>/g,
      (match: string, title: string) => {
        // HTML entity'leri temizle
        const cleanTitle = title.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
        const id = cleanTitle.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
        return `<h3 id="${id}" class="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-40 text-left">${cleanTitle}</h3>`;
      }
    );
    
    // Paragrafları stillendir
    processed = processed.replace(
      /<p[^>]*>(.*?)<\/p>/g,
      (match: string, content: string) => {
        // Boş paragrafları temizle (<br> veya sadece boşluk içeren)
        const cleanContent = content.trim();
        if (cleanContent === '' || cleanContent === '<br>' || cleanContent === '&nbsp;') {
          return ''; // Boş paragrafı kaldır
        }
        return `<p class="text-base text-gray-700 leading-relaxed mb-4">${content}</p>`;
      }
    );
    
    // Listeleri stillendir
    processed = processed.replace(
      /<ul[^>]*>(.*?)<\/ul>/g,
      (match: string, content: string) => {
        return `<ul class="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4 space-y-2">${content}</ul>`;
      }
    );
    
    processed = processed.replace(
      /<ol[^>]*>(.*?)<\/ol>/g,
      (match: string, content: string) => {
        return `<ol class="list-decimal list-inside text-base text-gray-700 leading-relaxed mb-4 space-y-2">${content}</ol>`;
      }
    );
    
    // List item'ları stillendir
    processed = processed.replace(
      /<li[^>]*>(.*?)<\/li>/g,
      (match: string, content: string) => {
        return `<li class="text-base text-gray-700 leading-relaxed">${content}</li>`;
      }
    );
    
    // Linkleri stillendir
    processed = processed.replace(
      /<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g,
      (match: string, href: string, content: string) => {
        // Nofollow kontrolü - URL'de #nofollow var mı
        const hasNofollow = href.includes('#nofollow');
        
        if (hasNofollow) {
          // #nofollow'u URL'den çıkar
          const cleanHref = href.replace('#nofollow', '');
          return `<a href="${cleanHref}" class="text-red-600 hover:text-red-700 underline transition-colors" target="_blank" rel="noopener noreferrer nofollow">${content}</a>`;
        } else {
          return `<a href="${href}" class="text-red-600 hover:text-red-700 underline transition-colors" target="_blank" rel="noopener noreferrer">${content}</a>`;
        }
      }
    );
    
    // Strong tag'lerini stillendir
    processed = processed.replace(
      /<strong[^>]*>(.*?)<\/strong>/g,
      (match: string, content: string) => {
        return `<strong class="font-semibold text-gray-900">${content}</strong>`;
      }
    );
    
    // Em tag'lerini stillendir
    processed = processed.replace(
      /<em[^>]*>(.*?)<\/em>/g,
      (match: string, content: string) => {
        return `<em class="italic text-gray-800">${content}</em>`;
      }
    );
    
    return processed;
  }, [content]);

  // Processed content'i state'e set et
  useEffect(() => {
    setProcessedContent(processedContentMemo);
  }, [processedContentMemo]);

  // Info box'ları render et - useMemo ile optimize edilmiş
  const renderInfoBoxes = useCallback((htmlContent: string) => {
    const infoRegex = /<div class="info-box" data-title="([^"]*)">(.*?)<\/div>/g;
    let result = htmlContent;
    let match;
    
    while ((match = infoRegex.exec(htmlContent)) !== null) {
      const [fullMatch, title, content] = match;
      
      const infoBox = `
        <div class="info-box bg-blue-50/80 backdrop-blur-sm border border-blue-200/60 p-6 my-8">
          ${title ? `<h4 class="font-semibold text-gray-900 mb-3 text-lg">${title}</h4>` : ''}
          <div class="text-gray-900 leading-relaxed [&_a]:text-blue-600 [&_a:hover]:text-blue-700">${content}</div>
        </div>
      `;
      result = result.replace(fullMatch, infoBox);
    }
    
    return result;
  }, []);

  // HTML sanitize fonksiyonu - useCallback ile optimize edilmiş
  const sanitizeHtml = useCallback((html: string): string => {
    // XSS koruması için tehlikeli tag'leri kaldır
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
  }, []);



  // Accordion'ları render et - useMemo ile optimize edilmiş
  const renderAccordions = useCallback((htmlContent: string) => {
    // Accordion'lar zaten ilk aşamada render edildi, bu fonksiyon artık gerekli değil
    return htmlContent;
  }, []);

  // Accordion matches'i hesapla - useMemo ile optimize edilmiş
  const accordionMatches = useMemo(() => {
    return content.match(/\[accordion title="([^"]*)"\]([\s\S]*?)\[\/accordion\]/g);
  }, [content]);

  // Accordion başlıklarını parent'a gönder
  useEffect(() => {
    if (onAccordionTitles && accordionMatches) {
      const accordionTitles = accordionMatches.map((match, index) => {
        const titleMatch = match.match(/\[accordion title="([^"]*)"\]/);
        if (titleMatch) {
          const title = titleMatch[1];
          const id = `accordion-${index}`;
          return {
            id,
            title,
            level: 3 // Accordion'lar H3 seviyesinde
          };
        }
        return null;
      }).filter((item): item is { id: string; title: string; level: number } => item !== null);
      
      onAccordionTitles(accordionTitles);
    }
  }, [accordionMatches, onAccordionTitles]);

  return (
    <div className="text-sm text-gray-700 leading-relaxed">
      <div 
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(renderInfoBoxes(processedContent)) }}
        className="prose max-w-none text-justify prose-h2:text-[26px] prose-h3:text-[22px] prose-h2:font-semibold prose-h3:font-semibold prose-p:font-light prose-p:leading-[25px]"
        suppressHydrationWarning={true}
      />
      

      
      {/* Accordion'ları manuel render et */}
      {accordionMatches && (
        <div className="mb-6">
          {accordionMatches.map((match, index) => {
            const titleMatch = match.match(/\[accordion title="([^"]*)"\]/);
            const contentMatch = match.match(/\[accordion title="[^"]*"\]([\s\S]*?)\[\/accordion\]/);
            
            if (titleMatch && contentMatch) {
              const title = titleMatch[1];
              const accordionContent = contentMatch[1];
              const id = `accordion-${index}`;
              
              return (
                <div key={id} id={id} className="accordion-wrapper mb-4 scroll-mt-40">
                  <div className="accordion-item border border-gray-200 overflow-hidden group">
                    <button 
                      className="accordion-trigger w-full px-4 py-4 text-left bg-white hover:bg-gray-50 transition-all duration-200 flex items-center justify-between focus:outline-none"
                      data-accordion-id={id}
                      aria-expanded="false"
                      aria-controls={`${id}-content`}
                      aria-labelledby={`${id}-title`}
                      onClick={() => toggleAccordion(id)}
                    >
                      <h3 id={`${id}-title`} className="font-medium text-gray-900 text-base scroll-mt-40 group-hover:text-red-600 transition-colors duration-200">{title}</h3>
                      <div className="accordion-icon text-gray-400 group-hover:text-red-500 transition-all duration-200 flex items-center justify-center w-6 h-6" aria-hidden="true">
                        <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div 
                      ref={(el) => {
                        if (el) accordionRefs.current.set(`${id}-content`, el);
                      }}
                      id={`${id}-content`}
                      role="region"
                      aria-labelledby={`${id}-title`}
                      className="accordion-content px-4 py-4 border-t border-gray-100 bg-white"
                      style={{ display: 'none' }}
                    >
                      <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: sanitizeHtml(accordionContent) }} suppressHydrationWarning={true} />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
});

BlogContent.displayName = 'BlogContent';

export default BlogContent; 