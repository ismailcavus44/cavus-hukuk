-- =====================================================
-- GÜVENLİK POLİTİKALARI (Mevcut Tablolar İçin)
-- =====================================================

-- Mevcut politikaları temizle
DROP POLICY IF EXISTS "Kategoriler herkes okuyabilir" ON kategoriler;
DROP POLICY IF EXISTS "Kategoriler sadece admin yazabilir" ON kategoriler;
DROP POLICY IF EXISTS "Blog yazıları herkes okuyabilir" ON blog_yazilari;
DROP POLICY IF EXISTS "Blog yazıları sadece admin yazabilir" ON blog_yazilari;
DROP POLICY IF EXISTS "Admin kullanıcıları sadece admin görebilir" ON admin_users;

-- Storage politikalarını da temizle
DROP POLICY IF EXISTS "Blog görselleri herkes okuyabilir" ON storage.objects;
DROP POLICY IF EXISTS "Blog görselleri sadece admin yükleyebilir" ON storage.objects;
DROP POLICY IF EXISTS "Blog görselleri sadece admin güncelleyebilir" ON storage.objects;
DROP POLICY IF EXISTS "Blog görselleri sadece admin silebilir" ON storage.objects;

-- =====================================================
-- KATEGORİLER TABLOSU POLİTİKALARI
-- =====================================================

-- Herkes kategorileri okuyabilir
CREATE POLICY "Kategoriler herkes okuyabilir" ON kategoriler 
FOR SELECT USING (true);

-- Sadece admin kullanıcıları yazabilir
CREATE POLICY "Kategoriler sadece admin yazabilir" ON kategoriler 
FOR ALL USING (
  auth.role() = 'authenticated'
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
  auth.role() = 'authenticated'
);

-- =====================================================
-- ADMIN KULLANICILARI TABLOSU POLİTİKALARI
-- =====================================================

-- Admin kullanıcıları admin_users tablosuna erişebilir
CREATE POLICY "Admin kullanıcıları sadece admin görebilir" ON admin_users 
FOR ALL USING (
  auth.role() = 'authenticated'
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
  auth.role() = 'authenticated'
);

-- Sadece admin kullanıcıları güncelleyebilir
CREATE POLICY "Blog görselleri sadece admin güncelleyebilir" ON storage.objects 
FOR UPDATE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated'
);

-- Sadece admin kullanıcıları silebilir
CREATE POLICY "Blog görselleri sadece admin silebilir" ON storage.objects 
FOR DELETE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated'
);

-- =====================================================
-- RLS'Yİ ETKİNLEŞTİR
-- =====================================================

ALTER TABLE kategoriler ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_yazilari ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY; 