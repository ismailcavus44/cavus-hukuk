'use client';

import React from 'react';
import { Calendar, User, Tag, Eye, EyeOff } from 'lucide-react';

interface BlogPreviewProps {
  title: string;
  content: string;
  author: string;
  date: string;
  categories: string;
  image: string;
  image_alt: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  slug: string;
  isPreviewMode: boolean;
  onTogglePreview: () => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  content,
  author,
  date,
  categories,
  image,
  image_alt,
  excerpt,
  meta_title,
  meta_description,
  slug,
  isPreviewMode,
  onTogglePreview
}) => {
  // HTML içeriğini güvenli şekilde render et
  const createMarkup = (html: string) => {
    // HTML'yi temizle ve doğru etiketleri kullan
    const cleanedHtml = html
      .replace(/<span([^>]*)>([^<]*(?:<(?!\/span>)[^<]*)*)<\/span>/gi, (match, attributes, content) => {
        // Bold, italic, link gibi etiketleri koru
        if (content.includes('<')) {
          return `<p${attributes}>${content}</p>`;
        }
        return `<p${attributes}>${content}</p>`;
      })
      .replace(/<p[^>]*>\s*<\/p>/gi, '') // Boş p etiketlerini temizle
      .replace(/\s+/g, ' ') // Fazla boşlukları temizle
      .trim();
    
    return { __html: cleanedHtml };
  };

  // Kategorileri array'e çevir
  const categoryList = categories ? categories.split(',').map(cat => cat.trim()) : [];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Preview Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">Önizleme</h3>
            <div className="flex items-center space-x-2">
              <Eye size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">Gerçek zamanlı önizleme</span>
            </div>
          </div>
          <button
            onClick={onTogglePreview}
            className="flex items-center space-x-2 px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {isPreviewMode ? (
              <>
                <EyeOff size={16} />
                <span>Önizlemeyi Kapat</span>
              </>
            ) : (
              <>
                <Eye size={16} />
                <span>Önizlemeyi Aç</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isPreviewMode && (
        <div className="p-6">
          {/* Blog Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {title || 'Blog Başlığı'}
            </h1>
            
            {/* Meta Bilgileri */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{author || 'Yazar'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{date ? new Date(date).toLocaleDateString('tr-TR') : 'Tarih'}</span>
              </div>
              {categoryList.length > 0 && (
                <div className="flex items-center space-x-1">
                  <Tag size={14} />
                  <span>{categoryList.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Öne Çıkan Görsel */}
            {image && (
              <div className="mb-6">
                <img 
                  src={image} 
                  alt={image_alt || title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                {image_alt && (
                  <p className="text-sm text-gray-500 mt-2 italic">{image_alt}</p>
                )}
              </div>
            )}

            {/* Excerpt */}
            {excerpt && (
              <div className="mb-6">
                <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-red-500 pl-4">
                  {excerpt}
                </p>
              </div>
            )}
          </header>

          {/* Blog İçeriği */}
          <article className="prose prose-lg max-w-none">
            {content ? (
              <div 
                dangerouslySetInnerHTML={createMarkup(content)}
                className="text-gray-800 leading-relaxed"
              />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">İçerik henüz yazılmamış</p>
                <p className="text-sm mt-2">Sol taraftaki editörde içeriğinizi yazmaya başlayın</p>
              </div>
            )}
          </article>

          {/* Blog Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span>Yazar: {author || 'Yazar'}</span>
                <span>•</span>
                <span>{date ? new Date(date).toLocaleDateString('tr-TR') : 'Tarih'}</span>
              </div>
              <div className="text-xs text-gray-400">
                Bu bir önizlemedir
              </div>
            </div>
          </footer>

          {/* SEO Önizleme */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Arama Motoru Önizlemesi
            </h4>
            
            <div className="bg-white border border-gray-300 rounded p-3 shadow-sm">
              {/* Google Arama Sonucu Önizlemesi */}
              <div className="mb-2">
                <div className="text-green-700 text-sm font-medium truncate">
                  {meta_title || title || 'Başlık'}
                </div>
                <div className="text-blue-700 text-xs">
                  https://ismailcavus.av.tr/{slug || 'slug'}
                </div>
                <div className="text-gray-600 text-xs mt-1 line-clamp-2">
                  {meta_description || excerpt || 'Açıklama metni burada görünecek...'}
                </div>
              </div>
              
              {/* Karakter Sayacı */}
              <div className="flex justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                <div className="flex space-x-4">
                  <span className={`${(meta_title || title).length > 60 ? 'text-red-500' : 'text-green-500'}`}>
                    Başlık: {(meta_title || title).length}/60
                  </span>
                  <span className={`${(meta_description || excerpt).length > 160 ? 'text-red-500' : 'text-green-500'}`}>
                    Açıklama: {(meta_description || excerpt).length}/160
                  </span>
                </div>
                <span className="text-gray-400">
                  {slug ? `${slug}.html` : 'slug.html'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isPreviewMode && (
        <div className="p-6 text-center text-gray-500">
          <Eye size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium">Önizleme Kapalı</p>
          <p className="text-sm mt-2">Önizlemeyi açmak için yukarıdaki butona tıklayın</p>
        </div>
      )}
    </div>
  );
};

export default BlogPreview; 