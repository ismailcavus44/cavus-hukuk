'use client';

import { useState, useRef } from 'react';

interface DogumIzniniProps {
  title: string;
  description: string;
}

const DogumIznini = ({ title, description }: DogumIzniniProps) => {
  const [formData, setFormData] = useState({
    calisanTuru: 'isci',
    dogumTarihi: '',
    cokluDogum: 'hayir',
    ikizSayisi: '2',
    ucuzSayisi: '3',
    dahaFazla: '4',
    saglikDurumu: 'normal',
    erkenDogum: 'hayir',
    erkenDogumHaftasi: '32',
    iseBaslamaTarihi: '',
    istenAyrilmaTarihi: ''
  });
  const [sonuc, setSonuc] = useState<{
    dogumOncesiIzin: number;
    dogumSonrasiIzin: number;
    toplamIzin: number;
    cokluDogumEkIzin: number;
    erkenDogumEkIzin: number;
    toplamEkIzin: number;
    toplamGun: number;
    baslangicTarihi: string;
    bitisTarihi: string;
    ucretliIzin: number;
    ucretsizIzin: number;
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

  const hesaplaDogumIznini = () => {
    const dogumTarihi = new Date(formData.dogumTarihi);
    const iseBaslamaTarihi = new Date(formData.iseBaslamaTarihi);
    const istenAyrilmaTarihi = formData.istenAyrilmaTarihi ? new Date(formData.istenAyrilmaTarihi) : null;
    const calisanTuru = formData.calisanTuru;
    const cokluDogum = formData.cokluDogum;
    const ikizSayisi = parseInt(formData.ikizSayisi);
    const ucuzSayisi = parseInt(formData.ucuzSayisi);
    const dahaFazla = parseInt(formData.dahaFazla);
    const saglikDurumu = formData.saglikDurumu;
    const erkenDogum = formData.erkenDogum;
    const erkenDogumHaftasi = parseInt(formData.erkenDogumHaftasi);

    if (!formData.dogumTarihi || !formData.iseBaslamaTarihi) {
      alert('Lütfen doğum tarihi ve işe başlama tarihini doldurun!');
      return;
    }

    if (dogumTarihi <= iseBaslamaTarihi) {
      alert('Doğum tarihi işe başlama tarihinden sonra olmalıdır!');
      return;
    }

    // Temel doğum izni hesaplama
    let dogumOncesiIzin = 0;
    let dogumSonrasiIzin = 0;
    let cokluDogumEkIzin = 0;
    let erkenDogumEkIzin = 0;

    // İşçi ve memur için farklı izin süreleri
    if (calisanTuru === 'isci') {
      // İşçi doğum izni
      dogumOncesiIzin = 8; // 8 hafta
      dogumSonrasiIzin = 8; // 8 hafta
    } else {
      // Memur doğum izni
      dogumOncesiIzin = 8; // 8 hafta
      dogumSonrasiIzin = 8; // 8 hafta
    }

    // Çoklu doğum ek izni
    if (cokluDogum === 'evet') {
      if (ikizSayisi === 2) {
        cokluDogumEkIzin = 2; // 2 hafta ek
      } else if (ucuzSayisi === 3) {
        cokluDogumEkIzin = 4; // 4 hafta ek
      } else if (dahaFazla === 4) {
        cokluDogumEkIzin = 6; // 6 hafta ek
      }
    }

    // Erken doğum ek izni
    if (erkenDogum === 'evet') {
      if (erkenDogumHaftasi < 32) {
        erkenDogumEkIzin = 32 - erkenDogumHaftasi; // Eksik hafta kadar ek izin
      }
    }

    // Toplam izin hesaplama
    const toplamIzin = dogumOncesiIzin + dogumSonrasiIzin;
    const toplamEkIzin = cokluDogumEkIzin + erkenDogumEkIzin;
    const toplamGun = (toplamIzin + toplamEkIzin) * 7; // Haftayı güne çevir

    // Tarih hesaplamaları
    const dogumOncesiBaslangic = new Date(dogumTarihi);
    dogumOncesiBaslangic.setDate(dogumOncesiBaslangic.getDate() - (dogumOncesiIzin * 7));

    const dogumSonrasiBitis = new Date(dogumTarihi);
    dogumSonrasiBitis.setDate(dogumSonrasiBitis.getDate() + (dogumSonrasiIzin * 7) + (toplamEkIzin * 7));

    // Ücretli/ücretsiz izin ayrımı
    let ucretliIzin = 0;
    let ucretsizIzin = 0;

    if (calisanTuru === 'isci') {
      // İşçi için ücretli izin
      ucretliIzin = toplamIzin + toplamEkIzin;
      ucretsizIzin = 0;
    } else {
      // Memur için ücretli izin
      ucretliIzin = toplamIzin + toplamEkIzin;
      ucretsizIzin = 0;
    }

    // İşten ayrılma durumu kontrolü
    if (istenAyrilmaTarihi && istenAyrilmaTarihi < dogumSonrasiBitis) {
      const ayrilmaTarihi = new Date(istenAyrilmaTarihi);
      const kullanilabilirGun = Math.floor((ayrilmaTarihi.getTime() - dogumOncesiBaslangic.getTime()) / (1000 * 60 * 60 * 24));
      ucretliIzin = Math.min(ucretliIzin, Math.max(0, kullanilabilirGun / 7));
      ucretsizIzin = Math.max(0, (toplamIzin + toplamEkIzin) - ucretliIzin);
    }

    setSonuc({
      dogumOncesiIzin,
      dogumSonrasiIzin,
      toplamIzin,
      cokluDogumEkIzin,
      erkenDogumEkIzin,
      toplamEkIzin,
      toplamGun,
      baslangicTarihi: dogumOncesiBaslangic.toLocaleDateString('tr-TR'),
      bitisTarihi: dogumSonrasiBitis.toLocaleDateString('tr-TR'),
      ucretliIzin,
      ucretsizIzin
    });
    setShowResult(true);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kopyalaSonuc = () => {
    if (sonuc !== null) {
      const textToCopy = `Doğum İzni Hesaplama Sonucu:
Çalışan Türü: ${formData.calisanTuru === 'isci' ? 'İşçi' : 'Memur'}
Doğum Öncesi İzin: ${sonuc.dogumOncesiIzin} hafta
Doğum Sonrası İzin: ${sonuc.dogumSonrasiIzin} hafta
Toplam İzin: ${sonuc.toplamIzin} hafta
Ek İzin: ${sonuc.toplamEkIzin} hafta
Toplam Gün: ${sonuc.toplamGun} gün
Başlangıç: ${sonuc.baslangicTarihi}
Bitiş: ${sonuc.bitisTarihi}`;
      
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
      const text = `Doğum İzni Hesaplama: ${sonuc.toplamGun} gün toplam izin`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Doğum İzni Hesaplama',
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
          <label htmlFor="calisanTuru" className="block text-sm font-medium text-gray-700 mb-2">
            Çalışan Türü *
          </label>
          <select
            id="calisanTuru"
            name="calisanTuru"
            value={formData.calisanTuru}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="isci">İşçi</option>
            <option value="memur">Memur</option>
          </select>
        </div>

        <div>
          <label htmlFor="dogumTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            Doğum Tarihi *
          </label>
          <input
            type="date"
            id="dogumTarihi"
            name="dogumTarihi"
            value={formData.dogumTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="iseBaslamaTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            İşe Başlama Tarihi *
          </label>
          <input
            type="date"
            id="iseBaslamaTarihi"
            name="iseBaslamaTarihi"
            value={formData.iseBaslamaTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="istenAyrilmaTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            İşten Ayrılma Tarihi (Opsiyonel)
          </label>
          <input
            type="date"
            id="istenAyrilmaTarihi"
            name="istenAyrilmaTarihi"
            value={formData.istenAyrilmaTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="cokluDogum" className="block text-sm font-medium text-gray-700 mb-2">
            Çoklu Doğum *
          </label>
          <select
            id="cokluDogum"
            name="cokluDogum"
            value={formData.cokluDogum}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="hayir">Hayır (Tek Çocuk)</option>
            <option value="evet">Evet (İkiz/Üçüz/Daha Fazla)</option>
          </select>
        </div>

        {formData.cokluDogum === 'evet' && (
          <div>
            <label htmlFor="ikizSayisi" className="block text-sm font-medium text-gray-700 mb-2">
              Çocuk Sayısı
            </label>
            <select
              id="ikizSayisi"
              name="ikizSayisi"
              value={formData.ikizSayisi}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="2">İkiz (2 Çocuk)</option>
              <option value="3">Üçüz (3 Çocuk)</option>
              <option value="4">Daha Fazla (4+ Çocuk)</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="erkenDogum" className="block text-sm font-medium text-gray-700 mb-2">
            Erken Doğum *
          </label>
          <select
            id="erkenDogum"
            name="erkenDogum"
            value={formData.erkenDogum}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="hayir">Hayır</option>
            <option value="evet">Evet</option>
          </select>
        </div>

        {formData.erkenDogum === 'evet' && (
          <div>
            <label htmlFor="erkenDogumHaftasi" className="block text-sm font-medium text-gray-700 mb-2">
              Doğum Haftası
            </label>
            <input
              type="number"
              id="erkenDogumHaftasi"
              name="erkenDogumHaftasi"
              value={formData.erkenDogumHaftasi}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Örn: 28"
              min="20"
              max="36"
            />
          </div>
        )}
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={hesaplaDogumIznini}
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
                {sonuc.dogumOncesiIzin} Hafta
              </p>
              <p className="text-sm text-green-600 mt-2">Doğum Öncesi</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {sonuc.dogumSonrasiIzin} Hafta
              </p>
              <p className="text-sm text-blue-600 mt-2">Doğum Sonrası</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">
                {sonuc.toplamGun} Gün
              </p>
              <p className="text-sm text-red-600 mt-2">Toplam İzin</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 mb-3">Detaylı Bilgiler</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Çalışan Türü:</span>
                <span className="font-semibold ml-2">{formData.calisanTuru === 'isci' ? 'İşçi' : 'Memur'}</span>
              </div>
              <div>
                <span className="text-gray-600">Ek İzin:</span>
                <span className="font-semibold ml-2">{sonuc.toplamEkIzin} hafta</span>
              </div>
              <div>
                <span className="text-gray-600">Başlangıç:</span>
                <span className="font-semibold ml-2">{sonuc.baslangicTarihi}</span>
              </div>
              <div>
                <span className="text-gray-600">Bitiş:</span>
                <span className="font-semibold ml-2">{sonuc.bitisTarihi}</span>
              </div>
              {sonuc.cokluDogumEkIzin > 0 && (
                <div>
                  <span className="text-gray-600">Çoklu Doğum Ek:</span>
                  <span className="font-semibold ml-2">{sonuc.cokluDogumEkIzin} hafta</span>
                </div>
              )}
              {sonuc.erkenDogumEkIzin > 0 && (
                <div>
                  <span className="text-gray-600">Erken Doğum Ek:</span>
                  <span className="font-semibold ml-2">{sonuc.erkenDogumEkIzin} hafta</span>
                </div>
              )}
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
        <h4 className="font-semibold text-gray-900 mb-2">Doğum İzni Kuralları</h4>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>• Temel İzin:</strong> Doğum öncesi 8 hafta + Doğum sonrası 8 hafta</p>
          <p><strong>• Çoklu Doğum:</strong> İkiz için +2 hafta, Üçüz için +4 hafta, Daha fazla için +6 hafta</p>
          <p><strong>• Erken Doğum:</strong> 32. haftadan önce doğum durumunda eksik hafta kadar ek izin</p>
          <p><strong>• Ücretli İzin:</strong> Tüm doğum izni süresi ücretli olarak kullanılır</p>
          <p><strong>• İşçi/Memur:</strong> Her ikisi için de aynı süreler geçerlidir</p>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">Önemli Notlar</h5>
          <div className="text-xs text-blue-800 space-y-1">
            <p>• Doğum izni ücretli olarak kullanılır</p>
            <p>• İşveren doğum iznini reddedemez</p>
            <p>• İzin süresi işe başlama süresine göre hesaplanır</p>
            <p>• Çoklu doğum ve erken doğum ek izinleri toplanır</p>
            <p>• İşten ayrılma durumunda kullanılabilir izin süresi hesaplanır</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Bu hesaplama genel bilgi amaçlıdır. Kesin hesaplama için işyeri hekimine başvurun.
        </p>
      </div>
    </div>
  );
};

export default DogumIznini; 