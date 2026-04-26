import type { Category } from "../types";

export const kidsActivitiesCategory: Category = {
  id: "kids-activities",
  title: "Çocuk Aktiviteleri",
  description: "Çocuklar için eğlenceli ve eğitici aktiviteler",
    subcategories: [
    {
      title: "Aktiviteler",
      items: [
        {
        id: "ka1",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Sihirbaz Gösterisi",
        summary: "Çocukları şaşırtan ve eğlendiren sihir sahne etkinliği.",
        price: 20000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522869/sihirbaz_fvp2mr.jpg"
    },
    {
        id: "ka2",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Kostümlü Animatör Etkinliği",
        summary: "Sevilen karakter kostümleriyle çocuklara özel eğlence programı.",
        price: 15000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522839/kostum_twfu7v.jpg"
    },
    {
        id: "ka3",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Palyaço Gösterisi Etkinliği",
        summary: "Oyunlar ve kahkahalarla dolu palyaço etkinliği.",
        price: 12000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522860/palyaco_b36koo.jpg"
    },
    {
        id: "ka4",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Skulent Saksı Tasarım Atölyesi",
        summary:
            "Katılımcıların doğal çömlek saksıları tasarlayıp sukulent bitkisi ile kişisel tasarım oluşturduğu yaratıcı atölye etkinliği.",
        price: 40000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522866/saksi_bhe21u.jpg"
        },
        {
        id: "ka5",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Oyun Ablası",
        summary:
            "Etkinliklerde çocukların güvenli ve eğlenceli vakit geçirmesi için profesyonel çocuk aktivite desteği.",
        price: 10000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522854/oyunablasi_lhemsk.jpg"
        },
        {
        id: "ka6",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Bubble Show",
        summary:
            "Dev sabun balonları ve görsel efektlerle gerçekleştirilen eğlenceli sahne gösterisi.",
        price: 26000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522806/bubbleshow_ndsp6j.jpg"
        },
        {
        id: "ka7",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Yüz Boyama Etkinliği",
        summary:
            "Çocukların sevdikleri karakterlere dönüşebildiği renkli ve interaktif yüz boyama etkinliği.",
        price: 20000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522884/y%C3%BCzboyama_xcsk8c.jpg"
        },
        {
        id: "ka8",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Yaratıcı Drama Atölyesi",
        summary: "Rol canlandırma ve doğaçlama ile çocukların kendini ifade ettiği eğlenceli atölye.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522881/yarat%C4%B1c%C4%B1drama_gxpl8x.jpg"
    },
    {
        id: "ka9",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Minik Şefler Frozen Cupcake Atölyesi",
        summary: "Çocukların kendi cupcake tasarımlarını yaptığı lezzetli ve yaratıcı mutfak etkinliği.",
        price: 50000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522848/mimiksefler_baf21v.jpg"
    },
    {
        id: "ka10",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Oyun Köşesi",
        summary: "Çocuklar için güvenli, eğlenceli ve sosyal oyun alanı.",
        price: 15000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522857/oyunkosesi_ps24gw.jpg"
    },
    {
        id: "ka11",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Ahşap Oyuncak Boyama Atölyesi",
        summary: "Ahşap oyuncakları boyayarak kişiselleştirme etkinliği.",
        price: 35000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522798/ahsapboyama_sunv4g.jpg"
    },
    {
        id: "ka12",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Bilim Atölyesi",
        summary: "Deneyler ile bilimi keşfetmeye yönelik eğitici etkinlik.",
        price: 50000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522809/cocukbilim_bynfns.jpg"
    },
    {
        id: "ka13",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Yogası",
        summary: "Nefes, hareket ve eğlenceyi bir araya getiren çocuk yogası etkinliği.",
        price: 25000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522824/cocukyoga_zb8ax9.jpg"
    },
    {
        id: "ka14",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Pandomim",
        summary: "Beden dili ile ifade becerisi geliştiren sahne etkinliği.",
        price: 25000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522863/pandomim_frb1x0.jpg"
    },
    {
        id: "ka15",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Taş Boyama Atölyesi",
        summary: "Doğal taşlar üzerinde karakter ve desen tasarlama etkinliği.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522821/cocuktasboyama_fck75a.jpg"
    },
    {
        id: "ka16",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Seramik Tabak Boyama",
        summary: "Seramik tabakları boyayarak üretim yapılan yaratıcı sanat etkinliği.",
        price: 40000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522819/cocukseramiktabakboyama_mroo57.jpg"
    },
    {
        id: "ka17",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Suluboya Atölyesi",
        summary: "Renkleri keşfetmeye yönelik eğlenceli suluboya etkinliği.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522872/suluboya_qa5zfc.jpg"
    },
    {
        id: "ka18",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Heykel Atölyesi",
        summary: "Dokunarak öğrenme ve üretme odaklı sanat etkinliği.",
        price: 50000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522812/cocukheykel_if5z3r.jpg"
    },
    {
        id: "ka19",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Resim Atölyesi",
        summary: "Hayal gücünü geliştiren yaratıcı resim etkinliği.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522815/cocukresimatolye_vgvs3t.jpg"
    },
    {
        id: "ka20",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Jonglör Gösterisi",
        summary: "Toplar ve objelerle yapılan dinamik sahne performansı.",
        price: 25000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522833/jonglor_yb3jgt.jpg"
    },
    {
        id: "ka21",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Tahta Bacak Gösterisi",
        summary: "Yüksek kostümlü animatörlerle dikkat çekici görsel gösteri.",
        price: 28000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522875/tahtabacak%C3%BC_ohouoe.jpg"
    },
    {
        id: "ka22",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Karagöz ve Hacivat Gösterisi",
        summary: "Geleneksel Türk gölge oyunu sahne performansı.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522836/karagozhacivat_sq7hic.jpg"
    },
    {
        id: "ka23",
        category: "kids-activities",
        subcategory: "gosteriler",
        type: "fixed",
        title: "Kukla Gösterisi",
        summary: "Renkli karakterlerle interaktif çocuk sahne gösterisi.",
        price: 30000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522842/kukla_fx6mgf.jpg"
    },
    
    {
        id: "ka24",
        category: "kids-activities",
        subcategory: "dijital-atolyeler",
        type: "fixed",
        title: "Dijital Akvaryum Boyama Atölyesi",
        summary: "Boyanan deniz canlılarının dijital ekranda canlandığı interaktif etkinlik.",
        price: 0,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522827/dijitalakvaryumboyama_insyzf.jpg"
    },
    {
        id: "ka25",
        category: "kids-activities",
        subcategory: "dijital-atolyeler",
        type: "fixed",
        title: "Dijital Karikatür Atölyesi",
        summary: "Çocuklara özel karikatür çizimi yapılan dijital etkinlik.",
        price: 0,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522830/dijitalkarikat%C3%BCr_awofut.jpg"
    },
    {
        id: "ka26",
        category: "kids-activities",
        subcategory: "aktiviteler",
        type: "fixed",
        title: "Çocuk Mozaik Atölyesi",
        summary: "Renkli taşlarla mozaik tasarımı yapılan yaratıcı sanat etkinliği.",
        price: 40000,
        currency: "TRY",
        vatIncluded: false,
        photoUrl: "https://res.cloudinary.com/deb8zn714/image/upload/q_auto/f_auto/v1776522851/mozaik_pf6phb.jpg"
    }
      ]
    }
  ]
};