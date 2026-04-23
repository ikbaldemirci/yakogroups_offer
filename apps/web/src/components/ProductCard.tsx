import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { Product, PersonCountTier } from "../types";
import { getYouTubeEmbedUrl } from "../utils/youtubeUtils";

interface ProductCardProps {
    product: Product;
    personCountTier: PersonCountTier;
    isSelected?: boolean;
    onAdd: (product: Product, price: number) => void;
    onRemove: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    personCountTier,
    isSelected,
    onAdd,
    onRemove
}) => {
    const getPrice = () => {
        if (product.type === "fixed") {
            return product.price;
        }
        return product.priceTiers[personCountTier];
    };

    const currentPrice = getPrice();

    const [openDialog, setOpenDialog] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [carouselIdx, setCarouselIdx] = useState(0);

    const photos = (product as any).photoUrls as string[] | undefined;
    const activePhoto = photos ? photos[carouselIdx] : product.photoUrl;

    const handleOpenToggle = () => setOpenDialog(!openDialog);
    const handleVideoToggle = () => setVideoOpen(!videoOpen);

    const youtubeEmbedUrl = product.video_link ? getYouTubeEmbedUrl(product.video_link) : "";

    return (
        <>
            <Card
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    border: "2px solid",
                    borderColor: isSelected ? "card.title" : "transparent",
                    transition: "all 0.3s ease",
                    transform: isSelected ? "scale(1.02)" : "none",
                    boxShadow: isSelected ? 6 : 1
                }}
            >
                {product.isPopular && (
                    <Chip
                        label="En çok tercih edilen"
                        color="secondary"
                        size="small"
                        sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            fontWeight: "bold",
                            pl: 0.5,
                            zIndex: 1,
                        }}
                    />
                )}
                <Box
                    sx={{ position: "relative", height: 200, overflow: "hidden", cursor: product.category === "decor-concept" ? "zoom-in" : "default" }}
                    onClick={() => { if (product.category === "decor-concept") setPhotoOpen(true); }}
                >
                    <Box
                        component="img"
                        src={activePhoto}
                        alt={product.title}
                        loading="lazy"
                        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    {photos && photos.length > 1 && (
                        <>
                           <IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIdx(i => (i - 1 + photos.length) % photos.length);
                            }}
                            sx={{
                                position: "absolute",
                                left: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.45)",
                                color: "#fff",
                                "&:hover": {
                                bgcolor: "rgba(0,0,0,0.7)",
                                }
                            }}
                            >
                            <ChevronLeftIcon/>
                            </IconButton>
                            <IconButton 
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIdx(i => (i + 1) % photos.length);
                            }}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.45)",
                                color: "#fff",
                                "&:hover": {
                                bgcolor: "rgba(0,0,0,0.7)",
                                }
                            }}
                            >
                            <ChevronRightIcon/>
                            </IconButton>
                            <Box sx={{ position: "absolute", bottom: 6, width: "100%", display: "flex", justifyContent: "center", gap: 0.5 }}>
                                {photos.map((_, i) => (
                                    <Box key={i} onClick={(e) => { e.stopPropagation(); setCarouselIdx(i); }} sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: i === carouselIdx ? "#fff" : "rgba(255,255,255,0.5)", cursor: "pointer" }} />
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                fontWeight: "bold", 
                                color: "card.title",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                minHeight: "3.2em",
                                lineHeight: "1.6em",
                                pr: 1
                            }}
                        >
                            {product.title}
                        </Typography>
                        <Chip
                            label={`${currentPrice.toLocaleString("tr-TR")} ₺`}
                            variant={isSelected ? "filled" : "outlined"}
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                padding: "4px",
                                bgcolor: isSelected ? "card.priceBg" : "card.priceBg", 
                                color: "card.priceText",
                                "& .MuiChip-label": {
                                    px: 1.5
                                },
                                borderColor: "card.priceBg" 
                            }}
                        />
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            minHeight: "3em",
                            lineHeight: "1.5em"
                        }}
                    >
                        {product.summary || product.description}
                    </Typography>
                    
                    {product.warning && (
                        <Typography
                            variant="caption"
                            sx={{
                                color: "error.main",
                                fontWeight: "bold",
                                mt: 1,
                                display: "block",
                                lineHeight: "1.2em"
                            }}
                        >
                            * {product.warning}
                        </Typography>
                    )}
                    
                    <Box display="flex" alignItems="center" flexWrap="wrap" gap={1.5} mt="auto">
                        {(product.details || product.description) && (
                            <Button
                                onClick={handleOpenToggle}
                                sx={{ mt: 1, p: 0, minWidth: "auto", textTransform: "none", color: "card.title", fontSize: "0.95rem", fontWeight: 600 }}
                            >
                                {product.category === "menus" ? "Menü İçeriğini Göster" : "Detayları Görüntüle"}
                            </Button>
                        )}
                        {product.detail_link && (
                            <Button 
                                href={product.detail_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                sx={{ mt: 1, p: 0, minWidth: "auto", textTransform: "none", color: "card.title", fontSize: "0.95rem", fontWeight: 600 }}
                            >
                                Aktivite Açıklaması
                            </Button>
                        )}
                        {product.detail_link && product.video_link && youtubeEmbedUrl && (
                            <Typography color="card.title" sx={{ mt: 1, display: "flex", alignItems: "center", fontSize: "1.1rem" }}>|</Typography>
                        )}
                        {product.video_link && youtubeEmbedUrl && (
                            <Button 
                                onClick={handleVideoToggle}
                                sx={{ mt: 1, p: 0, minWidth: "auto", textTransform: "none", color: "card.title", fontSize: "0.95rem", fontWeight: 600 }}
                            >
                                Aktivite Videosu
                            </Button>
                        )}
                    </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                    {isSelected ? (
                        <Button
                            size="large"
                            fullWidth
                            variant="outlined"
                            color="error"
                            onClick={() => onRemove(product.id)}
                            sx={{ borderRadius: 2 }}
                        >
                            Sepetten Çıkar
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            fullWidth
                            variant="contained"
                            onClick={() => onAdd(product, currentPrice)}
                            sx={{ 
                                borderRadius: 2,
                                bgcolor: "card.buttonBg",
                                color: "card.buttonText",
                                "&:hover": {
                                    bgcolor: "card.buttonHoverBg",
                                }
                            }}
                        >
                            Sepete Ekle
                        </Button>
                    )}
                </CardActions>
            </Card>


            <Dialog open={openDialog} onClose={handleOpenToggle} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontWeight: "bold", color: "card.title" }}>{product.title}</DialogTitle>
                <DialogContent dividers>
                    <Box component="img" src={product.photoUrl} alt={product.title} sx={{ width: "100%", height: "auto", mb: 2, borderRadius: 2 }} />

                    {product.summary && (
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontStyle: "italic" }}>
                            {product.summary}
                        </Typography>
                    )}

                    {product.details ? (
                        <Box sx={{ mt: 2 }}>
                            {product.details.map((detail, idx) => (
                                <Box key={idx} sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "card.title" }}>
                                        • {detail.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ ml: 2, mt: 0.5 }}>
                                        {detail.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                            {product.description}
                        </Typography>
                    )}

                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} p={2} sx={{ bgcolor: "card.priceBg", color: "card.priceText", borderRadius: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">Hizmet Bedeli:</Typography>
                        <Typography variant="h6" fontWeight="bold">{currentPrice.toLocaleString("tr-TR")} ₺</Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={handleOpenToggle} color="inherit">Kapat</Button>
                    {isSelected ? (
                        <Button onClick={() => { onRemove(product.id); handleOpenToggle(); }} color="error" variant="contained">Sepetten Çıkar</Button>
                    ) : (
                        <Button onClick={() => { onAdd(product, currentPrice); handleOpenToggle(); }} variant="contained" sx={{ bgcolor: "card.buttonBg", color: "card.buttonText", "&:hover": { bgcolor: "card.buttonHoverBg" } }}>Sepete Ekle</Button>
                    )}
                </DialogActions>
            </Dialog>

            <Dialog 
                open={videoOpen} 
                onClose={handleVideoToggle} 
                maxWidth="md" 
                fullWidth
            >
                <DialogContent sx={{ p: 0, overflow: "hidden" }}>
                    <Box sx={{ position: "relative", paddingTop: "70%", width: "100%" }}>
                        {videoOpen && youtubeEmbedUrl && (
                            <iframe
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                                src={youtubeEmbedUrl}
                                title={product.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog open={photoOpen} onClose={() => setPhotoOpen(false)} maxWidth="md" fullWidth>
                <DialogContent sx={{ p: 0, bgcolor: "#000", position: "relative" }}>
                    <Box component="img" src={activePhoto} alt={product.title} sx={{ width: "100%", height: "auto", display: "block" }} />
                    {photos && photos.length > 1 && (
                        <>
                            <IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIdx(i => (i - 1 + photos.length) % photos.length);
                            }}
                            sx={{
                                position: "absolute",
                                left: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.45)",
                                color: "#fff",
                                "&:hover": {
                                bgcolor: "rgba(0,0,0,0.7)",
                                }
                            }}
                            >
                            <ChevronLeftIcon/>
                            </IconButton>
                            <IconButton 
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIdx(i => (i + 1) % photos.length);
                            }}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.45)",
                                color: "#fff",
                                "&:hover": {
                                bgcolor: "rgba(0,0,0,0.7)",
                                }
                            }}
                            >
                            <ChevronRightIcon/>
                            </IconButton>
                        </>
                    )}
                </DialogContent>
                <DialogActions sx={{ bgcolor: "#000", py: 0.5 }}>
                    <Button onClick={() => setPhotoOpen(false)} sx={{ color: "#fff" }}>Kapat</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
