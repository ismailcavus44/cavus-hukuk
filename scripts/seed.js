const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Environment variables eksik!');
  console.error('NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY gerekli.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mevcut kategoriler
const kategoriler = [
  {
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, ticari sözleşmeler, şirket birleşmeleri ve devralmaları konularında uzman danışmanlık hizmeti.',
    slug: 'ticaret-hukuku',
    color: '#dc2626'
  },
  {
    title: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet, mal paylaşımı ve aile içi uyuşmazlıklar konularında hassas ve profesyonel hizmet.',
    slug: 'aile-hukuku',
    color: '#dc2626'
  },
  {
    title: 'İş Hukuku',
    description: 'İşçi-işveren uyuşmazlıkları, iş sözleşmeleri, iş güvenliği ve sosyal güvenlik konularında kapsamlı danışmanlık.',
    slug: 'is-hukuku',
    color: '#dc2626'
  },
  {
    title: 'Ceza Hukuku',
    description: 'Ceza davaları, savunma ve hukuki danışmanlık konularında güçlü savunma stratejileri geliştiriyoruz.',
    slug: 'ceza-hukuku',
    color: '#dc2626'
  },
  {
    title: 'Miras Hukuku',
    description: 'Miras paylaşımı, vasiyetname ve miras davaları konularında uzman hukuki danışmanlık hizmeti.',
    slug: 'miras-hukuku',
    color: '#dc2626'
  }
];

// Mevcut blog yazıları
const blogYazilari = [
  {
    title: 'Ticaret Hukukunda Yeni Düzenlemeler',
    excerpt: '2024 yılında ticaret hukukunda yapılan değişiklikler ve şirketlere etkileri hakkında detaylı bilgi.',
    content: 'Bu yazıda, son zamanlarda yapılan yasal düzenlemelerin etkilerini ve müvekkillerimiz için önemini ele alıyoruz.',
    author: 'Av. İsmail Çavuş',
    date: '2024-01-15',
    read_time: '5 dk',
    category: 'Ticaret Hukuku',
    image: '/blog-1.jpg',
    tags: ['Ticaret Hukuku', 'Yasal Düzenlemeler']
  },
  {
    title: 'Boşanma Sürecinde Dikkat Edilmesi Gerekenler',
    excerpt: 'Boşanma davalarında haklarınızı korumak için bilmeniz gereken önemli noktalar.',
    content: 'Bu kategorideki davalarda başarılı olmak için uyguladığımız stratejileri ve yaklaşımları paylaşıyoruz.',
    author: 'Av. İsmail Çavuş',
    date: '2024-01-10',
    read_time: '7 dk',
    category: 'Aile Hukuku',
    image: '/blog-2.jpg',
    tags: ['Aile Hukuku', 'Dava Stratejileri']
  },
  {
    title: 'İş Hukukunda İşçi Hakları',
    excerpt: 'İşçilerin hakları ve işveren karşısında korunma yöntemleri hakkında rehber.',
    content: 'Bu alanda en çok karşılaştığımız soruları ve bunların detaylı cevaplarını sizlerle paylaşıyoruz.',
    author: 'Av. İsmail Çavuş',
    date: '2024-01-05',
    read_time: '6 dk',
    category: 'İş Hukuku',
    image: '/blog-3.jpg',
    tags: ['İş Hukuku', 'SSS']
  },
  {
    title: 'Ceza Davalarında Savunma Stratejileri',
    excerpt: 'Ceza davalarında etkili savunma için uygulanması gereken stratejiler.',
    content: 'Bu kategorideki önemli mahkeme kararlarını ve bunların pratik etkilerini analiz ediyoruz.',
    author: 'Av. İsmail Çavuş',
    date: '2023-12-28',
    read_time: '8 dk',
    category: 'Ceza Hukuku',
    image: '/blog-4.jpg',
    tags: ['Ceza Hukuku', 'Mahkeme Kararları']
  },
  {
    title: 'Miras Hukukunda Vasiyetname Hazırlama',
    excerpt: 'Vasiyetname hazırlarken dikkat edilmesi gereken yasal gereklilikler.',
    content: 'Bu alandaki uzmanlığımızı ve deneyimlerimizi paylaştığımız detaylı bir analiz yazısı.',
    author: 'Av. İsmail Çavuş',
    date: '2023-12-20',
    read_time: '4 dk',
    category: 'Miras Hukuku',
    image: '/blog-5.jpg',
    tags: ['Miras Hukuku', 'Uzman Görüşü']
  },
  {
    title: 'Şirket Birleşmelerinde Hukuki Süreçler',
    excerpt: 'Şirket birleşmeleri ve devralmaları sürecinde dikkat edilmesi gereken hukuki konular.',
    content: 'Bu kategorideki son gelişmeleri ve bunların hukuki süreçlere etkilerini değerlendiriyoruz.',
    author: 'Av. İsmail Çavuş',
    date: '2023-12-25',
    read_time: '5 dk',
    category: 'Ticaret Hukuku',
    image: '/blog-6.jpg',
    tags: ['Ticaret Hukuku', 'Güncel Gelişmeler']
  }
];

// Mevcut hesaplama araçları
const hesaplamaAraclari = [
  {
    title: 'Nafaka Hesaplama',
    description: 'Çocuk ve eş nafakası hesaplama aracı. Gelir durumu, yaş, eğitim durumu gibi faktörleri dikkate alarak hesaplama yapar.',
    slug: 'nafaka',
    category: 'Aile Hukuku',
    icon: 'Heart',
    is_active: true
  },
  {
    title: 'Tazminat Hesaplama',
    description: 'Maddi ve manevi tazminat hesaplama aracı. Kazanç kaybı, tedavi giderleri, acı ve ıstırap tazminatı hesaplar.',
    slug: 'tazminat',
    category: 'Ceza Hukuku',
    icon: 'DollarSign',
    is_active: true
  },
  {
    title: 'İşe İade Tazminatı',
    description: 'İşe iade davalarında tazminat hesaplama aracı. Kıdem tazminatı, ihbar tazminatı ve diğer hakları hesaplar.',
    slug: 'ise-iade',
    category: 'İş Hukuku',
    icon: 'Users',
    is_active: true
  },
  {
    title: 'Mal Paylaşımı',
    description: 'Boşanma sürecinde mal paylaşımı hesaplama aracı. Müşterek mal varlığının adil paylaşımını hesaplar.',
    slug: 'mal-paylasimi',
    category: 'Aile Hukuku',
    icon: 'Building2',
    is_active: true
  },
  {
    title: 'Ceza Süresi Hesaplama',
    description: 'Ceza süresi hesaplama aracı. Hapis cezası, para cezası ve diğer ceza türlerinin sürelerini hesaplar.',
    slug: 'ceza-suresi',
    category: 'Ceza Hukuku',
    icon: 'Gavel',
    is_active: true
  },
  {
    title: 'Dava Süresi Hesaplama',
    description: 'Dava süreleri hesaplama aracı. Zamanaşımı, hak düşürücü süreler ve dava sürelerini hesaplar.',
    slug: 'dava-suresi',
    category: 'Ceza Hukuku',
    icon: 'Clock',
    is_active: true
  },
  {
    title: 'Kira Artış Oranı',
    description: 'Kira artış oranı hesaplama aracı. TÜFE oranlarına göre yasal kira artış oranını hesaplar.',
    slug: 'kira-artis',
    category: 'Gayrimenkul',
    icon: 'Calculator',
    is_active: true
  },
  {
    title: 'Miras Paylaşımı',
    description: 'Miras paylaşımı hesaplama aracı. Yasal mirasçıların pay oranlarını ve haklarını hesaplar.',
    slug: 'miras-paylasimi',
    category: 'Miras Hukuku',
    icon: 'Scale',
    is_active: true
  },
  {
    title: 'Şirket Değerleme',
    description: 'Şirket değerleme hesaplama aracı. Şirket birleşmeleri ve devralmaları için değerleme yapar.',
    slug: 'sirket-degerleme',
    category: 'Ticaret Hukuku',
    icon: 'Building2',
    is_active: true
  }
];

async function seedData() {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('🌱 Veriler yükleniyor...');
    }

    // Kategorileri ekle
    if (process.env.NODE_ENV === 'development') {
      console.log('\n📂 Kategoriler ekleniyor...');
    }
    for (const kategori of kategoriler) {
      const { error } = await supabase
        .from('kategoriler')
        .insert([kategori]);
      
      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`❌ ${kategori.title} eklenirken hata:`, error.message);
        }
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log(`✅ ${kategori.title} eklendi`);
        }
      }
    }

    // Blog yazılarını ekle
    if (process.env.NODE_ENV === 'development') {
      console.log('\n📝 Blog yazıları ekleniyor...');
    }
    for (const yazi of blogYazilari) {
      const { error } = await supabase
        .from('blog_yazilari')
        .insert([yazi]);
      
      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`❌ ${yazi.title} eklenirken hata:`, error.message);
        }
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log(`✅ ${yazi.title} eklendi`);
        }
      }
    }

    // Hesaplama araçlarını ekle
    if (process.env.NODE_ENV === 'development') {
      console.log('\n🧮 Hesaplama araçları ekleniyor...');
    }
    for (const arac of hesaplamaAraclari) {
      const { error } = await supabase
        .from('hesaplama_araclari')
        .insert([arac]);
      
      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`❌ ${arac.title} eklenirken hata:`, error.message);
        }
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log(`✅ ${arac.title} eklendi`);
        }
      }
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('\n🎉 Veriler başarıyla yüklendi!');
      console.log('\n📊 Özet:');
      console.log(`   • ${kategoriler.length} kategori`);
      console.log(`   • ${blogYazilari.length} blog yazısı`);
      console.log(`   • ${hesaplamaAraclari.length} hesaplama aracı`);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Veri yükleme hatası:', error);
    }
  }
}

seedData(); 