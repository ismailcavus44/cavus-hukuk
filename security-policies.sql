-- =====================================================
-- GÜVENLİK POLİTİKALARI SQL
-- =====================================================

-- Mevcut politikaları temizle
DROP POLICY IF EXISTS "Kategoriler herkes okuyabilir" ON kategoriler;
DROP POLICY IF EXISTS "Kategoriler sadece admin yazabilir" ON kategoriler;
DROP POLICY IF EXISTS "Blog yazıları herkes okuyabilir" ON blog_yazilari;
DROP POLICY IF EXISTS "Blog yazıları sadece admin yazabilir" ON blog_yazilari;
DROP POLICY IF EXISTS "Admin kullanıcıları sadece admin görebilir" ON admin_users;

-- =====================================================
-- KATEGORİLER TABLOSU POLİTİKALARI
-- =====================================================

-- Herkes kategorileri okuyabilir
CREATE POLICY "Kategoriler herkes okuyabilir" ON kategoriler 
FOR SELECT USING (true);

-- Sadece admin kullanıcıları yazabilir
CREATE POLICY "Kategoriler sadece admin yazabilir" ON kategoriler 
FOR ALL USING (
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);

-- =====================================================
-- BLOG YAZILARI TABLOSU POLİTİKALARI
-- =====================================================

-- Herkes blog yazılarını okuyabilir
CREATE POLICY "Blog yazıları herkes okuyabilir" ON blog_yazilari 
FOR SELECT USING (true);

-- Sadece admin kullanıcıları yazabilir
CREATE POLICY "Blog yazıları sadece admin yazabilir" ON blog_yazilari 
FOR ALL USING (
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);



-- =====================================================
-- ADMIN KULLANICILARI TABLOSU POLİTİKALARI
-- =====================================================

-- Sadece admin kullanıcıları admin_users tablosuna erişebilir
CREATE POLICY "Admin kullanıcıları sadece admin görebilir" ON admin_users 
FOR ALL USING (
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);

-- =====================================================
-- STORAGE BUCKET POLİTİKALARI
-- =====================================================

-- Blog görselleri için storage politikaları
-- Herkes blog görsellerini okuyabilir
CREATE POLICY "Blog görselleri herkes okuyabilir" ON storage.objects 
FOR SELECT USING (bucket_id = 'blog-images');

-- Sadece admin kullanıcıları yükleyebilir
CREATE POLICY "Blog görselleri sadece admin yükleyebilir" ON storage.objects 
FOR INSERT WITH CHECK (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);

-- Sadece admin kullanıcıları güncelleyebilir
CREATE POLICY "Blog görselleri sadece admin güncelleyebilir" ON storage.objects 
FOR UPDATE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);

-- Sadece admin kullanıcıları silebilir
CREATE POLICY "Blog görselleri sadece admin silebilir" ON storage.objects 
FOR DELETE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated' AND 
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  )
);

-- =====================================================
-- İNDEKSLER (PERFORMANS İÇİN)
-- =====================================================

-- Mevcut indeksleri kontrol et ve eksik olanları ekle
CREATE INDEX IF NOT EXISTS idx_kategoriler_slug ON kategoriler(slug);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_category ON blog_yazilari(category);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_date ON blog_yazilari(date);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_slug ON blog_yazilari(slug);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- =====================================================
-- GÜVENLİK FONKSİYONLARI
-- =====================================================

-- Admin kullanıcısı kontrol fonksiyonu
CREATE OR REPLACE FUNCTION is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Kullanıcı rolü kontrol fonksiyonu
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS VARCHAR AS $$
BEGIN
  RETURN (
    SELECT role FROM admin_users 
    WHERE email = auth.jwt() ->> 'email'
    LIMIT 1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- TRIGGER FONKSİYONLARI
-- =====================================================

-- Updated_at alanını otomatik güncelle
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger'ları oluştur
CREATE TRIGGER update_kategoriler_updated_at 
  BEFORE UPDATE ON kategoriler 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_yazilari_updated_at 
  BEFORE UPDATE ON blog_yazilari 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();



-- =====================================================
-- GÜVENLİK KONTROLLERİ
-- =====================================================

-- Admin kullanıcısı ekleme fonksiyonu (sadece super admin kullanabilir)
CREATE OR REPLACE FUNCTION add_admin_user(new_email VARCHAR, new_role VARCHAR DEFAULT 'editor')
RETURNS BOOLEAN AS $$
BEGIN
  -- Sadece admin kullanıcıları yeni admin ekleyebilir
  IF NOT is_admin_user() THEN
    RAISE EXCEPTION 'Yetkisiz erişim';
  END IF;
  
  -- Kullanıcıyı ekle
  INSERT INTO admin_users (email, role) VALUES (new_email, new_role);
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- VERİTABANI GÜVENLİK AYARLARI
-- =====================================================

-- RLS'yi tüm tablolarda etkinleştir
ALTER TABLE kategoriler ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_yazilari ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- KULLANIM TALİMATLARI
-- =====================================================

/*
Bu SQL dosyasını Supabase SQL Editor'da çalıştırın.

Güvenlik özellikleri:
1. Row Level Security (RLS) tüm tablolarda aktif
2. Admin kullanıcıları için özel kontroller
3. Storage bucket'ları için güvenlik politikaları
4. Performans için indeksler
5. Otomatik updated_at güncellemesi
6. Admin kullanıcısı kontrol fonksiyonları

Kullanım:
- Bu dosyayı Supabase Dashboard > SQL Editor'da çalıştırın
- Tüm politikalar otomatik olarak uygulanacak
- Mevcut veriler korunacak
*/ 