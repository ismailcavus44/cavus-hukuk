import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rate limiting için basit bir cache
const userRequests = new Map<string, { count: number; lastReset: number }>();

// Spam tespiti için
const spamUsers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Spam kontrolü
    if (spamUsers.has(ip)) {
      return NextResponse.json(
        { error: 'IP adresiniz engellenmiştir.' },
        { status: 403 }
      );
    }

    // Rate limiting kontrolü
    const now = Date.now();
    const userData = userRequests.get(ip) || { count: 0, lastReset: now };
    
    // Her saat başı limit sıfırla
    if (now - userData.lastReset > 3600000) { // 1 saat
      userData.count = 0;
      userData.lastReset = now;
    }
    
    // Günlük limit: 20 soru
    if (userData.count >= 20) {
      return NextResponse.json(
        { error: 'Günlük sorgu limitiniz dolmuştur. Yarın tekrar deneyiniz.' },
        { status: 429 }
      );
    }
    
    userData.count++;
    userRequests.set(ip, userData);

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Dilekçe yazdırma kontrolü
    const dilekceKeywords = ['dilekçe', 'dilekce', 'yazdır', 'yazdir', 'hazırla', 'hazirla', 'yaz', 'form'];
    const isDilekceRequest = dilekceKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isDilekceRequest) {
      return NextResponse.json({
        response: `Dilekçe yazdırma hizmeti için doğrudan Av. İsmail Çavuş ile iletişime geçmeniz gerekmektedir.

İletişim:
📞 +90 505 398 9981
📧 info@ismailcavus.av.tr
📍 Ankara, Türkiye`
      });
    }

    // Spam kontrolü - çok kısa mesajlar
    if (message.length < 3) {
      spamUsers.add(ip);
      return NextResponse.json(
        { error: 'Geçersiz mesaj formatı.' },
        { status: 400 }
      );
    }

    // Hukuki konularda yardımcı olacak prompt
    const systemPrompt = `Sen Çavuş Hukuk Bürosu'nun yapay zeka asistanısın. 
    
    Hukuki konularda kısa özet bilgi ver, detaylı hukuki tavsiye verme.
    
    Yanıt formatın şöyle olsun:
    [Kısa özet bilgi - 2-3 cümle]
    
    [Bir boşluk bırak]
    
    Daha detaylı bilgi edinmek için Av. İsmail Çavuş ile iletişime geçebilirsiniz.
    
    İletişim:
    📞 +90 505 398 9981
    📧 info@ismailcavus.av.tr
    �� Ankara, Türkiye`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || 'Üzgünüm, şu anda yanıt veremiyorum.';

    return NextResponse.json({ 
      response: aiResponse,
      usage: completion.usage 
    });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // OpenAI kredisi bittiğinde özel mesaj
    if (error instanceof Error && error.message.includes('insufficient_quota')) {
      return NextResponse.json({
        response: `Şu anda hizmet veremiyoruz. En kısa zamanda burada olacağım. 

Bu süre zarfında doğrudan Av. İsmail Çavuş ile iletişime geçebilirsiniz:

İletişim:
📞 +90 505 398 9981
📧 info@ismailcavus.av.tr
📍 Ankara, Türkiye`
      });
    }
    
    // Diğer hatalar için genel mesaj
    return NextResponse.json({
      response: `Üzgünüm, şu anda teknik bir sorun yaşıyoruz. Lütfen daha sonra tekrar deneyiniz veya doğrudan Av. İsmail Çavuş ile iletişime geçiniz.

İletişim:
📞 +90 505 398 9981
📧 info@ismailcavus.av.tr
📍 Ankara, Türkiye`
    }, { status: 500 });
  }
} 