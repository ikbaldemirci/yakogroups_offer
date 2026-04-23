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
            "0-15": 45000,
            "15-30": 47500,
            "30-50": 50000,
            "50-75": 57500,
            "75-100": 67500,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774602769/survivorparkur_jtkjvk.jpg",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=H-HbmTaCtdw",
          "detail_link": "https://kurumsalaktivite.com/survivor-parkurlari/"
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
            "0-15": 45000,
            "15-30": 45000,
            "30-50": 65000,
            "50-75": 75000,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774602282/archerytag_juw7na.jpg",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=JoloXH5f8Is",
          "detail_link": "https://kurumsalaktivite.com/archery-tag/"
        },
        {
          "id": "t10",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LEONARDO DA VINCI KÖPRÜSÜ",
          "summary": "Katılımcıların Leonardo Da Vinci'nin tasarım mantığını kullanarak birlikte köprü kurduğu takım aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603149/da-vinci-koprusu-etkinligi_ockn4k.png",
          "video_link": "https://www.youtube.com/watch?v=Kd2uRjTHsJA",
          "detail_link": "https://kurumsalaktivite.com/leanardo-da-vinci-koprusu/"
        },
        {
          "id": "t16",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LAZER TAG",
          "summary": "Paintball mücadelesinin güvenli versiyonu olan bu aktivitede takımlar lazer sensörlerle stratejik mücadele eder.",
          "priceTiers": {
            "0-15": 70000,
            "15-30": 75000,
            "30-50": 80000,
            "50-75": 85000,
            "75-100": 90000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603387/lazer-tag-oyunlari_uuigg5.jpg",
          "video_link": "https://www.youtube.com/watch?v=JY27UL8YaAs&t=7s",
          "detail_link": "https://kurumsalaktivite.com/lazer-tag/"  
        },
        {
          "id": "t18",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "HAZİNE AVI",
          "summary": "Takımların görevleri tamamlayarak dayanışma ve yardımlaşma içinde ilerlediği macera dolu kurumsal aktivitedir.",
          "priceTiers": {
            "0-15": 45000,
            "15-30": 45000,
            "30-50": 50000,
            "50-75": 75000,
            "75-100": 100000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605682/hazine-avi-aktivitesi-scaled_w1likb.jpg",
          "video_link": "https://www.youtube.com/watch?v=PXJVZDrBJXc",
          "detail_link": "https://kurumsalaktivite.com/hazine-avi/"
        },
        {
          "id": "t26",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "NERF",
          "summary": "Aksiyon dolu, stres atmaya ve enerjiyi boşaltmaya yönelik takım rekabeti sunan popüler aktivitedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603607/nerf-etkinligi-1_kywclp.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/nerf/"
          
        },
        {
          "id": "t28",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "ORMANDA ESARETTEN KURTULMA",
          "summary": "Şifre çözme, görev tamamlama, harita okuma ve liderlik becerilerini test eden açık hava macera aktivitesidir.",
          "warning": "Kişi Sayısı: Min 24 kişi- max 48 kişi ile Oynanmaktadır",
          "priceTiers": {
            "0-15": 60000,
            "15-30": 90000,
            "30-50": 90000,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605817/ormandaesarettenkurtulmaetkinlik_rvtvdw.jpg",
          "video_link": "https://www.youtube.com/watch?v=VUbjJyYbR-8",
          "detail_link": "https://kurumsalaktivite.com/dogada-hayatta-kalma-ve-strateji-oyunlari/"
        },
        {
          "id": "t35",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "PAINTBALL",
          "summary": "Paintball, adrenalin dolu yapısıyla takım ruhunu en iyi yansıtan aktivitelerden biridir. Katılımcılar strateji geliştirerek birlikte hareket eder, rekabet ederken aynı zamanda güçlü bir ekip deneyimi yaşar. Doğal ortamlarda kurgulanan oyun senaryoları ile hem eğlenceli hem de unutulmaz anlar sunar. Özel koruyucu ekipmanlar ile güvenli bir şekilde oynanır.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774820872/paintball_uxytjy.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/paintball/"
        },
        {
          "id": "t36",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "OKÇULUK",
          "summary": "Okçuluk, her yaştan katılımcının deneyimleyebileceği, odak ve koordinasyonu geliştiren keyifli bir aktivitedir. Geleneksel köklerinden ilham alan bu deneyim, modern ekipmanlar ve profesyonel eğitmenler eşliğinde güvenli bir ortamda sunulur. Katılımcılar hem eğlenir hem de dikkat, sabır ve hedef odaklı düşünme becerilerini geliştirir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774820860/kurumsalokculuk_vmoast.jpg",
          "video_link": "https://www.youtube.com/watch?v=JoloXH5f8Is&t=1s",
          "detail_link": "https://kurumsalaktivite.com/okculuk/"
        },
        {
          "id": "t37",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "OFF ROAD",
          "summary": "Off Road, zorlu arazi koşullarında gerçekleştirilen, adrenalin ve macera dolu bir sürüş deneyimidir. Çamurlu, engebeli ve kayalık parkurlarda ilerlerken katılımcılar hem heyecanı doruklarda yaşar hem de takım halinde hareket etmenin önemini keşfeder. Doğa ile iç içe gerçekleşen bu aktivite, sınırları zorlamak ve unutulmaz anlar yaşamak isteyenler için eşsiz bir deneyim sunar.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774820835/offroad_pvbsaw.jpg",
          "video_link": "https://www.youtube.com/watch?v=xtXSvNPDvXo",
          "detail_link": "https://kurumsalaktivite.com/off-road/"
       },
        {
          "id": "t42",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "TAKIM DİNAMİĞİ YARATMA AKTİVİTESİ",
          "summary": "Takım Dinamiği Yaratma Aktivitesi, ekiplerin iletişim, güven, koordinasyon ve senkronizasyon becerilerini geliştirmeye yönelik çok aşamalı bir parkur deneyimidir. Bu çalışma bir yarıştan çok, ekip uyumu ve birlikte hareket etme becerilerini test eden bir deneyimdir. Katılımcılar farklı istasyonlarda; denge, senkronizasyon, stratejik düşünme ve iletişim süreçlerini deneyimleyerek ekip olmanın gerçek anlamını keşfeder. Her aşama, bireysel başarıdan çok takım başarısına odaklanır ve güçlü bir farkındalık kazandırır.",
          "priceTiers": {
            "0-15": 45000,
            "15-30": 45000,
            "30-50": 45000,
            "50-75": 45000,
            "75-100": 45000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774875998/takimdinamiğiyaratma_cj6pj7.jpg",
          "video_link": "https://www.youtube.com/watch?v=KN4JS8jG3vE",
          "detail_link": "https://kurumsalaktivite.com/takim-dinamigi-yaratma-aktivitesi/"
        },
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
            "0-15": 35000,
            "15-30": 45000,
            "30-50": 50000,
            "50-75": 60000,
            "75-100": 80000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603924/kendi-markani-olustur_qzczej.jpg",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/kendi-markani-yarat-reklam-filmi-cek/"
        },
        {
          "id": "t19",
          "category": "team-activities",
          "subcategory": "yaratici-aktivite",
          "type": "tiered",
          "title": "FOTO SAFARİ CHALLENGE",
          "summary": "Katılımcıların eğitim sonrası görev listesine göre en iyi kareleri yakalamaya çalıştığı yaratıcı takım aktivitesidir.",
          "priceTiers": {
            "0-15": 60000,
            "15-30": 75000,
            "30-50": 100000,
            "50-75": 100000,
            "75-100": 150000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604100/foto-safari-_dnrdkn.webp",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/foto-safari-challenge/"

        },
        {
          "id": "t49",
          "category": "team-activities",
          "subcategory": "yaratici-aktivite",
          "type": "tiered",
          "title": "SÜRDÜRÜLEBİLİR TABAK AKTİVİTESİ",
          "summary": "Katılımcıların geleceğin çevre dostu ve düşük karbon ayak izine sahip yemek modelini tasarladığı yaratıcı ve stratejik takım çalışması deneyimidir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589060/s%C3%BCrd%C3%BCr%C3%BClebilirtabak_iejkje.png",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/surdurulebilir-tabak-aktivitesi/"
        },
      ]
    },
    {
      "title": "Challenge-Proje-Takım Aktiviteleri",
      "items": [
        {
          "id": "t6",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "EKSANTRİK SALVADOR DALİ AKTİVİTESİ",
          "summary": "Takımların birlikte büyük bir resmi tamamladığı, iş birliği ve koordinasyon gerektiren yaratıcı sanat aktivitesidir.",
          "priceTiers": {
            "0-15": 45000,
            "15-30": 50000,
            "30-50": 55000,
            "50-75": 57500,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604345/kurumsal-egzantrik-salvador-dali2_geegau.jpg",
          "video_link": "https://www.youtube.com/watch?v=Q7MrLW1CJR0",
          "detail_link": "https://kurumsalaktivite.com/egzantrik-salvador-dali/"

        },
        {
          "id": "t7",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "EGG DROP CHALLENGE",
          "summary": "Katılımcıların sınırlı kaynaklarla yumurtayı yüksekten düşmeye dayanıklı hale getirmeye çalıştığı proje bazlı takım oyunudur.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 35000,
            "30-50": 40000,
            "50-75": 45000,
            "75-100": 50000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604417/egg-drop-challenge_bwlrw1.png",
          "video_link": "https://www.youtube.com/watch?v=THyfW-fiOpA",
          "detail_link": "https://kurumsalaktivite.com/egg-drop-challange/"
        },
        {
          "id": "t8",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "FORMULA TURKO CHALLENGE",
          "summary": "Takımların kendi araçlarını inşa edip tasarladığı yaratıcı ve rekabetçi takım aktivitesidir.",
          "priceTiers": {
            "0-15": 75000,
            "15-30": 75000,
            "30-50": 150000,
            "50-75": 175000,
            "75-100": 250000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604500/formula-turka-aktivitesi_w8zw97.jpg",
          "video_link": "https://www.youtube.com/watch?v=m1iadJXLUtg",
          "detail_link": "https://kurumsalaktivite.com/formula-turko-challange/"

        },
        {
          "id": "t12",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "İSKAMBİL KULESİ",
          "summary": "Katılımcıların sınırlı kaynakla en yüksek kuleyi yapmaya çalıştığı, planlama ve sabır gerektiren takım aktivitesidir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 35000,
            "30-50": 40000,
            "50-75": 45000,
            "75-100": 50000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604556/iskambil-kulesi-sirket-etkinligi_f6cagn.png",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/iskambil-kulesi/"

        },
        {
          "id": "t13",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "LOGO CHALLENGE",
          "summary": "Katılımcıların şirket logosunu yeniden yorumlayıp yaratıcı fikirlerle ortaya çıkardığı takım aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604802/kurumsal-logo-challange-1-scaled_rbwpgs.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/logo-challange/"
        },
        {
          "id": "t14",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "MARSHMALLOW CHALLENGE",
          "summary": "Takımların sınırlı malzemelerle en yüksek kuleyi yapmaya çalıştığı rekabetçi ve yaratıcı takım oyunudur.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 35000,
            "30-50": 40000,
            "50-75": 45000,
            "75-100": 50000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774604889/marshmelow-etkinligi_tatbze.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/marshmallow-challange/"
        },
        {
          "id": "t15",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "SUÇLU KİM AKTİVİTESİ",
          "summary": "Katılımcıların ipuçlarını birleştirerek olay çözmeye çalıştığı strateji ve analiz odaklı takım aktivitesidir.",
          "priceTiers": {
            "0-15": 90000,
            "15-30": 90000,
            "30-50": 150000,
            "50-75": 200000,
            "75-100": 250000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605454/suclu-kim-event_csi0mc.webp",
          "video_link": "https://www.youtube.com/watch?v=9HVxovjpH98",
          "detail_link": "https://kurumsalaktivite.com/suclu-kim-aktivitesi/"
        },
        {
          "id": "t44",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "İSRAF AVI AKTİVİTESİ",
          "summary": "Bu bir oyun değil. Bu bir farkındalık yolculuğu. Her gün çöpe giden gıdalar, görmezden gelinen küçük kayıplar ve aslında büyük bir küresel soruna dikkat çeken sürdürülebilirlik temalı takım aktivitesidir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 70000,
            "75-100": 80000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589057/israfavi_czhhcj.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/israf-avi-aktivitesi/"
        },
        {
          "id": "t47",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "GIDA ZİNCİRİ AKTİVİTESİ",
          "summary": "Katılımcıların gerçek dünya senaryoları üzerinden kriz yönetimi, stratejik karar alma ve iş birliği becerilerini deneyimlediği oyunlaştırılmış sürdürülebilirlik simülasyonudur.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589055/gidazinciri_qdipud.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/gida-zinciri-aktivitesi/"
        },
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
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
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
            "0-15": 75000,
            "15-30": 75000,
            "30-50": 85000,
            "50-75": 95000,
            "75-100": 120000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605044/mutfak-atolyesi-aktiviteleri_adzk7j.jpg",
          "video_link": "https://www.youtube.com/watch?v=HRla_c7dw7g",
          "detail_link": "https://kurumsalaktivite.com/chef-sensin-aktivitesi/"
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
            "0-15": 55000,
            "15-30": 55000,
            "30-50": 55000,
            "50-75": 55000,
            "75-100": 55000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605124/ritimperks%C3%BCyon_rna7ft.jpg",
          "video_link": "https://www.youtube.com/watch?v=md78XbjVoAs",
          "detail_link": "https://kurumsalaktivite.com/ritim-perkusyon-atolyesi/"
        },
        {
          "id": "t22",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "GRAFFITI WORKSHOP",
          "summary": "Katılımcıların birlikte üretim yaparak graffiti sanatını deneyimlediği yaratıcı atölye çalışmasıdır.",
          "priceTiers": {
            "0-15": 130000,
            "15-30": 150000,
            "30-50": 170000,
            "50-75": 180000,
            "75-100": 200000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774605136/grafiti-calismalari-event_llznhy.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/graffiti-workshop/"
        },
        {
          "id": "t45",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "SIFIR ATIK MUTFAĞI AKTİVİTESİ",
          "summary": "Katılımcıların atık olarak görülen gıda parçalarını kullanarak yaratıcı ve lezzetli tarifler ürettiği, sürdürülebilir beslenme farkındalığı oluşturan interaktif kurumsal yarışma deneyimidir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589059/sifiratik_dlu850.png",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/sifir-atik-mutfagi-aktivitesi/"
        },
        {
          "id": "t48",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "FOOD SECURITY WORLD CAFÉ AKTİVİTESİ",
          "summary": "Katılımcıların gıda güvenliği konusunu farklı perspektiflerden tartıştığı, fikir ürettiği ve kolektif bilinç oluşturduğu yapılandırılmış masa rotasyon formatıdır.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 75000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589054/foodsecuritywordlcafe_umqmxl.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/food-security-world-cafe-aktivitesi/"
        },
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
          "title": "Doğada Fitness | Yoga | Zumba ",
          "summary":"Doğada Yoga Aktivitesi, katılımcıların profesyonel eğitmen eşliğinde açık havada nefes, esneklik ve odak çalışmaları yaptığı, stres azaltıcı ve denge kazandırıcı bir kurumsal wellbeing deneyimidir. Fitness, yoga ve zumba gibi aktivitelerle ekip ruhunu güçlendiren, enerjik ve sağlıklı bir deneyim sunuyoruz.",
          "priceTiers": {
            "0-15": 40000,
            "15-30": 40000,
            "30-50": 40000,
            "50-75": 40000,
            "75-100": 40000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774820917/dogada-fitness-event_mlnvff.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/dogada-fitness-yoga-zumba/"
        },
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
            "0-15": 60000,
            "15-30": 75000,
            "30-50": 100000,
            "50-75": 100000,
            "75-100": 150000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606098/beyaz-yaka-dans-1_tb1hi9.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/beyaz-yaka-dans-challange/"
        },
        {
          "id": "t27",
          "category": "team-activities",
          "subcategory": "performans",
          "type": "tiered",
          "title": "TAKIM KOREOGRAFİSİ",
          "summary": "Katılımcıların birlikte oluşturduğu koreografi ve havadan çekimlerle unutulmaz anılar yaratan takım aktivitesidir.",
          "priceTiers": {
            "0-15": 50000,
            "15-30": 50000,
            "30-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606110/kareografi-okul_cggzvl.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/takim-koreografisi/"
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
            "0-15": 45000,
            "15-30": 45000,
            "30-50": 45000,
            "50-75": 45000,
            "75-100": 45000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606192/bisiklet-atolyesi_ol5etj.jpg",
          "detail_link": "https://kurumsalaktivite.com/bisiklet-yapim-atolyesi/",
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
            "0-15": 60000,
            "15-30": 90000,
            "30-50": 120000,
            "50-75": 150000,
            "75-100": 200000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606201/barinak-atolyesi_gqwyxr.jpg",
          "isPopular": true,
          "detail_link": "https://kurumsalaktivite.com/barinak-yapim-atolyesi-2/",
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
            "0-15": 50000,
            "15-30": 75000,
            "30-50": 100000,
            "50-75": 120000,
            "75-100": 175000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774606216/ku%C5%9Fevi_at%C3%B6lyesi_b7jwiv.jpg",
          "video_link": "https://www.youtube.com/watch?v=KXI4FE5NXqU",
          "detail_link": "https://kurumsalaktivite.com/kus-evi-yapim-atolyesi/"
        },
        {
          "id": "t96",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "TEKERLEKLİ SANDALYE YAPIMI ATÖLYESİ",
          "summary": "Ekiplerin gerçek bir tekerlekli sandalye monte ederek sosyal sorumluluk kapsamında bağış yaptığı anlamlı takım etkinliğidir.",
          "priceTiers": {
            "0-15": 45000,
            "15-30": 60000,
            "30-50": 70000,
            "50-75": 90000,
            "75-100": 120000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596209/tekerleklisandalye_rg53zb.jpg",
          "detail_link": "https://kurumsalaktivite.com/tekerlekli-sandalye-yapimi-atolyesi/"
        },
      ]
      },
      {
      "title": "Tam Pikniğe Göre Aktiviteler",
      "items": [
        {
          "id": "t3",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "MASA ÜZERİ AKIL OYUNLARI",
          "summary": "Oyunlaştırarak öğrenme yaklaşımıyla takım uyumu ve motivasyonu artıran masa üstü aktivite setidir. 4 Oyun İstasyonu.",
          "priceTiers": {
            "0-15": 25000,
            "15-30": 25000,
            "30-50": 25000,
            "50-75": 25000,
            "75-100": 25000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603761/masauzeriakiloyunlari_qf013h.jpg",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=CsiVGfZsPvM",
          "detail_link": "https://kurumsalaktivite.com/masa-uzeri-akil-oyunlari/"
        },
        {
          "id": "t4",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "TEAMBUILDING AKTİVİTELER",
          "summary": "Şirket veya kurumlara özel geliştirilen, takım oluşturma ve ekip iletişimini güçlendiren motivasyonel aktivitelerdir.",
          "priceTiers": {
            "0-15": 35000,
            "15-30": 35000,
            "30-50": 45000,
            "50-75": 45000,
            "75-100": 45000,
            "100+": 45000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774603826/team-building-etkinlikleri2_aqcb0u.jpg",
          "isPopular": true,
          "video_link": "https://www.youtube.com/watch?v=KN4JS8jG3vE",
          "detail_link": "https://kurumsalaktivite.com/teambulding-aktiviteler/"
        },
        {
          "id": "t38",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "KLASİK MOTİVASYON AKTİVİTELERİ",
          "summary": "Klasik motivasyon aktiviteleri, ekip içi iletişimi güçlendiren ve çalışanların performansını artırmayı hedefleyen eğlenceli ve dinamik etkinliklerden oluşur. Çuval yarışı, halat çekme, koca ayak, top oyunları, balon yarışları ve şişme oyunlar gibi aktivitelerle katılımcılar hem keyifli vakit geçirir hem de takım çalışması becerilerini geliştirir. Eğlence ve rekabeti bir araya getiren bu deneyim, ekip ruhunu güçlendirmek için ideal bir çözümdür.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 30000,
            "50-75": 30000,
            "75-100": 30000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774820823/klasik-motivasyon-aktiviteleri_duat8o.jpg",
          "video_link": "https://www.youtube.com/watch?v=BGUhbhYdhvM",
          "detail_link": "https://kurumsalaktivite.com/klasik-motivasyon-aktiviteleri/"
        },
        {
          "id": "t46",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "ICE BREAKING",
          "summary": "Ice Breaking aktiviteleri, ekipler arasındaki ilk çekingenliği ortadan kaldıran, iletişimi hızlandıran ve ortam enerjisini yükselten kısa süreli ama etkisi yüksek kurumsal oyunlardır.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 37500,
            "50-75": 56250,
            "75-100": 50000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776589055/icebreaking_fqukvn.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/ice-breaking/"
        },
        {
          "id": "t29",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "KARNAVAL ÇADIRI",
          "summary": "Tam İsabet Oyunu, Labut Devirme Oyunu, Halka Atışı Oyunu ve Bardağa Pinpon Atışı Oyunu içeren dörtlü aktivite çadırı. Organizasyonlarınızı karnaval havasına çevirir.",
          "priceTiers": {
            "0-15": 30000,
            "15-30": 30000,
            "30-50": 30000,
            "50-75": 30000,
            "75-100": 30000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774607188/karnavalcad%C4%B1r_qidz5m.jpg", 
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/karnaval-cadirlari-2/"  
        },
        {
          "id": "t30",
          "category": "team-activities",
          "subcategory": "tam-piknik-aktiviteleri",
          "type": "tiered",
          "title": "DEV JENGA",
          "summary": "Üst üste dizilmiş dev jenga bloklarını kuleyi devirmeden çekme oyunudur.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_400,h_300,c_fill/v1774607158/jenga2_jixge2.jpg"
        },


        
        
      ]
     },
      {
      "title": "Yapay Zeka Aktiviteleri",
      "items": [
        {
          "id": "t50",
          "category": "team-activities",
          "subcategory": "yapay-zeka-aktiviteleri",
          "type": "tiered",
          "title": "ARTIRILMIŞ GERÇEKLİK AÇIK HAVA TANITIMI",
          "summary": "Artırılmış gerçeklik teknolojisi ile açık hava alanlarında gerçekleştirilen, markaları yenilikçi ve dikkat çekici şekilde tanıtan interaktif deneyim aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776592076/aritilmis-gerceklik_xt3vfv.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/artirilmis-gerceklik-acik-hava-tanitim/"
        },
        {
          "id": "t51",
          "category": "team-activities",
          "subcategory": "yapay-zeka-aktiviteleri",
          "type": "tiered",
          "title": "HOLOGRAM AI KABİNLER",
          "summary": "Katılımcılara yapay zeka destekli hologram teknolojisi ile etkileşimli karşılama, tanıtım ve deneyim sunan yenilikçi etkinlik çözümüdür.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776592112/hologram-kabinler_f2vdcs.webp",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/hologram-ai-kabinler/"
        },
        {
          "id": "t52",
          "category": "team-activities",
          "subcategory": "yapay-zeka-aktiviteleri",
          "type": "tiered",
          "title": "CGI ANİMASYON İNOVASYON",
          "summary": "CGI teknolojileri kullanılarak markalara özel dikkat çekici dijital kampanya, lansman ve inovasyon deneyimleri sunan yaratıcı aktivitedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776592095/cgi-reklam_tsjrsf.webp",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/cgi-animasyon-inovasyon/"
        },
        {
          "id": "t53",
          "category": "team-activities",
          "subcategory": "yapay-zeka-aktiviteleri",
          "type": "tiered",
          "title": "AI PHOTO BOOTH",
          "summary": "Katılımcıların yapay zeka destekli özel efektler ve yaratıcı temalarla fotoğraf deneyimi yaşadığı interaktif etkinlik alanıdır.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto//v1776592077/ataturk-ai-photo-booth_oaaafr.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/ai-photo-booth/"
        }
      ]
    },
    {
      "title": "Dijital / VR Aktiviteler",
      "items": [
        {
          "id": "t54",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "PIXAR CHARACTER",
          "summary": "Katılımcıların Pixar tarzı karakterlere dönüştüğü eğlenceli ve interaktif dijital deneyim aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594335/pixar_tr6p07.png"
        },
        {
          "id": "t55",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "GREENBOX",
          "summary": "Katılımcıların farklı sanal arka planlarda eğlenceli içerikler oluşturduğu dijital stüdyo aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593331/greenbox_tobgh6.jpg"
        },
        {
          "id": "t56",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "FACE SWAP",
          "summary": "Katılımcıların yüz değiştirme teknolojisiyle eğlenceli görseller oluşturduğu interaktif dijital aktivitedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593330/faceswap_ij9mhc.jpg"
        },
        {
          "id": "t57",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "ROBOGOL",
          "summary": "Katılımcıların dijital kaleye şut çekerek skor elde ettiği rekabet dolu interaktif oyun aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594455/robogol_vruexl.png"
        },
        {
          "id": "t58",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "PENALTI USTASI",
          "summary": "Katılımcıların sanal kaleye penaltı atışları yaptığı heyecanlı dijital spor deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594214/penalt%C4%B1ustas%C4%B1_dbckgc.png"
        },
        {
          "id": "t59",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "SAYI KRALI",
          "summary": "Katılımcıların refleks ve dikkat becerilerini kullanarak sayı hedeflerini yakaladığı dijital yarışma aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594563/say%C4%B1kral%C4%B1_eb1yp3.png"
        },
        {
          "id": "t60",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "HEDİYE YAĞMURU",
          "summary": "Katılımcıların ekranda yağan hediyeleri yakalayarak puan topladığı eğlenceli dijital refleks aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593336/hediyeyagmuru_kz2eqw.png"
        },
        {
          "id": "t61",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "ALTIN ELDİVEN",
          "summary": "Katılımcıların kalecilik reflekslerini test ederek şutları kurtarmaya çalıştığı interaktif spor aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594578/altineldiven_tghmie.png"
        },
        {
          "id": "t62",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "UÇAN NESNE",
          "summary": "Katılımcıların havada beliren hedefleri yakalayarak puan topladığı hızlı tempolu dijital oyun deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594570/ucannesne_w5tmhb.png"
        },
        {
          "id": "t63",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "JETPACK",
          "summary": "Katılımcıların jetpack ile sanal engelleri aşarak ilerlediği heyecan dolu dijital macera aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593489/jetpack_kuswk6.jpg"
        },
        {
          "id": "t64",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "HIZ TUTKUSU",
          "summary": "Katılımcıların yüksek tempolu yarış atmosferinde rekabet ettiği dijital hız deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593368/h%C4%B1ztutkusu_rzwkwh.jpg"
        },
        {
          "id": "t65",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "ÇİZ BAKALIM",
          "summary": "Katılımcıların çizim yaparak takım arkadaşlarına anlatmaya çalıştığı eğlenceli dijital tahmin aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594581/%C3%A7izbakal%C4%B1m_xru5c1.jpg"
        },
        {
          "id": "t66",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "SÜRAT TEKNESİ",
          "summary": "Katılımcıların sanal parkurda sürat teknesi kullanarak yarıştığı eğlenceli su sporları deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594567/suratteknesi_o7hye1.jpg"
        },
        {
          "id": "t67",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "MİNİ GOLF",
          "summary": "Katılımcıların eğlenceli parkurlarda golf becerilerini test ettiği interaktif dijital spor aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593732/minigolf_h84x4e.jpg"
        },
        {
          "id": "t68",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "SU KAYAĞI",
          "summary": "Katılımcıların sanal su parkurunda denge ve refleks becerilerini kullanarak yarıştığı eğlenceli dijital deneyimdir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594566/sukayag%C4%B1_mwrhbw.jpg"
        },
        {
          "id": "t69",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "HEDİYE AĞACI",
          "summary": "Katılımcıların dijital ağaç üzerindeki sürpriz hediyeleri toplayarak puan kazandığı interaktif eğlence aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593333/hediyeagac%C4%B1_ktte4d.jpg"
        },
        {
          "id": "t70",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "BASKETBOL",
          "summary": "Katılımcıların potaya atış yaparak skor elde ettiği rekabet dolu dijital spor aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594579/basketbol_jr5pxt.jpg"
        },
        {
          "id": "t71",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "ALIŞVERİŞ SEPETİ",
          "summary": "Katılımcıların hareket ederek ürünleri doğru sepete toplamaya çalıştığı eğlenceli dijital oyun deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594575/alisverissepeti_mrziyl.jpg"
        },
        {
          "id": "t72",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "VR PONG",
          "summary": "Katılımcıların sanal masa tenisi deneyimi yaşayarak reflekslerini test ettiği interaktif VR aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594573/vrpong_nbldri.jpg"
        },
        {
          "id": "t73",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "ORTA KAFA GOL",
          "summary": "Katılımcıların gelen ortaları kafa vuruşuyla gole çevirmeye çalıştığı eğlenceli futbol aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593973/ortakafagol_gooang.webp"
        },
        {
          "id": "t74",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "SNOWBOARD",
          "summary": "Katılımcıların sanal karlı parkurda snowboard yaparak denge ve hız becerilerini test ettiği dijital aktivitedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594563/snowboard_x023xp.jpg"
        },
        {
          "id": "t75",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "PARAŞÜT",
          "summary": "Katılımcıların sanal gökyüzünde paraşüt deneyimi yaşayarak heyecan dolu anlar yaşadığı VR aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594093/parasut_sst1l7.jpg"
        },
        {
          "id": "t76",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "OKÇULUK",
          "summary": "Katılımcıların sanal hedeflere ok atışı yaparak dikkat ve odak becerilerini geliştirdiği dijital spor aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593853/okculuk_yh9pnl.jpg"
        },
        {
          "id": "t77",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "VERTIGO 2",
          "summary": "Katılımcıların yükseklik ve denge hissini deneyimlediği adrenalini yüksek sanal gerçeklik aktivitesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776594571/vertigo_nm1hwr.jpg"
        },
        {
          "id": "t78",
          "category": "team-activities",
          "subcategory": "digital-vr-activities",
          "type": "tiered",
          "title": "KANO",
          "summary": "Katılımcıların sanal su rotasında kano kullanarak koordinasyon ve denge becerilerini test ettiği dijital aktivitedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776593611/kano_syuais.jpg"
        },
  ]
},
{
  "title": "Sanat ve Deneyim Atölyeleri",
  "items": [
        {
          "id": "t79",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "PEBBLE ART ATÖLYESİ",
          "summary": "Pebble Art Atölyesi, katılımcıların doğal taşları kullanarak özgün ve yaratıcı sanat çalışmaları oluşturdukları keyifli bir tasarım etkinliğidir. Bu atölyede farklı boyut ve şekillerdeki doğal taşlar, çeşitli dekoratif materyaller ile bir araya getirilerek estetik ve anlamlı kompozisyonlar oluşturulur.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596200/pebbleart_kp3fjx.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/pebble-art-atolyesi/"
        },
        {
          "id": "t80",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "SES MEDİTASYONU ATÖLYESİ",
          "summary": "Ses meditasyonu, titreşim ve frekansların insan bedeni ve zihni üzerindeki dengeleyici etkisini kullanarak derin bir gevşeme ve farkındalık hali oluşturan özel bir meditasyon pratiğidir. Tibet çanakları, gong, doğal titreşim enstrümanları ve ritmik sesler sayesinde sinir sistemi yavaşlar, zihinsel gerginlik azalır ve beden doğal bir rahatlama sürecine girer.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto/q_auto/v1776596207/sesmeditasyonu_kpvu9t.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/ses-meditasyonu-atolyesi/"
        },
        {
          "id": "t81",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "KINTSUGI ATÖLYESİ",
          "summary": "Kintsugi, kökeni 15. yüzyıl Japonya’sına dayanan ve kırılan seramiklerin altın tozu ile onarılması prensibine dayanan özel bir sanat ve felsefe yaklaşımıdır. Bu teknik yalnızca bir onarım yöntemi değil, aynı zamanda kusurların ve kırılmaların gizlenmesi yerine görünür kılınarak güzelliğe dönüştürülmesini anlatan güçlü bir yaşam metaforudur.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596191/kintsugi_gv7y9x.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/kintsugi-atolyesi/"
        },
        {
          "id": "t82",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "KONSEPT MUM ATÖLYESİ",
          "summary": "Konsept Mum Atölyesi, katılımcıların farklı renk, koku ve dekoratif malzemeler kullanarak kendi tasarımlarını oluşturdukları yaratıcı ve keyifli bir üretim deneyimi sunar. Bu atolyede belırlenen özel bır gün konseptıne baglı kalarak çalışılır. ",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596196/mum_fa8yxy.jpg",
          "video_link": "",
          "detail_link": "https://kurumsalaktivite.com/konsept-mum-atolyesi/"
        },
        {
          "id": "t83",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "MOZAİK LAMBA ATÖLYESİ",
          "summary": "Mozaik lamba sanatı, renkli cam parçalarının bir araya getirilmesiyle oluşturulan ve ışıkla birlikte büyüleyici bir atmosfer yaratan dekoratif sanat tekniğidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596195/mozaiklamba_fggeu7.jpg",
          "detail_link": "https://kurumsalaktivite.com/mozaik-lamba-atolyesi/"
        },
        {
          "id": "t84",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "MANDALA ATÖLYESİ",
          "summary": "Mandala, felsefe, matematik ve sanatın birleştiği; zihni sakinleştiren ve odağı güçlendiren dairesel desen çalışmasıdır.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596193/mandala_ygpuor.jpg",
          "detail_link": "https://kurumsalaktivite.com/mandala-atolyesi/"
        },
        {
          "id": "t85",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "DERİ EL YAPIMI AKSESUAR ATÖLYESİ",
          "summary": "Deri, dayanıklılığı ve estetik görünümüyle el yapımı aksesuar üretiminde kullanılan özel bir doğal malzemedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596183/deri_hrxsqb.jpg",
          "detail_link": "https://kurumsalaktivite.com/deri-el-yapimi-aksesuar-atolyesi/"
        },
        {
          "id": "t86",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "HASIR ÇANTA BOYAMA ATÖLYESİ",
          "summary": "Hasır çantaların kişisel tasarımlarla boyanarak özgün hale getirildiği yaratıcı sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596187/has%C4%B1rcanta_lvxdzw.jpg",
          "detail_link": "https://kurumsalaktivite.com/hasir-canta-boyama-atolyesi/"
        },
        {
          "id": "t87",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "AROMA TERAPİ CİLT BAKIM ATÖLYESİ",
          "summary": "Bitkilerden elde edilen uçucu yağların beden ve zihin üzerindeki etkileriyle doğal bakım ve iyilik hali sağlayan aroma terapi deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596179/aromaterapicilt_ece63v.jpg",
          "detail_link": "https://kurumsalaktivite.com/aroma-terapi-cilt-bakim-atolyesi/"
        },
        {
          "id": "t88",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "MINDFULNESS MEDİTASYON ATÖLYESİ",
          "summary": "Bilinçli farkındalık pratiği ile dikkati ana yönlendirmeyi ve zihinsel dengeyi güçlendirmeyi amaçlayan meditasyon atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596194/meditasyon_dhawsa.jpg",
          "detail_link": "https://kurumsalaktivite.com/mindfulness-meditasyon-atolyesi/"
        },
        {
          "id": "t89",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "NEFES TEKNİKLERİ ATÖLYESİ",
          "summary": "Doğru nefes alma teknikleri ile beden, zihin ve stres yönetimini geliştirmeye odaklanan farkındalık çalışmasıdır.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596198/nefesteknikleriat%C3%B6lye_d7gevg.jpg",
          "detail_link": "https://kurumsalaktivite.com/nefes-teknikleri-atolyesi/"
        },
        {
          "id": "t90",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "TERMOS BOYAMA ATÖLYESİ",
          "summary": "Günlük kullanılan termosların renkler ve desenlerle kişiselleştirildiği yaratıcı tasarım atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596212/termosboyama_yxpmwj.jpg",
          "detail_link": "https://kurumsalaktivite.com/termos-boyama-atolyesi/"
        },
        {
          "id": "t91",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "QUILLING ATÖLYESİ",
          "summary": "İnce kağıt şeritlerinin kıvrılıp şekillendirilerek estetik kompozisyonlara dönüştürüldüğü el sanatıdır.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596203/quilling_lv6n5f.jpg",
          "detail_link": "https://kurumsalaktivite.com/quilling-atolyesi/"
        },
        {
          "id": "t92",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "ATKI ÖRME ATÖLYESİ",
          "summary": "Yumuşak iplerle kendi atkısını örerek hem üretim hem de rahatlama deneyimi sunan yaratıcı atölyedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596179/atki%C3%B6rme_tcbtam.jpg",
          "detail_link": "https://kurumsalaktivite.com/atki-orme-atolyesi/"
        },
        {
          "id": "t93",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "AYNA BOYAMA ATÖLYESİ",
          "summary": "Sıradan aynaların renkler ve desenlerle kişiselleştirilerek sanatsal objelere dönüştürüldüğü yaratıcı atölyedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596180/aynaboyama_epdlod.jpg",
          "detail_link": "https://kurumsalaktivite.com/ayna-boyama-atolyesi/"
        },
        {
          "id": "t94",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "VISION BOARD ATÖLYESİ",
          "summary": "Hedeflerin görsel olarak somutlaştırıldığı, motivasyonu ve odaklanmayı artıran yaratıcı planlama atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596214/visionboard_em8muw.jpg",
          "detail_link": "https://kurumsalaktivite.com/vision-board-atolyesi/"
        },
        {
          "id": "t95",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "HEYKEL ATÖLYESİ",
          "summary": "Katılımcıların kil ve benzeri materyallerle üç boyutlu sanat eserleri oluşturduğu yaratıcı üretim deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596188/heykel_cixkkn.jpg",
          "detail_link": "https://kurumsalaktivite.com/heykel-atolyesi-2/"
        },
        {
          "id": "t97",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "EL İZİ HATIRA PANOSU AKTİVİTESİ",
          "summary": "Katılımcıların el izleriyle ortak bir sanat eseri oluşturarak takım ruhunu simgelediği interaktif etkinliktir.",
          "priceTiers": {
            "0-15": 40000,
            "15-30": 40000,
            "30-50": 40000,
            "50-75": 40000,
            "75-100": 40000,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596185/elizi_itsd95.png",
          "detail_link": "https://kurumsalaktivite.com/el-izi-hatira-panosu-aktivitesi/"
        },
        {
          "id": "t98",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "T-SHIRT TASARLAMA VE BOYAMA ATÖLYESİ",
          "summary": "Katılımcıların kendi tişört tasarımlarını oluşturduğu ve kişisel yaratıcılıklarını ifade ettiği sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596213/tshirttasar%C4%B1m_gb9swd.jpg",
          "detail_link": "https://kurumsalaktivite.com/t-shirt-tasarlama-ve-boyama-atolyesi/"
        },
        {
          "id": "t100",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "KAHKAHA YOGASI",
          "summary": "Bilinçli kahkaha egzersizleri ve nefes çalışmalarıyla stres azaltan eğlenceli grup etkinliğidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596189/kahkahayoga_spelin.jpg",
          "detail_link": "https://kurumsalaktivite.com/kahkaha-yogasi/"
        },
        {
          "id": "t101",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "DOĞAL SABUN YAPIM ATÖLYESİ",
          "summary": "Doğal içeriklerle kişisel sabun üretimi yapılan hem öğretici hem yaratıcı bir üretim atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596205/sabun_rte6ny.jpg",
          "detail_link": "https://kurumsalaktivite.com/dogal-sabun-yapim-atolyesi/"
        },
        {
          "id": "t102",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "SERAMİK YAPIM ATÖLYESİ",
          "summary": "Katılımcıların kil ile kendi seramik tasarımlarını oluşturduğu yaratıcı sanat deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596206/seramik_vrucvg.jpg",
          "detail_link": "https://kurumsalaktivite.com/seramik-yapim-atolyesi/"
        },
        {
          "id": "t103",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "BEZ ÇANTA TASARIM ATÖLYESİ",
          "summary": "Bez çantaların boyama ve tasarım teknikleriyle kişiselleştirildiği yaratıcı sürdürülebilirlik atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596181/bezcanta_zy4ref.jpg",
          "detail_link": "https://kurumsalaktivite.com/bez-canta-tasarim-atolyesi/"
        },
        {
          "id": "t104",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "VİTRAY BOYAMA ATÖLYESİ",
          "summary": "Cam yüzeyler üzerinde renklerle çalışarak ışıkla etkileşen dekoratif tasarımlar oluşturulan sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596215/vitrayboyama_n9i9ij.jpg",
          "detail_link": "https://kurumsalaktivite.com/vitray-boyama-atolyesi/"
        },
        {
          "id": "t105",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "TELEFON VE GÖZLÜK ASKISI TASARIM ATÖLYESİ",
          "summary": "Günlük kullanım aksesuarlarının boncuk ve iplerle tasarlanarak kişiselleştirildiği yaratıcı üretim atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596210/telefonvegozlukaskisi_swq4qp.jpg",
          "detail_link": "https://kurumsalaktivite.com/telefon-ve-gozluk-askisi-tasarim-atolyesi/"
        },
        {
          "id": "t106",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "MAKROME TASARIM ATÖLYESİ",
          "summary": "Katılımcıların ipleri düğümleme teknikleriyle birleştirerek dekoratif ve yaratıcı tasarımlar oluşturduğu el sanatları deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596192/makrome_kcnfp1.jpg",
          "detail_link": "https://kurumsalaktivite.com/makrome-tasarim-atolyesi/"
        },
        {
          "id": "t107",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "POLİMER KİL TASARIM ATÖLYESİ",
          "summary": "Katılımcıların renkli polimer kil ile özgün objeler tasarladığı yaratıcı üretim atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596201/polimer_kil_hxxsbk.jpg",
          "detail_link": "https://kurumsalaktivite.com/polimer-kil-tasarim-atolyesi/"
        },
        {
          "id": "t108",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "HASIR ŞAPKA BOYAMA ATÖLYESİ",
          "summary": "Katılımcıların hasır şapkaları renk ve desenlerle kişiselleştirdiği yaratıcı sanat deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596187/has%C4%B1rsapka_syehox.jpg",
          "detail_link": "https://kurumsalaktivite.com/hasir-sapka-boyama-atolyesi/"
        },
        {
          "id": "t109",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "PUNCH NAKIŞ ATÖLYESİ",
          "summary": "Kumaş üzerinde punch iğne tekniğiyle dokulu ve dekoratif tasarımlar oluşturulan el sanatları atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596202/punchnak%C4%B1s_g7nibi.jpg",
          "detail_link": "https://kurumsalaktivite.com/punch-nakis-atolyesi/"
        },
        {
          "id": "t110",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "ÇİÇEK TAÇ TASARIM ATÖLYESİ",
          "summary": "Katılımcıların çiçekler ve dekoratif materyallerle özgün taç tasarımları oluşturduğu yaratıcı atölyedir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596183/cicektac_wsihwf.jpg",
          "detail_link": "https://kurumsalaktivite.com/cicek-tac-tasarim-atolyesi/"
        },
        {
          "id": "t111",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "SERAMİK – ÇİNİ BOYAMA ATÖLYESİ",
          "summary": "Seramik yüzeyler üzerinde renk ve desenlerle özgün tasarımlar oluşturulan sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596207/seramikcini_kvewhi.jpg",
          "detail_link": "https://kurumsalaktivite.com/seramik-cini-boyama-atolyesi/"
        },
        {
          "id": "t31",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "PARFÜM TASARIM ATÖLYESİ",
          "summary": "Katılımcıların farklı esansları birleştirerek kendi kişisel parfümlerini oluşturduğu duyusal deneyim atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596199/parf%C3%BCm_atzjgb.jpg",
          "detail_link": "https://kurumsalaktivite.com/parfum-tasarim-atolyesi/"
        },
        {
          "id": "t32",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "KARİKATÜR ÇİZİM ATÖLYESİ",
          "summary": "Katılımcıların mizahi bakış açısıyla yaratıcı karikatür çizimleri yaptığı eğlenceli sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776600119/karikat%C3%BCr_rm4gzw.jpg",
          "detail_link": "https://kurumsalaktivite.com/karikatur-cizim-atolyesi/"
        },
        {
          "id": "t33",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "MUM ATÖLYESİ",
          "summary": "Katılımcıların kendi mumlarını tasarlayarak hem yaratıcı üretim hem de rahatlatıcı bir deneyim yaşadığı sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596197/mumat%C3%B6lye_wngpnv.jpg",
          "detail_link": "https://kurumsalaktivite.com/mum-atolyesi/"
        },
        {
          "id": "t34",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "KAR KÜRESİ ATÖLYESİ",
          "summary": "Katılımcıların kış temalı dekoratif kar küreleri tasarladığı yaratıcı ve eğlenceli sanat deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596191/karkure_htmtxq.png",
          "detail_link": "https://kurumsalaktivite.com/kar-kuresi-atolyesi/"
        },
        {
          "id": "t39",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "AHŞAP TABLO BOYAMA ATÖLYESİ",
          "summary": "Katılımcıların ahşap yüzeyler üzerinde renklerle özgün tablolar oluşturduğu yaratıcı sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596178/ahsaptablo_k9eqmp.jpg",
          "detail_link": "https://kurumsalaktivite.com/ahsap-tablo-boyama-atolyesi/"
        },
        {
          "id": "t40",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "EBRU ATÖLYESİ",
          "summary": "Su yüzeyinde oluşturulan desenlerin kağıda aktarıldığı geleneksel ve meditatif sanat deneyimidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596185/ebru_iga0gv.jpg",
          "detail_link": "https://kurumsalaktivite.com/ebru-atolyesi/"
        },
        {
          "id": "t41",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "ÇİÇEK TABLO TASARIM ATÖLYESİ",
          "summary": "Katılımcıların doğal ve dekoratif materyallerle özgün tablo tasarımları oluşturduğu yaratıcı sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596183/cicektablo_x1cxuf.jpg",
          "detail_link": "https://kurumsalaktivite.com/cicek-tablo-tasarimi-atolyesi/"
        },
        {
          "id": "t43",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "STRING ART ATÖLYESİ",
          "summary": "İp ve çivilerle geometrik ve görsel kompozisyonlar oluşturulan odak ve sabır geliştiren sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596208/string_art_ucxhuk.jpg",
          "detail_link": "https://kurumsalaktivite.com/string-art-atolyesi/"
        },
        {
          "id": "t99",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "RESİM ATÖLYESİ",
          "summary": "Katılımcıların özgürce yaratıcılıklarını ifade edebildikleri ilham verici resim deneyimi sunan sanat atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596204/resim_acnl7a.jpg",
          "detail_link": "https://kurumsalaktivite.com/resim-atolyesi/"
        },
        {
          "id": "t112",
          "category": "team-activities",
          "subcategory": "sanat-ve-deneyim-atolyeleri",
          "type": "tiered",
          "title": "TERARYUM ATÖLYESİ",
          "summary": "Katılımcıların cam bahçeler oluşturarak doğayla bağ kurduğu yaratıcı ve dekoratif üretim atölyesidir.",
          "priceTiers": {
            "0-15": 0,
            "15-30": 0,
            "30-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776596211/teraryum_amiosl.jpg",
          "detail_link": "https://kurumsalaktivite.com/teraryum-atolyesi/"
        }

  ]
},
  ]
};