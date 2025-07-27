-- Blog yazıları tablosundaki category alanını categories olarak değiştir
ALTER TABLE blog_yazilari RENAME COLUMN category TO categories;

-- Eski index'i sil ve yenisini oluştur
DROP INDEX IF EXISTS idx_blog_yazilari_category;
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_categories ON blog_yazilari(categories);

-- Mevcut verileri kontrol et ve güncelle (isteğe bağlı)
-- Eğer mevcut blog yazılarında category alanı varsa, bunları categories formatına çevir
-- UPDATE blog_yazilari SET categories = category WHERE categories IS NULL OR categories = '';

-- Değişiklikleri onayla
SELECT 'Migration completed successfully' as status; 