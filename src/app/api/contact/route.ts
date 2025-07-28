import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { cache } from '@/lib/cache';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, subject, message } = await request.json();

    // Rate limiting için cache kontrolü
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitKey = `rate_limit:contact:${clientIP}`;
    
    const rateLimit = await cache.get(rateLimitKey);
    if (rateLimit && rateLimit.count >= 5) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen bir süre bekleyin.' },
        { status: 429 }
      );
    }

    // Gerekli alanları kontrol et
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Ad ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'av.ismailcavuss@gmail.com',
        pass: 'olmt uuhw frjf mkun'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email içeriği
    const mailOptions = {
      from: 'av.ismailcavuss@gmail.com',
      to: 'av.ismailcavuss@gmail.com',
      subject: `İletişim Formu: ${subject || 'Yeni Mesaj'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
                      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Gönderen Bilgileri:</h3>
              <p><strong>Ad Soyad:</strong> ${name}</p>
              ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
              ${subject ? `<p><strong>Konu:</strong> ${subject}</p>` : ''}
            </div>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <h3 style="color: #374151; margin-top: 0;">Mesaj:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Bu mesaj Çavuş Hukuk Bürosu web sitesi iletişim formundan gönderilmiştir.</p>
            <p>Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `
    };

    // Email gönder
    await transporter.sendMail(mailOptions);

    // Rate limiting güncelle
    const currentCount = rateLimit ? rateLimit.count + 1 : 1;
    await cache.set(rateLimitKey, { count: currentCount }, 300); // 5 dakika

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { error: `Mesaj gönderilirken bir hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}` },
      { status: 500 }
    );
  }
} 