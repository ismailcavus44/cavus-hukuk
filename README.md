# Ankara Hukuk Bürosu - Admin Paneli

Bu proje, Ankara Hukuk Bürosu'nun web sitesi ve admin panelini içerir. Supabase veritabanı kullanılarak dinamik içerik yönetimi sağlanmaktadır.

## 🚀 Özellikler

### Admin Paneli
- **Kategori Yönetimi**: Kategorileri ekleme, düzenleme, silme
- **Blog Yönetimi**: Blog yazılarını ekleme, düzenleme, silme
- **Hesaplama Araçları**: Hesaplama araçlarını ekleme, düzenleme, silme
- **Dinamik İçerik**: Tüm içerikler veritabanından dinamik olarak yüklenir

### Web Sitesi
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Modern UI**: Tailwind CSS ile modern tasarım
- **SEO Optimized**: Meta tag'ler ve yapılandırılmış veri
- **Hızlı Yükleme**: Next.js ile optimize edilmiş performans

## 🛠️ Teknolojiler

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel (önerilen)

## 📋 Kurulum

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd hukuk-burosu
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Environment Variables
`.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase Kurulumu

#### 4.1 Supabase Projesi Oluşturun
1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni proje oluşturun
3. Project URL ve anon key'i `.env.local` dosyasına ekleyin

#### 4.2 Veritabanı Şemasını Oluşturun
Supabase SQL Editor'da `supabase-schema.sql` dosyasını çalıştırın.

#### 4.3 Örnek Verileri Yükleyin
```bash
npm run seed
```

### 5. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

## 📁 Proje Yapısı

```
hukuk-burosu/
├── src/
│   ├── app/
│   │   ├── admin/                 # Admin paneli
│   │   │   ├── page.tsx          # Ana admin sayfası
│   │   │   ├── kategoriler/      # Kategori yönetimi
│   │   │   ├── blog/             # Blog yönetimi
│   │   │   └── hesaplama/        # Hesaplama araçları yönetimi
│   │   ├── blog/                 # Blog sayfaları
│   │   ├── hizmetler/            # Hizmet sayfaları
│   │   └── hesaplama-araclari/   # Hesaplama araçları
│   ├── components/
│   │   ├── layout/               # Layout bileşenleri
│   │   └── sections/             # Sayfa bölümleri
│   ├── lib/
│   │   └── supabase.ts           # Supabase istemcisi
│   ├── types/
│   │   └── admin.ts              # Admin tipleri
│   └── scripts/
│       └── seed-data.ts          # Örnek veri yükleme
├── supabase-schema.sql           # Veritabanı şeması
└── package.json
```

## 🔧 Admin Paneli Kullanımı

### Admin Paneline Erişim
```
http://localhost:3000/admin
```

### Kategori Yönetimi
- Yeni kategori ekleme
- Mevcut kategorileri düzenleme
- Kategori silme
- Renk ve slug ayarlama

### Blog Yönetimi
- Yeni blog yazısı ekleme
- Mevcut yazıları düzenleme
- Yazı silme
- Kategori ve etiket atama

### Hesaplama Araçları Yönetimi
- Yeni hesaplama aracı ekleme
- Mevcut araçları düzenleme
- Araç silme
- Aktif/pasif durumu ayarlama

## 🎨 Tasarım Özellikleri

- **Renk Paleti**: Kırmızı (#dc2626) ana renk
- **Typography**: Manrope font ailesi
- **Responsive**: Mobile-first yaklaşım
- **Accessibility**: WCAG uyumlu
- **Performance**: Optimize edilmiş görseller ve kod

## 📱 Sayfalar

### Ana Sayfalar
- **Ana Sayfa**: Hero section, hizmetler, ekip
- **Hizmetler**: Kategori listesi ve detay sayfaları
- **Blog**: Blog yazıları listesi
- **Hesaplama Araçları**: Hesaplama araçları listesi
- **Hakkımızda**: Şirket bilgileri
- **Ekip**: Avukat profilleri
- **İletişim**: İletişim formu ve bilgileri

### Admin Sayfaları
- **Admin Dashboard**: Genel yönetim paneli
- **Kategori Yönetimi**: CRUD işlemleri
- **Blog Yönetimi**: CRUD işlemleri
- **Hesaplama Araçları Yönetimi**: CRUD işlemleri

## 🚀 Deployment

### Vercel (Önerilen)
1. Vercel hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Environment variables'ları ekleyin
4. Deploy edin

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 🔒 Güvenlik

- **Row Level Security (RLS)**: Supabase'de aktif
- **Authentication**: Admin paneli için gerekli
- **Input Validation**: Form validasyonları
- **XSS Protection**: React'in built-in koruması

## 📊 Veritabanı Şeması

### Kategoriler Tablosu
- `id`: UUID (Primary Key)
- `title`: VARCHAR(255)
- `description`: TEXT
- `slug`: VARCHAR(255) UNIQUE
- `color`: VARCHAR(7)
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### Blog Yazıları Tablosu
- `id`: UUID (Primary Key)
- `title`: VARCHAR(255)
- `excerpt`: TEXT
- `content`: TEXT
- `author`: VARCHAR(255)
- `date`: DATE
- `read_time`: VARCHAR(50)
- `category`: VARCHAR(255)
- `image`: VARCHAR(500)
- `tags`: TEXT[]
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### Hesaplama Araçları Tablosu
- `id`: UUID (Primary Key)
- `title`: VARCHAR(255)
- `description`: TEXT
- `slug`: VARCHAR(255) UNIQUE
- `category`: VARCHAR(255)
- `icon`: VARCHAR(100)
- `is_active`: BOOLEAN
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Email**: info@ankaraavukat.com
- **Telefon**: +90 312 555 0100
- **Adres**: Kızılay Mahallesi, Atatürk Bulvarı No:123, Çankaya/Ankara

---

© 2024 Ankara Hukuk Bürosu. Tüm hakları saklıdır.
