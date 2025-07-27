'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, Phone } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw size={40} className="text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Bir Hata Oluştu</h1>
              <p className="text-gray-600 mb-8">
                Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                <RefreshCw size={20} className="mr-2" />
                Tekrar Dene
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Home size={20} className="mr-2" />
                Ana Sayfaya Dön
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                İletişime Geç
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Acil İletişim</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📞 +90 505 398 9981</p>
                <p>📧 info@ismailcavus.av.tr</p>
                <p>📍 Ankara, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 