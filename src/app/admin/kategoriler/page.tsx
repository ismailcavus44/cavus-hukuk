'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Kategori {
  id: string;
  title: string;
  description: string;
  slug: string;
  color: string;
  created_at: string;
}

const KategorilerPage = () => {
  const [kategoriler, setKategoriler] = useState<Kategori[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKategoriler();
  }, []);

  const fetchKategoriler = async () => {
    try {
      const { data, error } = await supabase
        .from('kategoriler')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Kategoriler yükleme hatası:', error);
        return;
      }

      setKategoriler(data || []);
    } catch (error) {
      console.error('Kategoriler yükleme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu kategoriyi silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('kategoriler')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Kategori silme hatası:', error);
        alert('Kategori silinirken hata oluştu');
        return;
      }

      fetchKategoriler();
    } catch (error) {
      console.error('Kategori silme hatası:', error);
      alert('Kategori silinirken hata oluştu');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kategoriler</h1>
          <p className="text-sm text-gray-600">Tüm kategorileri yönetin</p>
        </div>
        <Link
          href="/admin/kategoriler/yeni"
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
        >
          <Plus size={16} className="mr-2" />
          Yeni Kategori
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Kategoriler yükleniyor...</p>
        </div>
      ) : kategoriler.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Henüz kategori eklenmemiş</p>
          <Link
            href="/admin/kategoriler/yeni"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
          >
            <Plus size={16} className="mr-2" />
            İlk Kategoriyi Ekle
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {kategoriler.map((kategori) => (
              <li key={kategori.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: kategori.color }}
                      ></div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {kategori.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {kategori.description}
                        </p>
                        <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                          <span>Slug: {kategori.slug}</span>
                          <span>
                            Oluşturulma: {new Date(kategori.created_at).toLocaleDateString('tr-TR')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/kategoriler/${kategori.id}/duzenle`}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
                        title="Düzenle"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(kategori.id)}
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

export default KategorilerPage; 