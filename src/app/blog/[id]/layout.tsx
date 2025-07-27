import type { Metadata } from 'next';
import { supabase } from '@/lib/supabase';

interface BlogPostLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  try {
    const { data: yazi, error } = await supabase
      .from('blog_yazilari')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error || !yazi) {
      return {
        title: 'Yazı Bulunamadı',
        description: 'Aradığınız blog yazısı bulunamadı.',
      };
    }

    return {
      title: yazi.title,
      description: yazi.meta_description || yazi.content.substring(0, 160),
      openGraph: {
        title: `${yazi.title} - Çavuş Hukuk Bürosu`,
        description: yazi.meta_description || yazi.content.substring(0, 160),
        type: 'article',
        authors: [yazi.author],
        publishedTime: yazi.date,
      },
    };
  } catch (error) {
    return {
      title: 'Yazı Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
} 