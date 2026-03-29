import React, { useRef, useState } from "react";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent, Chip, Container, useTheme, alpha, IconButton, Dialog, DialogContent } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CelebrationIcon from "@mui/icons-material/Celebration";
import GroupsIcon from "@mui/icons-material/Groups";
import ParkIcon from "@mui/icons-material/Park";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from "@mui/icons-material/Edit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { categories } from "../types";
import { useOffer } from "../context/OfferContext";
import { getYouTubeEmbedUrl } from "../utils/youtubeUtils";
import { categoryImages, campaigns, showcaseVideos } from "../data/homeData";

const categoryIcons = [
    <RestaurantMenuIcon sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, color: "white"}} />,
    <CelebrationIcon sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, color: "white"}} />,
    <GroupsIcon sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, color: "white"}} />,
    <ParkIcon sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, color: "white"}} />,
    <HeadphonesIcon sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, color: "white"}} />
];

export const HomePage: React.FC = () => {
    const { 
        userInfo, 
        handleCategorySelect, 
        selectedItemCount, 
        setCartOpen,
        handleEditUserInfo
    } = useOffer();
    const swiperRef = useRef(null);
    const theme = useTheme();
    const [videoOpen, setVideoOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");
    const catalogPdfPath = import.meta.env.VITE_CATALOG_PDF_PATH;

    if (!userInfo) return null;

    const categoryColors = [
        `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
        `linear-gradient(135deg, ${theme.palette.success.light}, ${theme.palette.success.main})`,
        `linear-gradient(135deg, ${theme.palette.info.light}, ${theme.palette.info.main})`,
        `linear-gradient(135deg, ${theme.palette.warning.light}, ${theme.palette.warning.main})`,
        ];

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5, color: "text.primary" }}>
                        Teklif Kategorileri
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        İlgilendiğiniz kategoriyi seçerek doğrudan ürün seçimine geçebilirsiniz
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr", md: "repeat(5, 1fr)" },
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
                                    border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-8px) scale(1.02)",
                                        boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.15)}`
                                    }
                                }}
                                onClick={() => handleCategorySelect(index)}
                            >
                                <CardActionArea sx={{ 
                                    height: "100%", 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    alignItems: "stretch",
                                    justifyContent: "flex-start" 
                                }}>
                                    <Box sx={{ position: "relative", height: 160, width: "100%", overflow: "hidden" }}>
                                        <CardMedia
                                            component="img"
                                            image={categoryImages[index]}
                                            alt={cat.title}
                                            sx={{
                                                height: "100%",
                                                width: "100%",
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
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            {categoryIcons[index]}
                                        </Box>
                                    </Box>

                                    <CardContent sx={{ 
                                        p: { xs: 1.5, md: 2.5 }, 
                                        display: "flex", 
                                        flexDirection: "column", 
                                        flexGrow: 1,
                                        width: "100%",
                                        boxSizing: "border-box"
                                    }}>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            color="text.primary"
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
                                                mt: "auto",
                                                pt: 1.5,
                                                color: theme.palette.primary.main,
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
                 <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "text.primary" }}>
                        Kampanyalar & Özel Fırsatlar
                    </Typography>
                    <Box
                        sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.15)}`,
                            "& .swiper-pagination-bullet-active": {
                                background: theme.palette.primary.main
                            },
                            "& .swiper-button-next, & .swiper-button-prev": {
                                color: "white",
                                background: alpha(theme.palette.common.black, 0.3),
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
                                            height: { xs: 220, md: 320 },
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={c.image}
                                            alt={`Kampanya ${i + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "text.primary" }}>
                        Etkinlik Videoları
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
                            gap: 3
                        }}
                    >
                        {showcaseVideos.map((video, index) => (
                            <Card
                                key={index}
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: `0 15px 30px ${alpha(theme.palette.common.black, 0.1)}`
                                    }
                                }}
                                onClick={() => {
                                    setActiveVideo(getYouTubeEmbedUrl(video.videoUrl));
                                    setVideoOpen(true);
                                }}
                            >
                                <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    <CardMedia
                                        component="img"
                                        image={video.image}
                                        sx={{ 
                                            objectFit: "cover",
                                            transition: "transform 0.4s ease",
                                            "&:hover": { transform: "scale(1.05)" }
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "rgba(0,0,0,0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            "&:hover": { opacity: 1 }
                                        }}
                                    >
                                    </Box>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Box>
                {catalogPdfPath && (
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "text.primary" }}>
                            Kurumsal Hizmet Kataloğu
                        </Typography>
                        <Box sx={{ 
                            width: "100%", 
                            height: { xs: "500px", md: "600px" }, 
                            borderRadius: 4, 
                            overflow: "hidden", 
                            border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
                            boxShadow: `0 15px 30px ${alpha(theme.palette.common.black, 0.1)}`
                        }}>
                            <iframe 
                                src={catalogPdfPath} 
                                width="100%" 
                                height="100%" 
                                style={{ border: "none" }} 
                                title="Kurumsal Katalog" 
                            />
                        </Box>
                    </Box>
                )}
                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "background.paper",
                        border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.06)}`
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                            <strong>👤 {userInfo.fullName}</strong> &nbsp;|&nbsp;
                            <strong>🏢 {userInfo.companyName}</strong> &nbsp;|&nbsp;
                            <strong>👥 {userInfo.personCount} kişi</strong>
                            <IconButton size="small" onClick={handleEditUserInfo} color="primary" sx={{ ml: {xs: 0, sm: 1}, p: 0.5 }}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </Typography>
                    </Box>
                    {selectedItemCount > 0 && (
                        <Chip
                            icon={<ShoppingCartIcon />}
                            label={`${selectedItemCount} ürün seçildi`}
                            color="primary"
                            variant="filled"
                            onClick={() => setCartOpen(true)}
                            sx={{ fontWeight: "bold", cursor: "pointer" }}
                            clickable
                        />
                    )}
                </Box>

            </Container>
            <Dialog 
                open={videoOpen} 
                onClose={() => setVideoOpen(false)} 
                maxWidth="md" 
                fullWidth
            >
                <DialogContent sx={{ p: 0, overflow: "hidden", bgcolor: "black" }}>
                    <Box sx={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
                        {videoOpen && activeVideo && (
                            <iframe
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                                src={activeVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
