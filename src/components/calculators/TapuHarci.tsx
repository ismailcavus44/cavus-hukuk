'use client';

import { useState, useRef } from 'react';

interface TapuHarciProps {
  title: string;
  description: string;
}

const TapuHarci = ({ title, description }: TapuHarciProps) => {
  const [formData, setFormData] = useState({
    islemTuru: 'satis',
    gayrimenkulDegeri: '',
    belgeSayisi: '1',
    yuzolcumu: '',
    katMalikiyeti: 'tam',
    konutMu: 'evet'
  });
  const [sonuc, setSonuc] = useState<{
    tapuHarci: number;
    damgaVergisi: number;
    toplamHarci: number;
    harciOrani: number;
    damgaOrani: number;
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

  const hesaplaTapuHarci = () => {
    const gayrimenkulDegeri = parseFloat(formData.gayrimenkulDegeri);
    const belgeSayisi = parseInt(formData.belgeSayisi);
    const yuzolcumu = parseFloat(formData.yuzolcumu);
    const islemTuru = formData.islemTuru;
    const katMalikiyeti = formData.katMalikiyeti;
    const konutMu = formData.konutMu;

    if (isNaN(gayrimenkulDegeri) || isNaN(belgeSayisi) || isNaN(yuzolcumu)) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    if (gayrimenkulDegeri <= 0 || belgeSayisi <= 0 || yuzolcumu <= 0) {
      alert('Değerler 0\'dan büyük olmalıdır!');
      return;
    }

    // Tapu harcı hesaplama (2024 tarifesi)
    let harciOrani = 0;
    let damgaOrani = 0;

    // İşlem türüne göre harç oranı
    switch (islemTuru) {
      case 'satis':
        harciOrani = 0.004; // %0.4
        break;
      case 'bagis':
        harciOrani = 0.004; // %0.4
        break;
      case 'miras':
        harciOrani = 0.002; // %0.2
        break;
      case 'ipotek':
        harciOrani = 0.001; // %0.1
        break;
      case 'kira':
        harciOrani = 0.002; // %0.2
        break;
      case 'ortaklik':
        harciOrani = 0.004; // %0.4
        break;
    }

    // Damga vergisi oranı
    damgaOrani = 0.00948; // %0.948

    // Kat mülkiyeti indirimi
    if (katMalikiyeti === 'kismi') {
      harciOrani *= 0.5; // %50 indirim
    }

    // Konut indirimi
    if (konutMu === 'evet') {
      harciOrani *= 0.5; // %50 indirim
    }

    // Tapu harcı hesaplama
    const tapuHarci = gayrimenkulDegeri * harciOrani * belgeSayisi;

    // Damga vergisi hesaplama
    const damgaVergisi = gayrimenkulDegeri * damgaOrani * belgeSayisi;

    // Toplam harç
    const toplamHarci = tapuHarci + damgaVergisi;
    
    setSonuc({
      tapuHarci,
      damgaVergisi,
      toplamHarci,
      harciOrani: harciOrani * 100, // Yüzde olarak
      damgaOrani: damgaOrani * 100 // Yüzde olarak
    });
    setShowResult(true);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kopyalaSonuc = () => {
    if (sonuc !== null) {
      const textToCopy = `Tapu Harcı Hesaplama Sonucu:
Gayrimenkul Değeri: ${parseFloat(formData.gayrimenkulDegeri).toLocaleString('tr-TR')} TL
Tapu Harcı: ${sonuc.tapuHarci.toLocaleString('tr-TR')} TL
Damga Vergisi: ${sonuc.damgaVergisi.toLocaleString('tr-TR')} TL
Toplam Harç: ${sonuc.toplamHarci.toLocaleString('tr-TR')} TL`;
      
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
      const text = `Tapu Harcı Hesaplama Sonucu: ${sonuc.toplamHarci.toLocaleString('tr-TR')} TL`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Tapu Harcı Hesaplama',
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
          <label htmlFor="islemTuru" className="block text-sm font-medium text-gray-700 mb-2">
            İşlem Türü *
          </label>
          <select
            id="islemTuru"
            name="islemTuru"
            value={formData.islemTuru}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="satis">Satış</option>
            <option value="bagis">Bağış</option>
            <option value="miras">Miras</option>
            <option value="ipotek">İpotek</option>
            <option value="kira">Kira</option>
            <option value="ortaklik">Ortaklık</option>
          </select>
        </div>

        <div>
          <label htmlFor="gayrimenkulDegeri" className="block text-sm font-medium text-gray-700 mb-2">
            Gayrimenkul Değeri (TL) *
          </label>
          <input
            type="number"
            id="gayrimenkulDegeri"
            name="gayrimenkulDegeri"
            value={formData.gayrimenkulDegeri}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 500000"
            required
          />
        </div>

        <div>
          <label htmlFor="belgeSayisi" className="block text-sm font-medium text-gray-700 mb-2">
            Belge Sayısı *
          </label>
          <input
            type="number"
            id="belgeSayisi"
            name="belgeSayisi"
            value={formData.belgeSayisi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 1"
            min="1"
            max="10"
            required
          />
        </div>

        <div>
          <label htmlFor="yuzolcumu" className="block text-sm font-medium text-gray-700 mb-2">
            Yüzölçümü (m²) *
          </label>
          <input
            type="number"
            id="yuzolcumu"
            name="yuzolcumu"
            value={formData.yuzolcumu}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 120"
            required
          />
        </div>

        <div>
          <label htmlFor="katMalikiyeti" className="block text-sm font-medium text-gray-700 mb-2">
            Kat Mülkiyeti *
          </label>
          <select
            id="katMalikiyeti"
            name="katMalikiyeti"
            value={formData.katMalikiyeti}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="tam">Tam Mülkiyet</option>
            <option value="kismi">Kısmi Mülkiyet</option>
          </select>
        </div>

        <div>
          <label htmlFor="konutMu" className="block text-sm font-medium text-gray-700 mb-2">
            Konut Mu? *
          </label>
          <select
            id="konutMu"
            name="konutMu"
            value={formData.konutMu}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="evet">Evet (Konut)</option>
            <option value="hayir">Hayır (Ticari)</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={hesaplaTapuHarci}
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Hesapla
        </button>
      </div>

      {showResult && sonuc !== null && (
        <div ref={resultRef} className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-green-800 mb-4">Hesaplama Sonucu</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {sonuc.tapuHarci.toLocaleString('tr-TR')} TL
              </p>
              <p className="text-sm text-green-600 mt-2">Tapu Harcı</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {sonuc.damgaVergisi.toLocaleString('tr-TR')} TL
              </p>
              <p className="text-sm text-blue-600 mt-2">Damga Vergisi</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">
                {sonuc.toplamHarci.toLocaleString('tr-TR')} TL
              </p>
              <p className="text-sm text-red-600 mt-2">Toplam Harç</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 mb-3">Detaylı Bilgiler</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Gayrimenkul Değeri:</span>
                <span className="font-semibold ml-2">{parseFloat(formData.gayrimenkulDegeri).toLocaleString('tr-TR')} TL</span>
              </div>
              <div>
                <span className="text-gray-600">İşlem Türü:</span>
                <span className="font-semibold ml-2">{formData.islemTuru.charAt(0).toUpperCase() + formData.islemTuru.slice(1)}</span>
              </div>
              <div>
                <span className="text-gray-600">Harç Oranı:</span>
                <span className="font-semibold ml-2">%{sonuc.harciOrani.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-gray-600">Damga Oranı:</span>
                <span className="font-semibold ml-2">%{sonuc.damgaOrani.toFixed(2)}</span>
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
          Tapu Harcı = Gayrimenkul Değeri × Harç Oranı × Belge Sayısı
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Damga Vergisi = Gayrimenkul Değeri × %0.948 × Belge Sayısı
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Toplam Harç = Tapu Harcı + Damga Vergisi
        </p>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">Tapu Harcı Kuralları (2024)</h5>
          <div className="text-xs text-blue-800 space-y-1">
            <p>• Satış/Bağış/Ortaklık: %0.4 (konut için %0.2)</p>
            <p>• Miras/Kira: %0.2 (konut için %0.1)</p>
            <p>• İpotek: %0.1 (konut için %0.05)</p>
            <p>• Kısmi mülkiyet: %50 indirim</p>
            <p>• Konut işlemleri: %50 indirim</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Bu hesaplama genel bilgi amaçlıdır. Kesin hesaplama için tapu müdürlüğüne başvurun.
        </p>
      </div>
    </div>
  );
};

export default TapuHarci; 