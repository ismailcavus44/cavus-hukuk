const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Environment variables eksik!');
  console.error('NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY gerekli.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createAdminUser() {
  try {
    console.log('🔐 Admin kullanıcısı oluşturuluyor...');
    
    // Önce Supabase Auth'da kullanıcı oluştur
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'admin@hukukburosu.com',
      password: 'admin123456',
      options: {
        data: {
          role: 'admin'
        }
      }
    });

    if (authError) {
      console.error('❌ Auth kullanıcısı oluşturma hatası:', authError.message);
      return;
    }

    console.log('✅ Auth kullanıcısı oluşturuldu:', authData.user?.email);

    // Admin_users tablosuna ekle
    const { data: adminData, error: adminError } = await supabase
      .from('admin_users')
      .insert([
        {
          email: 'admin@hukukburosu.com',
          role: 'admin'
        }
      ])
      .select();

    if (adminError) {
      console.error('❌ Admin_users tablosuna ekleme hatası:', adminError.message);
      return;
    }

    console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!');
    console.log('📧 Email: admin@hukukburosu.com');
    console.log('🔑 Şifre: admin123456');
    console.log('⚠️  Bu bilgileri güvenli bir yerde saklayın!');

  } catch (error) {
    console.error('❌ Genel hata:', error);
  }
}

createAdminUser(); 