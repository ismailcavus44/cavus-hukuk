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
  // State kullanmadan server/client tutarlılığı: tüm dönüşümler memo içinde
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
    if (kidemCalculatorPlaceholder && content.includes('[calculator type="kidem-tazminati"')) {
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
    if (ihbarCalculatorPlaceholder && content.includes('[calculator type="ihbar-tazminati"')) {
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
    if (issizlikCalculatorPlaceholder && content.includes('[calculator type="issizlik-maasi"')) {
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
    if (tapuCalculatorPlaceholder && content.includes('[calculator type="tapu-harci"')) {
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
    if (dogumIzniniCalculatorPlaceholder && content.includes('[calculator type="dogum-iznini"')) {
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
    if (infazCalculatorPlaceholder && content.includes('[calculator type="infaz-hesaplama"')) {
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
  }, [content]);

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
    let tempProcessed = processed;
    while (true) {
      const startIndex = tempProcessed.indexOf('[accordion title="');
      if (startIndex === -1) break;
      
      const titleStart = startIndex + '[accordion title="'.length;
      const titleEnd = tempProcessed.indexOf('"', titleStart);
      if (titleEnd === -1) break;
      
      // İçeriği bul
      const contentStart = tempProcessed.indexOf(']', titleEnd) + 1;
      const endIndex = tempProcessed.indexOf('[/accordion]', contentStart);
      if (endIndex === -1) break;
      
      // Accordion'ı kaldır
      tempProcessed = tempProcessed.substring(0, startIndex) + tempProcessed.substring(endIndex + '[/accordion]'.length);
    }
    processed = tempProcessed;
    
    // React Quill sınıflarını temizle (info-box hariç)
    processed = processed.replace(/class="(?!info-box)[^"]*"/g, '');
    processed = processed.replace(/style="[^"]*"/g, '');
    
    // Quill kaynaklı span sarmalarını UNWRAP et (paragrafa dönüştürme)
    processed = processed.replace(/<span\b[^>]*>([\s\S]*?)<\/span>/gi, '$1');
    // Li içinde oluşan <p> etiketlerini kaldır (madde içi font/spacing sapmasını önler)
    processed = processed.replace(/<li\b[^>]*>[\s\S]*?<\/li>/gi, (m: string) => m.replace(/<\/?p[^>]*>/gi, ''));
    // Boş paragrafları temizle
    processed = processed.replace(/<p[^>]*>\s*<\/p>/gi, '');
    
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
    
    // Paragrafları normalize et: yalnızca boş olanları kaldır (stil sınıfı enjekte etmiyoruz)
    processed = processed.replace(
      /<p[^>]*>([\s\S]*?)<\/p>/gi,
      (_full: string, inner: string) => {
        const clean = inner.trim();
        if (clean === '' || clean === '<br>' || clean === '&nbsp;') return '';
        return `<p>${inner}</p>`;
      }
    );
    
    // Listeleri ve maddeleri çıplak bırak (tipografi global CSS ile yönetilecek)
    processed = processed.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_m: string, inner: string) => `<ul>${inner}</ul>`);
    processed = processed.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_m: string, inner: string) => `<ol>${inner}</ol>`);
    processed = processed.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_m: string, inner: string) => `<li>${inner}</li>`);
    
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

  // HTML sanitize fonksiyonu - useCallback ile optimize edilmiş
  const sanitizeHtml = useCallback((html: string): string => {
    // XSS koruması için tehlikeli tag'leri kaldır
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
  }, []);

  // Son HTML: tüm dönüştürmeler + sanitize
  const finalHtml = useMemo(() => {
    // Fonksiyon referansları aşağıda tanımlı; burada closure içinde kullanmak yerine
    // doğrudan processedContentMemo üzerine sıralı dönüşüm uygulayacağız.
    let html = processedContentMemo;
    // 1) Dilekçe
    html = html.replace(/\[dilekce title="([^"]*)"\]([\s\S]*?)\[\/dilekce\]/g, (_m, t, b) => {
      const title = String(t || '').trim();
      const raw = String(b || '');
      const sig = (raw.match(/\[imza\]([\s\S]*?)\[\/imza\]/i) || [,''])[1].trim();
      const body = raw.replace(/\[imza\][\s\S]*?\[\/imza\]/i, '');
      return `
        <section class="rounded-lg border border-amber-200 bg-amber-50/70 p-5 my-6 shadow-sm">
          ${title ? `<header class="mb-4"><h4 class="text-amber-900 font-semibold text-xl text-center">${title}</h4></header>` : ''}
          <div class="blog-content">${body}</div>
          ${sig ? `<div class="mt-6 pt-3 border-t border-amber-200 text-right text-amber-900">${sig}</div>` : ''}
        </section>`;
    });
    // 2) Info box
    html = html.replace(/\[info title="([^"]*)"\](.*?)\[\/info\]/g, (_m, t, b) => {
      const title = String(t || '');
      return `
        <div class="info-box border border-gray-200 rounded-none p-5 my-6 bg-gray-50">
          ${title ? `<div class="text-base font-semibold text-gray-900 mb-2">${title}</div>` : ''}
          <div class="text-gray-800 leading-relaxed [&_a]:text-gray-900 [&_a]:underline [&_a]:decoration-gray-300 [&_a:hover]:text-red-700 [&_a:hover]:decoration-red-400">
            ${b}
          </div>
        </div>`;
    });
    // 2b) Eski/ön işlenmiş biçim: <div class="info-box" data-title="...">...</div> -> zengin görünüme çevir
    html = html.replace(/<div class="info-box" data-title="([^"]*)">([\s\S]*?)<\/div>/g, (_m, t, b) => {
      const title = String(t || '');
      return `
        <div class=\"info-box border border-gray-200 rounded-none p-5 my-6 bg-gray-50\">
          ${title ? `<div class=\"text-base font-semibold text-gray-900 mb-2\">${title}<\/div>` : ''}
          <div class=\"text-gray-800 leading-relaxed [&_a]:text-gray-900 [&_a]:underline [&_a]:decoration-gray-300 [&_a:hover]:text-red-700 [&_a:hover]:decoration-red-400\">${b}<\/div>
        <\/div>`;
    });
    // 3) Span ve p normalizasyonu (regex tabanlı)
    // Inline style'ları temizle
    html = html.replace(/ style="[^"]*"/gi, '');
    // <font> etiketlerini kaldır
    html = html.replace(/<\/?font[^>]*>/gi, '');
    // class attribute'larını KORU (özellikle dilekçe ve link sınıfları için)
    // span'ları unwrap et (p'ye çevirmeden)
    html = html.replace(/<span\b[^>]*>([\s\S]*?)<\/span>/gi, '$1');
    // li içindeki <p> sarmalamasını kaldır
    html = html.replace(/<li([^>]*)>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi, '<li$1>$2</li>');
    // Boş paragrafları kaldır
    html = html.replace(/<p[^>]*>\s*<\/p>/gi, '');
    // Özel birleştirme: <p><strong>..</strong></p><p>, ..</p> -> tek paragraf
    html = html.replace(/<p>\s*(<strong>[\s\S]*?<\/strong>)\s*<\/p>\s*<p>\s*,\s*([\s\S]*?)<\/p>/gi, '<p>$1, $2<\/p>');
    // Özel birleştirme: </p><a ...>link<\/a><p>devam<\/p> -> tek paragraf
    html = html.replace(/<p>([\s\S]*?)<\/p>\s*<a([^>]*)>([\s\S]*?)<\/a>\s*<p>([\s\S]*?)<\/p>/gi, '<p>$1 <a$2>$3<\/a> $4<\/p>');
    return sanitizeHtml(html);
  }, [processedContentMemo, sanitizeHtml]);

  // Info box'ları render et - useMemo ile optimize edilmiş
  const renderInfoBoxes = useCallback((htmlContent: string) => {
    const infoRegex = /<div class="info-box" data-title="([^"]*)">(.*?)<\/div>/g;
    let result = htmlContent;
    let match;
    
    while ((match = infoRegex.exec(htmlContent)) !== null) {
      const [fullMatch, title, content] = match;
      
      const infoBox = `
        <div class="info-box border border-gray-200 rounded-none p-5 my-6 bg-gray-50">
          ${title ? `<div class="text-base font-semibold text-gray-900 mb-2">${title}</div>` : ''}
          <div class="text-gray-800 leading-relaxed [&_a]:text-gray-900 [&_a]:underline [&_a]:decoration-gray-300 [&_a:hover]:text-red-700 [&_a:hover]:decoration-red-400">${content}</div>
        </div>
      `;
      result = result.replace(fullMatch, infoBox);
    }
    
    return result;
  }, []);

  // Dilekçe kutularını render et - başlık ortalı, gövde iki yana yaslı, imza sağa yaslı
  const renderPetitions = useCallback((htmlContent: string) => {
    const petitionRegex = /\[dilekce title="([^"]*)"\]([\s\S]*?)\[\/dilekce\]/g;
    return htmlContent.replace(petitionRegex, (_match, title, body) => {
      const safeTitle = String(title || '').trim();
      const rawBody = String(body || '').trim();
      // [imza]...[/imza] bölümünü ayıkla (opsiyonel)
      const signatureMatch = rawBody.match(/\[imza\]([\s\S]*?)\[\/imza\]/i);
      const signature = signatureMatch ? signatureMatch[1].trim() : '';
      const bodyWithoutSignature = rawBody.replace(/\[imza\][\s\S]*?\[\/imza\]/i, '').trim();

      const sanitizedBody = bodyWithoutSignature
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
        .replace(/<object[\s\S]*?<\/object>/gi, '')
        .replace(/<embed[\s\S]*?<\/embed>/gi, '');

      return `
        <section class="rounded-lg border border-amber-200 bg-amber-50/70 p-5 my-6 shadow-sm">
          ${safeTitle ? `<header class="mb-4"><h4 class="text-amber-900 font-semibold text-xl text-center">${safeTitle}</h4></header>` : ''}
          <div class="prose prose-sm max-w-none text-amber-900 text-justify [&_p]:text-justify [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1">
            ${sanitizedBody}
          </div>
          ${signature ? `<div class="mt-6 pt-3 border-t border-amber-200 text-right text-amber-900">${signature}</div>` : ''}
        </section>
      `;
    });
  }, []);

  



  // Accordion'ları render et - useMemo ile optimize edilmiş
  const renderAccordions = useCallback((htmlContent: string) => {
    // Accordion'lar zaten ilk aşamada render edildi, bu fonksiyon artık gerekli değil
    return htmlContent;
  }, []);

  // Accordion matches'i hesapla - useMemo ile optimize edilmiş
  const accordionMatches = useMemo(() => {
    const matches = [];
    let currentIndex = 0;
    let remainingContent = content;
    
    // Her accordion'ı tek tek bul
    while (true) {
      const startIndex = remainingContent.indexOf('[accordion title="');
      
      if (startIndex === -1) break;
      
      const titleStart = startIndex + '[accordion title="'.length;
      const titleEnd = remainingContent.indexOf('"', titleStart);
      
      if (titleEnd === -1) break;
      
      let title = remainingContent.substring(titleStart, titleEnd);
      
      // Başlık saf metin olsun: tüm HTML etiketlerini kaldır
      title = title
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      // İçeriği bul
      const contentStart = remainingContent.indexOf(']', titleEnd) + 1;
      const endIndex = remainingContent.indexOf('[/accordion]', contentStart);
      
      if (endIndex === -1) break;
      
      const accordionContent = remainingContent.substring(contentStart, endIndex);
      
      // HTML tag'lerini temizle
      const cleanContent = accordionContent
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/&nbsp;/g, ' ')
        .trim();
      
      matches.push({
        id: `accordion-${currentIndex}`,
        title: title.trim(),
        content: cleanContent
      });
      
      // Kalan içeriği güncelle
      remainingContent = remainingContent.substring(endIndex + '[/accordion]'.length);
      currentIndex++;
    }
    
    return matches;
  }, [content]);

  // Accordion başlıklarını parent'a gönder
  useEffect(() => {
    if (onAccordionTitles && accordionMatches.length > 0) {
      const accordionTitles = accordionMatches.map((item) => ({
        id: item.id,
        title: item.title,
        level: 3 // Accordion'lar H3 seviyesinde
      }));
      
      onAccordionTitles(accordionTitles);
    }
  }, [accordionMatches, onAccordionTitles]);

  return (
    <div className="text-sm text-gray-700 leading-relaxed">
      <div 
        dangerouslySetInnerHTML={{ __html: finalHtml }}
        className="max-w-none blog-content"
        suppressHydrationWarning={true}
      />
      

      
      {/* FAQ kutuları (anasayfadaki gibi kart) */}
      {accordionMatches.length > 0 && (
        <div className="mb-6 space-y-4 max-w-[660px] mx-auto" itemScope itemType="https://schema.org/FAQPage">
          {accordionMatches.map(({ id, title, content }) => (
            <article
              key={id}
              id={id}
              className="border border-gray-200 rounded-none p-6 bg-white scroll-mt-40"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3" itemProp="name">
                {title}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none" itemProp="text">
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
});

BlogContent.displayName = 'BlogContent';

export default BlogContent; 