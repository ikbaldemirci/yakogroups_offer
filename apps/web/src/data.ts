export type PersonCountTier = '0-25' | '25-50' | '50-75' | '75-100';

export interface ProductDetail {
  title: string;
  text: string;
}

export interface BaseProduct {
  id: string;
  category?: string;
  subcategory?: string;
  title: string;
  description?: string; 
  summary?: string;     
  details?: ProductDetail[]; 
  currency?: string;
  vatIncluded?: boolean;
  photoUrl: string;
}

export interface FixedPriceProduct extends BaseProduct {
  type: 'fixed';
  price: number;
}

export interface TieredPriceProduct extends BaseProduct {
  type: 'tiered';
  priceTiers: Record<PersonCountTier, number>;
}

export type Product = FixedPriceProduct | TieredPriceProduct;

export interface Category {
  id: string;
  title: string;
  title2?: string;
  description?: string;
  description2?: string;
  items: Product[];
  items2?: Product[];
}

export const categories: Category[] = [
  {
    id: 'menus',
    title: 'Menü Seçenekleri',
    description: 'Etkinliğiniz için yiyecek ve içecek seçeneklerimiz',
    items: [
      {
        id: 'm1',
        category: 'menus',
        subcategory: 'kahvalti',
        type: 'fixed',
        title: 'SOKAK LEZZETLERİ KAHVALTI',
        summary: '40 kişi altı gruplar için tercih edilebilir.',
        details: [
          {
            title: 'Sandwich Köşesi',
            text: 'İsteğe bağlı olarak 12 çeşit üründen hazırlanılacak olan sandwich köşesi'
          },
          {
            title: 'Sıcak Köşesi',
            text: 'Omlet, menemen'
          },
          {
            title: 'Pastane Köşesi',
            text: 'Simit ve açma çeşitleri (sade, zeytinli), tatlı ve tuzlu kurabiyeler'
          }
        ],
        price: 775,
        currency: 'TRY',
        vatIncluded: false,
        photoUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=300&fit=crop'
      },
      {
      id: 'm2',
      category: 'menus',
      subcategory: 'kahvalti',
      type: 'fixed',
      title: 'SERPME KAHVALTI',
      summary: '40 kişi altı gruplar için tercih edilebilir.',
      details: [
        {
          title: 'Şarküteri',
          text: 'Kaşar peyniri, beyaz peynir, kaymak, salam'
        },
        {
          title: 'Zeytin Tabağı',
          text: 'Siyah ve yeşil zeytin'
        },
        {
          title: 'Reçel - Tatlı Tabağı',
          text: 'Çilek reçeli, bal, sarelle'
        },
        {
          title: 'Söğüş Tabağı',
          text: 'Domates, salatalık, biber'
        },
        {
          title: 'Sos Tabağı',
          text: 'Acuka, şakşuka'
        },
        {
          title: 'Sıcaklar',
          text: 'Sigara böreği, menemen, sahanda sucuk'
        }
      ],
      price: 800,
      currency: 'TRY',
      vatIncluded: false,
      photoUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&h=300&fit=crop',
    }
    ]
  },
  {
    id: 'animations-inflatables',
    title: 'Animasyon ve Şişme Oyunlar',
    description: 'Çocuklar ve yetişkinler için eğlenceli oyun alanları',
    title2: "fmaklfa",
    description2: "gagaga",
    items: [
      {
        id: 'a1',
        type: 'fixed',
        title: 'Dev Şişme Kaydırak',
        description: 'Etkinlik alanına kurulan 5x10 metre şişme kaydırak',
        price: 5000,
        photoUrl: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c7e7?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 'a2',
        type: 'fixed',
        title: 'Sumo Güreşi',
        description: '2 adet şişme sumo kıyafeti ve minder',
        price: 2500,
        photoUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 'a3',
        type: 'fixed',
        title: 'Animatör Gösterisi',
        description: 'Yüz boyama, sosis balon ve mini yarışmalar (2 Saat)',
        price: 3000,
        photoUrl: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=400&h=300&fit=crop'
      }
    ],
    items2: [
      {
        id: 'a1',
        type: 'fixed',
        title: 'Dev Şişme Kaydırak',
        description: 'Etkinlik alanına kurulan 5x10 metre şişme kaydırak',
        price: 5000,
        photoUrl: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c7e7?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 'a2',
        type: 'fixed',
        title: 'Sumo Güreşi',
        description: '2 adet şişme sumo kıyafeti ve minder',
        price: 2500,
        photoUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 'a3',
        type: 'fixed',
        title: 'Animatör Gösterisi',
        description: 'Yüz boyama, sosis balon ve mini yarışmalar (2 Saat)',
        price: 3000,
        photoUrl: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=400&h=300&fit=crop'
      }
    ]
  },
  {
    id: 'park-decor',
    title: 'Park Dekor Önerileri',
    description: 'Konseptinize uygun dekorasyon ve süsleme paketleri',
    items: [
      {
        id: 'd1',
        type: 'fixed',
        title: 'Standart Süsleme Paneli',
        description: 'Logo baskılı arka fon, 100 adet uçan balon ve karşılama panosu',
        price: 4500,
        photoUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 'd2',
        type: 'fixed',
        title: 'Premium Panayır Konsept',
        description: 'Panayır çadırları, renkli bayrak setleri ve giriş tagı',
        price: 15000,
        photoUrl: 'https://images.unsplash.com/photo-1508925350320-1a221b023e65?q=80&w=400&h=300&fit=crop'
      }
    ]
  },
  {
    id: 'team-activities',
    title: 'Takım Aktiviteleri',
    description: 'Kişi sayısına göre fiyatlandırılan ekip oyunları',
    items: [
      {
        id: 't1',
        type: 'tiered',
        title: 'Survivor Parkuru',
        description: '5 farklı engelden oluşan zorlu ve rekabetçi parkur',
        priceTiers: {
          '0-25': 8000,
          '25-50': 12000,
          '50-75': 16000,
          '75-100': 20000
        },
        photoUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 't2',
        type: 'tiered',
        title: 'Canlı Langırt',
        description: 'Oyuncuların piyon olduğu dev canlı langırt turnuvası',
        priceTiers: {
          '0-25': 5000,
          '25-50': 7500,
          '50-75': 10000,
          '75-100': 12000
        },
        photoUrl: 'https://images.unsplash.com/photo-1518621845118-2fe4f7affedc?q=80&w=400&h=300&fit=crop'
      },
      {
        id: 't3',
        type: 'tiered',
        title: 'Hazine Avı',
        description: 'Gizli ipuçlarını bularak takım çalışmasını güçlendiren oyun',
        priceTiers: {
          '0-25': 4000,
          '25-50': 6000,
          '50-75': 8000,
          '75-100': 10000
        },
        photoUrl: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400&h=300&fit=crop'
      }
    ]
  }
];
