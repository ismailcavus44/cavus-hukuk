-- Admin_users tablosu için RLS'yi kapat
ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;
 
-- Eğer politika varsa onu da sil
DROP POLICY IF EXISTS "Admin kullanıcıları sadece admin görebilir" ON admin_users; 