import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Scale } from 'lucide-react';

const AvukatBilgiKarti = () => {
  return (
    <div className="hidden lg:block bg-white border border-gray-200 p-6 mb-6 w-[375px]">
      {/* Avukat Fotoğrafı */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-100">
          <Image 
            src="/images/ismail-cavus.jpg" 
            alt="Av. İsmail Çavuş" 
            width={96} 
            height={96} 
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Avukat Bilgileri */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Av. İsmail Çavuş</h3>
      </div>

      {/* Özgeçmiş */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 leading-relaxed text-center">
          20 yılı aşkın deneyimimle Ankara'da hukuki danışmanlık hizmeti veriyorum. 
          Aile hukuku, ceza hukuku, iş hukuku ve diğer alanlarda müvekkillerimin 
          haklarını en iyi şekilde savunuyorum.
        </p>
      </div>

      {/* CTA Butonları */}
      <div className="space-y-3">
        <Link 
          href="/iletisim" 
          className="block w-full bg-red-600 text-white text-center py-3 px-4 rounded text-sm font-medium hover:bg-red-700 transition-colors"
        >
          Randevu Al
        </Link>
        
        <Link 
          href="/ekip" 
          className="block w-full border border-red-600 text-red-600 text-center py-3 px-4 rounded text-sm font-medium hover:bg-red-50 transition-colors"
        >
          Hakkımda
        </Link>
      </div>
    </div>
  );
};

export default AvukatBilgiKarti; 