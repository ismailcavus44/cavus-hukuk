-- Kategoriler tablosu
CREATE TABLE IF NOT EXISTS kategoriler (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  color VARCHAR(7) DEFAULT '#dc2626',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog yazıları tablosu
CREATE TABLE IF NOT EXISTS blog_yazilari (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  content TEXT,
  excerpt TEXT,
  image TEXT,
  image_alt TEXT,
  author TEXT,
  date DATE DEFAULT CURRENT_DATE,
  categories TEXT,
  meta_title TEXT,
  meta_description TEXT,
  show_on_homepage BOOLEAN DEFAULT FALSE
);

-- Hesaplama araçları tablosu
CREATE TABLE IF NOT EXISTS hesaplama_araclari (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(255) NOT NULL,
  icon VARCHAR(100) DEFAULT 'Calculator',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin kullanıcıları tablosu
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) politikaları
ALTER TABLE kategoriler ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_yazilari ENABLE ROW LEVEL SECURITY;
ALTER TABLE hesaplama_araclari ENABLE ROW LEVEL SECURITY;
-- Admin_users tablosu için RLS kapalı (döngüsel bağımlılık sorunu nedeniyle)

-- Kategoriler için politikalar (herkes okuyabilir, sadece admin yazabilir)
CREATE POLICY "Kategoriler herkes okuyabilir" ON kategoriler FOR SELECT USING (true);
CREATE POLICY "Kategoriler sadece admin yazabilir" ON kategoriler FOR ALL USING (auth.role() = 'authenticated');

-- Blog yazıları için politikalar
CREATE POLICY "Blog yazıları herkes okuyabilir" ON blog_yazilari FOR SELECT USING (true);
CREATE POLICY "Blog yazıları sadece admin yazabilir" ON blog_yazilari FOR ALL USING (auth.role() = 'authenticated');

-- Hesaplama araçları için politikalar
CREATE POLICY "Hesaplama araçları herkes okuyabilir" ON hesaplama_araclari FOR SELECT USING (true);
CREATE POLICY "Hesaplama araçları sadece admin yazabilir" ON hesaplama_araclari FOR ALL USING (auth.role() = 'authenticated');

-- Admin kullanıcıları için RLS kapalı (döngüsel bağımlılık sorunu nedeniyle)

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_kategoriler_slug ON kategoriler(slug);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_categories ON blog_yazilari(categories);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_date ON blog_yazilari(date);
CREATE INDEX IF NOT EXISTS idx_hesaplama_araclari_slug ON hesaplama_araclari(slug);
CREATE INDEX IF NOT EXISTS idx_hesaplama_araclari_active ON hesaplama_araclari(is_active);

-- Trigger fonksiyonları
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger'ları oluştur
CREATE TRIGGER update_kategoriler_updated_at BEFORE UPDATE ON kategoriler FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_yazilari_updated_at BEFORE UPDATE ON blog_yazilari FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hesaplama_araclari_updated_at BEFORE UPDATE ON hesaplama_araclari FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 