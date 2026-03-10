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
    DialogActions
} from '@mui/material';
import type { Product, PersonCountTier } from '../data';

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
        if (product.type === 'fixed') {
            return product.price;
        }
        return product.priceTiers[personCountTier];
    };

    const currentPrice = getPrice();

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenToggle = () => setOpenDialog(!openDialog);

    return (
        <>
            <Card
                sx={{
                    maxWidth: 345,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: isSelected ? '2px solid #1976d2' : '2px solid transparent',
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
                <CardContent sx={{ flexGrow: 1 }}>
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
                    {(product.details || product.description) && (
                        <Button
                            size="small"
                            onClick={handleOpenToggle}
                            sx={{ mt: 1, p: 0, minWidth: 'auto', textTransform: 'none' }}
                        >
                            Detayları Görüntüle
                        </Button>
                    )}
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
        </>
    );
};
