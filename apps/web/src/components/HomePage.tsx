import React, { useRef } from "react";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent, Chip, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { UserInfo } from "./UserInfoForm";
import { categories } from "../types";

const categoryIcons = ["🍽️", "🎪", "🤝", "🌳"];
const categoryColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
];
const categoryImages = [
    "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&h=400&fit=crop"
];

const campaigns = [
    {
        title: "🎉 Yaz Organizasyonu Paketi",
        subtitle: "100+ kişilik etkinliklerinizde özel indirim fırsatı!",
        description: "Animasyon, şişme oyunlar ve park dekor ürünleri bir arada — %15'e varan kampanya fiyatları.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&h=500&fit=crop",
        badge: "YAZ KAMPANYASI",
        color: "#764ba2"
    },
    {
        title: "🤝 Kurumsal Takım Aktiviteleri",
        subtitle: "Şirket pikniklerinizi ve team-building etkinliklerinizi unutulmaz kılın!",
        description: "Sektörün en geniş takım aktivitesi kataloğuyla kurumsal etkinliklerinizi zirveye taşıyın.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&h=500&fit=crop",
        badge: "KURUMSAL PAKET",
        color: "#00b4d8"
    },
    {
        title: "🍽️ Özel Menü Tasarımı",
        subtitle: "Etkinliğinize özel lezzetler ve sunum alternatifleri",
        description: "Kahvaltıdan akşam yemeğine, kokteylden canlı istasyonlara kadar her ihtiyacınız için çözüm.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&h=500&fit=crop",
        badge: "ÖZEL MENÜ",
        color: "#f5576c"
    }
];

interface HomePageProps {
    userInfo: UserInfo;
    onCategorySelect: (index: number) => void;
    selectedItemCount: number;
    onCartOpen: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ userInfo, onCategorySelect, selectedItemCount, onCartOpen }) => {
    const swiperRef = useRef(null);

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f8f9fa" }}>

            <Box
                sx={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                    color: "white",
                    py: { xs: 6, md: 8 },
                    px: 3,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -50,
                        right: -50,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "rgba(118,75,162,0.2)",
                        filter: "blur(60px)"
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -80,
                        left: -80,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "rgba(0,180,216,0.15)",
                        filter: "blur(80px)"
                    }
                }}
            >
                <Typography
                    variant="overline"
                    sx={{
                        color: "#a78bfa",
                        letterSpacing: 4,
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        mb: 1,
                        display: "block"
                    }}
                >
                    HOŞGELDİNİZ
                </Typography>
                <Typography
                    variant="h3"
                    fontWeight="900"
                    sx={{
                        background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 1,
                        fontSize: { xs: "2rem", md: "3rem" }
                    }}
                >
                    {userInfo.companyName}
                </Typography>
                <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
                    Teklif Kategörilerini Keşfedin
                </Typography>
            </Box>

            <Container maxWidth="xl" sx={{ py: 5 }}>

                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#1a1a2e" }}>
                        🔥 Kampanyalar & Özel Fırsatlar
                    </Typography>
                    <Box
                        sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                            "& .swiper-pagination-bullet-active": {
                                background: "#764ba2"
                            },
                            "& .swiper-button-next, & .swiper-button-prev": {
                                color: "white",
                                background: "rgba(0,0,0,0.3)",
                                borderRadius: "50%",
                                width: 44,
                                height: 44,
                                "&::after": { fontSize: "16px", fontWeight: "bold" }
                            }
                        }}
                    >
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay, Pagination, Navigation]}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            navigation
                            loop
                            style={{ borderRadius: "16px" }}
                        >
                            {campaigns.map((c, i) => (
                                <SwiperSlide key={i}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            height: { xs: 220, md: 320 },
                                            overflow: "hidden",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={c.image}
                                            alt={c.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                background: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)`,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                px: { xs: 3, md: 5 },
                                                py: 4
                                            }}
                                        >
                                            <Chip
                                                label={c.badge}
                                                size="small"
                                                sx={{
                                                    bgcolor: c.color,
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "0.65rem",
                                                    letterSpacing: 1,
                                                    mb: 1.5,
                                                    width: "fit-content"
                                                }}
                                            />
                                            <Typography
                                                variant="h5"
                                                fontWeight="bold"
                                                color="white"
                                                sx={{ mb: 0.5, fontSize: { xs: "1.1rem", md: "1.5rem" } }}
                                            >
                                                {c.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "rgba(255,255,255,0.85)",
                                                    display: { xs: "none", sm: "block" },
                                                    maxWidth: 480
                                                }}
                                            >
                                                {c.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5, color: "#1a1a2e" }}>
                        📋 Teklif Kategorileri
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        İlgilendiğiniz kategoriyi seçerek doğrudan ürün seçimine geçebilirsiniz
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                            gap: 3
                        }}
                    >
                        {categories.map((cat, index) => (
                            <Card
                                key={cat.id}
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-8px) scale(1.02)",
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                                    }
                                }}
                                onClick={() => onCategorySelect(index)}
                            >
                                <CardActionArea sx={{ height: "100%" }}>
                                    <Box sx={{ position: "relative", height: 160, overflow: "hidden" }}>
                                        <CardMedia
                                            component="img"
                                            image={categoryImages[index]}
                                            alt={cat.title}
                                            sx={{
                                                height: "100%",
                                                objectFit: "cover",
                                                transition: "transform 0.4s ease",
                                                "&:hover": { transform: "scale(1.1)" }
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                background: categoryColors[index],
                                                opacity: 0.65
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                fontSize: { xs: "2.5rem", md: "3rem" },
                                                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))"
                                            }}
                                        >
                                            {categoryIcons[index]}
                                        </Typography>
                                    </Box>

                                    <CardContent sx={{ p: { xs: 1.5, md: 2.5 } }}>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            color="#1a1a2e"
                                            sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, lineHeight: 1.3 }}
                                        >
                                            {cat.title}
                                        </Typography>
                                        {cat.description && (
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{
                                                    display: { xs: "none", sm: "block" },
                                                    mt: 0.5,
                                                    lineHeight: 1.4
                                                }}
                                            >
                                                {cat.description}
                                            </Typography>
                                        )}
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                mt: 1.5,
                                                color: "#764ba2",
                                                fontWeight: "bold",
                                                fontSize: "0.7rem",
                                                letterSpacing: 0.5
                                            }}
                                        >
                                            SEÇ VE DEVAM ET →
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "white",
                        border: "1px solid rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            <strong>👤 {userInfo.firstName} {userInfo.lastName}</strong> &nbsp;|&nbsp;
                            <strong>🏢 {userInfo.companyName}</strong> &nbsp;|&nbsp;
                            <strong>👥 {userInfo.personCount} kişi</strong>
                        </Typography>
                    </Box>
                    {selectedItemCount > 0 && (
                        <Chip
                            label={`🛒 ${selectedItemCount} ürün seçildi`}
                            color="primary"
                            variant="filled"
                            onClick={onCartOpen}
                            sx={{ fontWeight: "bold", cursor: "pointer" }}
                            clickable
                        />
                    )}
                </Box>

            </Container>
        </Box>
    );
};
