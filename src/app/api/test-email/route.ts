import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'av.ismailcavuss@gmail.com',
        pass: 'olmt uuhw frjf mkun'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test email gönder
    const mailOptions = {
      from: 'av.ismailcavuss@gmail.com',
      to: 'av.ismailcavuss@gmail.com',
      subject: 'Test Email - Çavuş Hukuk Bürosu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Test Email</h2>
          <p>Bu bir test emailidir. SMTP ayarları çalışıyor!</p>
          <p>Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Test email başarıyla gönderildi!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Test email hatası:', error);
    return NextResponse.json(
      { error: `Test email hatası: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}` },
      { status: 500 }
    );
  }
} 