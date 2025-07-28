import { createClient } from '@supabase/supabase-js';
import { cache } from './cache';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side'da sadece public URL kullan
const clientSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const clientSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true
  },
  // Connection pooling ve cache ayarları
  global: {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=600' // 5-10 dakika cache
    }
  },
  // Real-time bağlantıları kapat (performans için)
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Gelişmiş cache fonksiyonu
export const cachedQuery = async (key: string, queryFn: () => Promise<any>, ttl: number = 300) => {
  try {
    // Önce cache'den kontrol et
    const cached = await cache.get(key);
    if (cached) {
      return cached;
    }
    
    // Cache'de yoksa database'den getir
    const data = await queryFn();
    
    // Cache'e kaydet
    await cache.set(key, data, ttl);
    
    return data;
  } catch (error) {
    console.error('Cached query error:', error);
    // Hata durumunda cache'i bypass et
    return await queryFn();
  }
};

// Storage bucket'ı için helper fonksiyon
export const uploadImage = async (file: File, path: string) => {
  try {
    // FormData oluştur
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);

    // API route'a gönder
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Görsel yükleme başarısız');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Görsel yükleme hatası:', error);
    throw error;
  }
};

export const deleteImage = async (path: string) => {
  const { error } = await supabase.storage
    .from('blog-images')
    .remove([path]);

  if (error) {
    throw error;
  }
}; 