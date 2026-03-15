import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Tooltip
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import type { Product, PersonCountTier } from '../types';

interface ProductCardProps {
    product: Product;
    personCountTier: PersonCountTier;
    isSelected?: boolean;
    onAdd: (product: Product, price: number) => void;
    onRemove: (productId: string) => void;
}

const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    try {
        if (url.includes('youtube.com/watch')) {
            videoId = new URL(url).searchParams.get('v') || '';
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('youtube.com/embed/')) {
            return url;
        }
    } catch (e) {
        console.error("Invalid YouTube URL", url);
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
};

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    personCountTier,
    isSelected,
    onAdd,
    onRemove
}) => {
    const getPrice = () => {
        if (product.type === 'fixed') {
            return product.price;
        }
        return product.priceTiers[personCountTier];
    };

    const currentPrice = getPrice();

    const [openDialog, setOpenDialog] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);

    const handleOpenToggle = () => setOpenDialog(!openDialog);
    const handleVideoToggle = () => setVideoOpen(!videoOpen);

    const youtubeEmbedUrl = product.video_link ? getYouTubeEmbedUrl(product.video_link) : '';

    return (
        <>
            <Card
                sx={{
                    maxWidth: 345,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid',
                    borderColor: isSelected ? 'primary.main' : 'transparent',
                    transition: 'all 0.3s ease',
                    transform: isSelected ? 'scale(1.02)' : 'none',
                    boxShadow: isSelected ? 6 : 1
                }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={product.photoUrl}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            {product.title}
                        </Typography>
                        <Chip
                            label={`${currentPrice.toLocaleString('tr-TR')} ₺`}
                            color="primary"
                            variant={isSelected ? "filled" : "outlined"}
                            sx={{ fontWeight: 'bold' }}
                        />
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {product.summary || product.description}
                    </Typography>
                    
                    <Box display="flex" gap={1} mt="auto">
                        {(product.details || product.description) && (
                            <Button
                                size="small"
                                onClick={handleOpenToggle}
                                sx={{ mt: 1, p: 0, minWidth: 'auto', textTransform: 'none' }}
                            >
                                Detayları Görüntüle
                            </Button>
                        )}
                        {product.detail_link && (
                            <Tooltip title="İncele">
                                <IconButton 
                                    size="small" 
                                    color="primary" 
                                    href={product.detail_link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    sx={{ bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}
                                >
                                    <LanguageIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                        
                        {product.video_link && youtubeEmbedUrl && (
                            <Tooltip title="Video İzle">
                                <IconButton 
                                    size="small" 
                                    color="error"
                                    onClick={handleVideoToggle}
                                    sx={{ bgcolor: 'error.50', '&:hover': { bgcolor: 'error.100' } }}
                                >
                                    <PlayCircleOutlineIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
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
                            color="primary"
                            onClick={() => onAdd(product, currentPrice)}
                            sx={{ borderRadius: 2 }}
                        >
                            Sepete Ekle
                        </Button>
                    )}
                </CardActions>
            </Card>


            <Dialog open={openDialog} onClose={handleOpenToggle} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontWeight: 'bold' }}>{product.title}</DialogTitle>
                <DialogContent dividers>
                    <Box component="img" src={product.photoUrl} alt={product.title} sx={{ width: '100%', height: 'auto', mb: 2, borderRadius: 2 }} />

                    {product.summary && (
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                            {product.summary}
                        </Typography>
                    )}

                    {product.details ? (
                        <Box sx={{ mt: 2 }}>
                            {product.details.map((detail, idx) => (
                                <Box key={idx} sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="primary">
                                        • {detail.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ ml: 2, mt: 0.5 }}>
                                        {detail.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                            {product.description}
                        </Typography>
                    )}

                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} p={2} bgcolor="grey.100" borderRadius={2}>
                        <Typography variant="subtitle1" fontWeight="bold">Hizmet Bedeli:</Typography>
                        <Typography variant="h6" fontWeight="bold" color="primary">{currentPrice.toLocaleString('tr-TR')} ₺</Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={handleOpenToggle} color="inherit">Kapat</Button>
                    {isSelected ? (
                        <Button onClick={() => { onRemove(product.id); handleOpenToggle(); }} color="error" variant="contained">Sepetten Çıkar</Button>
                    ) : (
                        <Button onClick={() => { onAdd(product, currentPrice); handleOpenToggle(); }} color="primary" variant="contained">Sepete Ekle</Button>
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
        </>
    );
};
