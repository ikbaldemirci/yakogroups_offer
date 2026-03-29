import type { Category } from "../types";

export const teknikekipmanCategory: Category = {
  "id": "teknik-ekipman",
  "title": "Teknik Ekipman",
  "description": "Organizasyonlar için gerekli profesyonel teknik donanım ve hizmetler",
  "subcategories": [
    {
      "title": "Destek Hizmetleri",
      "items": [
        {
          "id": "te31",
          "category": "teknik-ekipman",
          "subcategory": "destek-hizmetleri",
          "type": "tiered",
          "title": "SES SİSTEMİ VE TEKNİK",
          "summary": "Organizasyonlarda müzik, anons ve canlılık için gerekli teknik ses altyapısını sağlayan destek hizmetidir.",
          "details": [
            {
              "title": "Ses Sistemi",
              "text": "Etkinlik alanında müzik ve anonslar için gerekli profesyonel ses sistemi kurulumu yapılır."
            },
            {
              "title": "Hoparlörler",
              "text": "Alan büyüklüğüne uygun profesyonel hoparlör sistemi sağlanır."
            },
            {
              "title": "İsteğe Bağlı DJ",
              "text": "DJ hizmeti isteğe bağlı olarak eklenebilir."
            },
            {
              "title": "DJ’siz Paket",
              "text": "Fiyat: 25.000 TL + KDV"
            },
            {
              "title": "DJ’li Paket",
              "text": "Fiyat: 40.000 TL + KDV"
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Piknik ve kurumsal etkinliklerde motivasyonun ve canlılığın ana unsurlarından biri olan ses sistemi ve müzik altyapısıdır."
            }
          ],
          "priceTiers": {
            "0-25": 25000,
            "25-50": 25000,
            "50-75": 25000,
            "75-100": 25000,
            "100+": 25000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606389/ses-sistemi_m7tuzn.jpg"
        },
        {
          "id": "te32",
          "category": "teknik-ekipman",
          "subcategory": "destek-hizmetleri",
          "type": "tiered",
          "title": "DEKOR - BRANDING",
          "summary": "Takım veya marka logosunun yer aldığı country backdrop önünde fotoğraf çekimi ve paylaşım için ideal branding çözümüdür.",
          "details": [
            {
              "title": "Aktivite Açıklaması",
              "text": "Ekipçe marka logonuzun ve mottomuzun yer aldığı country backdrop önünde fotoğraf çektirmek ve paylaşmak için ideal bir seçenektir."
            }
          ],
          "priceTiers": {
            "0-25": 10000,
            "25-50": 10000,
            "50-75": 10000,
            "75-100": 10000,
            "100+": 10000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606636/dekorbrand_vfqcxd.png"
        },
        {
          "id": "te33",
          "category": "teknik-ekipman",
          "subcategory": "destek-hizmetleri",
          "type": "tiered",
          "title": "PRODÜKSİYON",
          "summary": "Anıları profesyonel ekip ile fotoğraf, video ve drone çekimiyle kayıt altına alan prodüksiyon hizmetidir.",
          "details": [
            {
              "title": "Fotoğraf",
              "text": "14.000 TL + KDV"
            },
            {
              "title": "Kamera",
              "text": "14.000 TL + KDV"
            },
            {
              "title": "Drone",
              "text": "10.000 TL + KDV"
            },
            {
              "title": "Montaj",
              "text": "14.000 TL + KDV"
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Anıları geleceğe aktarmak için profesyonel ekip ile fotoğraf, video, drone ve montaj hizmetleri sunulur."
            }
          ],
          "priceTiers": {
            "0-25": 14000,
            "25-50": 14000,
            "50-75": 14000,
            "75-100": 14000,
            "100+": 14000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606403/prod%C3%BCksiyon_lgjslo.jpg"
        }
      ]
    }
  ]
};
