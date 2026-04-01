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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/v1774977006/kahvalt%C4%B1%C4%B1_puiwh1.jpg",
           "isPopular": true
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889170/b%C3%BCfe_p43rid.jpg"
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
           "isPopular": true
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889458/meyvearaba_zeuqti.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774888523/pizza-hotdog-kofteekmek_eprwie.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774964808/kokorec_z33zkv.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774965482/sucukekmek_enkbvb.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774965480/etdoner_xplncj.jpg"
        },
        {
          "id": "p6",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "TANTUNİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 55000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774965484/tantuni_vuikic.jpg"
        },
        {
          "id": "p7",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ISLAK HAMBURGER",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir.",
          "price": 35000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774965481/islakhamburger_tfjsvn.jpg"
        },
        {
          "id": "p8",
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
          "id": "p9",
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
          "id": "p10",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇİKOLATA ŞELALESİ",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 30000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774966428/cikolataselale_lai8jl.jpg"
        },
        {
          "id": "p11",
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
          "id": "p12",
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
          "id": "p13",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇUBUKTA PATATES",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 25000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976003/cubuktapatates_xu7dja.jpg"
        },
        {
          "id": "p14",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "ÇUBUKTA WAFFLE",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 33000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774976004/cubukwaffle_mwxugl.jpg"
        },
        {
          "id": "p14",
          "category": "menus",
          "subcategory": "panayir",
          "type": "fixed",
          "title": "HALKA TATLISI",
          "summary": "Ürünler 100 kişiliktir. Nakliye bedeli 19.000 TL + KDV'dir. Fiyat seçilen tek ürün içindir.",
          "price": 25000,
          "currency": "TRY",
          "vatIncluded": false,
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774964807/halkatatli_iot3bu.jpg"
        }
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889196/i%C3%A7ecek_wvmeo6.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889196/i%C3%A7ecek_wvmeo6.jpg"
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
          "photoUrl": "https://res.cloudinary.com/deb8zn714/image/upload/f_auto,q_auto,w_500,h_300,c_fill,g_auto/v1774889393/s%C4%B1cakb%C3%B6l%C3%BCm%C3%BC_chds48.jpg"
        }
      ]
    }
  ]
};