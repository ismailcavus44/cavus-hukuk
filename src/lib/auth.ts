import { supabase } from './supabase';

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  created_at: string;
}

// JWT token'ı localStorage'dan al
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    const session = localStorage.getItem('adminSession');
    if (session) {
      try {
        const sessionData = JSON.parse(session);
        return sessionData.access_token || null;
      } catch {
        return null;
      }
    }
  }
  return null;
};

// JWT token'ı doğrula
export const verifyToken = async (): Promise<AdminUser | null> => {
  try {
    // Supabase session'ını kontrol et
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error || !session) {
      return null;
    }

    // Admin kullanıcısını veritabanından kontrol et
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', session.user.email)
      .single();

    if (adminError || !adminUser) {
      return null;
    }

    return adminUser;
  } catch (error) {
    // Production'da detaylı hata bilgisi verme
    if (process.env.NODE_ENV === 'development') {
      console.error('Token doğrulama hatası:', error);
    }
    return null;
  }
};

// Login işlemi
export const loginAdmin = async (email: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> => {
  try {
    // Supabase auth ile giriş yap
    const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !user) {
      return { success: false, error: 'Geçersiz e-posta veya şifre' };
    }

    // Admin kullanıcısını veritabanından kontrol et
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', user.email)
      .single();

    if (adminError || !adminUser) {
      // Kullanıcı auth.users'da var ama admin_users'da yok
      await supabase.auth.signOut();
      return { success: false, error: 'Admin yetkisi bulunamadı' };
    }

    // Session'ı localStorage'a kaydet
    if (typeof window !== 'undefined' && session) {
      localStorage.setItem('adminUser', JSON.stringify(adminUser));
      localStorage.setItem('adminSession', JSON.stringify(session));
    }

    return { success: true, user: adminUser };
  } catch (error) {
    // Production'da detaylı hata bilgisi verme
    if (process.env.NODE_ENV === 'development') {
      console.error('Login hatası:', error);
    }
    return { success: false, error: 'Giriş yapılırken hata oluştu' };
  }
};

// Logout işlemi
export const logoutAdmin = async (): Promise<void> => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    // Production'da detaylı hata bilgisi verme
    if (process.env.NODE_ENV === 'development') {
      console.error('Logout hatası:', error);
    }
  } finally {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminSession');
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminEmail');
    sessionStorage.removeItem('adminRole');
    sessionStorage.removeItem('adminId');
    }
  }
};

// Admin sayfası koruması
export const requireAuth = async (): Promise<AdminUser | null> => {
  try {
    const user = await verifyToken();
    if (!user) {
      await logoutAdmin();
      return null;
    }
    return user;
  } catch (error) {
    // Production'da detaylı hata bilgisi verme
    if (process.env.NODE_ENV === 'development') {
      console.error('requireAuth hatası:', error);
    }
    return null;
  }
}; 