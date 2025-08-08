"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface SeoChecklistProps {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  contentHtml: string;
  focusKeyword: string;
  onFocusKeywordChange?: (value: string) => void;
  imageAlt?: string;
}

type CheckItem = { label: string; ok: boolean; extra?: string };

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getWordCount(text: string): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countOccurrences(haystack: string, needle: string, caseSensitive = false): number {
  if (!needle) return 0;
  const flags = caseSensitive ? 'g' : 'gi';
  try {
    const re = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
    return (haystack.match(re) || []).length;
  } catch {
    return 0;
  }
}

function hasInFirstPercent(text: string, needle: string, percent: number): boolean {
  if (!text || !needle) return false;
  const cut = Math.max(1, Math.floor((text.length * percent) / 100));
  const head = text.slice(0, cut);
  return countOccurrences(head, needle) > 0;
}

function extractHeadings(html: string): string[] {
  const matches = html.match(/<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
  return matches.map((m) => stripHtml(m));
}

function extractImageAlts(html: string): string[] {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgs = Array.from(doc.querySelectorAll('img')) as HTMLImageElement[];
    return imgs.map((img) => (img.getAttribute('alt') || '').toString());
  } catch {
    const alts: string[] = [];
    const re = /<img[^>]*alt\s*=\s*("([^"]*)"|'([^']*)')/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      alts.push((m[2] || m[3] || '').toString());
    }
    return alts;
  }
}

function toTurkishLower(input: string): string {
  try { return input.toLocaleLowerCase('tr-TR'); } catch { return input.toLowerCase(); }
}

function normalizeText(t: string): string {
  return toTurkishLower(t)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // diacritics
    .replace(/\u0307/g, '') // combining dot above (İ -> i̇)
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugifyTr(input: string): string {
  return toTurkishLower(input)
    .replace(/&/g, ' ve ')
    .replace(/ı/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function hasKeywordInFirstPercentByWords(html: string, keyword: string, percent: number): boolean {
  if (!html || !keyword) return false;
  const text = normalizeText(stripHtml(html));
  const kw = normalizeText(keyword);
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;
  const headWordCount = Math.max(1, Math.ceil((words.length * percent) / 100));
  const headText = words.slice(0, headWordCount).join(' ');
  return headText.includes(kw);
}

function extractLinks(html: string): { href: string; rel: string }[] {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return Array.from(doc.querySelectorAll('a')).map((a) => ({
      href: (a.getAttribute('href') || '').toString(),
      rel: (a.getAttribute('rel') || '').toString(),
    }));
  } catch {
    const out: { href: string; rel: string }[] = [];
    const re = /<a[^>]*href\s*=\s*("([^"]*)"|'([^']*)')[^>]*?(?:rel\s*=\s*("([^"]*)"|'([^']*)'))?[^>]*>/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      out.push({ href: (m[2] || m[3] || '').toString(), rel: (m[5] || m[6] || '').toString() });
    }
    return out;
  }
}

function hasNoFollow(rel: string, href: string): boolean {
  const relStr = (rel || '').toLowerCase();
  const hrefStr = (href || '').toLowerCase();
  return /(^|\s)nofollow(\s|$)/.test(relStr) || hrefStr.includes('#nofollow');
}

function isHttpUrl(urlStr: string): boolean {
  return /^https?:\/\//i.test(urlStr);
}

function isInternalUrl(href: string, host?: string): boolean {
  if (!href) return false;
  if (href.startsWith('/')) return true;
  if (!isHttpUrl(href)) return false;
  try {
    const u = new URL(href);
    return !!host && u.hostname.replace(/^www\./, '') === host.replace(/^www\./, '');
  } catch {
    return false;
  }
}

function isExternalUrl(href: string, host?: string): boolean {
  if (!href) return false;
  if (!isHttpUrl(href)) return false;
  try {
    const u = new URL(href);
    return !host || u.hostname.replace(/^www\./, '') !== host.replace(/^www\./, '');
  } catch {
    return false;
  }
}

const SeoChecklist: React.FC<SeoChecklistProps> = ({ title, slug, metaTitle, metaDescription, contentHtml, focusKeyword, onFocusKeywordChange, imageAlt }) => {
  const textContent = useMemo(() => stripHtml(contentHtml), [contentHtml]);
  const headings = useMemo(() => extractHeadings(contentHtml), [contentHtml]);
  const imageAlts = useMemo(() => extractImageAlts(contentHtml), [contentHtml]);
  const links = useMemo(() => extractLinks(contentHtml), [contentHtml]);

  const wordCount = useMemo(() => getWordCount(textContent), [textContent]);

  const [keywordUsedBefore, setKeywordUsedBefore] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!focusKeyword) { setKeywordUsedBefore(null); return; }
      try {
        const { data } = await supabase
          .from('blog_yazilari')
          .select('id, slug, meta_title, title')
          .ilike('meta_title', `%${focusKeyword}%`)
          .limit(2);
        if (!active) return;
        const used = (data || []).some((r) => r.slug !== slug);
        setKeywordUsedBefore(!used); // true => kullanılmamış
      } catch {
        if (active) setKeywordUsedBefore(null);
      }
    })();
    return () => { active = false; };
  }, [focusKeyword, slug]);

  const density = useMemo(() => {
    const occ = countOccurrences(textContent, focusKeyword);
    const den = wordCount > 0 ? (occ / Math.max(1, wordCount)) * 100 : 0;
    return { occ, den: Number(den.toFixed(2)) };
  }, [textContent, focusKeyword, wordCount]);

  const basicChecks: CheckItem[] = useMemo(() => {
    const list: CheckItem[] = [];
    const hasKW = !!focusKeyword?.trim();
    const slugOk = hasKW ? slugifyTr(slug).includes(slugifyTr(focusKeyword)) : false;
    const metaTitleOk = hasKW ? metaTitle.toLowerCase().includes(focusKeyword.toLowerCase()) : false;
    const metaTitleStartOk = hasKW ? metaTitle.trim().toLowerCase().startsWith(focusKeyword.toLowerCase()) : false;
    const metaDescOk = hasKW ? metaDescription.toLowerCase().includes(focusKeyword.toLowerCase()) : false;
    const inFirst10 = hasKW ? hasKeywordInFirstPercentByWords(contentHtml, focusKeyword, 10) : false;
    const inContent = hasKW ? countOccurrences(textContent, focusKeyword) > 0 : false;

    list.push({ label: 'Yaşasın! SEO Başlığında odak anahtar kelimeyi kullanıyorsunuz.', ok: metaTitleOk });
    list.push({ label: 'SEO Meta açıklama içinde odak anahtar kelimenizi kulanın.', ok: metaDescOk });
    list.push({ label: 'URL’de odak anahtar kelimesi bulunuyor.', ok: slugOk });
    list.push({ label: "Odak anahtar kelime, içeriğin ilk 10%'da kullanılmış.", ok: inFirst10 });
    list.push({ label: 'İçerikte bulunan odak anahtar kelime.', ok: inContent });
    list.push({ label: `İçerik ${wordCount} kelime uzunluğunda.`, ok: wordCount >= 600, extra: wordCount >= 1500 ? 'Harika!' : wordCount >= 600 ? 'İyi iş!' : 'Kısa görünüyor' });
    return list;
  }, [focusKeyword, slug, metaTitle, metaDescription, textContent, wordCount]);

  const extraChecks: CheckItem[] = useMemo(() => {
    const list: CheckItem[] = [];
    const hasKW = !!focusKeyword?.trim();
    const inSubHead = hasKW ? headings.some((h) => h.toLowerCase().includes(focusKeyword.toLowerCase())) : false;
    const inImgAlt = hasKW ? [...imageAlts, imageAlt || ''].some((a) => (a || '').toLowerCase().includes(focusKeyword.toLowerCase())) : false;
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : undefined;
    const linkLenOk = slug.length <= 75;
    const externalLinks = links.filter((l) => isExternalUrl(l.href, currentHost));
    const hasExternal = externalLinks.length > 0;
    const hasExternalDoFollow = externalLinks.some((l) => !hasNoFollow(l.rel, l.href));
    const hasInternal = links.some((l) => isInternalUrl(l.href, currentHost));
    const titleHasNumber = /\d/.test(metaTitle);

    list.push({ label: 'Alt başlık(larda)ta bulunan Odak Anahtar Kelime.', ok: inSubHead });
    list.push({ label: 'Odak anahtar kelime resim alt özelliğinde bulundu.', ok: inImgAlt });
    list.push({ label: `Keyword Density is ${density.den}%, the Focus Keyword and combination appears ${density.occ} times.`, ok: density.den >= 0.5 && density.den <= 3 });
    list.push({ label: `Link ${slug.length} karakter uzunluğunda. Tebrikler!`, ok: linkLenOk });
    list.push({ label: 'Harika! Dış kaynaklara bağlanıyorsunuz.', ok: hasExternal });
    list.push({ label: 'İçeriğinizde DoFollow ile en az bir dış bağlantı bulundu.', ok: hasExternalDoFollow });
    list.push({ label: 'Web sitenizdeki harika diğer kaynaklara bağlanıyorsunuz.', ok: hasInternal });
    list.push({ label: 'Bu odak anahtar kelimesini daha önce kullanmadınız.', ok: keywordUsedBefore === null ? false : keywordUsedBefore });
    return list;
  }, [focusKeyword, headings, imageAlts, links, slug.length, density.den, density.occ, metaTitle, keywordUsedBefore]);

  const titleReadability: CheckItem[] = useMemo(() => {
    const metaTitleStartOk = !!focusKeyword?.trim() && metaTitle.trim().toLowerCase().startsWith(focusKeyword.toLowerCase());
    const titleHasNumber = /\d/.test(metaTitle);
    return [
      { label: 'SEO Başlığının başında odak anahtar kelime kullanıldı.', ok: metaTitleStartOk },
      { label: 'SEO başlığında sayı kullanıyorsunuz.', ok: titleHasNumber },
    ];
  }, [focusKeyword, metaTitle]);

  const contentReadability: CheckItem[] = useMemo(() => {
    const paragraphs = contentHtml.split(/<\/?p[^>]*>/i).map(stripHtml).filter(Boolean);
    const avgLen = paragraphs.length > 0 ? Math.round(paragraphs.reduce((a, b) => a + getWordCount(b), 0) / paragraphs.length) : 0;
    const shortParas = avgLen <= 120;
    const hasMedia = /<img|<video|<iframe/i.test(contentHtml);
    return [
      { label: 'Kısa paragraflar kullanıyorsunuz.', ok: shortParas },
      { label: 'İçeriğinizde görüntüler ve / veya video(lar) içeriyor.', ok: hasMedia },
    ];
  }, [contentHtml]);

  return (
    <div className="space-y-4">
      {/* Arama Motoru Önizlemesi */}
      <div className="border rounded-md p-3 bg-white">
        <p className="text-xs text-gray-500 mb-1">Arama Motoru Önizlemesi</p>
        <div className="space-y-0.5">
          <p className="text-[#1a0dab] text-base leading-snug truncate">{metaTitle || title}</p>
          <p className="text-[#006621] text-xs">https://ismailcavus.av.tr/{slug}</p>
          <p className="text-[#545454] text-xs line-clamp-2">{metaDescription || stripHtml(contentHtml).slice(0, 160)}</p>
        </div>
      </div>

      {/* Odak Anahtar Kelime Girişi (önizlemenin hemen altında) */}
      <div className="border rounded-md p-3 bg-white">
        <label className="block text-xs text-gray-600 mb-1">Odak Anahtar Kelime</label>
        <input
          type="text"
          value={focusKeyword}
          onChange={(e) => onFocusKeywordChange?.(e.target.value)}
          placeholder="örn: infaz erteleme"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
        />
      </div>

      {/* Ana Kontroller */}
      <div className="border rounded-md p-3 bg-white">
        <p className="text-sm font-semibold text-gray-900 mb-2">Temel</p>
        <ul className="space-y-1">
          {basicChecks.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className={`mt-0.5 inline-block w-2 h-2 rounded-full ${c.ok ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span>{c.label}{c.extra ? ` ${c.extra}` : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ekstra */}
      <div className="border rounded-md p-3 bg-white">
        <p className="text-sm font-semibold text-gray-900 mb-2">Ekstra</p>
        <ul className="space-y-1">
          {extraChecks.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className={`mt-0.5 inline-block w-2 h-2 rounded-full ${c.ok ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Başlık okunabilirliği */}
      <div className="border rounded-md p-3 bg-white">
        <p className="text-sm font-semibold text-gray-900 mb-2">Başlık okunabilirliği</p>
        <ul className="space-y-1">
          {titleReadability.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className={`mt-0.5 inline-block w-2 h-2 rounded-full ${c.ok ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* İçerik okunabilirliği */}
      <div className="border rounded-md p-3 bg-white">
        <p className="text-sm font-semibold text-gray-900 mb-2">İçerik okunabilirliği</p>
        <ul className="space-y-1">
          {contentReadability.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className={`mt-0.5 inline-block w-2 h-2 rounded-full ${c.ok ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeoChecklist;


