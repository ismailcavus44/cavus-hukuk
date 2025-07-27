import React from 'react';
import Link from 'next/link';
import { Home, FileText, ArrowLeft, Search, Cable } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  description: 'Aradığınız sayfa mevcut değil. Ana sayfa veya blog yazılarımıza göz atın.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 İkonu */}
        <div className="mb-4">
          <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-6xl font-bold text-red-600">404</div>
          </div>
        </div>

        {/* Başlık */}
        <div className="flex items-center justify-center mb-2">
          <Cable size={32} className="text-red-600 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sayfa Bulunamadı
          </h1>
        </div>

        {/* Açıklama */}
        <p className="text-lg text-gray-600 mb-4 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Ana sayfa veya blog yazılarımıza göz atabilirsiniz.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Ana Sayfa */}
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Ana sayfaya dön"
          >
            <Home size={20} className="mr-2" />
            Ana Sayfa
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Blog yazılarına git"
          >
            <FileText size={20} className="mr-2" />
            Blog Yazıları
          </Link>
        </div>
      </div>
    </div>
  );
} 