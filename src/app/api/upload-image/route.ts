import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Basit rate limiting için Map
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  MAX_REQUESTS: 10, // 10 istek
  WINDOW_MS: 60000, // 1 dakika
};

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  if (!userData || now > userData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS });
    return true;
  }

  if (userData.count >= RATE_LIMIT.MAX_REQUESTS) {
    return false;
  }

  userData.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting kontrolü
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderildi. Lütfen bir dakika bekleyin.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const path = formData.get('path') as string;

    if (!file || !path) {
      return NextResponse.json({ error: 'Dosya veya yol eksik' }, { status: 400 });
    }

    // Dosya türü kontrolü
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Geçersiz dosya türü. Sadece resim dosyaları kabul edilir.' }, { status: 400 });
    }

    // Dosya içeriği kontrolü (Magic Number)
    const buffer = Buffer.from(await file.arrayBuffer());
    const magicNumbers = {
      'image/jpeg': [0xFF, 0xD8, 0xFF],
      'image/png': [0x89, 0x50, 0x4E, 0x47],
      'image/gif': [0x47, 0x49, 0x46],
      'image/webp': [0x52, 0x49, 0x46, 0x46]
    };

    const fileMagicNumbers = Array.from(buffer.slice(0, 4));
    const isValidMagicNumber = Object.values(magicNumbers).some(magic => 
      magic.every((byte, index) => fileMagicNumbers[index] === byte)
    );

    if (!isValidMagicNumber) {
      return NextResponse.json({ error: 'Geçersiz dosya içeriği.' }, { status: 400 });
    }

    // Dosya boyutu kontrolü (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'Dosya boyutu çok büyük. Maksimum 5MB olmalıdır.' }, { status: 400 });
    }

    // Dosya adı güvenlik kontrolü
    const fileName = file.name.toLowerCase();
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return NextResponse.json({ error: 'Geçersiz dosya adı' }, { status: 400 });
    }

    // Dosya adını temizle (Türkçe karakterler ve boşlukları kaldır)
    const cleanFileName = file.name
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/Ğ/g, 'G')
      .replace(/Ü/g, 'U')
      .replace(/Ş/g, 'S')
      .replace(/İ/g, 'I')
      .replace(/Ö/g, 'O')
      .replace(/Ç/g, 'C')
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const filePath = `${Date.now()}-${cleanFileName}`;

    // Dosyayı yükle
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw error;
    }

    // Public URL'i döndür
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    // Production'da detaylı hata bilgisi verme
    if (process.env.NODE_ENV === 'development') {
      console.error('Görsel yükleme hatası:', error);
    }
    return NextResponse.json({ error: 'Görsel yüklenirken hata oluştu' }, { status: 500 });
  }
} 