import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            <Home size={20} className="mr-2" />
            Ana Sayfaya Dön
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search size={20} className="mr-2" />
            Blog Yazılarını Keşfet
          </Link>

          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            İletişime Geç
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Linkler</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/hakkimizda" className="text-red-600 hover:text-red-700">
              Hakkımızda
            </Link>
            <Link href="/hizmetler" className="text-red-600 hover:text-red-700">
              Hizmetler
            </Link>
            <Link href="/ekip" className="text-red-600 hover:text-red-700">
              Ekibimiz
            </Link>
            <Link href="/blog" className="text-red-600 hover:text-red-700">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 