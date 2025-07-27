import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Otomatik içindekiler oluşturma fonksiyonu
export function generateTableOfContents(content: string): Array<{ id: string; title: string; level: number }> {
  const headings: Array<{ id: string; title: string; level: number }> = [];
  
  // H2 ve H3 başlıklarını bul
  const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-3]>/g;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const title = match[3].replace(/<[^>]*>/g, ''); // HTML taglarını temizle
    
    headings.push({
      id,
      title,
      level
    });
  }
  
  return headings;
}

// İçeriği güvenli HTML olarak render etme
export function renderContent(content: string): string {
  // Başlıklara otomatik ID ekleme
  let processedContent = content;
  
  // H2 başlıklarına ID ekle
  processedContent = processedContent.replace(
    /<h2[^>]*>(.*?)<\/h2>/g,
    (match, title) => {
      const id = title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      return `<h2 id="${id}">${title}</h2>`;
    }
  );
  
  // H3 başlıklarına ID ekle
  processedContent = processedContent.replace(
    /<h3[^>]*>(.*?)<\/h3>/g,
    (match, title) => {
      const id = title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      return `<h3 id="${id}">${title}</h3>`;
    }
  );
  
  return processedContent;
}

export function formatPhoneNumber(phone: string) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
} 