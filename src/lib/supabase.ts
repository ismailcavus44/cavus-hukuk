import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side'da sadece public URL kullan
const clientSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const clientSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true
  }
});

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