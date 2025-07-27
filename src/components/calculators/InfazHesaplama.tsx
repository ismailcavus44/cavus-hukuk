'use client';

import { useState, useRef } from 'react';

interface InfazHesaplamaProps {
  title: string;
  description: string;
}

const InfazHesaplama = ({ title, description }: InfazHesaplamaProps) => {
  const [formData, setFormData] = useState({
    sucTuru: 'uyusturucu',
    sucTarihi: '',
    cezaSuresi: '',
    cezaSuresiBirimi: 'yil',
    cezaBaslangicTarihi: '',
    tutuklulukSuresi: '',
    tutuklulukBaslangic: '',
    tutuklulukBitis: '',
    yasGrubu: 'yetişkin',
    cinsiyet: 'erkek',
    cocukDurumu: 'hayir',
    mukerir: 'hayir',
    mukerirSayisi: '1',
    iyiHalIndirimi: 'evet',
    iyiHalOrani: '50',
    ozelDurumlar: [] as string[],
    infazSekli: 'kapali',
    denetimliSerbestlik: 'hayir',
    denetimliSerbestlikSuresi: '1',
    denetimliSerbestlikBirimi: 'yil'
  });
  const [sonuc, setSonuc] = useState<{
    toplamCezaSuresi: number;
    tutuklulukSuresi: number;
    iyiHalIndirimi: number;
    kalanCezaSuresi: number;
    infazSuresi: number;
    tahliyeTarihi: string;
    denetimliSerbestlikTarihi: string;
    toplamGun: number;
    kalanGun: number;
    infazOrani: number;
    iyiHalOrani: number;
    ozelDurumlar: string[];
    kosulluSaliverilmeOrani: number;
    denetimSuresi: number;
    kapaliCezaSuresi: number;
    acikCezaSuresi: number;
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      ozelDurumlar: checked 
        ? [...prev.ozelDurumlar, value]
        : prev.ozelDurumlar.filter(item => item !== value)
    }));
  };

  const hesaplaInfaz = () => {
    const cezaSuresi = parseFloat(formData.cezaSuresi);
    const cezaSuresiBirimi = formData.cezaSuresiBirimi;
    const cezaBaslangicTarihi = new Date(formData.cezaBaslangicTarihi);
    const sucTarihi = new Date(formData.sucTarihi);
    const tutuklulukSuresi = parseFloat(formData.tutuklulukSuresi);
    const iyiHalOrani = parseFloat(formData.iyiHalOrani);
    const infazSekli = formData.infazSekli;
    const ozelDurumlar = formData.ozelDurumlar;
    const sucTuru = formData.sucTuru;
    const yasGrubu = formData.yasGrubu;
    const cinsiyet = formData.cinsiyet;
    const cocukDurumu = formData.cocukDurumu;
    const mukerir = formData.mukerir;

    if (isNaN(cezaSuresi) || cezaSuresi <= 0) {
      alert('Lütfen geçerli bir ceza süresi girin!');
      return;
    }

    if (!formData.cezaBaslangicTarihi || !formData.sucTarihi) {
      alert('Lütfen ceza başlangıç tarihi ve suç tarihini girin!');
      return;
    }

    // Ceza süresini güne çevir
    let toplamCezaSuresi = 0;
    switch (cezaSuresiBirimi) {
      case 'gun':
        toplamCezaSuresi = cezaSuresi;
        break;
      case 'ay':
        toplamCezaSuresi = cezaSuresi * 30;
        break;
      case 'yil':
        toplamCezaSuresi = cezaSuresi * 365;
        break;
    }

    // Tutukluluk süresini hesapla
    let tutuklulukSuresiGun = 0;
    if (formData.tutuklulukBaslangic && formData.tutuklulukBitis) {
      const tutuklulukBaslangic = new Date(formData.tutuklulukBaslangic);
      const tutuklulukBitis = new Date(formData.tutuklulukBitis);
      tutuklulukSuresiGun = Math.floor((tutuklulukBitis.getTime() - tutuklulukBaslangic.getTime()) / (1000 * 60 * 60 * 24));
    } else if (tutuklulukSuresi > 0) {
      tutuklulukSuresiGun = tutuklulukSuresi;
    }

    // Koşullu salıverilme oranını belirle
    let kosulluSaliverilmeOrani = 0.5; // Varsayılan 1/2
    let denetimSuresi = 3; // Varsayılan 3 yıl

    // Suç türüne göre koşullu salıverilme oranı
    switch (sucTuru) {
      case 'kastenOldurme':
        kosulluSaliverilmeOrani = 0.67; // 2/3
        denetimSuresi = 1;
        break;
      case 'cinselSuclari':
        if (yasGrubu === 'cocuk') {
          kosulluSaliverilmeOrani = 0.67; // 2/3
        } else {
          kosulluSaliverilmeOrani = 0.75; // 3/4
        }
        denetimSuresi = 1;
        break;
      case 'uyusturucu':
        kosulluSaliverilmeOrani = 0.75; // 3/4
        denetimSuresi = 1;
        break;
      case 'teror':
        kosulluSaliverilmeOrani = 0.75; // 3/4
        denetimSuresi = 1;
        break;
      case 'diger':
        kosulluSaliverilmeOrani = 0.5; // 1/2
        denetimSuresi = 3;
        break;
    }

    // Mükerrir durumu
    if (mukerir === 'evet') {
      kosulluSaliverilmeOrani = 0.67; // 2/3
      denetimSuresi = 1;
    }

    // Suç tarihine göre düzenleme
    const sucTarihiTimestamp = sucTarihi.getTime();
    const yeniInfazTarihi = new Date('2020-03-30').getTime();
    
    if (sucTarihiTimestamp < yeniInfazTarihi) {
      // 30.03.2020 öncesi suçlar
      if (sucTuru !== 'kastenOldurme' && sucTuru !== 'cinselSuclari' && sucTuru !== 'uyusturucu' && sucTuru !== 'teror') {
        kosulluSaliverilmeOrani = 0.5; // 1/2
        denetimSuresi = 3;
      }
    }

    // İyi hal indirimi hesapla
    let iyiHalIndirimiGun = 0;
    if (formData.iyiHalIndirimi === 'evet') {
      iyiHalIndirimiGun = Math.floor(toplamCezaSuresi * (iyiHalOrani / 100));
    }

    // Özel durumlar indirimi
    let ozelDurumIndirimi = 0;
    ozelDurumlar.forEach(durum => {
      switch (durum) {
        case 'yasli':
          ozelDurumIndirimi += Math.floor(toplamCezaSuresi * 0.1); // %10 indirim
          break;
        case 'engelli':
          ozelDurumIndirimi += Math.floor(toplamCezaSuresi * 0.15); // %15 indirim
          break;
        case 'hastalik':
          ozelDurumIndirimi += Math.floor(toplamCezaSuresi * 0.05); // %5 indirim
          break;
        case 'aile':
          ozelDurumIndirimi += Math.floor(toplamCezaSuresi * 0.03); // %3 indirim
          break;
      }
    });

    // Kalan ceza süresi
    const kalanCezaSuresi = Math.max(0, toplamCezaSuresi - tutuklulukSuresiGun - iyiHalIndirimiGun - ozelDurumIndirimi);

    // İnfaz süresi hesaplama
    let infazSuresi = Math.floor(kalanCezaSuresi * kosulluSaliverilmeOrani);
    
    // Kapalı ceza süresi hesaplama
    let kapaliCezaSuresi = 0;
    let acikCezaSuresi = 0;

    if (infazSuresi > 0) {
      // 5 yıl kala açığa ayrılma kuralı
      const besYilKala = 5 * 365; // 5 yıl = 1825 gün
      
      if (infazSuresi > besYilKala) {
        kapaliCezaSuresi = infazSuresi - besYilKala;
        acikCezaSuresi = besYilKala;
      } else {
        kapaliCezaSuresi = infazSuresi;
        acikCezaSuresi = 0;
      }
    }

    // Tarih hesaplamaları
    const tahliyeTarihi = new Date(cezaBaslangicTarihi);
    tahliyeTarihi.setDate(tahliyeTarihi.getDate() + infazSuresi);

    const denetimliSerbestlikTarihi = new Date(cezaBaslangicTarihi);
    denetimliSerbestlikTarihi.setDate(denetimliSerbestlikTarihi.getDate() + infazSuresi - (denetimSuresi * 365));

    // İnfaz oranı hesaplama
    const infazOrani = toplamCezaSuresi > 0 ? (infazSuresi / toplamCezaSuresi) * 100 : 0;

    setSonuc({
      toplamCezaSuresi,
      tutuklulukSuresi: tutuklulukSuresiGun,
      iyiHalIndirimi: iyiHalIndirimiGun,
      kalanCezaSuresi,
      infazSuresi,
      tahliyeTarihi: tahliyeTarihi.toLocaleDateString('tr-TR'),
      denetimliSerbestlikTarihi: denetimliSerbestlikTarihi.toLocaleDateString('tr-TR'),
      toplamGun: toplamCezaSuresi,
      kalanGun: infazSuresi,
      infazOrani,
      iyiHalOrani,
      ozelDurumlar,
      kosulluSaliverilmeOrani: kosulluSaliverilmeOrani * 100,
      denetimSuresi,
      kapaliCezaSuresi,
      acikCezaSuresi
    });
    setShowResult(true);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kopyalaSonuc = () => {
    if (sonuc !== null) {
      const textToCopy = `İnfaz Hesaplama Sonucu:
Toplam Ceza Süresi: ${sonuc.toplamGun} gün
Tutukluluk Süresi: ${sonuc.tutuklulukSuresi} gün
İyi Hal İndirimi: ${sonuc.iyiHalIndirimi} gün
Kalan Ceza Süresi: ${sonuc.kalanCezaSuresi} gün
İnfaz Süresi: ${sonuc.infazSuresi} gün
Tahliye Tarihi: ${sonuc.tahliyeTarihi}
İnfaz Oranı: %${sonuc.infazOrani.toFixed(1)}`;
      
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
      const text = `İnfaz Hesaplama: ${sonuc.infazSuresi} gün infaz süresi`;
      
      if (navigator.share) {
        navigator.share({
          title: 'İnfaz Hesaplama',
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
          <label htmlFor="sucTuru" className="block text-sm font-medium text-gray-700 mb-2">
            Suç Türü *
          </label>
          <select
            id="sucTuru"
            name="sucTuru"
            value={formData.sucTuru}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="uyusturucu">Uyuşturucu Ticareti (TCK 188)</option>
            <option value="kastenOldurme">Kasten Öldürme (TCK 81-83)</option>
            <option value="cinselSuclari">Cinsel Suçlar (TCK 102-105)</option>
            <option value="teror">Terör Suçları (3713 SK)</option>
            <option value="diger">Diğer Suçlar</option>
          </select>
        </div>

        <div>
          <label htmlFor="sucTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            Suç Tarihi *
          </label>
          <input
            type="date"
            id="sucTarihi"
            name="sucTarihi"
            value={formData.sucTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="cezaSuresi" className="block text-sm font-medium text-gray-700 mb-2">
            Ceza Süresi *
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="cezaSuresi"
              name="cezaSuresi"
              value={formData.cezaSuresi}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Örn: 12"
              required
            />
            <select
              id="cezaSuresiBirimi"
              name="cezaSuresiBirimi"
              value={formData.cezaSuresiBirimi}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="gun">Gün</option>
              <option value="ay">Ay</option>
              <option value="yil">Yıl</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="cezaBaslangicTarihi" className="block text-sm font-medium text-gray-700 mb-2">
            Ceza Başlangıç Tarihi *
          </label>
          <input
            type="date"
            id="cezaBaslangicTarihi"
            name="cezaBaslangicTarihi"
            value={formData.cezaBaslangicTarihi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
            <option value="yetişkin">Yetişkin (18+)</option>
            <option value="cocuk">Çocuk (12-18)</option>
          </select>
        </div>

        <div>
          <label htmlFor="cinsiyet" className="block text-sm font-medium text-gray-700 mb-2">
            Cinsiyet *
          </label>
          <select
            id="cinsiyet"
            name="cinsiyet"
            value={formData.cinsiyet}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="erkek">Erkek</option>
            <option value="kadin">Kadın</option>
          </select>
        </div>

        <div>
          <label htmlFor="cocukDurumu" className="block text-sm font-medium text-gray-700 mb-2">
            0-6 Yaş Çocuğu Var Mı?
          </label>
          <select
            id="cocukDurumu"
            name="cocukDurumu"
            value={formData.cocukDurumu}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="hayir">Hayır</option>
            <option value="evet">Evet</option>
          </select>
        </div>

        <div>
          <label htmlFor="mukerir" className="block text-sm font-medium text-gray-700 mb-2">
            Mükerrir Mi? *
          </label>
          <select
            id="mukerir"
            name="mukerir"
            value={formData.mukerir}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="hayir">Hayır</option>
            <option value="evet">Evet</option>
          </select>
        </div>

        <div>
          <label htmlFor="tutuklulukSuresi" className="block text-sm font-medium text-gray-700 mb-2">
            Tutukluluk Süresi (Gün)
          </label>
          <input
            type="number"
            id="tutuklulukSuresi"
            name="tutuklulukSuresi"
            value={formData.tutuklulukSuresi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Örn: 30"
          />
        </div>

        <div>
          <label htmlFor="tutuklulukBaslangic" className="block text-sm font-medium text-gray-700 mb-2">
            Tutukluluk Başlangıç
          </label>
          <input
            type="date"
            id="tutuklulukBaslangic"
            name="tutuklulukBaslangic"
            value={formData.tutuklulukBaslangic}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="tutuklulukBitis" className="block text-sm font-medium text-gray-700 mb-2">
            Tutukluluk Bitiş
          </label>
          <input
            type="date"
            id="tutuklulukBitis"
            name="tutuklulukBitis"
            value={formData.tutuklulukBitis}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="iyiHalIndirimi" className="block text-sm font-medium text-gray-700 mb-2">
            İyi Hal İndirimi *
          </label>
          <select
            id="iyiHalIndirimi"
            name="iyiHalIndirimi"
            value={formData.iyiHalIndirimi}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="evet">Evet</option>
            <option value="hayir">Hayır</option>
          </select>
        </div>

        {formData.iyiHalIndirimi === 'evet' && (
          <div>
            <label htmlFor="iyiHalOrani" className="block text-sm font-medium text-gray-700 mb-2">
              İyi Hal Oranı (%)
            </label>
            <input
              type="number"
              id="iyiHalOrani"
              name="iyiHalOrani"
              value={formData.iyiHalOrani}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Örn: 50"
              min="0"
              max="100"
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Özel Durumlar
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="yasli"
              checked={formData.ozelDurumlar.includes('yasli')}
              onChange={handleCheckboxChange}
              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Yaşlı (65+)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="engelli"
              checked={formData.ozelDurumlar.includes('engelli')}
              onChange={handleCheckboxChange}
              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Engelli</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="hastalik"
              checked={formData.ozelDurumlar.includes('hastalik')}
              onChange={handleCheckboxChange}
              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Hastalık</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="aile"
              checked={formData.ozelDurumlar.includes('aile')}
              onChange={handleCheckboxChange}
              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Aile Durumu</span>
          </label>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={hesaplaInfaz}
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
                {sonuc.toplamGun} Gün
              </p>
              <p className="text-sm text-green-600 mt-2">Toplam Ceza</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {sonuc.infazSuresi} Gün
              </p>
              <p className="text-sm text-blue-600 mt-2">İnfaz Süresi</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">
                {sonuc.tahliyeTarihi}
              </p>
              <p className="text-sm text-red-600 mt-2">Tahliye Tarihi</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 mb-3">Detaylı Bilgiler</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Tutukluluk Süresi:</span>
                <span className="font-semibold ml-2">{sonuc.tutuklulukSuresi} gün</span>
              </div>
              <div>
                <span className="text-gray-600">İyi Hal İndirimi:</span>
                <span className="font-semibold ml-2">{sonuc.iyiHalIndirimi} gün</span>
              </div>
              <div>
                <span className="text-gray-600">Kalan Ceza:</span>
                <span className="font-semibold ml-2">{sonuc.kalanCezaSuresi} gün</span>
              </div>
              <div>
                <span className="text-gray-600">İnfaz Oranı:</span>
                <span className="font-semibold ml-2">%{sonuc.infazOrani.toFixed(1)}</span>
              </div>
              <div>
                <span className="text-gray-600">Koşullu Salıverilme:</span>
                <span className="font-semibold ml-2">%{sonuc.kosulluSaliverilmeOrani.toFixed(0)}</span>
              </div>
              <div>
                <span className="text-gray-600">Denetim Süresi:</span>
                <span className="font-semibold ml-2">{sonuc.denetimSuresi} yıl</span>
              </div>
              <div>
                <span className="text-gray-600">Kapalı Ceza:</span>
                <span className="font-semibold ml-2">{sonuc.kapaliCezaSuresi} gün</span>
              </div>
              <div>
                <span className="text-gray-600">Açık Ceza:</span>
                <span className="font-semibold ml-2">{sonuc.acikCezaSuresi} gün</span>
              </div>
              {sonuc.ozelDurumlar.length > 0 && (
                <div>
                  <span className="text-gray-600">Özel Durumlar:</span>
                  <span className="font-semibold ml-2">{sonuc.ozelDurumlar.join(', ')}</span>
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
        <h4 className="font-semibold text-gray-900 mb-2">İnfaz Hesaplama Kuralları (2024)</h4>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>• Koşullu Salıverilme Oranları:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>• Kasten Öldürme: %67 (2/3)</li>
            <li>• Cinsel Suçlar (Yetişkin): %75 (3/4)</li>
            <li>• Cinsel Suçlar (Çocuk): %67 (2/3)</li>
            <li>• Uyuşturucu Ticareti: %75 (3/4)</li>
            <li>• Terör Suçları: %75 (3/4)</li>
            <li>• Diğer Suçlar: %50 (1/2)</li>
            <li>• Mükerrirler: %67 (2/3)</li>
          </ul>
          <p><strong>• Denetimli Serbestlik:</strong> İstisna suçlarda 1 yıl, diğerlerinde 3 yıl</p>
          <p><strong>• 5 Yıl Kala Açığa Ayrılma:</strong> Kapalı ceza süresi 5 yıl kala sona erer</p>
          <p><strong>• Özel Durumlar:</strong> Yaşlı (%10), Engelli (%15), Hastalık (%5), Aile (%3)</p>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">Önemli Notlar</h5>
          <div className="text-xs text-blue-800 space-y-1">
            <p>• 30.03.2020 öncesi suçlarda farklı kurallar uygulanır</p>
            <p>• Tutukluluk süresi cezadan düşülür</p>
            <p>• İyi hal indirimi %50'yi geçemez</p>
            <p>• Özel durumlar toplanabilir</p>
            <p>• Mükerrir durumunda özel infaz rejimi uygulanır</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Bu hesaplama genel bilgi amaçlıdır. Kesin hesaplama için avukatınıza başvurun.
        </p>
      </div>
    </div>
  );
};

export default InfazHesaplama; 