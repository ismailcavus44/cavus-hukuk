'use client';

import { useState, useRef } from 'react';

interface IssizlikMaasiProps {
  title: string;
  description: string;
}

const IssizlikMaasi = ({ title, description }: IssizlikMaasiProps) => {
  const [formData, setFormData] = useState({
    iseGirisTarihi: '',
    istenCikisTarihi: '',
    aylikMaas: '',
    yasGrubu: '30-45'
  });
  const [sonuc, setSonuc] = useState<{
    issizlikMaasi: number;
    calismaSuresi: number;
    calismaSuresiGun: number;
    calismaSuresiYil: number;
    calismaSuresiAy: number;
    gunlukMaas: number;
    issizlikSuresi: number;
    issizlikSuresiGun: number;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const hesaplaIssizlikMaasi = () => {
    const iseGirisTarihi = new Date(formData.iseGirisTarihi);
    const istenCikisTarihi = new Date(formData.istenCikisTarihi);
    const aylikMaas = parseFloat(formData.aylikMaas);
    const yasGrubu = formData.yasGrubu;

    if (isNaN(iseGirisTarihi.getTime()) || isNaN(istenCikisTarihi.getTime()) || 
        isNaN(aylikMaas)) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    if (istenCikisTarihi <= iseGirisTarihi) {
      alert('İşten çıkış tarihi işe giriş tarihinden sonra olmalıdır!');
      return;
    }

    // Çalışma süresini hesapla
    const calismaSuresiMs = istenCikisTarihi.getTime() - iseGirisTarihi.getTime();
    const calismaSuresiGun = Math.floor(calismaSuresiMs / (1000 * 60 * 60 * 24));
    
    // Yıl ve ay hesaplama
    const calismaSuresiYil = Math.floor(calismaSuresiGun / 365);
    const kalanGunler = calismaSuresiGun % 365;
    const calismaSuresiAy = Math.floor(kalanGunler / 30);
    
    // Toplam çalışma süresi (yıl olarak)
    const calismaSuresi = calismaSuresiGun / 365;

    // Günlük maaş hesaplama (30 günlük ay)
    const gunlukMaas = aylikMaas / 30;

    // İşsizlik süresi hesaplama (yaş grubuna göre)
    let issizlikSuresi = 0;
    let issizlikSuresiGun = 0;

    if (calismaSuresiYil >= 10) {
      // 10+ yıl çalışma
      switch (yasGrubu) {
        case '18-30':
          issizlikSuresi = 10; // 10 ay
          break;
        case '30-45':
          issizlikSuresi = 12; // 12 ay
          break;
        case '45+':
          issizlikSuresi = 14; // 14 ay
          break;
      }
    } else if (calismaSuresiYil >= 5) {
      // 5-10 yıl çalışma
      switch (yasGrubu) {
        case '18-30':
          issizlikSuresi = 8; // 8 ay
          break;
        case '30-45':
          issizlikSuresi = 10; // 10 ay
          break;
        case '45+':
          issizlikSuresi = 12; // 12 ay
          break;
      }
    } else if (calismaSuresiYil >= 3) {
      // 3-5 yıl çalışma
      switch (yasGrubu) {
        case '18-30':
          issizlikSuresi = 6; // 6 ay
          break;
        case '30-45':
          issizlikSuresi = 8; // 8 ay
          break;
        case '45+':
          issizlikSuresi = 10; // 10 ay
          break;
      }
    } else if (calismaSuresiYil >= 1) {
      // 1-3 yıl çalışma
      switch (yasGrubu) {
        case '18-30':
          issizlikSuresi = 4; // 4 ay
          break;
        case '30-45':
          issizlikSuresi = 6; // 6 ay
          break;
        case '45+':
          issizlikSuresi = 8; // 8 ay
          break;
      }
    } else {
      // 1 yıldan az çalışma
      switch (yasGrubu) {
        case '18-30':
          issizlikSuresi = 2; // 2 ay
          break;
        case '30-45':
          issizlikSuresi = 4; // 4 ay
          break;
        case '45+':
          issizlikSuresi = 6; // 6 ay
          break;
      }
    }

    issizlikSuresiGun = issizlikSuresi * 30;

    // İşsizlik maaşı hesaplama
    // Günlük maaş × İşsizlik süresi (gün) × 0.4 (işsizlik maaşı oranı)
    const issizlikMaasi = gunlukMaas * issizlikSuresiGun * 0.4;
    
    setSonuc({
      issizlikMaasi,
      calismaSuresi,
      calismaSuresiGun,
      calismaSuresiYil,
      calismaSuresiAy,
      gunlukMaas,
      issizlikSuresi,
      issizlikSuresiGun
    });
    setShowResult(true);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kopyalaSonuc = () => {
    if (sonuc !== null) {
      const textToCopy = `İşsizlik Maaşı Hesaplama Sonucu:
Çalışma Süresi: ${sonuc.calismaSuresiYil} yıl ${sonuc.calismaSuresiAy} ay
İşsizlik Süresi: ${sonuc.issizlikSuresi} ay (${sonuc.issizlikSuresiGun} gün)
İşsizlik Maaşı: ${sonuc.issizlikMaasi.toLocaleString('tr-TR')} TL`;
      
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
      const text = `İşsizlik Maaşı Hesaplama Sonucu: ${sonuc.issizlikMaasi.toLocaleString('tr-TR')} TL`;
      
      if (navigator.share) {
        navigator.share({
          title: 'İşsizlik Maaşı Hesaplama',
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
          <label htmlFor="yasGrubu" className="block text-sm font-medium text-gray-700 mb-2">
            Yaş Grubu *
          </label>
          <select
            id="yasGrubu"
            name="yasGrubu"
            value={formData.yasGrubu}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="18-30">18-30 yaş</option>
            <option value="30-45">30-45 yaş</option>
            <option value="45+">45+ yaş</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={hesaplaIssizlikMaasi}
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
                {sonuc.issizlikMaasi.toLocaleString('tr-TR')} TL
              </p>
              <p className="text-sm text-green-600 mt-2">İşsizlik Maaşı</p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-blue-600">
                {sonuc.issizlikSuresi} ay ({sonuc.issizlikSuresiGun} gün)
              </p>
              <p className="text-sm text-blue-600 mt-2">İşsizlik Süresi</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 mb-3">Detaylı Bilgiler</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Çalışma Süresi:</span>
                <span className="font-semibold ml-2">{sonuc.calismaSuresiYil} yıl {sonuc.calismaSuresiAy} ay</span>
              </div>
              <div>
                <span className="text-gray-600">Günlük Maaş:</span>
                <span className="font-semibold ml-2">{sonuc.gunlukMaas.toLocaleString('tr-TR')} TL</span>
              </div>
              <div>
                <span className="text-gray-600">Yaş Grubu:</span>
                <span className="font-semibold ml-2">{formData.yasGrubu}</span>
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
          İşsizlik Maaşı = Günlük Maaş × İşsizlik Süresi (Gün) × 0.4
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Günlük Maaş = Aylık Maaş ÷ 30
        </p>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">İşsizlik Maaşı Kuralları</h5>
          <div className="text-xs text-blue-800 space-y-1">
            <p>• İşsizlik maaşı, günlük maaşın %40'ı kadardır</p>
            <p>• Maksimum işsizlik maaşı tutarı yıllık olarak belirlenir</p>
            <p>• İşsizlik süresi yaş grubu ve çalışma süresine göre değişir</p>
            <p>• İşsizlik maaşı alabilmek için belirli şartlar sağlanmalıdır</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Bu hesaplama genel bilgi amaçlıdır. Kesin hesaplama için İŞKUR'a başvurun.
        </p>
      </div>
    </div>
  );
};

export default IssizlikMaasi; 