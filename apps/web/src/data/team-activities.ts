import type { Category } from "../types";

export const teamactivitiesCategory: Category = {
  "id": "team-activities",
  "title": "Takım Aktiviteleri",
  "description": "Kişi sayısına göre fiyatlandırılan ekip oyunları",
  "subcategories": [
    {
      "title": "Parkur",
      "items": [
        {
          "id": "t1",
          "category": "team-activities",
          "subcategory": "parkur",
          "type": "tiered",
          "title": "SURVIVOR PARKURLARI",
          "summary": "Survivor parkurları, Türkiye'nin en büyük ve en etkileyici parkurlarından biridir. Takım ruhuyla hareket etmeyi öğretirken bireylerin kişisel motivasyonlarını artırır ve ekip içi iletişimi güçlendirir.",
          "priceTiers": {
            "0-25": 67500,
            "25-50": 67500,
            "50-75": 67500,
            "75-100": 67500,
            "100+": 67500
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=H-HbmTaCtdw",
          "detail_link": "https://fitnesstanbull.com/survivor-parkurlari/"
        }
      ]
    },
    {
      "title": "Aktivite",
      "items": [
        {
          "id": "t2",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "ARCHERY TAG",
          "summary": "Okçuluk workshop'u ile başlayan aktivitede katılımcılar klasik ok atışını öğrenir, hedeflere atış yaparak deneyim kazanır ve ardından takımlara ayrılarak Archery Tag mücadelesine katılır.",
          "priceTiers": {
            "0-25": 67500,
            "25-50": 67500,
            "50-75": 67500,
            "75-100": 67500,
            "100+": 67500
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=JoloXH5f8Is",
          "detail_link": "https://fitnesstanbull.com/archery-tag/"
        },
        {
          "id": "t10",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LEONARDO DA VINCI KÖPRÜSÜ",
          "summary": "Katılımcıların Leonardo Da Vinci'nin tasarım mantığını kullanarak birlikte köprü kurduğu takım aktivitesidir.",
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=Kd2uRjTHsJA",
          "detail_link": "https://fitnesstanbull.com/leanardo-da-vinci-koprusu/"
        },
        {
          "id": "t16",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LAZER TAG",
          "summary": "Paintball mücadelesinin güvenli versiyonu olan bu aktivitede takımlar lazer sensörlerle stratejik mücadele eder.",
          "priceTiers": {
            "0-25": 90000,
            "25-50": 90000,
            "50-75": 90000,
            "75-100": 90000,
            "100+": 90000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/lazer-tag/"  
        },
        {
          "id": "t26",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "NERF",
          "summary": "Aksiyon dolu, stres atmaya ve enerjiyi boşaltmaya yönelik takım rekabeti sunan popüler aktivitedir.",
          "priceTiers": {
            "0-25": 105000,
            "25-50": 105000,
            "50-75": 105000,
            "75-100": 105000,
            "100+": 105000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/nerf/"
          
        }
      ]
    },
    {
      "title": "Zeka Oyunları",
      "items": [
        {
          "id": "t3",
          "category": "team-activities",
          "subcategory": "zeka-oyunlari",
          "type": "tiered",
          "title": "MASA ÜZERİ AKIL OYUNLARI",
          "summary": "Oyunlaştırarak öğrenme yaklaşımıyla takım uyumu ve motivasyonu artıran masa üstü aktivite setidir. 4 Oyun İstasyonu.",
          "priceTiers": {
            "0-25": 25000,
            "25-50": 25000,
            "50-75": 25000,
            "75-100": 25000,
            "100+": 25000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=CsiVGfZsPvM",
          "detail_link": "https://fitnesstanbull.com/masa-uzeri-akil-oyunlari/"
        }
      ]
    },
    {
      "title": "Teambuilding",
      "items": [
        {
          "id": "t4",
          "category": "team-activities",
          "subcategory": "teambuilding",
          "type": "tiered",
          "title": "TEAMBUILDING AKTİVİTELER",
          "summary": "Şirket veya kurumlara özel geliştirilen, takım oluşturma ve ekip iletişimini güçlendiren motivasyonel aktivitelerdir.",
          "priceTiers": {
            "0-25": 35000,
            "25-50": 35000,
            "50-75": 35000,
            "75-100": 35000,
            "100+": 35000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=KN4JS8jG3vE",
          "detail_link": "https://fitnesstanbull.com/teambulding-aktiviteler/"
        }
      ]
    },
    {
      "title": "Yaratıcı Aktivite",
      "items": [
        {
          "id": "t5",
          "category": "team-activities",
          "subcategory": "yaratici-aktivite",
          "type": "tiered",
          "title": "KENDİ MARKANI YARAT REKLAM FİLMİ ÇEK AKTİVİTESİ",
          "summary": "Takımların kendi markalarını oluşturup ürünlerine özel reklam filmi tasarladığı yaratıcı ekip aktivitesidir.",
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/kendi-markani-yarat-reklam-filmi-cek/"
        },
        {
          "id": "t19",
          "category": "team-activities",
          "subcategory": "yaratici-aktivite",
          "type": "tiered",
          "title": "FOTO SAFARİ CHALLENGE",
          "summary": "Katılımcıların eğitim sonrası görev listesine göre en iyi kareleri yakalamaya çalıştığı yaratıcı takım aktivitesidir.",
          "priceTiers": {
            "0-25": 80000,
            "25-50": 80000,
            "50-75": 80000,
            "75-100": 80000,
            "100+": 80000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/kendi-markani-yarat-reklam-filmi-cek/"

        }
      ]
    },
    {
      "title": "Sanat Aktivitesi",
      "items": [
        {
          "id": "t6",
          "category": "team-activities",
          "subcategory": "sanat-aktivitesi",
          "type": "tiered",
          "title": "EKSANTRİK SALVADOR DALİ AKTİVİTESİ",
          "summary": "Takımların birlikte büyük bir resmi tamamladığı, iş birliği ve koordinasyon gerektiren yaratıcı sanat aktivitesidir.",
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=Q7MrLW1CJR0",
          "detail_link": "https://fitnesstanbull.com/egzantrik-salvador-dali/"

        }
      ]
    },
    {
      "title": "Challenge",
      "items": [
        {
          "id": "t7",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "EGG DROP CHALLENGE",
          "summary": "Katılımcıların sınırlı kaynaklarla yumurtayı yüksekten düşmeye dayanıklı hale getirmeye çalıştığı proje bazlı takım oyunudur.",
          "priceTiers": {
            "0-25": 40000,
            "25-50": 40000,
            "50-75": 40000,
            "75-100": 40000,
            "100+": 40000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=THyfW-fiOpA",
          "detail_link": "https://fitnesstanbull.com/egg-drop-challange/"
        },
        {
          "id": "t8",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "FORMULA TURKO CHALLENGE",
          "summary": "Takımların kendi araçlarını inşa edip tasarladığı yaratıcı ve rekabetçi takım aktivitesidir.",
          "priceTiers": {
            "0-25": 95000,
            "25-50": 95000,
            "50-75": 95000,
            "75-100": 95000,
            "100+": 95000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=m1iadJXLUtg",
          "detail_link": "https://fitnesstanbull.com/formula-turko-challange/"

        },
        {
          "id": "t12",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "İSKAMBİL KULESİ",
          "summary": "Katılımcıların sınırlı kaynakla en yüksek kuleyi yapmaya çalıştığı, planlama ve sabır gerektiren takım aktivitesidir.",
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000 
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/iskambil-kulesi/"

        },
        {
          "id": "t13",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "LOGO CHALLENGE",
          "summary": "Katılımcıların şirket logosunu yeniden yorumlayıp yaratıcı fikirlerle ortaya çıkardığı takım aktivitesidir.",
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/logo-challange/"
        },
        {
          "id": "t14",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "MARSHMALLOW CHALLENGE",
          "summary": "Takımların sınırlı malzemelerle en yüksek kuleyi yapmaya çalıştığı rekabetçi ve yaratıcı takım oyunudur.",
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/marshmallow-challange/"
        }
      ]
    },
    {
      "title": "Workshop",
      "items": [
        {
          "id": "t9",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "KOKTEYL WORKSHOP",
          "summary": "Katılımcıların yaratıcı kokteyller hazırladığı eğlenceli ve interaktif bir workshop aktivitesidir. Alkolsüz 50.000 TL, alkollü 75.000 TL'dir.",
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=OqVcIQh1ECE",
          "detail_link": "https://fitnesstanbull.com/kokteyl-workshop/"
        },
        {
          "id": "t11",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "CHEF SENSİN",
          "summary": "Katılımcıların deneyimli şeflerle birlikte mutfak kültürlerini keşfettiği, ekip olarak üretim yaptığı atölye aktivitesidir.",
          "priceTiers": {
            "0-25": 100000,
            "25-50": 100000,
            "50-75": 100000,
            "75-100": 100000,
            "100+": 100000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=HRla_c7dw7g",
          "detail_link": "https://fitnesstanbull.com/mutfak-atolyeler/"
        },
        {
          "id": "t21",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "RİTİM PERKÜSYON ATÖLYESİ",
          "summary": "Katılımcıların birlikte ritim üreterek orkestra deneyimi yaşadığı, ekip motivasyonunu artıran müzik atölyesidir.",
          "warning": "Malzemeler Hariç",
          "priceTiers": {
            "0-25": 85000,
            "25-50": 85000,
            "50-75": 85000,
            "75-100": 85000,
            "100+": 85000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=md78XbjVoAs",
          "detail_link": "https://fitnesstanbull.com/kendi-markani-yarat-reklam-filmi-cek/"
        },
        {
          "id": "t22",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "GRAFFITI WORKSHOP",
          "summary": "Katılımcıların birlikte üretim yaparak graffiti sanatını deneyimlediği yaratıcı atölye çalışmasıdır.",
          "priceTiers": {
            "0-25": 200000,
            "25-50": 200000,
            "50-75": 200000,
            "75-100": 200000,
            "100+": 200000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/graffiti-workshop/"
        }
      ]
    },
    {
      "title": "Dedektif Oyunu",
      "items": [
        {
          "id": "t15",
          "category": "team-activities",
          "subcategory": "dedektif-oyunu",
          "type": "tiered",
          "title": "SUÇLU KİM AKTİVİTESİ",
          "summary": "Katılımcıların ipuçlarını birleştirerek olay çözmeye çalıştığı strateji ve analiz odaklı takım aktivitesidir.",
          "priceTiers": {
            "0-25": 100000,
            "25-50": 100000,
            "50-75": 100000,
            "75-100": 100000,
            "100+": 100000

          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=9HVxovjpH98",
          "detail_link": "https://fitnesstanbull.com/suclu-kim-aktivitesi/"
        }
      ]
    },
    {
      "title": "Wellness",
      "items": [
        {
          "id": "t17",
          "category": "team-activities",
          "subcategory": "wellness",
          "type": "tiered",
          "title": "YOGA TERAPİ",
          "summary": "Yoga duruşları ve nefes teknikleri ile beden ve zihni dengelemeye yönelik kurumsal terapi aktivitesidir.",
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/kendi-markani-yarat-reklam-filmi-cek/"
        }
      ]
    },
    {
      "title": "Outdoor",
      "items": [
        {
          "id": "t18",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "HAZİNE AVI",
          "summary": "Takımların görevleri tamamlayarak dayanışma ve yardımlaşma içinde ilerlediği macera dolu kurumsal aktivitedir.",
          "priceTiers": {
            "0-25": 85000,
            "25-50": 85000,
            "50-75": 85000,
            "75-100": 85000,
            "100+": 85000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/hazine-avi/"
        },
        {
          "id": "t28",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "ORMANDA ESARETTEN KURTULMA",
          "summary": "Şifre çözme, görev tamamlama, harita okuma ve liderlik becerilerini test eden açık hava macera aktivitesidir.",
          "warning": "Kişi Sayısı: Min 24 kişi- max 48 kişi ile Oynanmaktadır",
          "priceTiers": {
            "0-25": 2800,
            "25-50": 2800,
            "50-75": 2800,
            "75-100": 2800,
            "100+": 2800
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=VUbjJyYbR-8",
          "detail_link": "https://fitnesstanbull.com/dogada-hayatta-kalma-ve-strateji-oyunlari/"
        },
        {
          "id": "t29",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "YELKEN AKTİVİTESİ",
          "summary": "Takım çalışması, ekip motivasyonu ve iletişim odaklı su sporları aktivitesidir.",
          "priceTiers": {
            "0-25": 0,
            "25-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=yjnvd2zYvJs",
          "detail_link": "https://fitnesstanbull.com/yelken-aktivitesi/"
        },
        {
          "id": "t30",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "RAFTING",
          "summary": "Debisi yüksek nehirlerde yapılan, takım uyumu ve heyecanı ön plana çıkaran adrenalin dolu su sporudur.",
          "priceTiers": {
            "0-25": 0,
            "25-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://fitnesstanbull.com/rafting/"
        }
      ]
    },
    {
      "title": "Performans",
      "items": [
        {
          "id": "t20",
          "category": "team-activities",
          "subcategory": "performans",
          "type": "tiered",
          "title": "BEYAZ YAKA DANS CHALLENGE",
          "summary": "Katılımcıların müzik ve dans eşliğinde takım halinde eğlendiği, motivasyonu yükselten performans aktivitesidir.",
          "priceTiers": {
            "0-25": 110000,
            "25-50": 110000,
            "50-75": 110000,
            "75-100": 110000,
            "100+": 110000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://www.fitnesstanbull.com/beyaz-yaka-dans-challange"
        },
        {
          "id": "t27",
          "category": "team-activities",
          "subcategory": "performans",
          "type": "tiered",
          "title": "TAKIM KOREOGRAFİSİ",
          "summary": "Katılımcıların birlikte oluşturduğu koreografi ve havadan çekimlerle unutulmaz anılar yaratan takım aktivitesidir.",
          "priceTiers": {
            "0-25": 25000,
            "25-50": 25000,
            "50-75": 25000,
            "75-100": 25000,
            "100+": 25000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=300&fit=crop",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://www.fitnesstanbull.com/takim-koreografisi/"
        }
      ]
    },
    {
      "title": "Sosyal Sorumluluk",
      "items": [
        {
          "id": "t23",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "BİSİKLET YAPIM ATÖLYESİ",
          "summary": "Kurumsal sosyal sorumluluk ve takım çalışmasını birleştiren, demonte bisikletlerin monte edilip ihtiyaç sahibi çocuklara hediye edildiği atölyedir.",
          "priceTiers": {
            "0-25": 80000,
            "25-50": 80000,
            "50-75": 80000,
            "75-100": 80000,
            "100+": 80000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=400&h=300&fit=crop",
          "detail_link": "https://fitnesstanbull.com/bisiklet-yapim-atolyesi/",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM"
        },
        {
          "id": "t24",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "BARINAK YAPIM ATÖLYESİ",
          "summary": "Sokakta yaşayan hayvanlar için barınaklar tasarlanıp üretilen sosyal sorumluluk odaklı takım atölyesidir.",
          "priceTiers": {
            "0-25": 65000,
            "25-50": 65000,
            "50-75": 65000,
            "75-100": 65000,
            "100+": 65000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&h=300&fit=crop",
          "isPopular": true,
          "detail_link": "https://fitnesstanbull.com/barinak-yapim-atolyesi/",
          "video_link": "https://www.youtube.com/watch?v=GqKznjkekQo"
        },
        {
          "id": "t25",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "KUŞ EVİ YAPIM ATÖLYESİ",
          "summary": "Katılımcıların kuşların yaşamına uygun korunaklı evler tasarlayıp ürettiği sosyal sorumluluk atölyesidir.",
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=400&h=300&fit=crop",
          "detail_link": "https://fitnesstanbull.com/kendi-markani-yarat-reklam-filmi-cek/",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM"
        }
      ]
    },
    {
      "title": "Destek Hizmetleri",
      "items": [
        {
          "id": "t31",
          "category": "team-activities",
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
          "photoUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t32",
          "category": "team-activities",
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
          "photoUrl": "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t33",
          "category": "team-activities",
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
          "photoUrl": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&h=300&fit=crop"
        }
      ]
    }
  ]
};