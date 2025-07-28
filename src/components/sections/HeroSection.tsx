import Link from 'next/link';
import { Shield, Users, Award, Clock, CheckCircle, Star, Scale, Gavel, Play, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-50 to-red-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-50 to-red-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-50 to-red-100 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <h1 className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white border border-slate-200 rounded-full text-xs sm:text-sm font-medium shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3"></div>
                Av. İsmail Çavuş - Ankara Avukat
              </h1>
              
          {/* Ana Başlık */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Hukuki Sorunlarınız İçin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl lg:mt-2 xl:mt-3">
                  Avukatlık & Hukuk Hizmetleri
                </span>
              </h2>
              
          {/* Açıklama */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Ankara'da hukuki danışmanlık hizmeti veren avukatlarımız, müvekkillerimizin hukuki süreçlerinde yanlarında yer almaktadır.
              </p>

            {/* CTA Butonları */}
          <div className="flex justify-center">
              <Link
                href="/iletisim"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="İletişim sayfasına git - Hukuki danışmanlık için bilgi al"
              >
                Bilgi Edinin
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 