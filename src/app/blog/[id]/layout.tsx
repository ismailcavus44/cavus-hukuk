import type { Metadata } from 'next';
import { blogYazilari } from '@/data';

interface BlogPostLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const yazi = blogYazilari.find(y => y.id === params.id);
  
  if (!yazi) {
    return {
      title: 'Yazı Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }

  return {
    title: yazi.baslik,
    description: yazi.ozet,
    openGraph: {
      title: `${yazi.baslik} - Ankara Avukat Blog`,
      description: yazi.ozet,
      type: 'article',
      authors: [yazi.yazar],
      publishedTime: yazi.tarih,
    },
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
} 