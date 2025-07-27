-- Blog yazıları tablosuna eksik sütunları ekle
ALTER TABLE blog_yazilari 
ADD COLUMN IF NOT EXISTS image TEXT,
ADD COLUMN IF NOT EXISTS image_alt TEXT,
ADD COLUMN IF NOT EXISTS meta_title TEXT,
ADD COLUMN IF NOT EXISTS meta_description TEXT;

-- Mevcut kayıtlar için varsayılan değerler ata
UPDATE blog_yazilari 
SET 
  image = NULL,
  image_alt = NULL,
  meta_title = title,
  meta_description = excerpt
WHERE image IS NULL;

-- Yeni sütunlar için indeksler oluştur (opsiyonel)
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_image ON blog_yazilari(image);
CREATE INDEX IF NOT EXISTS idx_blog_yazilari_meta_title ON blog_yazilari(meta_title);

-- RLS politikalarını güncelle (yeni sütunlar için)
-- Mevcut politikalar zaten tüm sütunları kapsıyor, ek işlem gerekmez 