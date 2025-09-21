import type { Metadata } from 'next';
import { supabase } from '@/lib/supabase';

interface KategoriLayoutProps {
  children: React.ReactNode;
  params: {
    kategori: string;
  };
}

export async function generateMetadata({ params }: KategoriLayoutProps): Promise<Metadata> {
  // Kategori bilgilerini getir
  const { data: kategoriData } = await supabase
    .from('kategoriler')
    .select('*')
    .eq('slug', params.kategori)
    .single();

  if (!kategoriData) {
    return {
      title: 'Kategori Bulunamadı',
      description: 'Aradığınız kategori mevcut değil.',
    };
  }

  return {
    title: `${kategoriData.title}`,
    description: kategoriData.description || `${kategoriData.title} hakkında detaylı bilgi ve uzman görüşleri.`,
    keywords: `${kategoriData.title}, hukuk, avukat, ${kategoriData.title.toLowerCase()}, çavuş hukuk bürosu`,
    openGraph: {
      title: `${kategoriData.title}`,
      description: kategoriData.description || `${kategoriData.title} hakkında detaylı bilgi ve uzman görüşleri.`,
      type: 'website',
      locale: 'tr_TR',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://www.ismailcavus.av.tr/hizmetler/${params.kategori}`,
    },
  };
}

export default function KategoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 