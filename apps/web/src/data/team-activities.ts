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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774602769/survivorparkur_jtkjvk.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774602282/archerytag_juw7na.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603149/da-vinci-koprusu-etkinligi_ockn4k.png",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603387/lazer-tag-oyunlari_uuigg5.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603607/nerf-etkinligi-1_kywclp.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603761/masauzeriakiloyunlari_qf013h.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603826/team-building-etkinlikleri2_aqcb0u.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603924/kendi-markani-olustur_qzczej.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604100/foto-safari-_dnrdkn.webp",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604345/kurumsal-egzantrik-salvador-dali2_geegau.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604417/egg-drop-challenge_bwlrw1.png",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604500/formula-turka-aktivitesi_w8zw97.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604556/iskambil-kulesi-sirket-etkinligi_f6cagn.png",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604802/kurumsal-logo-challange-1-scaled_rbwpgs.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604889/marshmelow-etkinligi_tatbze.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604968/kurumsal-kokteyl-workshop_chinh3.png",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605044/mutfak-atolyesi-aktiviteleri_adzk7j.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605124/ritimperks%C3%BCyon_rna7ft.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605136/grafiti-calismalari-event_llznhy.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605454/suclu-kim-event_csi0mc.webp",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605612/yogaa_xtikdx.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605682/hazine-avi-aktivitesi-scaled_w1likb.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605817/ormandaesarettenkurtulmaetkinlik_rvtvdw.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605884/yelken-aktivitesi_igbw5e.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605928/kurumsal-rafting_ye30kc.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606098/beyaz-yaka-dans-1_tb1hi9.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606110/kareografi-okul_cggzvl.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606192/bisiklet-atolyesi_ol5etj.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606201/barinak-atolyesi_gqwyxr.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606216/ku%C5%9Fevi_at%C3%B6lyesi_b7jwiv.jpg",
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606389/ses-sistemi_m7tuzn.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606636/dekorbrand_vfqcxd.png"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606403/prod%C3%BCksiyon_lgjslo.jpg"
        }
      ]
    }
  ]
};