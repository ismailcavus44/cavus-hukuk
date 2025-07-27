export interface Avukat {
  id: string;
  ad: string;
  unvan: string;
  uzmanlik: string[];
  deneyim: number;
  resim: string;
  email: string;
  telefon: string;
  linkedin?: string;
}

export interface Hizmet {
  id: string;
  baslik: string;
  aciklama: string;
  icon: string;
  detaylar: string[];
}

export interface BlogYazisi {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  image_alt?: string;
  author: string;
  date: string;
  categories: string;
  meta_title?: string;
  meta_description?: string;
  read_time: string;
  show_on_homepage?: boolean;
}

export interface IletisimBilgileri {
  adres: string;
  telefon: string;
  email: string;
  calismaSaatleri: string;
}

export interface Testimonial {
  id: string;
  isim: string;
  unvan: string;
  yorum: string;
  puan: number;
  tarih: string;
} 