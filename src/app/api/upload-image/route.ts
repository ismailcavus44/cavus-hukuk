import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { cache } from '@/lib/cache';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const path = formData.get('path') as string;

    if (!file || !path) {
      return NextResponse.json(
        { error: 'Dosya ve yol bilgisi gerekli' },
        { status: 400 }
      );
    }

    // Cache key oluştur
    const cacheKey = `upload:${path}:${file.name}`;
    
    // Önce cache'den kontrol et
    const cached = await cache.get(cacheKey);
    if (cached) {
      return NextResponse.json({ url: cached.url });
    }

    // Dosyayı buffer'a çevir
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Supabase Storage'a yükle
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(path, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return NextResponse.json(
        { error: 'Dosya yükleme hatası' },
        { status: 500 }
      );
    }

    // Public URL oluştur
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(path);

    // Cache'e kaydet (1 saat)
    await cache.set(cacheKey, { url: publicUrl }, 3600);

    return NextResponse.json({ url: publicUrl });

  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
} 