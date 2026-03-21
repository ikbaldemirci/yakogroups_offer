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
          "video_link": "https://www.youtube.com/watch?v=aGwiauxA4hE",
          "detail_link": "https://yakogroups.com"
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
          "summary": "Okçuluk workshop'u ile başlayan, takımlara ayrılarak yumuşak uçlu oklarla stratejik mücadeleye dönüşen eğlenceli takım aktivitesidir.",
          "details": [
            {
              "title": "Takım Çalışması",
              "text": "Katılımcıların birlikte hareket etmesini destekler."
            },
            {
              "title": "Stratejik Karar Verme",
              "text": "Doğru anda doğru hamleyi yapma becerisini geliştirir."
            },
            {
              "title": "Ekip Motivasyonu",
              "text": "Rekabet ve eğlence ile motivasyonu artırır."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Okçuluk workshop'u ile başlayan aktivitede katılımcılar klasik ok atışını öğrenir, hedeflere atış yaparak deneyim kazanır ve ardından takımlara ayrılarak Archery Tag mücadelesine katılır."
            }
          ],
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
          "isPopular": true 
        },
        {
          "id": "t10",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LEONARDO DA VINCI KÖPRÜSÜ",
          "summary": "Katılımcıların Leonardo Da Vinci'nin tasarım mantığını kullanarak birlikte köprü kurduğu takım aktivitesidir.",
          "details": [
            {
              "title": "Proje Yönetimini Etkin Sağlamak",
              "text": "Katılımcıların planlı ilerlemesini destekler."
            },
            {
              "title": "Takım Olunmasına Katkıda Bulunmak",
              "text": "İş birliği ile hedefe ulaşmayı teşvik eder."
            },
            {
              "title": "Proje Yönetimi",
              "text": "Süreç odaklı ilerlemeyi güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Leonardo Da Vinci'nin mobil olmayan ve yardımcı araç kullanmadan tasarladığı köprü mantığı, katılımcılar tarafından takım halinde yeniden uygulanır."
            }
          ],
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
        },
        {
          "id": "t16",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "LAZER TAG",
          "summary": "Paintball mücadelesinin güvenli versiyonu olan bu aktivitede takımlar lazer sensörlerle stratejik mücadele eder.",
          "details": [
            {
              "title": "Takım Ruhu",
              "text": "Birlikte hareket etme alışkanlığını geliştirir."
            },
            {
              "title": "Zaman Kavram",
              "text": "Hızlı reaksiyon ve doğru zamanlama gerektirir."
            },
            {
              "title": "Kriz Yönetimi",
              "text": "Baskı altında doğru karar vermeyi destekler."
            },
            {
              "title": "Aktivite Videosu",
              "text": "Video linki ayrıca eklenecektir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Her oyuncunun üzerinde bulunan lazer sensörler ve lazer tag tabancalarındaki lazerlerin birleşmesi durumunda oyuncu vurulmuş kabul edilir."
            }
          ],
          "priceTiers": {
            "0-25": 90000,
            "25-50": 90000,
            "50-75": 90000,
            "75-100": 90000,
            "100+": 90000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t26",
          "category": "team-activities",
          "subcategory": "aktivite",
          "type": "tiered",
          "title": "NERF",
          "summary": "Aksiyon dolu, stres atmaya ve enerjiyi boşaltmaya yönelik takım rekabeti sunan popüler aktivitedir.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Takım halinde hareket etmeyi teşvik eder."
            },
            {
              "title": "Stresten Uzaklaşma",
              "text": "Katılımcıların günlük stresten uzaklaşmasını sağlar."
            },
            {
              "title": "Motivasyon",
              "text": "Yüksek tempolu rekabet ile enerjiyi artırır."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Nerf oyunu, aksiyon dolu bir deneyim sunar ve her yaş grubundan oyuncuya hitap eder. Organizasyon titizlikle hazırlanır."
            }
          ],
          "priceTiers": {
            "0-25": 105000,
            "25-50": 105000,
            "50-75": 105000,
            "75-100": 105000,
            "100+": 105000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&h=300&fit=crop"
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
          "summary": "Oyunlaştırarak öğrenme yaklaşımıyla takım uyumu ve motivasyonu artıran masa üstü aktivite setidir.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Katılımcıların ortak hedefe yönelmesini destekler."
            },
            {
              "title": "Motivasyon Artırma",
              "text": "Takım içi enerjiyi yükseltir."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Düşünmeyi ve problem çözmeyi eğlenceli hale getirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Şirketlerin başarıya ulaşmasında insan kaynağı kritik rol oynar. Bu aktivite, oyunlaştırarak öğrenme disiplini kapsamında motivasyonel ve uyum artırıcı deneyimler sunar."
            },
            {
              "title": "Paket",
              "text": "25.000 TL (4 oyun istasyonu)"
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
          "photoUrl": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=400&h=300&fit=crop",
          "isPopular": true
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
          "details": [
            {
              "title": "Etkili Takım Yaratma",
              "text": "Takım oluşum süreçlerini destekler."
            },
            {
              "title": "Performans Artırma",
              "text": "Katılımcıların verimliliğini yükseltmeye yardımcı olur."
            },
            {
              "title": "Departmanlar Arası İletişim",
              "text": "Farklı ekiplerin ortak çalışmasını güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Yönetim kadrosunun kendisini test etme ve tanıma fırsatı bulduğu bu aktiviteler sonrasında ortaya çıkan hataların şirket yönetimine uyarlanmasıyla olası ticari kayıplara neden olabilecek davranışların tespiti amaçlanır."
            }
          ],
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
          "isPopular": true
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
          "details": [
            {
              "title": "Proje Yönetimi",
              "text": "Planlama ve görev paylaşımını destekler."
            },
            {
              "title": "Departmanlar Arası İletişim",
              "text": "Farklı bakış açılarını bir araya getirir."
            },
            {
              "title": "Takım Olma",
              "text": "Birlikte üretme ve sunma deneyimi sağlar."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Takımlar kendi markalarını oluşturur ve yarattıkları ürünle ilgili reklam filmi tasarlar. Reklam filmi skeçleştirilerek jüriye sunulur. Etkinlik sonunda çeşitli ödüller verilir."
            }
          ],
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
          "isPopular": true
        },
        {
          "id": "t19",
          "category": "team-activities",
          "subcategory": "yaratici-aktivite",
          "type": "tiered",
          "title": "FOTO SAFARİ CHALLENGE",
          "summary": "Katılımcıların eğitim sonrası görev listesine göre en iyi kareleri yakalamaya çalıştığı yaratıcı takım aktivitesidir.",
          "details": [
            {
              "title": "Takım Dayanışması",
              "text": "Takım halinde görev tamamlama deneyimi sunar."
            },
            {
              "title": "Zamanı Verimli Kullanma",
              "text": "Belirlenen süre içinde en iyi sonuçları alma becerisini destekler."
            },
            {
              "title": "Stres Anında Karar Verebilme",
              "text": "Hızlı seçim ve yaratıcı karar alma gerektirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Etkinlik 30-45 dakikalık eğitimle başlar. Katılımcılara görev listesi veya temalar sunulur, çekilen fotoğraflar jüri tarafından değerlendirilir. Fotoğraf makinesi kiralama dahildir."
            }
          ],
          "priceTiers": {
            "0-25": 80000,
            "25-50": 80000,
            "50-75": 80000,
            "75-100": 80000,
            "100+": 80000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Etkili Takım Koordinasyonu",
              "text": "Katılımcıların birlikte uyum içinde çalışmasını destekler."
            },
            {
              "title": "Sonuç Odaklı Hareket",
              "text": "Ortak hedefe ulaşmayı ön plana çıkarır."
            },
            {
              "title": "Tümevarım",
              "text": "Parçaları birleştirerek bütün resmi görme becerisini destekler."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılara verilen Salvador Dali resmi eşit şekilde bölünerek takımların tuvallere çizmesi istenir. Oluşan eser, iş yerinde sergilenebilecek kalıcı bir anı yaratır."
            }
          ],
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Proje Yönetimi",
              "text": "Kaynak kullanımı ve planlamayı destekler."
            },
            {
              "title": "Yaratıcı Düşünme",
              "text": "Farklı çözüm yolları geliştirmeyi teşvik eder."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar gruplara ayrılır ve görevleri, verilen sınırlı kaynaklarla 2-4 katlı bir binadan atıldığında yumurtanın kırılmamasını sağlayacak bir paket veya paraşüt sistemi inşa etmektir."
            }
          ],
          "priceTiers": {
            "0-25": 40000,
            "25-50": 40000,
            "50-75": 40000,
            "75-100": 40000,
            "100+": 40000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t8",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "FORMULA TURKO CHALLENGE",
          "summary": "Takımların kendi araçlarını inşa edip tasarladığı yaratıcı ve rekabetçi takım aktivitesidir.",
          "details": [
            {
              "title": "Ekip İç İşbirliği",
              "text": "Birlikte üretme sürecini güçlendirir."
            },
            {
              "title": "Proje Yönetimi",
              "text": "Görev bölüşümü ve planlama becerisini destekler."
            },
            {
              "title": "Analitik Düşünme Kabiliyeti",
              "text": "Yapısal ve işlevsel çözüm üretmeyi teşvik eder."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Takımlara arabalarını inşa etmek ve dekore etmek için çeşitli malzemeler sunulur. Katılımcılar yaratıcı düşünmeye ve tasarımlarını öne çıkaracak fikirler bulmaya teşvik edilir."
            }
          ],
          "priceTiers": {
            "0-25": 95000,
            "25-50": 95000,
            "50-75": 95000,
            "75-100": 95000,
            "100+": 95000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t12",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "İSKAMBİL KULESİ",
          "summary": "Katılımcıların sınırlı kaynakla en yüksek kuleyi yapmaya çalıştığı, planlama ve sabır gerektiren takım aktivitesidir.",
          "details": [
            {
              "title": "Zaman Yönetimi",
              "text": "Belirli süre içinde çözüm üretmeyi teşvik eder."
            },
            {
              "title": "Yaratıcılık",
              "text": "Farklı yapısal fikirler geliştirmeyi destekler."
            },
            {
              "title": "Proje Yönetimi",
              "text": "Kaynakları doğru kullanma becerisini güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar sadece bir deste iskambil kağıdı ve bir çift makas kullanarak en yüksek kuleyi inşa etmeye çalışır."
            }
          ],
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000 
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t13",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "LOGO CHALLENGE",
          "summary": "Katılımcıların şirket logosunu yeniden yorumlayıp yaratıcı fikirlerle ortaya çıkardığı takım aktivitesidir.",
          "details": [
            {
              "title": "Zaman Yönetimi",
              "text": "Süre içerisinde fikir üretmeyi destekler."
            },
            {
              "title": "Yaratıcılık",
              "text": "Yeni ve özgün fikirler geliştirmeyi teşvik eder."
            },
            {
              "title": "Ekip Planlaması",
              "text": "Takım içinde karar alma ve uygulamayı güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar şirket logosunu bireysel olarak tanımlar, ardından partnerleriyle birlikte en yaratıcı ortak logoyu oluşturmaya çalışır."
            }
          ],
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t14",
          "category": "team-activities",
          "subcategory": "challenge",
          "type": "tiered",
          "title": "MARSHMALLOW CHALLENGE",
          "summary": "Takımların sınırlı malzemelerle en yüksek kuleyi yapmaya çalıştığı rekabetçi ve yaratıcı takım oyunudur.",
          "details": [
            {
              "title": "Yaratıcı Düşünme",
              "text": "Alternatif çözüm yolları geliştirmeyi destekler."
            },
            {
              "title": "Takım Ruhu",
              "text": "Ortak hedefe birlikte ulaşmayı güçlendirir."
            },
            {
              "title": "Proje Yönetimi",
              "text": "Planlama ve uygulamayı aynı anda yönetmeyi teşvik eder."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Gruplar, 20 makarna, 1 marshmallow, 1 metre ip ve 1 koli bandı ile en yüksek kuleyi inşa etmeye çalışır."
            }
          ],
          "priceTiers": {
            "0-25": 50000,
            "25-50": 50000,
            "50-75": 50000,
            "75-100": 50000,
            "100+": 50000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=300&fit=crop"
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
          "summary": "Katılımcıların yaratıcı kokteyller hazırladığı eğlenceli ve interaktif bir workshop aktivitesidir.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Katılımcıların birlikte üretmesini ve takım içinde uyum yakalamasını sağlar."
            },
            {
              "title": "Motivasyon Artırma",
              "text": "Ekip üyeleri için keyifli ve enerjik bir deneyim sunar."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Katılımcılar kendi kokteyllerini hazırlayarak yaratıcılıklarını ortaya çıkarırlar."
            },
            {
              "title": "Alkolsüz Kokteyl",
              "text": "Fiyat: 50.000 TL"
            },
            {
              "title": "Alkollü Kokteyl",
              "text": "Fiyat: 75.000 TL"
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Kokteyl yudumlamak kolaydır, ancak hazırlamak biraz daha zordur. Katılımcılar farklı malzemeler ile kokteyl hazırlamayı öğrenir, yaratıcılıklarını geliştirir ve eğlenceli bir deneyim yaşarlar."
            }
          ],
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
          "isPopular": true
        },
        {
          "id": "t11",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "CHEF SENSİN",
          "summary": "Katılımcıların deneyimli şeflerle birlikte mutfak kültürlerini keşfettiği, ekip olarak üretim yaptığı atölye aktivitesidir.",
          "details": [
            {
              "title": "Takım İçi İletişim",
              "text": "Birlikte üretim sürecini güçlendirir."
            },
            {
              "title": "Departmanlar Arası İletişim",
              "text": "Farklı ekiplerin ortak deneyim yaşamasını sağlar."
            },
            {
              "title": "Ekip Motivasyonu",
              "text": "Eğlenceli ve verimli zaman geçirmeyi destekler."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar deneyimli şeflerle birlikte çalışarak farklı mutfak kültürlerini keşfeder ve ekip halinde üretim yapar."
            }
          ],
          "priceTiers": {
            "0-25": 100000,
            "25-50": 100000,
            "50-75": 100000,
            "75-100": 100000,
            "100+": 100000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t21",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "RİTM PERKÜSYON ATÖLYESİ",
          "summary": "Katılımcıların birlikte ritim üreterek orkestra deneyimi yaşadığı, ekip motivasyonunu artıran müzik atölyesidir.",
          "details": [
            {
              "title": "Takım Çalışması",
              "text": "Birlikte ritim üretmeyi ve ortak hareket etmeyi destekler."
            },
            {
              "title": "Stresten Uzaklaşma",
              "text": "Katılımcılara rahatlatıcı ve eğlenceli bir deneyim sunar."
            },
            {
              "title": "Ekip Motivasyonu",
              "text": "Toplu katılım ve müzikle enerjiyi artırır."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Kurumsal logolu enstrümanlarla gerçekleştirilen bu atölyede katılımcılar bir orkestranın parçası olur. Malzemeler hariç fiyat verilmiştir."
            },
            {
              "title": "Fiyat Notu",
              "text": "85.000 TL (Malzemeler hariç)"
            }
          ],
          "priceTiers": {
            "0-25": 85000,
            "25-50": 85000,
            "50-75": 85000,
            "75-100": 85000,
            "100+": 85000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t22",
          "category": "team-activities",
          "subcategory": "workshop",
          "type": "tiered",
          "title": "GRAFFITI WORKSHOP",
          "summary": "Katılımcıların birlikte üretim yaparak graffiti sanatını deneyimlediği yaratıcı atölye çalışmasıdır.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Ortak üretim sürecini destekler."
            },
            {
              "title": "Motivasyon Artırma",
              "text": "Katılımcılara yaratıcı ve enerjik bir deneyim sunar."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Sanat yoluyla takım içi iletişimi güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Sokak sanatından ilham alan bu workshop, sprey boya ve duvar resmi estetiğini takım üretimi ile birleştirir."
            }
          ],
          "priceTiers": {
            "0-25": 200000,
            "25-50": 200000,
            "50-75": 200000,
            "75-100": 200000,
            "100+": 200000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Stratejik Düşünme",
              "text": "Doğru ipuçlarını değerlendirmeyi teşvik eder."
            },
            {
              "title": "Tümevarım Kavramı",
              "text": "Parçalardan sonuca ulaşma becerisini destekler."
            },
            {
              "title": "Kriz Yönetimi",
              "text": "Baskı altında karar almayı güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar cinayet veya hırsızlık gibi senaryolarda olayın aydınlatılması için gerekli yöntemleri öğrenir ve uygular."
            }
          ],
          "priceTiers": {
            "0-25": 100000,
            "25-50": 100000,
            "50-75": 100000,
            "75-100": 100000,
            "100+": 100000

          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Kontrollü Nefes Alma",
              "text": "Nefes farkındalığını artırır."
            },
            {
              "title": "Stres Azaltmak",
              "text": "Katılımcıların sakinleşmesine yardımcı olur."
            },
            {
              "title": "Enerji Dengeleme",
              "text": "Beden-zihin uyumunu destekler."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Düzenli yoga asanaları ve nefes teknikleri, bedeni toksinlerden arındırmayı ve zihni huzura kavuşturmayı destekler."
            }
          ],
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Takım Dayanışması",
              "text": "Birlikte hareket etmeyi teşvik eder."
            },
            {
              "title": "Zamanı Verimli Kullanma",
              "text": "Süre baskısı altında doğru planlamayı destekler."
            },
            {
              "title": "Stres Anında Karar Verebilme",
              "text": "Hızlı ve etkili karar mekanizmasını güçlendirir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar görevleri tamamlamak için dayanışma ve yardımlaşma içinde ilerler, takım ruhunu güçlendirir."
            }
          ],
          "priceTiers": {
            "0-25": 85000,
            "25-50": 85000,
            "50-75": 85000,
            "75-100": 85000,
            "100+": 85000

          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t28",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "ORMANDA ESARETTEN KURTULMA",
          "summary": "Şifre çözme, görev tamamlama, harita okuma ve liderlik becerilerini test eden açık hava macera aktivitesidir.",
          "details": [
            {
              "title": "Lider Gücünü Ortaya Çıkarma",
              "text": "Takım içinde liderlik becerilerini görünür hale getirir."
            },
            {
              "title": "Stres Anında Doğru Kararı Verme",
              "text": "Baskı altında etkili karar vermeyi destekler."
            },
            {
              "title": "Kriz Yönetimi",
              "text": "Beklenmedik durumlarda ekip koordinasyonunu güçlendirir."
            },
            {
              "title": "Kişi Başı Fiyat",
              "text": "2.800 TL (Kişi başı)"
            },
            {
              "title": "Katılımcı Sayısı",
              "text": "Minimum 24 kişi - maksimum 48 kişi"
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar orman sahasında şifre çözer, görevlilerden bilgi almaya çalışır, harita okur ve uzman eğitmenler eşliğinde macera dolu bir deneyim yaşar."
            }
          ],
          "priceTiers": {
            "0-25": 2800,
            "25-50": 2800,
            "50-75": 2800,
            "75-100": 2800,
            "100+": 2800
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t29",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "YELKEN AKTİVİTESİ",
          "summary": "Takım çalışması, ekip motivasyonu ve iletişim odaklı su sporları aktivitesidir.",
          "details": [
            {
              "title": "Takım Çalışması",
              "text": "Birlikte hareket etme ve görev paylaşımını destekler."
            },
            {
              "title": "Ekip Motivasyonu",
              "text": "Katılımcılar için heyecanlı ve yenilikçi bir deneyim sunar."
            },
            {
              "title": "Ekip Arkadaşları ile İletişim",
              "text": "Takım içi koordinasyonu güçlendirir."
            },
            {
              "title": "Fiyat Notu",
              "text": "Güncel fiyat isteyiniz."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Kurumsal ekipler arasında uyum ve motivasyonu artırmayı hedefleyen, heyecan dolu takım aktivitesidir."
            }
          ],
          "priceTiers": {
            "0-25": 0,
            "25-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t30",
          "category": "team-activities",
          "subcategory": "outdoor",
          "type": "tiered",
          "title": "RAFTING",
          "summary": "Debisi yüksek nehirlerde yapılan, takım uyumu ve heyecanı ön plana çıkaran adrenalin dolu su sporudur.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Ekipçe uyumlu hareket etmeyi gerektirir."
            },
            {
              "title": "Motivasyon Artırma",
              "text": "Yüksek heyecan ile katılımcı enerjisini yükseltir."
            },
            {
              "title": "Zor Durum",
              "text": "Katılımcıların birlikte zorlu koşulları aşmasını sağlar."
            },
            {
              "title": "Fiyat Notu",
              "text": "Güncel fiyat isteyiniz."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Şişme botlarla yapılan rafting, öğrenmesi çok zor olmayan ama yüksek takım uyumu gerektiren unutulmaz bir deneyim sunar."
            }
          ],
          "priceTiers": {
            "0-25": 0,
            "25-50": 0,
            "50-75": 0,
            "75-100": 0,
            "100+": 0
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Katılımcıların birlikte hareket etmesini destekler."
            },
            {
              "title": "Motivasyon Artırma",
              "text": "Ekip içi enerjiyi yükseltir."
            },
            {
              "title": "Heyecan Uyandırma",
              "text": "Katılımcılarda sahne ve performans heyecanı oluşturur."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Dans, ekip halinde ya da bireysel yapılabilen, müziğin ritmine kapılarak keyifli bir deneyim sunan hareket odaklı bir aktivitedir."
            }
          ],
          "priceTiers": {
            "0-25": 110000,
            "25-50": 110000,
            "50-75": 110000,
            "75-100": 110000,
            "100+": 110000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t27",
          "category": "team-activities",
          "subcategory": "performans",
          "type": "tiered",
          "title": "TAKIM KOREOGRAFİSİ",
          "summary": "Katılımcıların birlikte oluşturduğu koreografi ve havadan çekimlerle unutulmaz anılar yaratan takım aktivitesidir.",
          "details": [
            {
              "title": "Ekip Çalışması",
              "text": "Birlikte hareket etme becerisini güçlendirir."
            },
            {
              "title": "Motivasyon",
              "text": "Katılımcıların enerjisini ve aidiyet duygusunu yükseltir."
            },
            {
              "title": "Takım Koordinasyonu",
              "text": "Hareketleri uyum içinde gerçekleştirmeyi teşvik eder."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Farklı konseptler ve koreografilerle gerçekleştirilen havadan çekimler, katılımcılara ömür boyu unutulmayacak anılar sunar."
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
          "photoUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=300&fit=crop"
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
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Katılımcıların birlikte üretmesini destekler."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Uygulamalı ekip çalışması sağlar."
            },
            {
              "title": "Sosyal Sorumluluk",
              "text": "Hazırlanan bisikletler ihtiyaç sahibi çocuklara hediye edilir."
            },
            {
              "title": "3 Adet Bisiklet",
              "text": "Fiyat: 80.000 TL"
            },
            {
              "title": "5 Adet Bisiklet",
              "text": "Fiyat: 100.000 TL"
            },
            {
              "title": "10 Adet Bisiklet",
              "text": "Fiyat: 150.000 TL"
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar 3-5 kişilik takımlara bölünür, demonte bisiklet parçaları ve gerekli ekipmanlar teslim edilir. Amaç belirli süre içinde bisikletleri güvenli şekilde monte etmektir."
            }
          ],
          "priceTiers": {
            "0-25": 80000,
            "25-50": 80000,
            "50-75": 80000,
            "75-100": 80000,
            "100+": 80000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=400&h=300&fit=crop"
        },
        {
          "id": "t24",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "BARINAK YAPIM ATÖLYESİ",
          "summary": "Sokakta yaşayan hayvanlar için barınaklar tasarlanıp üretilen sosyal sorumluluk odaklı takım atölyesidir.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Birlikte tasarlama ve üretmeyi destekler."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Katılımcılara uygulamalı üretim deneyimi sunar."
            },
            {
              "title": "Sosyal Sorumluluk",
              "text": "Üretilen barınaklar hayvan barınaklarına teslim edilir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar verilen malzemelerle kedi, köpek ve kuşlar için özel barınaklar tasarlar ve üretir."
            }
          ],
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
          "isPopular": true
        },
        {
          "id": "t25",
          "category": "team-activities",
          "subcategory": "sosyal-sorumluluk",
          "type": "tiered",
          "title": "KUŞ EVİ YAPIM ATÖLYESİ",
          "summary": "Katılımcıların kuşların yaşamına uygun korunaklı evler tasarlayıp ürettiği sosyal sorumluluk atölyesidir.",
          "details": [
            {
              "title": "Takım Uyumu",
              "text": "Ortak tasarım ve üretimi destekler."
            },
            {
              "title": "Eğlenirken Üretmek",
              "text": "Katılımcılar yaratıcı şekilde üretim yapar."
            },
            {
              "title": "Sosyal Sorumluluk",
              "text": "Üretilen kuş evleri ihtiyaç duyulan bölgelere yerleştirilmek üzere teslim edilir."
            },
            {
              "title": "Aktivite Açıklaması",
              "text": "Katılımcılar atölye süresince kuşların doğal yaşamlarına uygun ve soğuktan korunmalarını sağlayacak evler üretir."
            }
          ],
          "priceTiers": {
            "0-25": 60000,
            "25-50": 60000,
            "50-75": 60000,
            "75-100": 60000,
            "100+": 60000
          },
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=400&h=300&fit=crop"
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