import { Hizmet, IletisimBilgileri } from '@/types';

export const hizmetler: Hizmet[] = [
  {
    id: '1',
    baslik: 'Ticaret Hukuku',
    aciklama: 'Şirket kuruluşu, birleşme ve devralma işlemleri, ticari sözleşmeler',
    icon: 'Building2',
    detaylar: [
      'Şirket kuruluşu ve yapılandırma',
      'Birleşme ve devralma işlemleri',
      'Ticari sözleşme hazırlama ve müzakereler',
      'Ticari uyuşmazlık çözümü',
      'Şirket yönetimi danışmanlığı'
    ]
  },
  {
    id: '2',
    baslik: 'Aile Hukuku',
    aciklama: 'Boşanma, nafaka, velayet, mal paylaşımı konularında hukuki danışmanlık',
    icon: 'Heart',
    detaylar: [
      'Boşanma davaları',
      'Nafaka ve velayet işlemleri',
      'Mal paylaşımı',
      'Evlat edinme işlemleri',
      'Aile içi şiddet vakaları'
    ]
  },
  {
    id: '3',
    baslik: 'İş Hukuku',
    aciklama: 'İşçi-işveren uyuşmazlıkları, toplu iş hukuku, sosyal güvenlik',
    icon: 'Briefcase',
    detaylar: [
      'İş sözleşmesi hazırlama',
      'İşçi-işveren uyuşmazlıkları',
      'Toplu iş hukuku',
      'Sosyal güvenlik hukuku',
      'İş kazası ve meslek hastalığı'
    ]
  },
  {
    id: '4',
    baslik: 'Ceza Hukuku',
    aciklama: 'Ceza davalarında savunma, soruşturma aşamasında hukuki danışmanlık',
    icon: 'Shield',
    detaylar: [
      'Ceza davalarında savunma',
      'Soruşturma aşamasında danışmanlık',
      'Tutuklama ve gözaltı işlemleri',
      'Adli yardım başvuruları',
      'Ceza muhakemesi hukuku'
    ]
  }
];



export const iletisimBilgileri: IletisimBilgileri = {
  adres: 'Ankara, Türkiye',
  telefon: '+90 505 398 9981',
  email: 'info@ismailcavus.av.tr',
  calismaSaatleri: 'Pazartesi - Cuma: 09:00 - 18:00'
};

 