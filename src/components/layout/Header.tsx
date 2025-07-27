'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 
  Scale, 
  Menu, 
  X, 
  Phone, 
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { title: 'Hizmetler', href: '/hizmetler' },
    { title: 'Hesaplama Araçları', href: '/hizmetler/hesaplama-araclari' },
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Ekibimiz', href: '/ekip' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      {/* Üst Bilgi Çubuğu */}
      <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Ankara, Türkiye</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>Pzt-Cmt: 09:00-18:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+905053989981" 
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
                aria-label="Avukat ile telefon görüşmesi başlat - +90 505 398 9981"
              >
                <Phone size={14} />
                <span>+90 505 398 9981</span>
              </a>
              <a 
                href="mailto:info@ismailcavus.av.tr" 
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
                aria-label="Avukat ile e-posta iletişimi başlat - info@ismailcavus.av.tr"
              >
                <Mail size={14} />
                <span>info@ismailcavus.av.tr</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Ana sayfaya dön - Çavuş Hukuk Bürosu" className="lg:pl-0 -ml-6">
            <OptimizedImage 
              src="/logo-header.png" 
              alt="Çavuş Hukuk Bürosu" 
              width={264}
              height={60}
              className="w-[264px] h-[60px] object-cover"
              priority={true}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                aria-label={`${item.title} sayfasına git`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Online randevu al - Avukat ile görüşme planla"
            >
              Online Randevu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
            aria-label={isMenuOpen ? "Ana menüyü kapat" : "Ana menüyü aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden mt-4 bg-white rounded-lg shadow-xl border border-gray-100"
            id="mobile-menu"
            role="menu"
            aria-label="Mobil ana menü"
          >
            <div className="py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  aria-label={`${item.title} sayfasına git`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 