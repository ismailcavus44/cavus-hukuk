'use client';

import { useState, useRef } from 'react';

interface KidemTazminatiProps {
  title: string;
  description: string;
}

const KidemTazminati = ({ title, description }: KidemTazminatiProps) => {
  const [formData, setFormData] = useState({
    iseGirisTarihi: '',
    istenCikisTarihi: '',
    aylikMaas: '',
    sonMaas: ''
  });
  const [sonuc, setSonuc] = useState<{
    kidemTazminati: number;
    calismaSuresi: number;
    calismaSuresiGun: number;
    calismaSuresiYil: number;
    calismaSuresiAy: number;
    gunlukMaas: number;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const hesaplaKidemTazminati = () => {
    const iseGirisTarihi = new Date(formData.iseGirisTarihi);
    const istenCikisTarihi = new Date(formData.istenCikisTarihi);
    const aylikMaas = parseFloat(formData.aylikMaas);
    const sonMaas = parseFloat(formData.sonMaas);

    if (isNaN(iseGirisTarihi.getTime()) || isNaN(istenCikisTarihi.getTime()) || 
        isNaN(aylikMaas) || isNaN(sonMaas)) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    if (istenCikisTarihi <= iseGirisTarihi) {
      alert('İşten çıkış tarihi işe giriş tarihinden sonra olmalıdır!');
      return;
    }

    // Çalışma süresini hesapla (milisaniye cinsinden)
    const calismaSuresiMs = istenCikisTarihi.getTime() - iseGirisTarihi.getTime();
    const calismaSuresiGun = Math.floor(calismaSuresiMs / (1000 * 60 * 60 * 24));
    
    // Yıl ve ay hesaplama
    const calismaSuresiYil = Math.floor(calismaSuresiGun / 365);
    const kalanGunler = calismaSuresiGun % 365;
    const calismaSuresiAy = Math.floor(kalanGunler / 30);
    
    // Toplam çalışma süresi (yıl olarak, ondalıklı)
    const calismaSuresi = calismaSuresiGun / 365;

    // Günlük maaş hesaplama (30 günlük ay)
    const gunlukMaas = sonMaas / 30;

    // Kıdem tazminatı hesaplama
    // Son maaş × Çalışma süresi (yıl) × 30 gün
    const kidemTazminati = sonMaas * calismaSuresi * 30;
    
    setSonuc({
      kidemTazminati,
      calismaSuresi,
      calismaSuresiGun,
      calismaSuresiYil,
      calismaSuresiAy,
      gunlukMaas
    });
    setShowResult(true);

    // Sonuç alanına scroll yap
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kopyalaSonuc = () => {
    if (sonuc !== null) {
      const textToCopy = `Kıdem Tazminatı Hesaplama Sonucu:
Çalışma Süresi: ${sonuc.calismaSuresiYil} yıl ${sonuc.calismaSuresiAy} ay
Kıdem Tazminatı: ${sonuc.kidemTazminati.toLocaleString('tr-TR')} TL`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          alert('Sonuç kopyalandı!');
        }).catch(() => {
          fallbackCopyTextToClipboard(textToCopy);
        });
      } else {
        fallbackCopyTextToClipboard(textToCopy);
      }
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      alert('Sonuç kopyalandı!');
    } catch (err) {
      console.error('Kopyalama başarısız:', err);
    }
    
    document.body.removeChild(textArea);
  };

  const paylasSonuc = () => {
    if (sonuc !== null) {
      const text = `Kıdem Tazminatı Hesaplama Sonucu: ${sonuc.kidemTazminati.toLocaleString('tr-TR')} TL`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Kıdem Tazminatı Hesaplama',
          text: text,
          url: window.location.href
        }).catch(() => {
          kopyalaSonuc();
        });
      } else {
        kopyalaSonuc();
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="iseGirisTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            İşe Giriş Tarihi *
          </label>
          <input
            type="date"
            id="iseGirisTarihi"
            name="iseGirisTarihi"
            value={formData.iseGirisTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="istenCikisTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            İşten Çıkış Tarihi *
          </label>
          <input
            type="date"
            id="istenCikisTarihi"
            name="istenCikisTarihi"
            value={formData.istenCikisTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="aylikMaas" className="block text-sm font-medium text-gray-700 mb-2">
            Aylık Maaş (TL) *
          </label>
          <input
            type="number"
            id="aylikMaas"
            name="aylikMaas"
            value={formData.aylikMaas}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 5000"
            required
          />
        </div>

        <div>
          <label htmlFor="sonMaas" className="block text-sm font-medium text-gray-700 mb-2">
            Son Maaş (TL) *
          </label>
          <input
            type="number"
            id="sonMaas"
            name="sonMaas"
            value={formData.sonMaas}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 6000"
            required
          />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={hesaplaKidemTazminati}
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Hesapla
        </button>
      </div>

      {showResult && sonuc !== null && (
        <div ref={resultRef} className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-green-800 mb-4">Hesaplama Sonucu</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
                {sonuc.kidemTazminati.toLocaleString('tr-TR')} TL
            </p>
            <p className="text-sm text-green-600 mt-2">Kıdem Tazminatı</p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-blue-600">
                {sonuc.calismaSuresiYil} yıl {sonuc.calismaSuresiAy} ay
              </p>
              <p className="text-sm text-blue-600 mt-2">Çalışma Süresi</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 mb-3">Detaylı Bilgiler</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Toplam Gün:</span>
                <span className="font-semibold ml-2">{sonuc.calismaSuresiGun} gün</span>
              </div>
              <div>
                <span className="text-gray-600">Günlük Maaş:</span>
                <span className="font-semibold ml-2">{sonuc.gunlukMaas.toLocaleString('tr-TR')} TL</span>
              </div>
              <div>
                <span className="text-gray-600">Çalışma Süresi:</span>
                <span className="font-semibold ml-2">{sonuc.calismaSuresi.toFixed(2)} yıl</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={kopyalaSonuc}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
            >
              Kopyala
            </button>
            <button
              onClick={paylasSonuc}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Paylaş
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Hesaplama Formülü</h4>
        <p className="text-sm text-gray-600 mb-2">
          Kıdem Tazminatı = Son Maaş × Çalışma Süresi (Yıl) × 30 gün
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Çalışma Süresi = (İşten Çıkış Tarihi - İşe Giriş Tarihi) / 365 gün
        </p>
        <p className="text-xs text-gray-500">
          * Bu hesaplama genel bilgi amaçlıdır. Kesin hesaplama için avukatınıza danışın.
        </p>
      </div>
    </div>
  );
};

export default KidemTazminati; 