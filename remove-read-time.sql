-- Blog yazıları tablosundan read_time alanını kaldır
ALTER TABLE blog_yazilari DROP COLUMN IF EXISTS read_time; 