import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4 -ml-2">
            <div className="flex items-center justify-start">
              <OptimizedImage 
                src="/logo-footer.png" 
                alt="Ankara Avukat" 
                width={220}
                height={50}
                className="w-[220px] h-[50px] object-cover"
                priority={true}
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ankara'da hukuki sorunlarınıza profesyonel çözümler sunuyoruz. Güvenilir ve kaliteli hukuki danışmanlık hizmeti.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/avismailcavus" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook sayfamızı ziyaret et">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ismail-cavus/" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn sayfamızı ziyaret et">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/av.ismailcavus/" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram sayfamızı ziyaret et">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Hizmet Alanlarımız</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ankara-ceza-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara ceza avukatı hizmetleri sayfasına git">
                  Ankara Ceza Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-is-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara iş avukatı hizmetleri sayfasına git">
                  Ankara İş Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-bosanma-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara boşanma avukatı hizmetleri sayfasına git">
                  Ankara Boşanma Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-trafik-kazasi-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara trafik kazası avukatı hizmetleri sayfasına git">
                  Ankara Trafik Kazası Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-icra-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara icra avukatı hizmetleri sayfasına git">
                  Ankara İcra Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-miras-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara miras avukatı hizmetleri sayfasına git">
                  Ankara Miras Avukatı
                </Link>
              </li>
              <li>
                <Link href="/ankara-idare-avukati" className="text-slate-300 hover:text-white transition-colors" aria-label="Ankara idare avukatı hizmetleri sayfasına git">
                  Ankara İdare Avukatı
                </Link>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Hızlı Linkler</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="text-slate-300 hover:text-white transition-colors" aria-label="Hakkımızda sayfasına git">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/ekip" className="text-slate-300 hover:text-white transition-colors" aria-label="Ekibimiz sayfasına git">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-slate-300 hover:text-white transition-colors" aria-label="Hizmetler sayfasına git">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors" aria-label="Blog sayfasına git">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-slate-300 hover:text-white transition-colors" aria-label="İletişim sayfasına git">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">İletişim</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/Vfj8y6sUFKdHJxB57" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                    aria-label="Google Maps'te ofisimizi görüntüle"
                  >
                    <p>Mustafa Kemal Maha.</p>
                    <p>Dumlupınar Blv. No:274 C/47</p>
                    <p>Çankaya/Ankara</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-slate-400" />
                <a href="tel:+905053989981" className="text-slate-300 hover:text-white transition-colors" aria-label="Avukat ile telefon görüşmesi başlat - +90 505 398 9981">
                  +90 505 398 9981
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-slate-400" />
                <a href="mailto:av.ismailcavuss@gmail.com" className="text-slate-300 hover:text-white transition-colors" aria-label="Avukat ile e-posta iletişimi başlat - info@ismailcavus.av.tr">
                av.ismailcavuss@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-slate-400" />
                <div>
                  <p className="text-slate-300">Pazartesi - Cumartesi</p>
                  <p className="text-slate-300">09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ankara Avukat. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <Link href="/gizlilik-politikasi" className="text-slate-400 hover:text-white transition-colors whitespace-nowrap" aria-label="Gizlilik politikası sayfasına git">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-slate-400 hover:text-white transition-colors whitespace-nowrap" aria-label="Kullanım koşulları sayfasına git">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="text-slate-400 hover:text-white transition-colors whitespace-nowrap" aria-label="Çerez politikası sayfasına git">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 