/**
 * HTML içeriğini temizleme ve formatlaması için yardımcı fonksiyonlar
 */

/**
 * Blog içeriğindeki span etiketlerini p etiketlerine çevirir
 * Bold, italic, link gibi formatlamaları korur
 */
export function cleanBlogContent(htmlContent: string): string {
  if (!htmlContent) return '';

  let cleanedContent = htmlContent;

  // Span etiketlerini p etiketlerine dönüştür, ancak inline formatlamayı koru
  // Sadece block-level span'leri dönüştür (satır başındaki veya tek başına olan)
  cleanedContent = cleanedContent.replace(
    /<span([^>]*)>([^<]*(?:<(?!\/span>)[^<]*)*)<\/span>/gi,
    (match, attributes, content) => {
      // Eğer span içinde başka etiketler varsa (bold, italic, link) onları koru
      if (content.includes('<')) {
        return `<p${attributes}>${content}</p>`;
      }
      // Basit metin için de p etiketi kullan
      return `<p${attributes}>${content}</p>`;
    }
  );

  // Boş p etiketlerini temizle
  cleanedContent = cleanedContent.replace(/<p[^>]*>\s*<\/p>/gi, '');
  
  // Çift p etiketlerini tekle
  cleanedContent = cleanedContent.replace(/<p[^>]*><p[^>]*>/gi, '<p>');
  cleanedContent = cleanedContent.replace(/<\/p><\/p>/gi, '</p>');

  // Fazla boşlukları temizle
  cleanedContent = cleanedContent.replace(/\s+/g, ' ').trim();

  return cleanedContent;
}

/**
 * HTML içeriğinden sadece düz metin çıkarır (excerpt için)
 */
export function extractTextFromHTML(htmlContent: string): string {
  if (!htmlContent) return '';

  return htmlContent
    .replace(/<[^>]*>/g, '') // HTML taglerini kaldır
    .replace(/\[.*?\]/g, '') // Shortcode'ları kaldır
    .replace(/&nbsp;/g, ' ') // &nbsp; karakterlerini normal boşluğa çevir
    .replace(/&amp;/g, '&') // &amp; karakterlerini & çevir
    .replace(/&lt;/g, '<') // &lt; karakterlerini < çevir
    .replace(/&gt;/g, '>') // &gt; karakterlerini > çevir
    .replace(/&quot;/g, '"') // &quot; karakterlerini " çevir
    .replace(/&#39;/g, "'") // &#39; karakterlerini ' çevir
    .replace(/\s+/g, ' ') // Fazla boşlukları tek boşluğa çevir
    .trim();
}

/**
 * HTML içeriğinin güvenli şekilde render edilmesi için
 */
export function createSafeMarkup(html: string) {
  return { __html: cleanBlogContent(html) };
}
