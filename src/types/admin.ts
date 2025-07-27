export interface Kategori {
  id: string;
  slug: string;
  title: string;
  description: string;
  color: string;
  created_at: string;
  updated_at: string;
}

export interface BlogYazisi {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  categories: string; // Virgülle ayrılmış kategori listesi
  image: string;
  image_alt?: string;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  created_at: string;
} 