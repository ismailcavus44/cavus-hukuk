'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, X, Image as ImageIcon } from 'lucide-react';
import { supabase, uploadImage } from '@/lib/supabase';
import { Kategori, BlogYazisi } from '@/types/admin';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import BlogPreview from '@/components/admin/BlogPreview';

// React Quill'i dinamik olarak import et (SSR sorunlarını önlemek için)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Quill modülleri ve formatları
const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'color', 'background',
  'align',
  'link', 'image'
];

const BlogDuzenlePage = () => {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [kategoriler, setKategoriler] = useState<Kategori[]>([]);
  const [blogYazisi, setBlogYazisi] = useState<BlogYazisi | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    date: '',
    categories: '',
    image: '',
    image_alt: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    show_on_homepage: false
  });

  // Görsel yükleme fonksiyonu
  const [showAltModal, setShowAltModal] = useState(false);
  const [pendingImageUrl, setPendingImageUrl] = useState('');
  const [altText, setAltText] = useState('');

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const fileName = `${Date.now()}-${file.name}`;
          const imageUrl = await uploadImage(file, fileName);
          
          // Alt tag için modal göster
          setPendingImageUrl(imageUrl);
          setAltText('');
          setShowAltModal(true);
        } catch (error) {
          console.error('Görsel yükleme hatası:', error);
          alert('Görsel yüklenirken hata oluştu');
        }
      }
    };
  };

  const handleAltSubmit = () => {
    // Quill editörüne görseli ekle
    const quill = (document.querySelector('.ql-editor')?.parentElement as any)?.__quill;
    if (quill) {
      // Mevcut cursor pozisyonunu al
      const range = quill.getSelection(true); // true = focus'u koru
      
      // Alt tag ile birlikte görseli ekle
      const imgElement = `<img src="${pendingImageUrl}" alt="${altText}" />`;
      
      // Cursor pozisyonuna ekle
      quill.clipboard.dangerouslyPasteHTML(range.index, imgElement);
      
      // Alt tag'i manuel olarak ekle
      setTimeout(() => {
        try {
          const addedImg = quill.root.querySelector(`img[src="${pendingImageUrl}"]`);
          if (addedImg && altText) {
            addedImg.setAttribute('alt', altText);
          }
        } catch (error) {
          // Quill uyarısını görmezden gel
        }
      }, 10);
      
      // Cursor'u görselin sonuna taşı
      quill.setSelection(range.index + 1);
    }
    
    // Modal'ı kapat
    setShowAltModal(false);
    setPendingImageUrl('');
    setAltText('');
  };

  // Nofollow link ekleme fonksiyonu
  const nofollowLinkHandler = () => {
    const quill = (document.querySelector('.ql-editor')?.parentElement as any)?.__quill;
    if (!quill) return;

    const range = quill.getSelection();
    
    // Seçili metin var mı kontrol et
    if (!range || range.length === 0) {
      alert('Önce link yapmak istediğiniz metni seçin!');
      return;
    }

    const url = prompt('Link URL\'si girin:');
    if (!url) return;

    // Seçili metni al
    const selectedText = quill.getText(range.index, range.length);
    
    // Mevcut seçili metni sil
    quill.deleteText(range.index, range.length);
    
    // Nofollow link HTML'ini ekle - URL'ye #nofollow ekle
    const nofollowLink = `<a href="${url}#nofollow">${selectedText}</a>`;
    quill.clipboard.dangerouslyPasteHTML(range.index, nofollowLink);
  };

  useEffect(() => {
    fetchKategoriler();
    if (params.id) {
    fetchBlogYazisi();
    }
  }, [params.id]);

  const fetchKategoriler = async () => {
    try {
      const { data } = await supabase
        .from('kategoriler')
        .select('*')
        .order('title');
      
      if (data) {
          setKategoriler(data);
      }
    } catch (error) {
      console.error('Kategoriler yüklenirken hata:', error);
    }
  };

  const fetchBlogYazisi = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_yazilari')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) {
        console.error('Blog yazısı yüklenirken hata:', error);
        return;
      }

      if (data) {
        setBlogYazisi(data);
        setFormData({
          title: data.title || '',
          content: data.content || '',
          author: data.author || '',
          date: data.date || new Date().toISOString().split('T')[0],
          categories: data.categories || '',
          image: data.image || '',
          image_alt: data.image_alt || '',
          slug: data.slug || '',
          meta_title: data.meta_title || '',
          meta_description: data.meta_description || '',
          show_on_homepage: data.show_on_homepage || false
        });
      }
    } catch (error) {
      console.error('Blog yazısı yüklenirken hata:', error);
    }
  };

  const handleTitleChange = (title: string) => {
    // Türkçe karakterleri dönüştür ve slug oluştur
    const slug = title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    setFormData(prev => ({
      ...prev,
      title,
      slug,
      meta_title: title,
      meta_description: title
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // İçerikten excerpt oluştur (HTML taglerini ve shortcode'ları kaldır)
      let excerpt = formData.content
        .replace(/<[^>]*>/g, '') // HTML taglerini kaldır
        .replace(/\[.*?\]/g, '') // Shortcode'ları kaldır
        .replace(/&nbsp;/g, ' ') // &nbsp; karakterlerini normal boşluğa çevir
        .replace(/\s+/g, ' ') // Fazla boşlukları tek boşluğa çevir
        .trim();
      
      // Eğer shortcode temizlendikten sonra metin çok kısaysa, shortcode'dan sonraki metni al
      if (excerpt.length < 50) {
        // İlk hesaplama aracı shortcode'unu bul ve sonrasındaki metni al
        const calculatorMatch = formData.content.match(/\[calculator[^\]]*\][\s\S]*?\[\/calculator\]/);
        if (calculatorMatch) {
          const afterCalculator = formData.content.substring(calculatorMatch.index! + calculatorMatch[0].length);
          excerpt = afterCalculator
            .replace(/<[^>]*>/g, '') // HTML taglerini kaldır
            .replace(/\[.*?\]/g, '') // Shortcode'ları kaldır
            .replace(/&nbsp;/g, ' ') // &nbsp; karakterlerini normal boşluğa çevir
            .replace(/\s+/g, ' ') // Fazla boşlukları tek boşluğa çevir
            .trim();
        }
      }
      
      // Son 200 karakteri al
      excerpt = excerpt.substring(0, 200);

      const { error } = await supabase
        .from('blog_yazilari')
        .update({
          title: formData.title,
          content: formData.content,
          excerpt: excerpt,
          author: formData.author,
          date: formData.date,
          categories: formData.categories,
          image: formData.image,
          image_alt: formData.image_alt,
          slug: formData.slug,
          meta_title: formData.meta_title,
          meta_description: formData.meta_description,
          show_on_homepage: formData.show_on_homepage
        })
        .eq('id', params.id);

      if (error) {
        console.error('Supabase hatası:', error);
        throw error;
      }

      router.push('/admin/blog');
    } catch (error: any) {
      console.error('Blog yazısı güncelleme hatası:', error);
      alert(`Blog yazısı güncellenirken hata oluştu. Lütfen tekrar deneyin.`);
    } finally {
      setLoading(false);
    }
  };

  if (!blogYazisi && params.id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Blog yazısı yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Alt Tag Modal */}
      {showAltModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Görsel Alt Metni
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Bu görsel için SEO dostu alt metni girin:
            </p>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Görsel açıklaması (örn: Ankara avukat ofisi)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
              autoFocus
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowAltModal(false);
                  setPendingImageUrl('');
                  setAltText('');
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                İptal
              </button>
              <button
                onClick={handleAltSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blog Yazısı Düzenle</h1>
                <p className="text-sm text-gray-500">Blog yazısını düzenleyin</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol Taraf - Form */}
          <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
              {/* Başlık */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Başlık *
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Blog yazısı başlığı..."
              required
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
              URL Slug *
            </label>
            <input
              type="text"
              id="slug"
              value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="blog-yazisi-basligi"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
                  URL'de kullanılacak kısa isim (otomatik oluşturulur)
            </p>
          </div>

              {/* İçerik - Zengin Metin Editörü */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
              İçerik *
            </label>
            <div className="border border-gray-300 rounded-md">
              <ReactQuill
                    theme="snow"
                value={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                modules={quillModules}
                formats={quillFormats}
                    placeholder="Blog yazısının detaylı içeriği..."
                    style={{ height: '400px', marginBottom: '40px' }}
              />
            </div>
                <p className="text-xs text-gray-500 mt-1">
                  Başlık, kalın, italik, maddeleme, link ve daha fazla formatlama seçeneği kullanabilirsiniz.
                </p>
            
            {/* Editör Butonları */}
            <div className="mt-2 relative z-10">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="font-medium text-gray-700">📝 Özel Alanlar Ekle</span>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                <div className="mt-3 p-4 bg-white border border-gray-200 rounded-lg space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={imageHandler}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                    >
                      <ImageIcon size={16} className="mr-2" />
                      Görsel Ekle
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        const quill = (document.querySelector('.ql-editor')?.parentElement as any)?.__quill;
                        if (quill) {
                          const range = quill.getSelection(true);
                          const infoText = '[info title="Önemli Bilgi"]Buraya içeriği yazın...[/info]';
                          quill.insertText(range.index, infoText);
                        }
                      }}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      📝 Bilgi Kutusu
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        const quill = (document.querySelector('.ql-editor')?.parentElement as any)?.__quill;
                        if (quill) {
                          const range = quill.getSelection(true);
                          const accordionText = '[accordion title="Soru Başlığı"]Buraya cevap içeriği yazın...[/accordion]';
                          quill.insertText(range.index, accordionText);
                        }
                      }}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
                    >
                      📋 Accordion (FAQ)
                    </button>
                    
                    <button
                      type="button"
                      onClick={nofollowLinkHandler}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                    >
                      🔗 Nofollow Link
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Özel alanlar eklemek için butonları kullanın. İçeriği düzenleyebilirsiniz.
                  </p>
                </div>
              </details>
            </div>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="meta_title" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Başlık
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="meta_title"
                      value={formData.meta_title}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 60) {
                          setFormData(prev => ({ ...prev, meta_title: value }));
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="SEO için meta başlık"
                      maxLength={60}
                    />
                    <div className="absolute right-2 top-2 text-xs">
                      <span className={`${formData.meta_title.length > 50 ? 'text-red-500' : 'text-gray-400'}`}>
                        {formData.meta_title.length}/60
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Arama motorları için başlık (60 karakter)
                  </p>
                </div>

                <div>
                  <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Açıklama
                  </label>
                  <div className="relative">
                    <textarea
                      id="meta_description"
                      value={formData.meta_description}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 160) {
                          setFormData(prev => ({ ...prev, meta_description: value }));
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="SEO için meta açıklama"
                      maxLength={160}
                      rows={3}
                    />
                    <div className="absolute right-2 top-2 text-xs">
                      <span className={`${formData.meta_description.length > 150 ? 'text-red-500' : 'text-gray-400'}`}>
                        {formData.meta_description.length}/160
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Arama motorları için açıklama (160 karakter)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Yazar */}
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Yazar *
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Tarih */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Tarih *
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Kategoriler */}
                <div>
                  <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-2">
                    Kategoriler * (virgülle ayırın)
                  </label>
                  <input
                    type="text"
                    id="categories"
                    value={formData.categories}
                    onChange={(e) => setFormData(prev => ({ ...prev, categories: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="örn: Aile Hukuku, Boşanma, Velayet"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Birden fazla kategori eklemek için virgülle ayırın
                  </p>
                </div>
              </div>

              {/* Görsel Yükleme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Öne Çıkan Görsel
                </label>
                
                {/* Görsel Preview */}
                {formData.image && (
                  <div className="mb-4">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                )}

                {/* URL ile Görsel Ekleme */}
                <div className="mt-4">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Görsel URL'i
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Görsel Alt Tag */}
                <div className="mt-4">
                  <label htmlFor="imageAlt" className="block text-sm font-medium text-gray-700 mb-2">
                    Görsel Alt Metni (SEO için)
                  </label>
                  <input
                    type="text"
                    id="imageAlt"
                    value={formData.image_alt}
                    onChange={(e) => setFormData(prev => ({ ...prev, image_alt: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Görselin açıklaması (örn: Ankara avukat ofisi)"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Arama motorları ve görme engelli kullanıcılar için görsel açıklaması
                  </p>
                </div>

                {/* Anasayfada Göster */}
                <div className="mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="showOnHomepage"
                      checked={formData.show_on_homepage}
                      onChange={(e) => setFormData(prev => ({ ...prev, show_on_homepage: e.target.checked }))}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="showOnHomepage" className="ml-2 block text-sm font-medium text-gray-700">
                      Anasayfada Göster
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-6">
                    Bu yazı anasayfadaki blog bölümünde görünecek (maksimum 9 yazı)
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <X size={16} className="mr-2 inline" />
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Kaydediliyor...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Save size={16} className="mr-2" />
                      Kaydet
                    </div>
                  )}
                </button>
              </div>
        </form>
          </div>

          {/* Sağ Taraf - Önizleme */}
          <div className="lg:col-span-1">
            <BlogPreview
              title={formData.title}
              content={formData.content}
              author={formData.author}
              date={formData.date}
              categories={formData.categories}
              image={formData.image}
              image_alt={formData.image_alt}
              excerpt={formData.content
                .replace(/<[^>]*>/g, '')
                .replace(/\[.*?\]/g, '')
                .replace(/&nbsp;/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .substring(0, 200)}
              meta_title={formData.meta_title}
              meta_description={formData.meta_description}
              slug={formData.slug}
              isPreviewMode={isPreviewMode}
              onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDuzenlePage; 