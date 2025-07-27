'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  categories: string;
  slug: string;
  image?: string;
  show_on_homepage: boolean;
}

const BlogPage = () => {
  const [bloglar, setBloglar] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBloglar();
  }, []);

  const fetchBloglar = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_yazilari')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Bloglar yükleme hatası:', error);
        return;
      }

      setBloglar(data || []);
    } catch (error) {
      console.error('Bloglar yükleme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_yazilari')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Blog silme hatası:', error);
        alert('Blog yazısı silinirken hata oluştu');
        return;
      }

      fetchBloglar();
    } catch (error) {
      console.error('Blog silme hatası:', error);
      alert('Blog yazısı silinirken hata oluştu');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Yazıları</h1>
          <p className="text-sm text-gray-600">Tüm blog yazılarını yönetin</p>
        </div>
        <Link
          href="/admin/blog/yeni"
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
        >
          <Plus size={16} className="mr-2" />
          Yeni Blog Yazısı
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Blog yazıları yükleniyor...</p>
        </div>
      ) : bloglar.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Henüz blog yazısı eklenmemiş</p>
          <Link
            href="/admin/blog/yeni"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
          >
            <Plus size={16} className="mr-2" />
            İlk Blog Yazısını Ekle
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {bloglar.map((blog) => (
              <li key={blog.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {blog.image && (
                        <OptimizedImage
                          src={blog.image}
                          alt={blog.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                          sizes="64px"
                          quality={80}
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {blog.content.substring(0, 100)}...
                        </p>
                        <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                          <span>Yazar: {blog.author}</span>
                          <span>Kategoriler: {blog.categories}</span>
                          <span>Tarih: {new Date(blog.date).toLocaleDateString('tr-TR')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/${blog.slug || blog.id}`}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
                        title="Görüntüle"
                      >
                        <Eye size={16} />
                      </Link>
                      <Link
                        href={`/admin/blog/${blog.id}/duzenle`}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
                        title="Düzenle"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50"
                        title="Sil"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogPage; 