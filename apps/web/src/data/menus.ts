import type { Category } from "../types";

export const menusCategory: Category = {
  "id": "menus",
  "title": "Menü Seçenekleri",
  "description": "Etkinliğiniz için yiyecek ve içecek seçeneklerimiz",
  "subcategories": [
    {
      "title": "Kahvaltı Menüleri",
      "items": [
        {
          "id": "m1",
          "category": "menus",
          "subcategory": "kahvalti",
          "type": "fixed",
          "title": "SOKAK LEZZETLERİ KAHVALTI",
          "details": [
            {
              "title": "Sandwich Köşesi",
              "text": "İsteğe bağlı olarak 12 çeşit üründen hazırlanılacak olan sandwich köşesi"
            },
            {
              "title": "Sıcak Köşesi",
              "text": "Omlet, menemen"
            },
            {
              "title": "Pastane Köşesi",
              "text": "Simit ve açma çeşitleri (sade, zeytinli), tatlı ve tuzlu kurabiyeler"
            }
          ],
          "price": 835,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889273/sokakmen%C3%BC_mfhuxx.jpg"
        },
        {
          "id": "m2",
          "category": "menus",
          "subcategory": "kahvalti",
          "type": "fixed",
          "title": "SERPME KAHVALTI",
          "summary": "40 kişi altı gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Şarküteri",
              "text": "Kaşar peyniri, beyaz peynir, kaymak, salam"
            },
            {
              "title": "Zeytin Tabağı",
              "text": "Siyah ve yeşil zeytin"
            },
            {
              "title": "Reçel - Tatlı Tabağı",
              "text": "Çilek reçeli, bal, sarelle"
            },
            {
              "title": "Söğüş Tabağı",
              "text": "Domates, salatalık, biber"
            },
            {
              "title": "Sos Tabağı",
              "text": "Acuka, şakşuka"
            },
            {
              "title": "Sıcaklar",
              "text": "Sigara böreği, menemen, sahanda sucuk"
            }
          ],
          "price": 1200,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889345/kahvalt%C4%B1_b%C3%BCfe_kz0wfs.jpg"
        },
        {
          "id": "m3",
          "category": "menus",
          "subcategory": "kahvalti",
          "type": "fixed",
          "title": "AÇIK BÜFE RODOS KAHVALTI",
          "summary": "40 kişi ve üstü gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "3 çeşit ev yapımı ekmek, poğaça çeşitleri (sade, kaşarlı), simit ve açma çeşitleri (sade, zeytinli), bal ve reçel çeşitleri, beyaz peynir"
            },
            {
              "title": "Sebze Tabağı",
              "text": "Salatalık, kokteyl domates, biber halkaları ve yeşillikler"
            },
            {
              "title": "Zeytin Çeşitleri",
              "text": "Siyah ve yeşil zeytin çeşitleri"
            },
            {
              "title": "Baharat ve Soslar",
              "text": "Baharatlar, sirke ve zeytinyağı çeşitleri"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Menemen, su böreği"
            }
          ],
          "price": 1050,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/v1774977006/kahvalt%C4%B1%C4%B1_puiwh1.jpg"
        },
        {
          "id": "m4",
          "category": "menus",
          "subcategory": "kahvalti",
          "type": "fixed",
          "title": "AÇIK BÜFE MİKANOS KAHVALTI",
          "summary": "40 kişi ve üstü gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "3 çeşit ev yapımı ekmek, poğaça çeşitleri (sade, kaşarlı), simit ve açma çeşitleri (sade, zeytinli), bal ve reçel çeşitleri"
            },
            {
              "title": "Şarküteri Çeşitleri",
              "text": "Dana jambon, hindi füme, tavuk jambon"
            },
            {
              "title": "Kahvaltı Peynir Çeşitleri",
              "text": "Kaşar peyniri, beyaz peynir, örgü peynir"
            },
            {
              "title": "Sebze Tabağı",
              "text": "Salatalık, kokteyl domates, biber halkaları ve yeşillikler"
            },
            {
              "title": "Zeytin Çeşitleri",
              "text": "Siyah ve yeşil zeytin çeşitleri"
            },
            {
              "title": "Baharat ve Soslar",
              "text": "Baharatlar, sirke ve zeytinyağı çeşitleri"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Haşlanmış yumurta, menemen, peynirli su böreği"
            }
          ],
          "price": 1150,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888507/b%C3%BCfe2_bllvvg.heic"
        },
        {
          "id": "m5",
          "category": "menus",
          "subcategory": "kahvalti",
          "type": "fixed",
          "title": "AÇIK BÜFE SANTORİNİ KAHVALTI",
          "summary": "40 kişi ve üstü gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "3 çeşit ev yapımı ekmek, poğaça çeşitleri (sade, kaşarlı), simit ve açma çeşitleri (sade, zeytinli), bal ve reçel çeşitleri"
            },
            {
              "title": "Şarküteri Çeşitleri",
              "text": "Dana jambon, hindi füme, tavuk jambon"
            },
            {
              "title": "Kahvaltı Peynir Çeşitleri",
              "text": "Kaşar peyniri, beyaz peynir, örgü peynir"
            },
            {
              "title": "Müsli ve Kahvaltılık Gevrekler",
              "text": "Müsli ve kahvaltı gevrekleri light süt veya normal süt ile"
            },
            {
              "title": "Sebze Tabağı",
              "text": "Salatalık, kokteyl domates, biber halkaları ve yeşillikler"
            },
            {
              "title": "Zeytin Çeşitleri",
              "text": "Siyah ve yeşil zeytin çeşitleri"
            },
            {
              "title": "Baharat ve Soslar",
              "text": "Baharatlar, sirke ve zeytinyağı çeşitleri"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Menemen, çırpılmış ve haşlanmış yumurta, peynirli su böreği"
            },
            {
              "title": "Tatlı",
              "text": "Pancake ve Nutella"
            }
          ],
          "price": 1350,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889170/b%C3%BCfe_p43rid.jpg",
          "isPopular":true
        }
      ]
    },
    {
      "title": "Barbekü Menüleri",
      "items": [
        {
          "id": "b1",
          "category": "menus",
          "subcategory": "barbeku",
          "type": "fixed",
          "title": "IZGARA MENÜ 1",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "Salata bar: havuç rendesi, göbek, roka, çoban salata, kırmızı lahana, turşu, kornişon, semizotu salata"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Izgara köfte çeşitleri: kasap köfte (3 adet), yarım ekmek"
            },
            {
              "title": "Tatlı Büfesi",
              "text": "Taze meyve tabağı, kavun ve karpuz (mevsimine göre)"
            },
            {
              "title": "Servis Bedeli",
              "text": "%10 servis bedeli ilave edilecektir"
            }
          ],
          "price": 960,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889234/k%C3%B6ftetavuk_ooaixk.jpg",
        },
        {
          "id": "b2",
          "category": "menus",
          "subcategory": "barbeku",
          "type": "fixed",
          "title": "IZGARA MENÜ 2",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "Salata bar: havuç rendesi, göbek, roka, çoban salata, kırmızı lahana, turşu, kornişon, semizotu salata"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Barbekü antrikot (1 adet), tavuk pirzola (1 adet), tavuk şiş (1 adet), domates soslu spagetti makarna"
            },
            {
              "title": "Tatlı Büfesi",
              "text": "Taze meyve tabağı, kavun ve karpuz (mevsimine göre)"
            },
            {
              "title": "Servis Bedeli",
              "text": "%10 servis bedeli ilave edilecektir"
            }
          ],
          "price": 1250,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888513/%C4%B1zgara_gju77e.jpg"
        },
        {
          "id": "b3",
          "category": "menus",
          "subcategory": "barbeku",
          "type": "fixed",
          "title": "IZGARA MENÜ 3",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "Salata bar: havuç rendesi, göbek, roka, çoban salata, kırmızı lahana, turşu, kornişon, semizotu salata"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Barbekü antrikot (1 adet), tavuk pirzola (1 adet), tavuk şiş (1 adet), kasap köfte (2 adet), ızgara sucuk (1 adet), domates soslu spagetti makarna"
            },
            {
              "title": "Tatlı Büfesi",
              "text": "Taze meyve tabağı, kavun ve karpuz (mevsimine göre)"
            },
            {
              "title": "Servis Bedeli",
              "text": "%10 servis bedeli ilave edilecektir"
            }
          ],
          "price": 1600,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/v1774888518/men%C3%BC_mksqdf.jpg"
        },
        {
          "id": "b4",
          "category": "menus",
          "subcategory": "barbeku",
          "type": "fixed",
          "title": "AÇIK BÜFE BBQ MENÜ I",
          "summary": "40 kişi ve üstü gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "Salata bar, piyaz, zeytinyağlı dolma biber, couscous salata, İspanyol patates salatası, el yapımı mini ekmekler"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Izgara tavuk çeşitleri (kemiksiz but, kanat), kasap köfte (3 adet), ızgara domates ve biber, baharatlı tereyağlı fırın patates, mantarlı pilav"
            },
            {
              "title": "Tatlı Büfesi",
              "text": "Profiterol, taze meyve tabağı, kavun ve karpuz"
            },
            {
              "title": "Servis Bedeli",
              "text": "%10 servis bedeli ilave edilecektir"
            }
          ],
          "price": 1900,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976379/barbek%C3%BCm_a5aumf.jpg"
        },
        {
          "id": "b5",
          "category": "menus",
          "subcategory": "barbeku",
          "type": "fixed",
          "title": "AÇIK BÜFE BBQ MENÜ II",
          "summary": "40 kişi ve üstü gruplar için tercih edilebilir.",
          "details": [
            {
              "title": "Soğuk Büfesi",
              "text": "Salata bar, piyaz, zeytinyağlı dolma biber, couscous salata, İspanyol patates salatası, el yapımı mini ekmekler"
            },
            {
              "title": "Sıcak Büfesi",
              "text": "Izgara tavuk kanat, ızgara sucuk, İnegöl köfte, kasap köfte, dana antrikot, kemiksiz tavuk but, ızgara domates ve biber"
            },
            {
              "title": "Tatlı Büfesi",
              "text": "Profiterol, muhallebi, tulumba tatlısı, taze meyve tabağı"
            },
            {
              "title": "Servis Bedeli",
              "text": "%10 servis bedeli ilave edilecektir"
            }
          ],
          "price": 1950,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776669553/BBQ2_l4d01o.jpg",
          "isPopular":true
        }
      ]
    },
    {
      "title": "Panayır Yiyecekleri",
      "items": [
        {
          "id": "p1",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KÖFTE EKMEK",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 50000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510938/kofte-ekmek_jgduz9.png"
        },
        {
          "id": "p2",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SOSİSLİ SANDVİÇ (HOT DOG)",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 35000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888511/hotdog_lgbooe.jpg"
        },
        {
          "id": "p3",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KOKOREÇ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 55000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510940/kokorec_onf6nw.png"
        },
        {
          "id": "p4",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SUCUK EKMEK",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 45000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510962/sucuk-ekmek_fvrkqt.png"
        },
        {
          "id": "p5",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ET DÖNER",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 60000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510925/doner_dlay9w.png"
        },
        {
          "id": "p6",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "PİZZA",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510954/pizza_pastsw.png"
        },
        {
          "id": "p7",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TAVUKLU PİLAV",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510967/tavuklu-pilav_ytsi7z.png"
        },
        {
          "id": "p8",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "HAMBURGER",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510932/hamburger_ulofco.png"
        },
        {
          "id": "p9",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TANTUNİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 55000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto/v1776510965/tantuni_g1tkz6.jpg"
        },
        {
          "id": "p10",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇİĞ KÖFTE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510918/cig-kofte_kt3bvb.png"
        },
        {
          "id": "p11",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ISLAK HAMBURGER",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 35000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510935/islak-hamburger_ptxudc.png"
        },
        {
          "id": "p12",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KUMPİR",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510941/kumpir_bdccbk.jpg"
        },
        {
          "id": "p13",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "POPCORN",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 17000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888525/popcorn_o9dwfh.jpg"
        },
        {
          "id": "p14",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KAĞIT HELVA",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 19000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976006/kag%C4%B1thelva_ukfshf.jpg"
        },
        {
          "id": "p15",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇİKOLATA ŞELALESİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 30000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510919/cikolata-selalesi_w6asza.png"
        },
        {
          "id": "p16",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "PAMUK ŞEKER",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 17000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888521/pamuk-seker-dondurma_uu6p2j.jpg"
        },
        {
          "id": "p17",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "MARAŞ DONDURMASI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 35000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888508/dondurma_gfs7g9.jpg"
        },
        {
          "id": "p18",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇUBUKTA PATATES",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 25000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510921/cubukta-patates_l8dwe6.png"
        },
        {
          "id": "p19",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇUBUKTA WAFFLE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 33000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510922/cubukta-waffle_runnqj.png"
        },
        {
          "id": "p20",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "HALKA TATLISI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 25000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1774964807/halkatatli_iot3bu.jpg"
        },
        {
          "id": "p21",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "NOHUT PİLAV",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510949/nohut-pilav_ezcnjy.png"
        },
        {
          "id": "p22",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "FALAFEL",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_400,c_fill,g_auto/v1776510927/falafel_mlidm3.png"
        },
        {
          "id": "p23",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "YAYIK AYRAN",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510974/yayik-ayran_s4ae01.png"
        },
        {
          "id": "p24",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SMOOTHIE & MILKSHAKE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510961/smoti-milkshake_j0plcf.png"
        },
        {
          "id": "p25",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "LİMONATA",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510944/limonata_f1ndep.png"
        },
        {
          "id": "p26",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KAHVE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510937/kahve_gbox8f.png"
        },
        {
          "id": "p27",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TÜRK KAHVESİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510971/turk-kahvesi_qga7s0.png"
        },
        {
          "id": "p28",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "BAKLAVA",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510910/baklava_ija1sz.png"
        },
        {
          "id": "p29",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TULUMBA TATLISI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510970/tulumba_hylw4q.png"
        },
        {
          "id": "p30",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "DONDURMALI İRMİK HELVASI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510923/dondurmali-irmik-helvasi_jiakly.png"
        },
        {
          "id": "p31",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "LOKMA",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_400,c_fill,g_auto/v1776510946/lokma_vdw1nl.png"
        },
        {
          "id": "p32",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "BİCİ BİCİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510915/bici-bici_tbrr7z.png"
        },
        {
          "id": "p33",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "AŞURE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510909/asure_prebl3.png"
        },
        {
          "id": "p34",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "BARDAKTA MISIR",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510913/bardakmisir_cvkqhj.png"
        },
        {
          "id": "p35",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "FROZEN YOĞURT",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510928/frozen-yogurt_zcqeip.png"
        },
        {
          "id": "p36",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SAHLEP",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510956/sahlep_ziwman.png"
        },
        {
          "id": "p37",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "OSMANLI MACUNU",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_300,c_fill,g_auto/v1776510950/osmanli-macunu_pz8ztl.png"
        },
        {
          "id": "p38",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "WAFFLE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510973/waffle_hgdskj.png"
        },
        {
          "id": "p39",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SEBZELİ NOODLE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_400,c_fill,g_auto/v1776510958/sebzeli-noodle_jfxihk.png"
        },
        {
          "id": "p40",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "APARATİF TABAĞI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_500,h_400,c_fill,g_auto/v1776510907/aparatif-tabagi_nnhzym.png"
        },
        {
          "id": "p41",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TACO",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510963/taco_yazatq.jpg"
        },
        {
          "id": "p42",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "BÖREK",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_300,c_fill,g_auto/v1776510916/borekci_jg9a65.png"
        },
        {
          "id": "p43",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "SİMİT",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto,f_auto,w_400,h_400,c_fill,g_auto/v1776510959/simitci_g635i7.png"
        },
        {
          "id": "p44",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "KUMRU",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510942/kumru_xvk5br.jpg"
        },
        {
          "id": "p45",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "AMSTERDAM PATATESİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510906/amsterdam-patates_xguyig.png"
        },
        {
          "id": "p46",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TOST EKMEK",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510968/tost-ekmek_k1kctz.jpg"
        },
        
        {
          "id": "p47",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "GÖZLEME",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 0,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776510929/gozleme_kkglen.jpg"
        },
        

      ]
    },
    {
      "title": "İçecek Menüleri",
      "items": [
        {
          "id": "i1",
          "category": "menus",
          "subcategory": "icecek",
          "type": "fixed",
          "title": "BÜFE SÜRESİ BOYUNCA SOFT İÇECEK",
          "summary": "Kola, meyve suları, soda, limonata, çay ve granül kahve",
          "price": 250,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776670562/softicecek_xmlfl3.jpg"
        },
        {
          "id": "i2",
          "category": "menus",
          "subcategory": "icecek",
          "type": "fixed",
          "title": "YAKO PARK GÜN BOYU SOFT İÇECEK",
          "summary": "Kola, meyve suları, soda, limonata, çay ve granül kahve",
          "price": 400,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776670562/softicecek_xmlfl3.jpg"
        },
        {
          "id": "i3",
          "category": "menus",
          "subcategory": "icecek",
          "type": "fixed",
          "title": "LİMİTLİ YERLİ ALKOL (2 ADET)",
          "summary": "Bira ve şarap",
          "price": 700,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976557/sarapbira_abycvl.jpg"
        },
        {
          "id": "i4",
          "category": "menus",
          "subcategory": "icecek",
          "type": "fixed",
          "title": "LİMİTSİZ YERLİ ALKOL (3 SAAT)",
          "summary": "Bira ve şarap",
          "price": 1950,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976557/sarapbira_abycvl.jpg"
        }
      ]
    },
    {
      "title": "Coffee Break Menümüz",
      "items": [
        {
          "id": "c1",
          "category": "menus",
          "subcategory": "coffee-break",
          "type": "fixed",
          "title": "COFFEE BREAK",
          "summary": "Tatlı ve tuzlu kurabiyeler, poğaça çeşitleri, cookies, çay ve granül kahve",
          "price": 830,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776670673/coffeebreak_ntp0fg.jpg"
        }
      ]
    }
  ]
};