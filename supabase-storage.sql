-- Supabase Storage policies ekle
-- Bu komutları Supabase SQL Editor'da çalıştırın

-- Public access policy ekle (eğer yoksa)
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');

-- Authenticated users can upload
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images');

-- Users can update uploads
CREATE POLICY "Users can update uploads" ON storage.objects FOR UPDATE USING (bucket_id = 'blog-images');

-- Users can delete uploads  
CREATE POLICY "Users can delete uploads" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images'); 